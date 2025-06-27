
// "use client";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import React from "react";

// export const AuroraBackground = ({
//   className,
//   children,
//   showRadialGradient = true,
//   ...props
// }) => {
//   return (
//     <main>
//       <div
//         className={cn(
//           "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-900 text-white",
//           className
//         )}
//         {...props}>
//         <div
//           className="absolute inset-0 overflow-hidden"
//           style={{
//             "--aurora":
//               "repeating-linear-gradient(100deg,#10b981_10%,#34d399_15%,#6ee7b7_20%,#a7f3d0_25%,#059669_30%)",
//             "--dark-gradient":
//               "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
//             "--white-gradient":
//               "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
//             "--emerald-500": "#10b981",
//             "--emerald-400": "#34d399",
//             "--emerald-300": "#6ee7b7",
//             "--emerald-200": "#a7f3d0",
//             "--emerald-600": "#059669",
//             "--black": "#000",
//             "--white": "#fff",
//             "--transparent": "transparent"
//           }}>
//           <div
//             className={cn(
//               `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--emerald-500)_10%,var(--emerald-400)_15%,var(--emerald-300)_20%,var(--emerald-200)_25%,var(--emerald-600)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,
//               showRadialGradient &&
//                 `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
//             )}></div>
//         </div>
        
//         {/* Hero Section Content */}
//         <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.h1
//               className="text-6xl md:text-8xl font-bold mb-6"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//             >
//               <span className="text-white">Myself</span>
//               <br />
//               <span className="text-white">Saburi Nikam</span>
//             </motion.h1>
//             <motion.p
//               className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.8 }}
//             >
//               Crafting digital experiences with cutting-edge technology and creative vision
//             </motion.p>
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.1 }}
//             >
//               <motion.button
//                 className="px-8 py-4 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
//                 style={{
//                   background: "linear-gradient(135deg, #10b981 0%, #34d399 50%, #059669 100%)",
//                   boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 View My Work
//               </motion.button>
//               <motion.button
//                 className="px-8 py-4 text-white rounded-full font-semibold transition-all duration-300"
//                 style={{
//                   border: "2px solid #10b981",
//                   backgroundColor: "rgba(16, 185, 129, 0.1)",
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "rgba(16, 185, 129, 0.2)",
//                   boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get In Touch
//               </motion.button>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center text-white",
          className
        )}
        style={{ backgroundColor: "black" }}
        {...props}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg,#08F6D8_10%,#45DBF1_15%,#0DB8A5_20%,#08F6D8_25%,#45DBF1_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
            "--cyan-bright": "#08F6D8",
            "--cyan-blue": "#45DBF1",
            "--teal-dark": "#0DB8A5",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent"
          }}>
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--cyan-bright)_10%,var(--cyan-blue)_15%,var(--teal-dark)_20%,var(--cyan-bright)_25%,var(--cyan-blue)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}></div>
        </div>
        
        {/* Hero Section Content */}
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
              <span className="text-white glegoo-regular ">Saburi Nikam</span>
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
                  background: "linear-gradient(135deg, #08F6D8 0%, #45DBF1 50%, #0DB8A5 100%)",
                  boxShadow: "0 10px 30px rgba(8, 246, 216, 0.3)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(8, 246, 216, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-8 py-4 text-white rounded-full font-semibold transition-all duration-300"
                style={{
                  border: "2px solid #08F6D8",
                  backgroundColor: "rgba(8, 246, 216, 0.1)",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(8, 246, 216, 0.2)",
                  boxShadow: "0 10px 30px rgba(8, 246, 216, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};