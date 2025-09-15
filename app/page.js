// // "use client"

// // import { useState, useEffect } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import {
// //   Code2,
// //   Database,
// //   Globe,
// //   Smartphone,
// //   Cpu,
// //   GitBranch,
// //   Terminal,
// //   Layers,
// //   Zap,
// //   Palette,
// //   Monitor,
// //   Server,
// // } from "lucide-react"

// // import CursorTrail from "../components/cursor-trail"
// // import HeroSection from "../components/hero-section"
// // import AboutSection from "../components/about-section"
// // import TimelineSection from "../components/timeline-section"
// // import ProjectsSection from "../components/projects-section"
// // import AchievementsSection from "../components/achievements-section"
// // import ContactSection from "../components/contact-section"
// // import Footer from "../components/footer"
// // import {AuroraBackground} from "../components/aurorabg"

// // export default function PortfolioLanding() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// //   const [isScrolled, setIsScrolled] = useState(false)
// //   const [mounted, setMounted] = useState(false)

// //   const navItems = ["Home", "About", "Projects", "Experience", "Contact"]

// //   // Ensure component is mounted before rendering scroll-dependent content
// //   useEffect(() => {
// //     setMounted(true)

// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 100)
// //     }

// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   // Don't render until mounted to prevent hydration mismatch
// //   if (!mounted) {
// //     return (
// //       <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "black" }}>
// //         <div className="fixed inset-0 z-0">
// //           <div
// //             className="absolute inset-0"
// //             style={{ background: "black" }}
// //           />
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#0a1a2e" }}>
// //       {/* Smokey Cursor Trail */}
// //       <CursorTrail />

// //       {/* Ocean Background with Moving Slanted Light Rays */}
// //       <div className="fixed inset-0 z-0">
// //         {/* Deep ocean gradient base */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background: "linear-gradient(180deg, #1a2332 0%, #0a1a2e 25%, #0f3460 60%, #1b262c 100%)",
// //           }}
// //         />

// //         {/* Moving Slanted Light Rays */}
// //         <motion.div
// //           className="absolute inset-0 opacity-20"
// //           style={{
// //             background: `
// //               linear-gradient(25deg, transparent 0%, transparent 45%, rgba(64,224,208,0.3) 50%, rgba(64,224,208,0.15) 52%, transparent 57%, transparent 100%),
// //               linear-gradient(35deg, transparent 0%, transparent 35%, rgba(72,209,204,0.25) 40%, rgba(72,209,204,0.12) 42%, transparent 47%, transparent 100%),
// //               linear-gradient(15deg, transparent 0%, transparent 55%, rgba(95,158,160,0.2) 60%, rgba(95,158,160,0.1) 62%, transparent 67%, transparent 100%)
// //             `,
// //           }}
// //           animate={{
// //             transform: ["translateX(-100px) translateY(-50px)", "translateX(100px) translateY(50px)"],
// //           }}
// //           transition={{
// //             duration: 8,
// //             repeat: Number.POSITIVE_INFINITY,
// //             repeatType: "reverse",
// //             ease: "easeInOut",
// //           }}
// //         />

// //         {/* Secondary moving light rays */}
// //         <motion.div
// //           className="absolute inset-0 opacity-15"
// //           style={{
// //             background: `
// //               linear-gradient(45deg, transparent 0%, transparent 25%, rgba(64,224,208,0.4) 30%, rgba(64,224,208,0.2) 32%, transparent 37%, transparent 100%),
// //               linear-gradient(55deg, transparent 0%, transparent 65%, rgba(72,209,204,0.3) 70%, rgba(72,209,204,0.15) 72%, transparent 77%, transparent 100%)
// //             `,
// //           }}
// //           animate={{
// //             transform: ["translateX(80px) translateY(-80px)", "translateX(-80px) translateY(80px)"],
// //           }}
// //           transition={{
// //             duration: 12,
// //             repeat: Number.POSITIVE_INFINITY,
// //             repeatType: "reverse",
// //             ease: "easeInOut",
// //             delay: 2,
// //           }}
// //         />

// //         {/* Third layer of moving light */}
// //         <motion.div
// //           className="absolute inset-0 opacity-10"
// //           style={{
// //             background: `
// //               linear-gradient(20deg, transparent 0%, transparent 40%, rgba(95,158,160,0.35) 45%, rgba(95,158,160,0.18) 47%, transparent 52%, transparent 100%),
// //               linear-gradient(60deg, transparent 0%, transparent 20%, rgba(64,224,208,0.25) 25%, rgba(64,224,208,0.12) 27%, transparent 32%, transparent 100%)
// //             `,
// //           }}
// //           animate={{
// //             transform: ["translateX(-60px) translateY(60px)", "translateX(60px) translateY(-60px)"],
// //           }}
// //           transition={{
// //             duration: 10,
// //             repeat: Number.POSITIVE_INFINITY,
// //             repeatType: "reverse",
// //             ease: "easeInOut",
// //             delay: 4,
// //           }}
// //         />

