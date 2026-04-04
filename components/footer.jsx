"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <>
      <footer className="relative z-10 bg-black border-t border-gray-800/50 px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Brand Section */}
          <motion.h2
            className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Saburi Nikam
          </motion.h2>
          <p className="text-gray-400 leading-relaxed mb-8">
           Full-Stack Developer & AI/DS Engineer based in Pune, India. Building modern web experiences with MERN, Next.js, and Python.
          </p>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50 pt-8 w-full flex flex-col items-center text-center">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Saburi v. Nikam
            </p>
            <p className="text-gray-400 text-sm">© 2026 Saburi Nikam. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </>
  )
}

