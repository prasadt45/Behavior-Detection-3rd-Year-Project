import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaUserShield, FaGraduationCap, FaChartLine } from "react-icons/fa";

const useCases = [
  {
    icon: <FaRobot className="text-4xl text-blue-500" />,
    title: "Human-Computer Interaction",
    description: "Enhance user experience by adapting interfaces based on real-time emotion and posture feedback.",
  },
  {
    icon: <FaUserShield className="text-4xl text-green-400" />,
    title: "Security & Surveillance",
    description: "Detect aggressive or suspicious behavior using AI-powered monitoring systems.",
  },
  {
    icon: <FaGraduationCap className="text-4xl text-yellow-300" />,
    title: "EdTech & E-Learning",
    description: "Monitor student engagement and attention during online classes and provide feedback.",
  },
  {
    icon: <FaChartLine className="text-4xl text-pink-400" />,
    title: "Behavioral Research",
    description: "Support psychologists and researchers with quantified emotion and posture analytics.",
  },
];

const Usecase = () => {
  return (
    <section className="bg-gradient-to-br  text-white px-6 py-20 mt-10">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold"
        >
          🔍 Use Cases
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#1e1e2e] rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              {/* Flex row for icon and title */}
              <div className="flex items-center gap-4 mb-2">
                {useCase.icon}
                <h4 className="text-xl font-semibold">{useCase.title}</h4>
              </div>
              <p className="text-gray-400">{useCase.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Usecase;
