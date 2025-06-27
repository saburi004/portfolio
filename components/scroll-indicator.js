"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <motion.div
        className="text-white/60 text-sm mb-2 font-light tracking-wider"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        SCROLL DOWN
      </motion.div>
      <motion.div
        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        whileHover={{ borderColor: "rgba(255, 255, 255, 0.6)" }}
      >
        <motion.div
          className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>
      <motion.div
        className="mt-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
      >
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </motion.div>
  )
}
