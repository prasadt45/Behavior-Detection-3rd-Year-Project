import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fear from  "../assets/fear.png"
import happy from  "../assets/happy.png"
import sad from  "../assets/sad.png"
import surprise from  "../assets/surprise.png"
import angry from  "../assets/angry.png"





export default function HeroSection() {
  const images = [
    angry, 
    happy,
    sad,
    fear,
    surprise
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate()

  const handleclick = ()=>{
    console.log("bUTTON DABAYA") ; 
    navigate('/upload')

  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between px-10 pt-26  text-white min-h-screen w-full gap-16">

      {/* Left Text Section - Adjusted Left Alignment */}
      <div className="max-w-lg text-left mr-16"> 
        <h1 className="text-5xl font-serif font-medium leading-tight">
          Analyze Body Postures & Emotions in Real-Time
        </h1>
        <p className="text-lg mt-4 font-serif">
          Discover the emotional makeup of your image with our advanced AI.
        </p>
        <button  onClick={
          handleclick
        
        }
        className="mt-6 px-6 py-3 text-lg bg-[#0057ff] text-white font-semibold rounded-md hover:brightness-90 transition">
          Try Your Image Now
        </button>
      </div>

      {/* Right Image Section - Adjusted Right Alignment */}
      <div className="relative h-96 w-90 mr-12"> 
        <img
          src={images[currentImage]}
          alt="Emotion Detection"
          className="h-96 w-auto  transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