// //         {/* Ocean depth shadows */}
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(15,52,96,0.3)_0%,rgba(15,52,96,0.1)_40%,transparent_70%)]" />
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(27,38,44,0.4)_0%,rgba(27,38,44,0.15)_35%,transparent_65%)]" />

// //         {/* Floating particles like marine snow */}
// //         {[...Array(25)].map((_, i) => (
// //           <motion.div
// //             key={`particle-${i}`}
// //             className="absolute w-1 h-1 bg-white/15 rounded-full"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //             }}
// //             animate={{
// //               y: [0, -120, -240],
// //               opacity: [0, 0.4, 0],
// //               scale: [0.3, 1, 0.3],
// //             }}
// //             transition={{
// //               duration: Math.random() * 10 + 8,
// //               repeat: Number.POSITIVE_INFINITY,
// //               delay: Math.random() * 6,
// //               ease: "linear",
// //             }}
// //           />
// //         ))}

// //         {/* Floating Tech Icons */}
// //         {[
// //           { Icon: Code2, delay: 0 },
// //           { Icon: Database, delay: 1 },
// //           { Icon: Globe, delay: 2 },
// //           { Icon: Terminal, delay: 3 },
// //           { Icon: Zap, delay: 4 },
// //           { Icon: Cpu, delay: 5 },
// //           { Icon: GitBranch, delay: 6 },
// //           { Icon: Layers, delay: 7 },
// //         ].map(({ Icon, delay }, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //             }}
// //             initial={{ opacity: 0, scale: 0 }}
// //             animate={{
// //               opacity: [0, 0.3, 0.5, 0.2, 0],
// //               scale: [0, 1, 1.1, 1, 0],
// //               y: [0, -150, -300],
// //               x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60],
// //               rotate: [0, 90, 180],
// //             }}
// //             transition={{
// //               duration: Math.random() * 12 + 10,
// //               repeat: Number.POSITIVE_INFINITY,
// //               delay: delay + Math.random() * 4,
// //               ease: "easeInOut",
// //             }}
// //           >
// //             <Icon
// //               className="w-6 h-6"
// //               style={{
// //                 color: "#40E0D0",
// //                 opacity: 0.6,
// //               }}
// //             />
// //           </motion.div>
// //         ))}

// //         {/* Smaller floating elements */}
// //         {[...Array(8)].map((_, i) => {
// //           const icons = [Monitor, Server, Smartphone, Palette]
// //           const RandomIcon = icons[Math.floor(Math.random() * icons.length)]

// //           return (
// //             <motion.div
// //               key={`small-${i}`}
// //               className="absolute"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 100}%`,
// //               }}
// //               animate={{
// //                 opacity: [0, 0.2, 0.4, 0.1, 0],
// //                 scale: [0, 0.7, 1, 0.7, 0],
// //                 y: [0, -120, -240],
// //                 x: [0, Math.random() * 40 - 20],
// //                 rotate: [0, Math.random() * 180],
// //               }}
// //               transition={{
// //                 duration: Math.random() * 15 + 12,
// //                 repeat: Number.POSITIVE_INFINITY,
// //                 delay: Math.random() * 8,
// //                 ease: "linear",
// //               }}
// //             >
// //               <RandomIcon
// //                 className="w-4 h-4"
// //                 style={{
// //                   color: "#5F9EA0",
// //                   opacity: 0.5,
// //                 }}
// //               />
// //             </motion.div>
// //           )
// //         })}

// //         {/* Subtle ocean current effect */}
// //         <motion.div
// //           className="absolute inset-0 opacity-5"
// //           style={{
// //             background: "linear-gradient(90deg, transparent 0%, rgba(64,224,208,0.1) 50%, transparent 100%)",
// //           }}
// //           animate={{
// //             x: ["-100%", "100%"],
// //           }}
// //           transition={{
// //             duration: 20,
// //             repeat: Number.POSITIVE_INFINITY,
// //             ease: "linear",
// //           }}
// //         />
// //       </div>

