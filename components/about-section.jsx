// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
// import ProfileCard from "./ReactBits/ProfileCard"

// export default function AboutSection() {
//   const sectionRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   // Transform scale based on scroll progress
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8])

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="relative z-10 min-h-screen bg-black px-6 py-20"
//       style={{ scale, opacity }}
//     >
//       {/* Very subtle corner glows for ultra-dark feel */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-800/15 via-blue-800/8 to-transparent rounded-full blur-3xl" />
//       <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-pink-800/15 via-purple-800/8 to-transparent rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-900/12 via-purple-900/6 to-transparent rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-88 h-88 bg-gradient-to-tl from-pink-900/12 via-purple-900/8 to-transparent rounded-full blur-3xl" />

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#45D7CE] bg-clip-text text-transparent drop-shadow-lg">
//             About Me
//           </h2>
//           <p className="text-xl text-gray-500 max-w-3xl mx-auto">
//             I'm a passionate developer who loves creating beautiful, functional, and user-friendly digital experiences.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="backdrop-blur-md bg-gray-950/90 border border-gray-800/30 rounded-2xl p-8 shadow-2xl shadow-black/80">
//               <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
//               <p className="text-gray-500 leading-relaxed">
//                 With over 5 years of experience in web development, I specialize in creating modern, responsive
//                 applications using the latest technologies. I'm passionate about clean code, user experience, and
//                 continuous learning.
//               </p>
//             </div>
//           </motion.div>

//           {/* <motion.div
//             className="grid grid-cols-2 gap-4"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             {["React", "Next.js", "TypeScript", "Node.js"].map((skill, index) => (
//               <motion.div
//                 key={skill}
//                 className="backdrop-blur-md bg-gray-900/90 border border-gray-700/20 rounded-xl p-6 text-center hover:border-purple-600/30 hover:bg-gray-900/95 transition-all duration-300"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(147, 51, 234, 0.15)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-2xl font-bold text-purple-400 mb-2">{skill}</div>
//                 <div className="text-sm text-gray-500">Expert</div>
//               </motion.div>
//             ))}
//           </motion.div> */}
//           {/* <ProfileCard
//   name="Saburi V. Nikam"
//   title="BETCH Student"
//   handle="@Saburi_004"
//   status="Saburi_004"
//   contactText="Contact Me"
//   avatarUrl="/image.jpg"
//   showUserInfo={true}
//   enableTilt={true}
//   onContactClick={() => console.log('Contact clicked')}
// /> */}
//         </div>
//       </div>
//     </motion.section>
//   )
// }
// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
// import ProfileCard from "./ReactBits/ProfileCard"

// export default function AboutSection() {
//   const sectionRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   // Transform scale based on scroll progress
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8])

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="relative z-10 min-h-screen px-6 py-20"
//       style={{ 
//         scale, 
//         opacity,
//         background: `linear-gradient(135deg, #0D171F 0%, #0A1419 25%, #0D171F 50%, #0F1923 75%, #0D171F 100%)`
//       }}
//     >
//       {/* Cyan/Teal corner glows matching your aurora colors */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#08F6D8]/20 via-[#45DBF1]/10 to-transparent rounded-full blur-3xl animate-pulse" />
//       <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#45DBF1]/20 via-[#0DB8A5]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#0DB8A5]/15 via-[#08F6D8]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
//       <div className="absolute bottom-0 right-0 w-88 h-88 bg-gradient-to-tl from-[#08F6D8]/15 via-[#45DBF1]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

//       {/* Central glow effects */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#08F6D8]/5 via-[#45DBF1]/3 to-transparent rounded-full blur-3xl" />
      
//       {/* Floating glow orbs */}
//       <motion.div 
//         className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#08F6D8]/20 to-[#45DBF1]/20 rounded-full blur-2xl"
//         animate={{ 
//           x: [0, 50, -30, 0],
//           y: [0, -40, 20, 0],
//           scale: [1, 1.2, 0.8, 1]
//         }}
//         transition={{ 
//           duration: 8, 
//           repeat: Infinity, 
//           ease: "easeInOut" 
//         }}
//       />
//       <motion.div 
//         className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-[#0DB8A5]/20 to-[#08F6D8]/20 rounded-full blur-2xl"
//         animate={{ 
//           x: [0, -40, 30, 0],
//           y: [0, 30, -50, 0],
//           scale: [1, 0.8, 1.3, 1]
//         }}
//         transition={{ 
//           duration: 6, 
//           repeat: Infinity, 
//           ease: "easeInOut",
//           delay: 2
//         }}
//       />

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg">
//             About Me
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             I'm a passionate developer who loves creating beautiful, functional, and user-friendly digital experiences.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="backdrop-blur-md bg-gradient-to-br from-[#0D171F]/95 via-[#0A1419]/90 to-[#0F1923]/95 border border-[#08F6D8]/20 rounded-2xl p-8 shadow-2xl shadow-[#08F6D8]/10 hover:shadow-[#08F6D8]/20 transition-all duration-300">
//               <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
//               <p className="text-gray-300 leading-relaxed">
//                 With over 5 years of experience in web development, I specialize in creating modern, responsive
//                 applications using the latest technologies. I'm passionate about clean code, user experience, and
//                 continuous learning.
//               </p>
              
//               {/* Inner glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-[#08F6D8]/5 via-transparent to-[#45DBF1]/5 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           </motion.div>

