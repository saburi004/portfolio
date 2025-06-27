// "use client"

// import { motion } from "framer-motion"
// import InfiniteMenu from "./ReactBits/InfiniteMenu"

// export default function ProjectsSection() {
//   const items = [
//     {
//       image: 'https://picsum.photos/300/300?grayscale',
//       link: 'https://google.com/',
//       title: 'Item 1',
//       description: 'This is pretty cool, right?'
//     },
//     {
//       image: 'https://picsum.photos/400/400?grayscale',
//       link: 'https://google.com/',
//       title: 'Item 2',
//       description: 'This is pretty cool, right?'
//     },
//     {
//       image: 'https://picsum.photos/500/500?grayscale',
//       link: 'https://google.com/',
//       title: 'Item 3',
//       description: 'This is pretty cool, right?'
//     },
//     {
//       image: 'https://picsum.photos/600/600?grayscale',
//       link: 'https://google.com/',
//       title: 'Item 4',
//       description: 'This is pretty cool, right?'
//     }
//   ]

//   return (
//     <section className="relative z-10 min-h-[300px] bg-[#102034] px-6 py-20 flex flex-col items-center">
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
//           My Projects
//         </h2>
//       </motion.div>

//       {/* Smaller Infinite Menu */}
//       <div className="w-full max-w-6xl h-[250px]">
//         <InfiniteMenu items={items} />
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import ChromaGrid from './ReactBits/Chromagrid'

export default function ProjectsSection() {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      title: "Project 1",
      subtitle: "Web Application",
      handle: "View Project",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://google.com/"
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      title: "Project 2",
      subtitle: "Mobile App",
      handle: "View Project",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://google.com/"
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      title: "Project 3",
      subtitle: "UI/UX Design",
      handle: "View Project",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      url: "https://google.com/"
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      title: "Project 4",
      subtitle: "E-commerce Platform",
      handle: "View Project",
      borderColor: "#EC4899",
      gradient: "linear-gradient(180deg, #EC4899, #000)",
      url: "https://google.com/"
    },
    {
      image: "https://picsum.photos/700/700?grayscale",
      title: "Project 5",
      subtitle: "Dashboard System",
      handle: "View Project",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, #F59E0B, #000)",
      url: "https://google.com/"
    },
    {
      image: "https://picsum.photos/800/800?grayscale",
      title: "Project 6",
      subtitle: "API Service",
      handle: "View Project",
      borderColor: "#EF4444",
      gradient: "linear-gradient(180deg, #EF4444, #000)",
      url: "https://google.com/"
    }
  ]

  return (
    <>

<section
  className="relative z-10 min-h-screen px-6 py-20 flex flex-col items-center"
  style={{
    backgroundColor: "rgba(1, 70, 67, 0.4)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  
  }}
>
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg glegoo-bold ">
          My Projects
        </h2>
      </motion.div>

      {/* ChromaGrid */}
      <div style={{ height: '600px', width: '100%', position: 'relative' }}>
        <ChromaGrid 
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          cols={3}
          rows={2}
        />
      </div>
    </section>
    </>
  )
}