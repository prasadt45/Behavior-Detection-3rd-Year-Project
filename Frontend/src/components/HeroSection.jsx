import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fimage-emotion-3.png?alt=media&token=1caff628-0884-42f8-a992-1332bce0c4b9",
    "https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fimage-emotion-1.png?alt=media&token=7204d450-68ae-48ef-aba6-cc2f940947ef",
    "https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fimage-emotion-2.png?alt=media&token=0895b7c1-4f2f-4bb2-8fe2-2417df199a7f",
    "https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fimage-emotion-5.png?alt=media&token=6a763c75-f41c-4252-958d-5c56f2e1ecfc",
    "https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fimage-emotion-4.png?alt=media&token=bdbe6a49-884a-48c1-95ed-ce34c297f128",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 800); // Change image every 800ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between px-10 py-26 text-white min-h-screen w-full gap-16">
      {/* Left Text Section - Adjusted Left Alignment */}
      <div className="max-w-lg text-left mr-16"> 
        <h1 className="text-5xl font-serif font-medium leading-tight">
          Analyze Body Postures & Emotions in Real-Time
        </h1>
        <p className="text-lg mt-4 font-serif">
          Discover the emotional makeup of your image with our advanced AI.
        </p>
        <button className="mt-6 px-6 py-3 text-lg bg-[#0057ff] text-white font-semibold rounded-md hover:brightness-90 transition">
          Try Your Image Now
        </button>
      </div>

      {/* Right Image Section - Adjusted Right Alignment */}
      <div className="relative h-96 w-90 mr-12"> 
        <img
          src={images[currentImage]}
          alt="Emotion Detection"
          className="h-96 w-auto rounded-lg shadow-lg transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