// //       {/* Ocean-themed Glassmorphic Navbar */}
// //       <motion.nav
// //         className="fixed top-0 left-0 right-0 z-40 p-6"
// //         initial={{ y: -100 }}
// //         animate={{ y: 0 }}
// //         transition={{ duration: 0.8, ease: "easeOut" }}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             className="transition-all duration-500 ease-out rounded-2xl px-8 py-4 shadow-2xl"
// //             style={{
// //               backgroundColor: isScrolled ? "rgba(10, 26, 46, 0.85)" : "rgba(22, 33, 62, 0.25)",
// //               backdropFilter: "blur(20px)",
// //               border: isScrolled ? "1px solid rgba(64, 224, 208, 0.2)" : "1px solid rgba(72, 209, 204, 0.15)",
// //               boxShadow: isScrolled ? "0 25px 50px rgba(10, 26, 46, 0.4)" : "0 10px 30px rgba(22, 33, 62, 0.3)",
// //             }}
// //             animate={{
// //               scale: isScrolled ? 0.95 : 1,
// //             }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             <div className="flex items-center justify-between">
// //               <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
// //                 Portfolio
// //               </motion.div>

// //               {/* Desktop Menu */}
// //               <div className="hidden md:flex space-x-8">
// //                 {navItems.map((item, index) => (
// //                   <motion.a
// //                     key={item}
// //                     href={`#${item.toLowerCase()}`}
// //                     className="transition-all duration-300 relative text-white/90 hover:text-white"
// //                     initial={{ opacity: 0, y: -20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: index * 0.1 + 0.3 }}
// //                     whileHover={{ scale: 1.1 }}
// //                   >
// //                     {item}
// //                     <motion.div
// //                       className="absolute -bottom-1 left-0 w-0 h-0.5"
// //                       style={{
// //                         background: "linear-gradient(90deg, #40E0D0, #48D1CC)",
// //                       }}
// //                       whileHover={{ width: "100%" }}
// //                       transition={{ duration: 0.3 }}
// //                     />
// //                   </motion.a>
// //                 ))}
// //               </div>

// //               {/* Mobile Menu Button */}
// //               <motion.button
// //                 className="md:hidden text-white"
// //                 onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 <div className="w-6 h-6 flex flex-col justify-center space-y-1">
// //                   <motion.div
// //                     className="w-full h-0.5 bg-white"
// //                     animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
// //                   />
// //                   <motion.div
// //                     className="w-full h-0.5 bg-white"
// //                     animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
// //                   />
// //                   <motion.div
// //                     className="w-full h-0.5 bg-white"
// //                     animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
// //                   />
// //                 </div>
// //               </motion.button>
// //             </div>

// //             {/* Mobile Menu */}
// //             <AnimatePresence>
// //               {isMenuOpen && (
// //                 <motion.div
// //                   className="md:hidden mt-4 pt-4"
// //                   style={{ borderTop: "1px solid rgba(64, 224, 208, 0.2)" }}
// //                   initial={{ opacity: 0, height: 0 }}
// //                   animate={{ opacity: 1, height: "auto" }}
// //                   exit={{ opacity: 0, height: 0 }}
// //                 >
// //                   {navItems.map((item, index) => (
// //                     <motion.a
// //                       key={item}
// //                       href={`#${item.toLowerCase()}`}
// //                       className="block py-2 text-white/80 hover:text-white transition-colors"
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       transition={{ delay: index * 0.1 }}
// //                       onClick={() => setIsMenuOpen(false)}
// //                     >
// //                       {item}
// //                     </motion.a>
// //                   ))}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>
// //         </div>
// //       </motion.nav>

// //       {/* All Sections */}
// //       {/* <HeroSection /> */}
// //       <AuroraBackground/>
// //       <AboutSection />
// //       <TimelineSection />
// //       <ProjectsSection />
// //       <AchievementsSection />
// //       <ContactSection />
// //       <Footer />
// //     </div>
// //   )
// // }
// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Code2,
//   Database,
//   Globe,
//   Smartphone,
//   Cpu,
//   GitBranch,
//   Terminal,
//   Layers,
//   Zap,
//   Palette,
//   Monitor,
//   Server,
// } from "lucide-react"

// import CursorTrail from "../components/cursor-trail"
// import AboutSection from "../components/about-section"
// import TimelineSection from "../components/timeline-section"
// import "./globals.css"
// import ProjectsSection from "../components/projects-section"
// import AchievementsSection from "../components/achievements-section"
// import ContactSection from "../components/contact-section"
// import Footer from "../components/footer"
// import {AuroraBackground} from "../components/aurorabg"

