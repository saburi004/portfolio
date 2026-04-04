
// "use client"

// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import { useRef, useState } from "react"
// import ShinyText from "./ReactBits/shinybits"
// export default function AboutSection() {
//   const sectionRef = useRef(null)
//   const [activeTab, setActiveTab] = useState("skills")
  
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   // Transform scale based on scroll progress
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8])

//   const technicalSkills = {
//     Skills: [
//       { name: "ReactJS", level: 90 },
//       { name: "NextJS", level: 85 },
//        { name: "MySQL", level: 80 },
//       { name: "MongoDB", level: 85 },
//       { name: "Firebase", level: 75 }
//     ],
   
//     others: [
//       { name: "Figma", level: 80 },
//       { name: "AI Tools", level: 85 },
    
//     ]
//   }

//   const softSkillsHobbies = [
//     { name: "Communication", description: "Effective team collaboration and client interaction" },
//     { name: "Reading Books", description: "Continuous learning and knowledge expansion" },
//     { name: "Trekking", description: "Adventure and nature exploration" },
//     { name: "Playing Piano", description: "Musical creativity and stress relief" }
//   ]

//   const tabVariants = {
//     inactive: { 
//       scale: 0.95,
//       opacity: 0.7,
//       y: 0
//     },
//     active: { 
//       scale: 1,
//       opacity: 1,
//       y: -2,
//       transition: { 
//         type: "spring",
//         stiffness: 400,
//         damping: 30
//       }
//     }
//   }

//   const contentVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 20,
//       scale: 0.95
//     },
//     visible: { 
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1
//       }
//     },
//     exit: {
//       opacity: 0,
//       y: -20,
//       scale: 0.95,
//       transition: { duration: 0.3 }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   }

//   return (
//     <section id="about">
//     <motion.section
//       ref={sectionRef}
//       className="relative z-10 px-6 py-16"
//       style={{ 
//         scale, 
//         opacity,
//         background: `linear-gradient(135deg, #0D171F 0%, #0A1419 25%, #0D171F 50%, #0F1923 75%, #0D171F 100%)`
//       }}
//     >
//       {/* Background Effects */}
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


// <motion.div
//   className="text-center mb-12"
//   initial={{ opacity: 0, y: 50 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
// >
//   <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg cinzel-bold">
//     About Me
//   </h2>
//   <p className="text-2xl text-gray-400 max-w-3xl mx-auto cinzel-regular ">
//                 <ShinyText text="  Transforming ideas into elegant, functional code — one pixel and one logic block at a time." disabled={false} speed={3} className='custom-class' />

  
//   </p>
// </motion.div>

//         {/* Interactive Tab Navigation */}
//         <motion.div 
//           className="flex justify-center mb-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <div className="relative backdrop-blur-md bg-[#0D171F]/50 border border-[#08F6D8]/20 rounded-2xl p-2 shadow-2xl">
//             {/* Sliding indicator */}
//             <motion.div
//               className="absolute top-2 bottom-2 bg-gradient-to-r from-[#08F6D8]/30 to-[#45DBF1]/30 rounded-xl border border-[#08F6D8]/40"
//               animate={{
//                 x: activeTab === "skills" ? 0 : "100%",
//                 width: activeTab === "skills" ? "50%" : "50%"
//               }}
//               transition={{ type: "spring", stiffness: 400, damping: 30 }}
//             />
            
//             <div className="relative flex">
//               <motion.button
//                 onClick={() => setActiveTab("skills")}
//                 className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
//                   activeTab === "skills" 
//                     ? "text-white" 
//                     : "text-gray-400 hover:text-gray-200"
//                 }`}
//                 variants={tabVariants}
//                 animate={activeTab === "skills" ? "active" : "inactive"}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="flex items-center gap-2">
//                  Technical Skills
//                 </span>
//               </motion.button>
              
