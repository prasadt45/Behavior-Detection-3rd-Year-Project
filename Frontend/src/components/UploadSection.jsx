import { useState } from "react";

export default function UploadSection() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async (file) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("http://localhost:8000/api/v1/predict", {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            const data = await response.json();
            console.log("Upload Response:", data);

            if (!response.ok) {
                throw new Error(data.message || "Upload failed");
            }

            setSuccessMessage("✅ Image uploaded and analyzed successfully!");
            setPrediction(data);
            setErrorMessage("");
        } catch (err) {
            console.error("Upload Error:", err.message);
            setErrorMessage("❌ Upload failed! Please try again.");
            setSuccessMessage("");
            setPrediction(null);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setSelectedFile(file);
        handleUpload(file);
    };

    return (
        <div className="min-h-screen flex items-center justify-between px-2 bg-gradient-to-r text-white">
            <div className="w-1/2 flex flex-col items-center">
                <h1 className="text-5xl font-serif font-medium text-white mb-4">Upload Your Image for AI Analysis</h1>
                <p className="text-lg font-serif text-white mb-6">Experience the power of AI in detecting emotions and analyzing body postures in real time.</p>
                
                {successMessage && <div className="bg-green-500 text-white px-4 py-2 rounded mb-4">{successMessage}</div>}
                {errorMessage && <div className="bg-red-500 text-white px-4 py-2 rounded mb-4">{errorMessage}</div>}
                
                <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                    Select File
                    <input type="file" className="hidden" onChange={handleFileChange} />
                </label>

                {selectedFile && <p className="text-white mt-3">Selected: {selectedFile.name}</p>}

                {loading && (
                    <div className="mt-4 flex items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        <p className="ml-2">Processing...</p>
                    </div>
                )}
            </div>

            <div className="w-1/2 flex flex-col items-center">
                <img src="https://www.pranathiss.com/static/assets/images/casestudies/banner-img/speech-emotion-detection.webp" alt="Emotion Detection" className="w-92 h-80 " />
                {prediction && (
                    <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg w-96 text-center">
                        <h2 className="text-xl font-semibold">AI Prediction</h2>
                        <p className="mt-2 text-green-400">Class Index: {prediction.classIndex}</p>
                        <p className="mt-1 text-yellow-300">Activity: {prediction.activity}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
