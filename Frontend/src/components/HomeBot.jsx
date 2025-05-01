import React from "react";

const HomeBot = () => {
  return (
    <section className="bg-black text-white pt-16 pb-20 px-6 transition-all duration-700">
      <div className="max-w-7xl mx-auto space-y-24">

        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-white">
              Overall Body Posture Analysis
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our system analyzes the user’s overall body posture by detecting and interpreting 
              specific body parts such as hands, chest, and torso. This multi-level analysis helps in 
              capturing nuanced movements and predicting behavior with greater precision.
            </p>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fface-emotion-image.svg?alt=media&token=63dc6bb2-a4d8-41e1-9a86-7be5430148aa?w=640&q=75"
              alt="Posture Detection"
              className="w-full max-w-md h-[280px] object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-white">
              Real-Time Emotion Detection
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              The system intelligently detects facial expressions to interpret the user’s current emotion. 
              In scenarios where emotion detection may be unclear, it automatically switches to posture-based 
              evaluation—ensuring consistent and meaningful behavioral insights.
            </p>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fface-by-face-emotion.svg?alt=media&token=57aab128-914e-4870-96c2-6c6c6ca544e2?w=640&q=75"
              alt="Emotion Detection"
              className="w-full max-w-md h-[280px] object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Section 3: AI Prediction & Review */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-white">
              AI-Powered Behavior Review
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Going beyond simple labels like “Happy” or “Aggressive,” our AI engine generates 
              a descriptive paragraph summarizing the user’s behavior. This provides a deeper 
              contextual understanding—ideal for reports, reviews, or human-computer interaction systems.
            </p>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Femotion-recognition.svg?alt=media&token=6b831645-0db0-45dd-a47c-382962d3bc7b?w=640&q=75"
              alt="AI Prediction and Review"
              className="w-full max-w-md h-[280px] object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBot;
