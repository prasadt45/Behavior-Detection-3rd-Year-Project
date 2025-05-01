import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen  text-white px-6 py-20 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?t=st=1743942266~exp=1743945866~hmac=824e474c1010bbf73d97fd478024eebc6bbf45265a47a8c80b4d1cdba6e02ece&w=826" // <-- replace this with your image URL
            alt="Contact Visual"
            className="rounded-2xl w-full shadow-lg object-cover max-h-[500px]"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1e1e2e] p-10 rounded-2xl shadow-md w-full"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-400">📬 Get in Touch</h2>
          <form className="space-y-6">
           
            <div>
              <label className="block mb-1 font-medium text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-[#2a2a3d] rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 bg-[#2a2a3d] rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-300">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full p-3 bg-[#2a2a3d] rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