//               <motion.button
//                 onClick={() => setActiveTab("soft-skills")}
//                 className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
//                   activeTab === "soft-skills" 
//                     ? "text-white" 
//                     : "text-gray-400 hover:text-gray-200"
//                 }`}
//                 variants={tabVariants}
//                 animate={activeTab === "soft-skills" ? "active" : "inactive"}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="flex items-center gap-2">
//                    SoftSkill & Hobbies
//                 </span>
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Content Area */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             {activeTab === "skills" && (
//               <motion.div
//                 key="skills"
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="space-y-8"
//               >
//                 {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
//                   <div key={category} className="space-y-4">
//                     <h3 className="text-xl font-semibold text-[#08F6D8] capitalize mb-4">
//                       {category === 'others' ? 'Other Tools' : category}
//                     </h3>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {skills.map((skill, index) => (
//                         <motion.div
//                           key={skill.name}
//                           variants={itemVariants}
//                           className="group relative backdrop-blur-md bg-gradient-to-br from-[#0D171F]/95 via-[#0A1419]/90 to-[#0F1923]/95 border border-[#08F6D8]/20 rounded-xl p-4 shadow-xl hover:shadow-[#08F6D8]/30 transition-all duration-500 overflow-hidden"
//                           whileHover={{ 
//                             scale: 1.02,
//                             y: -2 
//                           }}
//                         >
//                           {/* Skill Name */}
//                           <h4 className="text-lg font-medium text-white mb-3">{skill.name}</h4>
                          
//                           {/* Progress Bar */}
//                           <div className="relative">
//                             <div className="w-full bg-[#0D171F]/50 rounded-full h-2 mb-2">
//                               <motion.div
//                                 className="bg-gradient-to-r from-[#08F6D8] to-[#45DBF1] h-2 rounded-full"
//                                 initial={{ width: 0 }}
//                                 animate={{ width: `${skill.level}%` }}
//                                 transition={{ duration: 1, delay: (categoryIndex * skills.length + index) * 0.1 }}
//                               />
//                             </div>
//                             <span className="text-sm text-gray-400">{skill.level}%</span>
//                           </div>
                          
//                           {/* Hover glow effect */}
//                           <div className="absolute inset-0 bg-gradient-to-r from-[#08F6D8]/10 via-transparent to-[#31f9c7]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             )}

//             {activeTab === "soft-skills" && (
//               <motion.div
//                 key="soft-skills"
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="grid md:grid-cols-2 gap-6"
//               >
//                 {softSkillsHobbies.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     variants={itemVariants}
//                     className="group relative backdrop-blur-md bg-gradient-to-br from-[#0D171F]/95 via-[#0A1419]/90 to-[#0F1923]/95 border border-[#45DBF1]/20 rounded-xl p-6 shadow-xl hover:shadow-[#45DBF1]/30 transition-all duration-500 overflow-hidden"
//                     whileHover={{ 
//                       scale: 1.02,
//                       y: -2
//                     }}
//                   >
//                     {/* Title */}
//                     <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#45DBF1] transition-colors duration-300">
//                       {item.name}
//                     </h4>
                    
//                     {/* Description */}
//                     <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
//                       {item.description}
//                     </p>
                    
//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#45DBF1]/10 via-transparent to-[#0DB8A5]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     {/* Corner accent */}
//                     <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-[#45DBF1] to-[#0DB8A5] rounded-full group-hover:scale-150 transition-transform duration-300" />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.section>
//     </section>
//   )
// }



import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import skills from "../data/skills"
import BlurText from "./blurtext/BlurText"
import ShinyText from "./ReactBits/shinybits";
import {
  Code,
  Database,
  Server,
  Layout,
  Wrench,
  Terminal,
  Cpu
} from "lucide-react"

const categoryIcons = {
  Frontend: <Layout className="w-4 h-4" />,
  Backend: <Server className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Tools: <Wrench className="w-4 h-4" />,
  Languages: <Code className="w-4 h-4" />
}

const categories = Array.from(new Set(skills.map(skill => skill.category)))

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [selectedSkill, setSelectedSkill] = useState(null)

  const filteredSkills = skills.filter(
    skill => skill.category === activeCategory
  )

  useEffect(() => {
    if (filteredSkills.length > 0) {
      setSelectedSkill(filteredSkills[0])
    }
  }, [activeCategory])

  return (
    <section
      id="about"
      aria-label="Saburi Nikam – Technical Skills and Expertise"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0D171F 0%, #0A1419 25%, #0D171F 50%, #0F1923 75%, #0d1c1f 100%)"
      }}
    >
      {/* Glass base */}
      <div className="absolute inset-0 backdrop-blur-[140px] bg-white/[0.025]" />

      {/* Aurora glows */}
      <div className="absolute -top-40 left-1/3 w-[60vw] h-[60vw] rounded-full bg-[#10b981ff]/20 blur-[160px] " />
      <div className="absolute bottom-0 right-1/4 w-[45vw] h-[45vw] rounded-full bg-[#10b981ff]/15 blur-[140px]  delay-700" />

      {/* Frozen light patches */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.14), transparent 40%),
            radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.10), transparent 45%),
            radial-gradient(ellipse at 50% 10%, rgba(255,255,255,0.08), transparent 35%)
          `
        }}
      />

      {/* Ice grain */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
        <div className="flex justify-center text-center w-full">
  <BlurText
    text="Technical Skills & Expertise"
    delay={120}
    animateBy="letters"
    direction="top"
    className="cinzel-bold text-5xl md:text-6xl tracking-wide text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg"
  />
</div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 font-light text-lg leading-relaxed cinzel-regular ">
                    <ShinyText text="A full-stack developer & AI enthusiast — proficient in React, Next.js, Node.js, Python, MongoDB, and cloud tooling." disabled={false} speed={2} className='custom-class' />

          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-[#0D171F]/60 border border-[#08F6D8]/20 backdrop-blur-xl self-start shadow-2xl">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all
                    ${
                      activeCategory === cat
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }
                  `}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#08F6D8]/30 to-[#45DBF1]/30 rounded-xl border border-[#08F6D8]/40"
                      transition={{ type: "spring", stiffness: 260, damping: 28 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {categoryIcons[cat] || <Terminal className="w-4 h-4" />}
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills List */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map(skill => (
                  <motion.button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    onMouseEnter={() => setSelectedSkill(skill)}
                    className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-xl transition-all text-left
                      ${
                        selectedSkill?.name === skill.name
                          ? "bg-[#0D171F]/80 border-[#08F6D8]/40 shadow-[0_0_30px_rgba(8,246,216,0.35)] translate-x-2"
                          : "bg-[#0D171F]/50 border-white/10 hover:bg-[#0D171F]/70"
                      }
                    `}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
                      <img
                        src={`https://cdn.simpleicons.org/${skill.iconSlug}/ffffff`}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {skill.name}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 relative min-h-[420px]">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {selectedSkill && (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="rounded-3xl p-10 bg-[#0D171F]/70 border border-[#45DBF1]/25 backdrop-blur-2xl shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white/10">
                        <img
                          src={`https://cdn.simpleicons.org/${selectedSkill.iconSlug}/ffffff`}
                          alt={selectedSkill.name}
                          className="w-12 h-12"
                        />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-gray-400">
                        {selectedSkill.category}
                      </span>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-2">
                      {selectedSkill.name}
                    </h2>

                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#08F6D8] to-[#45DBF1] mb-8" />

                    <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                      <h4 className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#08F6D8] font-bold mb-3">
                        <Cpu className="w-4 h-4" /> Usage & Experience
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed font-light">
                        {selectedSkill.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
