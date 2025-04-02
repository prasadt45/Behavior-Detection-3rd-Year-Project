import sys
import os
import torch
import warnings
import torchvision.transforms as transforms
import torchvision.models as models
import pandas as pd
from PIL import Image

warnings.filterwarnings("ignore", category=UserWarning)

if len(sys.argv) < 2:
    print("Error: No image file provided.")
    sys.exit(1)

# Define Paths
MLMODEL_DIR = os.path.dirname(os.path.abspath(__file__))  
MODEL_PATH = os.path.join(MLMODEL_DIR, "checkpoint.pth")
LABELS_MAP_FILE = os.path.join(MLMODEL_DIR, "label_map.csv")

if not os.path.exists(MODEL_PATH):
    print(f"Error: Model file '{MODEL_PATH}' not found.")
    sys.exit(1)

if not os.path.exists(LABELS_MAP_FILE):
    print(f"Error: Label map file '{LABELS_MAP_FILE}' not found.")
    sys.exit(1)

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load label mappings
labels_df = pd.read_csv(LABELS_MAP_FILE)
labels_map = {row["Index"]: row["Activity"] for _, row in labels_df.iterrows()}  

# Load Model
model = models.mobilenet_v2(weights=models.MobileNet_V2_Weights.IMAGENET1K_V1)
num_classes = len(labels_map)
model.classifier[1] = torch.nn.Linear(model.classifier[1].in_features, num_classes)
model.load_state_dict(torch.load(MODEL_PATH, map_location=DEVICE)["model_state_dict"])
model.to(DEVICE)
model.eval()

# Get image path
image_path = sys.argv[1]

if not os.path.exists(image_path):
    print(f"Error: Image file '{image_path}' not found.")
    sys.exit(1)

try:
    # Load and Preprocess Image
    image = Image.open(image_path).convert("RGB")
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    
    image = transform(image).unsqueeze(0).to(DEVICE)  # Add batch dimension

    # Perform Inference
    with torch.no_grad():
        output = model(image)
        predicted_class = torch.argmax(output, dim=1).item()

    # Get Class Label
    predicted_label = labels_map.get(predicted_class, "Unknown")

    # ✅ Only print the two values required by Node.js
    print(predicted_class)
    print(predicted_label)

except Exception as e:
    print(f"Error: {str(e)}")
    sys.exit(1)
