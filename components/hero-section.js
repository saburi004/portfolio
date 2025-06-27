"use client"

import { motion } from "framer-motion"
import ScrollIndicator from "./scroll-indicator"

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-white">Myself</span>
          <br />
          <span className="text-white">Saburi Nikam</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Crafting digital experiences with cutting-edge technology and creative vision
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <motion.button
            className="px-8 py-4 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #40E0D0 0%, #48D1CC 50%, #5F9EA0 100%)",
              boxShadow: "0 10px 30px rgba(64, 224, 208, 0.3)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(64, 224, 208, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

          <motion.button
            className="px-8 py-4 text-white rounded-full font-semibold transition-all duration-300"
            style={{
              border: "2px solid #40E0D0",
              backgroundColor: "rgba(64, 224, 208, 0.1)",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(64, 224, 208, 0.2)",
              boxShadow: "0 10px 30px rgba(64, 224, 208, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* <ScrollIndicator /> */}
    </section>
  )
}
