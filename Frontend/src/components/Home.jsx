import React from 'react'
import HeroSection from './HeroSection'
import HomeBot from './HomeBot'
import { motion } from 'framer-motion'
import Footer from './Footer'

function Home() {
  return (
    <div className="">
      <HeroSection />

      {/* Gradient transition strip between sections */}
      <div className="h-20 bg-gradient-to-b  to-black w-full" />

      {/* Explore text with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="text-center text-white text-2xl md:text-4xl font-bold  mb-4"
      >
        Explore our Features <span className="inline-block animate-bounce">🚀</span>
      </motion.div>

      {/* HomeBot section with scroll-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="pt-12">
  <HomeBot />
</div>

      </motion.div>
      <Footer />

    </div>
  )
}

export default Home
