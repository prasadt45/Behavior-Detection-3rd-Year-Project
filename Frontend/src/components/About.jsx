import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br  text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-20 mb-4">About the Project 🚀</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Our project combines <span className="text-blue-400 font-semibold">emotion</span> and <span className="text-blue-400 font-semibold">posture detection</span> using AI to better understand user behavior in real-time. This dual-mode system ensures accuracy and intelligent fallback between detection modes, providing meaningful insights every time.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project Objectives */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1c1b2e] rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-blue-500 pb-2">
              🎯 Project Objectives
            </h3>
            <ul className="space-y-4 text-gray-300 list-disc pl-5 text-lg leading-relaxed">
              <li><span className="text-white font-semibold">Dual-Mode Behavior Detection:</span> Detect both emotion and body posture for complete behavior analysis.</li>
              <li><span className="text-white font-semibold">Multi-Level Body Analysis:</span> Individual body part tracking for improved accuracy.</li>
              <li><span className="text-white font-semibold">Auto-Switching Modes:</span> Fall back to posture detection when facial emotions aren't clear.</li>
              <li><span className="text-white font-semibold">AI-Powered Explanation:</span> Generate a paragraph summary instead of one-word labels.</li>
            </ul>
          </motion.div>

          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e1d2f] rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b border-blue-500 pb-2">👨‍💻 Team & Guidance</h3>
            <div className="grid sm:grid-cols-1 gap-6 text-lg text-gray-300">
              <div>
                <h4 className="text-xl text-white font-semibold">Guide</h4>
                <p>Prof. Rina Damdoo</p>
              </div>
              <div>
                <h4 className="text-xl text-white font-semibold">Team Members</h4>
                <ul className="space-y-1">
                  <li>Harshwardhan Shambharkar</li>
                  <li>Prasad Tamhan</li>
                  <li>Amanjit Singh Renu</li>
                  <li>Varun Sukalkar</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl text-white font-semibold">College</h4>
                <p>Shri Ramdeobaba College of Engineering & Management, Nagpur</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
