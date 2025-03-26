import { useState } from "react";

export default function UploadSection() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleUpload = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("http://localhost:8000/api/v1/users/uploadimage", {
                method: "POST",
                body: formData,
                credentials: "include", // Ensures cookies are sent with the request
            });

            const data = await response.json();
            console.log("Upload Response:", data);

            if (!response.ok) {
                throw new Error(data.message || "Upload failed");
            }

            setSuccessMessage("✅ Image uploaded successfully!");
            setErrorMessage(""); // Clear any previous errors
        } catch (err) {
            console.error("Upload Error:", err.message);
            setErrorMessage("❌ Upload failed! Please try again.");
            setSuccessMessage(""); // Clear success message
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setSelectedFile(file);
        handleUpload(file);
    };

    return (
        <div className="min-h-screen flex items-center justify-between px-2 bg-gradient-to-r">
            <div className="w-1/2 flex flex-col items-center">
                <h1 className="text-5xl font-serif font-medium text-white mb-4">
                    Upload Your Image for AI Analysis
                </h1>
                <p className="text-lg font-serif text-white mb-6">
                    Experience the power of AI in detecting emotions and analyzing body postures in real time.
                </p>

                {successMessage && (
                    <div className="bg-green-500 text-white px-4 py-2 rounded mb-4 flex items-center">
                         {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className="bg-red-500 text-white px-4 py-2 rounded mb-4 flex items-center">
                        ❌ {errorMessage}
                    </div>
                )}

                <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                    Select File
                    <input type="file" className="hidden" onChange={handleFileChange} />
                </label>

                {selectedFile && <p className="text-white mt-3">Selected: {selectedFile.name}</p>}
            </div>

            <div className="w-1/2 flex justify-end">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fimage-emotion-3.png?alt=media&token=1caff628-0884-42f8-a992-1332bce0c4b9"
                    alt="Emotion Detection"
                    className="w-96 h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
