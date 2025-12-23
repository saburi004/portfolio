
"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function TimelineSection() {
  const timelineRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  const timelineItems = [
    { year: "2022-2024", title: "Diploma in Computer Technology", company: "Govenment Polytechnic Nashik", description: "Completed Diploma with technical foundation in software development and computer systems." },
   
   {
      year: "JAN 2024 - April 2024",
      title: "MERN Stack Internship and Training",
      company: "Sumago Infotech Pvt Ltd",
      description: "Worked as a MERN stack intern, developing full-stack applications and learning real-world project workflows.",
    },
    { year: "Sept 2024- Ongoing", title: "BTECH -Artificial Intelligence and Data Science", company: "Vishwakarma Institute Of technology", description: "ExtraCurriculars - Web Co-ordinator Inernational Society of Automation(ISA)" },
  ]

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <section className="relative z-10 min-h-screen px-6 py-20">
        <div className="absolute inset-0" />
      </section>
    )
  }

  return (
    <section className="relative z-10 min-h-screen px-6 py-20 overflow-hidden" ref={timelineRef}>
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#30D5DB]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 1, // Faster duration
              repeat: Infinity,
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#30D5DB] via-[#3CD6E5] to-[#40E0D0] bg-clip-text text-transparent drop-shadow-2xl cinzel-bold mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline Pipe */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-600/20 to-slate-700/30 rounded-full" />
          
          {/* Water flowing down the pipe */}
          <motion.div
            className="absolute left-8 top-0 w-1 rounded-full overflow-hidden"
            style={{ height: `${scrollProgress * 100}%` }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#30D5DB]/80 via-[#3CD6E5]/70 to-[#40E0D0]/80 relative"
              style={{
                filter: "drop-shadow(0 0 6px rgba(48, 213, 219, 0.77)) drop-shadow(0 0 12px rgba(60, 214, 229, 0.77))",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5, // Faster flow
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-center mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Bubble */}
              <motion.div
                className="absolute left-6 w-5 h-5 bg-gradient-to-r from-[#30D5DB] via-[#3CD6E5] to-[#40E0D0] rounded-full shadow-lg z-10 border-2 border-white/30"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(48, 213, 219, 0.6)) drop-shadow(0 0 16px rgba(60, 214, 229, 0.2))",
                }}
                whileInView={{ 
                  scale: [0, 1.4, 1.1, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Faster animation
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
              />

              {/* Content Card */}
              <motion.div
                className="ml-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 w-full relative"
                initial={{ y: 20 }}
                animate={{ 
                  y: [0, -10, 0],
                  rotateX: [0, 4, 0],
                  rotateY: [0, 1, 0],
                }}
                transition={{
                  y: {
                    duration: 2 + index * 0.2, // Faster floating
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotateX: {
                    duration: 3 + index * 0.2, // Faster rotation
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotateY: {
                    duration: 4 + index * 0.1, // Faster rotation
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 30px 60px rgba(48, 213, 219, 0.3)",
                }}
                style={{
                  boxShadow: "0 8px 20px rgba(48, 213, 219, 0.2)",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <div className="text-[#30D5DB] font-bold text-lg mb-2 drop-shadow-sm lobster-two-regular">{item.year}</div>
                <h3 className="text-white text-xl font-semibold mb-1 drop-shadow-sm  ">{item.title}</h3>
                <div className="text-[#3CD6E5] font-medium mb-3 drop-shadow-sm">{item.company}</div>
                <p className="text-gray-100 leading-relaxed drop-shadow-sm ">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}