//           {/* Placeholder for other content */}
//           <motion.div
//             className="flex items-center justify-center"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="w-full h-64 backdrop-blur-md bg-gradient-to-br from-[#0D171F]/90 via-[#0A1419]/80 to-[#0F1923]/90 border border-[#45DBF1]/20 rounded-2xl flex items-center justify-center shadow-2xl shadow-[#45DBF1]/10">
//               <div className="text-center">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#08F6D8] to-[#45DBF1] rounded-full flex items-center justify-center shadow-lg shadow-[#08F6D8]/30">
//                   <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse" />
//                 </div>
//                 <p className="text-gray-400">More content coming soon...</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Central dividing glow line */}
//         <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#08F6D8]/50 to-transparent hidden md:block" />
//       </div>
//     </motion.section>
//   )
// }
"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import ShinyText from "./ReactBits/shinybits"
export default function AboutSection() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState("skills")
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform scale based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8])

  const technicalSkills = {
    Skills: [
      { name: "ReactJS", level: 90 },
      { name: "NextJS", level: 85 },
       { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 75 }
    ],
   
    others: [
      { name: "Figma", level: 80 },
      { name: "AI Tools", level: 85 },
    
    ]
  }

  const softSkillsHobbies = [
    { name: "Communication", description: "Effective team collaboration and client interaction" },
    { name: "Reading Books", description: "Continuous learning and knowledge expansion" },
    { name: "Trekking", description: "Adventure and nature exploration" },
    { name: "Playing Piano", description: "Musical creativity and stress relief" }
  ]

  const tabVariants = {
    inactive: { 
      scale: 0.95,
      opacity: 0.7,
      y: 0
    },
    active: { 
      scale: 1,
      opacity: 1,
      y: -2,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about">
    <motion.section
      ref={sectionRef}
      className="relative z-10 px-6 py-16"
      style={{ 
        scale, 
        opacity,
        background: `linear-gradient(135deg, #0D171F 0%, #0A1419 25%, #0D171F 50%, #0F1923 75%, #0D171F 100%)`
      }}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#08F6D8]/20 via-[#45DBF1]/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#45DBF1]/20 via-[#0DB8A5]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#0DB8A5]/15 via-[#08F6D8]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-0 w-88 h-88 bg-gradient-to-tl from-[#08F6D8]/15 via-[#45DBF1]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Central glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#08F6D8]/5 via-[#45DBF1]/3 to-transparent rounded-full blur-3xl" />
      
      {/* Floating glow orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#08F6D8]/20 to-[#45DBF1]/20 rounded-full blur-2xl"
        animate={{ 
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-[#0DB8A5]/20 to-[#08F6D8]/20 rounded-full blur-2xl"
        animate={{ 
          x: [0, -40, 30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.8, 1.3, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">


<motion.div
  className="text-center mb-12"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg cinzel-bold">
    About Me
  </h2>
  <p className="text-2xl text-gray-400 max-w-3xl mx-auto lobster-two-regular">
                <ShinyText text="  Transforming ideas into elegant, functional code — one pixel and one logic block at a time." disabled={false} speed={3} className='custom-class' />

  
  </p>
</motion.div>

        {/* Interactive Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative backdrop-blur-md bg-[#0D171F]/50 border border-[#08F6D8]/20 rounded-2xl p-2 shadow-2xl">
            {/* Sliding indicator */}
            <motion.div
              className="absolute top-2 bottom-2 bg-gradient-to-r from-[#08F6D8]/30 to-[#45DBF1]/30 rounded-xl border border-[#08F6D8]/40"
              animate={{
                x: activeTab === "skills" ? 0 : "100%",
                width: activeTab === "skills" ? "50%" : "50%"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            
            <div className="relative flex">
              <motion.button
                onClick={() => setActiveTab("skills")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "skills" 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
                variants={tabVariants}
                animate={activeTab === "skills" ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                 Technical Skills
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab("soft-skills")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "soft-skills" 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
                variants={tabVariants}
                animate={activeTab === "soft-skills" ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                   SoftSkill & Hobbies
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#08F6D8] capitalize mb-4">
                      {category === 'others' ? 'Other Tools' : category}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          className="group relative backdrop-blur-md bg-gradient-to-br from-[#0D171F]/95 via-[#0A1419]/90 to-[#0F1923]/95 border border-[#08F6D8]/20 rounded-xl p-4 shadow-xl hover:shadow-[#08F6D8]/30 transition-all duration-500 overflow-hidden"
                          whileHover={{ 
                            scale: 1.02,
                            y: -2 
                          }}
                        >
                          {/* Skill Name */}
                          <h4 className="text-lg font-medium text-white mb-3">{skill.name}</h4>
                          
                          {/* Progress Bar */}
                          <div className="relative">
                            <div className="w-full bg-[#0D171F]/50 rounded-full h-2 mb-2">
                              <motion.div
                                className="bg-gradient-to-r from-[#08F6D8] to-[#45DBF1] h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: (categoryIndex * skills.length + index) * 0.1 }}
                              />
                            </div>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#08F6D8]/10 via-transparent to-[#45DBF1]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "soft-skills" && (
              <motion.div
                key="soft-skills"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid md:grid-cols-2 gap-6"
              >
                {softSkillsHobbies.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="group relative backdrop-blur-md bg-gradient-to-br from-[#0D171F]/95 via-[#0A1419]/90 to-[#0F1923]/95 border border-[#45DBF1]/20 rounded-xl p-6 shadow-xl hover:shadow-[#45DBF1]/30 transition-all duration-500 overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      y: -2
                    }}
                  >
                    {/* Title */}
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#45DBF1] transition-colors duration-300">
                      {item.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#45DBF1]/10 via-transparent to-[#0DB8A5]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-[#45DBF1] to-[#0DB8A5] rounded-full group-hover:scale-150 transition-transform duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
    </section>
  )
}