// export default function PortfolioLanding() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [mounted, setMounted] = useState(false)

//   const navItems = ["Home", "About", "Projects", "Experience", "Contact"]

//   useEffect(() => {
//     setMounted(true)

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   if (!mounted) {
//     return (
//       <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "black" }}>
//         <div className="fixed inset-0 z-0">
//           <div
//             className="absolute inset-0"
//             style={{ background: "black" }}
//           />
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "black" }}>
//       {/* Smokey Cursor Trail */}
//       <CursorTrail />

//       {/* Background with Falling Stars */}
//       <div className="fixed inset-0 z-0 overflow-hidden">
//         {/* Solid background */}
//         <div className="absolute inset-0" style={{ backgroundColor: "black" }} />

//         {/* Falling Stars */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={`star-${i}`}
//             className="absolute rounded-full"
//             style={{
//               backgroundColor: "#3CD6E5",
//               width: `${Math.random() * 3 + 1}px`,
//               height: `${Math.random() * 3 + 1}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0,
//             }}
//             animate={{
//               y: [0, window.innerHeight],
//               x: [0, Math.random() * 100 - 50],
//               opacity: [0, 0.8, 0.8, 0],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 3,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           />
//         ))}

//         {/* Subtle floating particles */}
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={`particle-${i}`}
//             className="absolute rounded-full"
//             style={{
//               backgroundColor: "#3CD6E5",
//               width: `${Math.random() * 2 + 1}px`,
//               height: `${Math.random() * 2 + 1}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.3,
//             }}
//             animate={{
//               y: [0, -100],
//               x: [0, Math.random() * 40 - 20],
//               opacity: [0.3, 0],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               delay: Math.random() * 10,
//               ease: "linear",
//             }}
//           />
//         ))}

//         {/* Floating Tech Icons with new color */}
//         {[
//           { Icon: Code2, delay: 0 },
//           { Icon: Database, delay: 1 },
//           { Icon: Globe, delay: 2 },
//           { Icon: Terminal, delay: 3 },
//           { Icon: Zap, delay: 4 },
//           { Icon: Cpu, delay: 5 },
//           { Icon: GitBranch, delay: 6 },
//           { Icon: Layers, delay: 7 },
//         ].map(({ Icon, delay }, i) => (
//           <motion.div
//             key={i}
//             className="absolute"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{
//               opacity: [0, 0.3, 0.5, 0.2, 0],
//               scale: [0, 1, 1.1, 1, 0],
//               y: [0, -150, -300],
//               x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60],
//               rotate: [0, 90, 180],
//             }}
//             transition={{
//               duration: Math.random() * 12 + 10,
//               repeat: Number.POSITIVE_INFINITY,
//               delay: delay + Math.random() * 4,
//               ease: "easeInOut",
//             }}
//           >
//             <Icon
//               className="w-6 h-6"
//               style={{
//                 color: "#3CD6E5",
//                 opacity: 0.6,
//               }}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Navbar */}
//       <motion.nav
//         className="fixed top-0 left-0 right-0 z-40 p-6"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="transition-all duration-500 ease-out rounded-2xl px-8 py-4 shadow-2xl"
//             style={{
//               backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.25)",
//               backdropFilter: "blur(20px)",
//               border: isScrolled ? "1px solid rgba(60, 214, 229, 0.2)" : "1px solid rgba(60, 214, 229, 0.15)",
//               boxShadow: isScrolled ? "0 25px 50px rgba(13, 23, 31, 0.4)" : "0 10px 30px rgba(22, 33, 62, 0.3)",
//             }}
//             animate={{
//               scale: isScrolled ? 0.95 : 1,
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex items-center justify-between">
//               <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
//                 Portfolio
//               </motion.div>

//               {/* Desktop Menu */}
//               <div className="hidden md:flex space-x-8">
//                 {navItems.map((item, index) => (
//                   <motion.a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className="transition-all duration-300 relative text-white/90 hover:text-white"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 + 0.3 }}
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {item}
//                     <motion.div
//                       className="absolute -bottom-1 left-0 w-0 h-0.5"
//                       style={{
//                         background: "linear-gradient(90deg, #3CD6E5, #48D1CC)",
//                       }}
//                       whileHover={{ width: "100%" }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Mobile Menu Button */}
//               <motion.button
//                 className="md:hidden text-white"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div className="w-6 h-6 flex flex-col justify-center space-y-1">
//                   <motion.div
//                     className="w-full h-0.5 bg-white"
//                     animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//                   />
//                   <motion.div
//                     className="w-full h-0.5 bg-white"
//                     animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//                   />
//                   <motion.div
//                     className="w-full h-0.5 bg-white"
//                     animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//                   />
//                 </div>
//               </motion.button>
//             </div>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//               {isMenuOpen && (
//                 <motion.div
//                   className="md:hidden mt-4 pt-4"
//                   style={{ borderTop: "1px solid rgba(60, 214, 229, 0.2)" }}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                 >
//                   {navItems.map((item, index) => (
//                     <motion.a
//                       key={item}
//                       href={`#${item.toLowerCase()}`}
//                       className="block py-2 text-white/80 hover:text-white transition-colors"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item}
//                     </motion.a>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </motion.nav>

