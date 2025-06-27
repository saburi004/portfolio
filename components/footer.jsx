"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import Ballpit from "./ReactBits/Ballpit"
export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
  

<>

   <footer className="relative z-10 bg-black border-t border-gray-800/50 px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Creating digital experiences that inspire and engage. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(147, 51, 234, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between">
        
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" /> by Your Name
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">© 2024 All rights reserved.</p>
          
        </div>
                  {/* <div style={{position: 'relative', overflow: 'hidden', minHeight: '100px', maxHeight: '200px', width: '100%'}}>
  <Ballpit
    count={60}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
  />
</div> */}
      </div>
       
    </footer>
      </>
   
  )
}
