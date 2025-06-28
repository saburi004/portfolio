// "use client"

// import { motion } from "framer-motion"
// import { useRef, useState, useEffect } from "react"

// export default function TimelineSection() {
//   const timelineRef = useRef(null)
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const [mounted, setMounted] = useState(false)

//   const timelineItems = [
//     { year: "2024", title: "Senior Developer", company: "Tech Corp", description: "Leading frontend development team" },
//     {
//       year: "2023",
//       title: "Full Stack Developer",
//       company: "StartupXYZ",
//       description: "Built scalable web applications",
//     },
//     {
//       year: "2022",
//       title: "Frontend Developer",
//       company: "WebStudio",
//       description: "Created responsive user interfaces",
//     },
//     { year: "2021", title: "Junior Developer", company: "CodeLab", description: "Started my development journey" },
//   ]

//   useEffect(() => {
//     setMounted(true)

//     const handleScroll = () => {
//       if (timelineRef.current) {
//         const rect = timelineRef.current.getBoundingClientRect()
//         const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
//         setScrollProgress(progress)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   if (!mounted) {
//     return (
//       <section className="relative z-10 min-h-screen px-6 py-20">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950" />
//       </section>
//     )
//   }

//   return (
//     <section className="relative z-10 min-h-screen px-6 py-20 overflow-hidden" ref={timelineRef}>
//       {/* Deep Ocean Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#192331] via-slate-900 to-[#172534]" />
//       <div className="absolute inset-0 bg-gradient-to-b from-[#172534]via-slate-800/50 to-blue-950/80" />
      
//       {/* Underwater caustics effect */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(59,130,246,0.1)_70%)]" />
//         <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(59,130,246,0.1),transparent)]" />
//       </div>
      
//       {/* Sunlight beam from left */}
//       {/* <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-yellow-200/20 via-blue-200/10 to-transparent opacity-30 transform -skew-y-12" />
//       <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-yellow-100/15 via-cyan-200/8 to-transparent opacity-40 transform -skew-y-12" /> */}
      
//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-200/40 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-4xl mx-auto relative z-10">
//         <motion.h2
//           className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-200 via-blue-200 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           My Journey
//         </motion.h2>

//         <div className="relative">
//           {/* Timeline Pipe - Ocean depth effect */}
//           <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-600/40 to-slate-700/60 rounded-full shadow-inner" />
          
//           {/* Water flowing down the pipe */}
//           <motion.div
//             className="absolute left-8 top-0 w-1 rounded-full overflow-hidden"
//             style={{ height: `${scrollProgress * 100}%` }}
//           >
//             {/* Animated water flow */}
//             <motion.div
//               className="w-full h-full bg-gradient-to-b from-cyan-400/80 via-blue-400/70 to-teal-500/80 relative"
//               style={{
//                 filter: "drop-shadow(0 0 6px rgba(68, 221, 248, 0.77)) drop-shadow(0 0 12px rgba(40, 193, 253, 0.77))",
//               }}
//             >
//               {/* Flowing water animation */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
//                 animate={{
//                   y: ["-100%", "100%"],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//             </motion.div>
//           </motion.div>

//           {timelineItems.map((item, index) => (
//             <motion.div
//               key={index}
//               className="relative flex items-center mb-12"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               {/* Timeline Bubble - Like air bubbles in water */}
//               <motion.div
//                 className="absolute left-6 w-5 h-5 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 rounded-full shadow-lg z-10 border-2 border-white/30"
//                 style={{
//                   filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.4))",
//                 }}
//                 whileInView={{ 
//                   scale: [0, 1.4, 1.1, 1],
//                   rotate: [0, 180, 360] 
//                 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.2 }}
//               />

//               {/* Content Card - Floating glassmorphism */}
//               <motion.div
//                 className="ml-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl shadow-blue-900/40 w-full relative"
//                 initial={{ y: 20 }}
//                 animate={{ 
//                   y: [0, -10, 0],
//                   rotateX: [0, 4, 0],
//                   rotateY: [0, 1, 0],
//                 }}
//                 transition={{
//                   y: {
//                     duration: 4 + index * 0.3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                   rotateX: {
//                     duration: 6 + index * 0.3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                   rotateY: {
//                     duration: 8 + index * 0.2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                   y: -15,
//                   backgroundColor: "rgba(255, 255, 255, 0.15)",
//                   borderColor: "rgba(255, 255, 255, 0.3)",
//                   boxShadow: "0 30px 60px rgba(30, 58, 138, 0.5)",
//                 }}
//                 style={{
//                   filter: "drop-shadow(0 8px 20px rgba(30, 58, 138, 0.3))",
//                   background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
//                   backdropFilter: "blur(20px)",
//                   WebkitBackdropFilter: "blur(20px)",
//                 }}
//               >
//                 <div className="text-cyan-200 font-bold text-lg mb-2 drop-shadow-sm">{item.year}</div>
//                 <h3 className="text-white text-xl font-semibold mb-1 drop-shadow-sm">{item.title}</h3>
//                 <div className="text-teal-200 font-medium mb-3 drop-shadow-sm">{item.company}</div>
//                 <p className="text-gray-100 leading-relaxed drop-shadow-sm">{item.description}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
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
      title: "MERN Stack Internship adn Training",
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