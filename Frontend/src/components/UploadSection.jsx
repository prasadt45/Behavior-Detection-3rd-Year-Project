import { useState } from "react";
import speechEmotionDetection from "../assets/speech-emotion-detection.webp";

export default function UploadSection() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingStep, setLoadingStep] = useState("");

    const handleUpload = async (file) => {
        setLoading(true);
        setLoadingStep("upload");

        const formData = new FormData();
        formData.append("image", file);

        try {
            // Simulate progress steps
            setTimeout(() => {
                setLoadingStep("upload-done");
                setLoadingStep("analyze");
            }, 1200);
            setTimeout(() => {
                setLoadingStep("analyze-done");
                setLoadingStep("predict");
            }, 2400);

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
            setLoadingStep(""); // Stop loading animation
        } catch (err) {
            console.error("Upload Error:", err.message);
            setErrorMessage("❌ Upload failed! Please try again.");
            setSuccessMessage("");
            setPrediction(null);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3600);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setSelectedFile(file);
        handleUpload(file);
    };

    const StepItem = ({ status, label }) => {
        const isActive = status === "active";
        const isDone = status === "done";

        return (
            <div className="flex items-center space-x-2 mb-2">
                <span
                    className={`text-xl font-bold transition duration-300 ${
                        isDone ? "text-green-400" : isActive ? "opacity-100" : "opacity-40"
                    }`}
                >
                    {isDone ? `✅ ${label}` : label}
                </span>
                {isActive && (
                    <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className="w-2 h-2 rounded-full bg-white animate-wave"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-[110vh] flex flex-col items-center justify-start bg-gradient-to-r  text-white px-8 pt-52 pb-4">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Upload Section */}
                <div className="flex flex-col items-center text-center w-full lg:w-1/2">
                    <h1 className="text-4xl font-serif font-medium text-white mb-4">
                        Body Posture Detection & AI Analysis
                    </h1>
                    <p className="text-lg font-serif text-white mb-6">
                        Experience the power of AI in detecting emotions and analyzing body postures in real time.
                    </p>

                    {successMessage && (
                        <div className="bg-green-500 text-white px-4 py-2 rounded mb-4 shadow-md">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="bg-red-500 text-white px-4 py-2 rounded mb-4 shadow-md">
                            {errorMessage}
                        </div>
                    )}

                    <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg">
                        Select File
                        <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>

                    {selectedFile && <p className="text-white mt-3">Selected: {selectedFile.name}</p>}

                    {loading && (
                        <div className="mt-6 flex flex-col items-center space-y-2">
                            <StepItem
                                status={
                                    loadingStep === "upload"
                                        ? "active"
                                        : loadingStep === "upload-done" || loadingStep !== ""
                                        ? "done"
                                        : "pending"
                                }
                                label="Uploading Image"
                            />
                            <StepItem
                                status={
                                    loadingStep === "analyze"
                                        ? "active"
                                        : loadingStep === "analyze-done" || loadingStep === "predict"
                                        ? "done"
                                        : "pending"
                                }
                                label="Analyzing Image"
                            />
                            <StepItem
                                status={loadingStep === "predict" ? "active" : prediction ? "done" : "pending"}
                                label="Predicting Output"
                            />
                        </div>
                    )}
                </div>

                {/* AI Prediction Section */}
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <img
                        src={speechEmotionDetection}
                        alt="Emotion Detection"
                        className="w-92 h-80"
                    />
                    {prediction && (
                        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg w-96 text-center">
                            <h2 className="text-xl font-semibold">AI Prediction</h2>
                            <p className="mt-2 text-green-400">Class Index: {prediction.classIndex}</p>
                            <p className="mt-1 text-yellow-300">Activity: {prediction.activity}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Explanation Section */}
            {prediction && (
                <div className="mt-16 bg-gray-900 text-white p-6 rounded-xl shadow-lg w-3/4 max-w-2xl text-center 
                    border-2 border-blue-400 transform transition hover:scale-105 shadow-blue-500/50">
                    <h2 className="text-2xl font-semibold text-blue-300">Generated Explanation</h2>
                    <p className="mt-4 text-lg leading-relaxed">
                        After analyzing the image, we can see that {prediction.activity} activity is taking place.
                        {prediction.activity} is a vital process that involves certain movements, improving both
                        physical and mental well-being.
                    </p>
                </div>
            )}
        </div>
    );
}