//       {/* All Sections */}
//       {/* <HeroSection /> */}
//       <AuroraBackground/>
//       <AboutSection />
//       <TimelineSection />
//       <ProjectsSection />
//       <AchievementsSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cpu,
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Palette,
  Monitor,
  Server,
} from "lucide-react"

// Note: You'll need to update these imports based on your actual component structure
import CursorTrail from "../components/cursor-trail"
import AboutSection from "../components/about-section"
import TimelineSection from "../components/timeline-section"
import "./globals.css"
import ProjectsSection from "../components/projects-section"
import AchievementsSection from "../components/achievements-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"
import {AuroraBackground} from "../components/aurorabg"
import ChatbotFloating from "@/components/chatbot"

export default function PortfolioLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Updated navItems with proper href structure
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ]

  // Smooth scroll function with easing
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 100 // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  // Handle navigation click with smooth scrolling
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const elementId = href.replace('#', '')
    
    // Special case for home - scroll to top
    if (elementId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else {
      smoothScrollTo(elementId)
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "black" }}>
        <div className="fixed inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{ background: "black" }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "black" }}>
      {/* Add smooth scrolling CSS */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced smooth scrolling for better browser support */
        * {
          scroll-behavior: smooth;
        }
        
        /* Optional: Add smooth scrolling with custom easing */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
      `}</style>

      {/* Smokey Cursor Trail */}
      {/* <CursorTrail /> */}

      {/* Background with Falling Stars */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Solid background */}
        <div className="absolute inset-0" style={{ backgroundColor: "black" }} />

        {/* Falling Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              backgroundColor: "#3CD6E5",
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [0, typeof window !== 'undefined' ? window.innerHeight : 800],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}

        {/* Subtle floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              backgroundColor: "#3CD6E5",
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Tech Icons with new color */}
        {[
          { Icon: Code2, delay: 0 },
          { Icon: Database, delay: 1 },
          { Icon: Globe, delay: 2 },
          { Icon: Terminal, delay: 3 },
          { Icon: Zap, delay: 4 },
          { Icon: Cpu, delay: 5 },
          { Icon: GitBranch, delay: 6 },
          { Icon: Layers, delay: 7 },
        ].map(({ Icon, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0.5, 0.2, 0],
              scale: [0, 1, 1.1, 1, 0],
              y: [0, -150, -300],
              x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: delay + Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <Icon
              className="w-6 h-6"
              style={{
                color: "#3CD6E5",
                opacity: 0.6,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="transition-all duration-500 ease-out rounded-2xl px-8 py-4 shadow-2xl"
            style={{
              backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(20px)",
              border: isScrolled ? "1px solid rgba(60, 214, 229, 0.2)" : "1px solid rgba(60, 214, 229, 0.15)",
              boxShadow: isScrolled ? "0 25px 50px rgba(13, 23, 31, 0.4)" : "0 10px 30px rgba(22, 33, 62, 0.3)",
            }}
            animate={{
              scale: isScrolled ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <motion.div 
                className="text-2xl font-bold text-white cursor-pointer" 
                whileHover={{ scale: 1.05 }}
                onClick={(e) => handleNavClick(e, '#home')}
              >
                Portfolio
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="transition-all duration-300 relative text-white/90 hover:text-white cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5"
                      style={{
                        background: "linear-gradient(90deg, #3CD6E5, #48D1CC)",
                      }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <motion.div
                    className="w-full h-0.5 bg-white"
                    animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  />
                  <motion.div
                    className="w-full h-0.5 bg-white"
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.div
                    className="w-full h-0.5 bg-white"
                    animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="md:hidden mt-4 pt-4"
                  style={{ borderTop: "1px solid rgba(60, 214, 229, 0.2)" }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-2 text-white/80 hover:text-white transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.nav>
      <AuroraBackground/>
       
           <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
       <ChatbotFloating />
     <Footer />
     
    </div>
  )
}