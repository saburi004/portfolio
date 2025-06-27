"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import ProfileCard from "./ReactBits/ProfileCard"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform scale based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8])

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-10 min-h-screen bg-black px-6 py-20"
      style={{ scale, opacity }}
    >
      {/* Very subtle corner glows for ultra-dark feel */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-800/15 via-blue-800/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-pink-800/15 via-purple-800/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-900/12 via-purple-900/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-88 h-88 bg-gradient-to-tl from-pink-900/12 via-purple-900/8 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#45D7CE] bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating beautiful, functional, and user-friendly digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-gray-950/90 border border-gray-800/30 rounded-2xl p-8 shadow-2xl shadow-black/80">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-500 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating modern, responsive
                applications using the latest technologies. I'm passionate about clean code, user experience, and
                continuous learning.
              </p>
            </div>
          </motion.div>

          {/* <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {["React", "Next.js", "TypeScript", "Node.js"].map((skill, index) => (
              <motion.div
                key={skill}
                className="backdrop-blur-md bg-gray-900/90 border border-gray-700/20 rounded-xl p-6 text-center hover:border-purple-600/30 hover:bg-gray-900/95 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(147, 51, 234, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl font-bold text-purple-400 mb-2">{skill}</div>
                <div className="text-sm text-gray-500">Expert</div>
              </motion.div>
            ))}
          </motion.div> */}
          <ProfileCard
  name="Saburi V. Nikam"
  title="BETCH Student"
  handle="@Saburi_004"
  status="Saburi_004"
  contactText="Contact Me"
  avatarUrl="/image.jpg"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
        </div>
      </div>
    </motion.section>
  )
}
