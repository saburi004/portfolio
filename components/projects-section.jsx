

// "use client"

// import { motion } from "framer-motion"
// import ChromaGrid from './ReactBits/Chromagrid'

// export default function ProjectsSection() {
//   const items = [
//     {
//       image: "https://picsum.photos/300/300?grayscale",
//       title: "Project 1",
//       subtitle: "Web Application",
//       handle: "View Project",
//       borderColor: "#3B82F6",
//       gradient: "linear-gradient(145deg, #3B82F6, #000)",
//       url: "https://google.com/"
//     },
//     {
//       image: "https://picsum.photos/400/400?grayscale",
//       title: "Project 2",
//       subtitle: "Mobile App",
//       handle: "View Project",
//       borderColor: "#10B981",
//       gradient: "linear-gradient(180deg, #10B981, #000)",
//       url: "https://google.com/"
//     },
//     {
//       image: "https://picsum.photos/500/500?grayscale",
//       title: "Project 3",
//       subtitle: "UI/UX Design",
//       handle: "View Project",
//       borderColor: "#8B5CF6",
//       gradient: "linear-gradient(145deg, #8B5CF6, #000)",
//       url: "https://google.com/"
//     },
//     {
//       image: "https://picsum.photos/600/600?grayscale",
//       title: "Project 4",
//       subtitle: "E-commerce Platform",
//       handle: "View Project",
//       borderColor: "#EC4899",
//       gradient: "linear-gradient(180deg, #EC4899, #000)",
//       url: "https://google.com/"
//     },
//     {
//       image: "https://picsum.photos/700/700?grayscale",
//       title: "Project 5",
//       subtitle: "Dashboard System",
//       handle: "View Project",
//       borderColor: "#F59E0B",
//       gradient: "linear-gradient(145deg, #F59E0B, #000)",
//       url: "https://google.com/"
//     },
//     {
//       image: "https://picsum.photos/800/800?grayscale",
//       title: "Project 6",
//       subtitle: "API Service",
//       handle: "View Project",
//       borderColor: "#EF4444",
//       gradient: "linear-gradient(180deg, #EF4444, #000)",
//       url: "https://google.com/"
//     }
//   ]

//   return (
//     <>
//       <section
//         className="relative z-10 min-h-screen px-6 py-20 flex flex-col items-center"
//         style={{
//           backgroundColor: "#0E1A24",
//           backdropFilter: "blur(20px)",
//           WebkitBackdropFilter: "blur(20px)",
//           boxShadow: `
//             inset 0 0 100px rgba(58, 224, 236, 0.1),
//             0 0 50px rgba(58, 224, 236, 0.05)
//           `,
//           border: "1px solid rgba(58, 224, 236, 0.1)",
//         }}
//       >
//         {/* Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg glegoo-bold ">
//             My Projects
//           </h2>
//         </motion.div>

//         {/* ChromaGrid */}
//         <div style={{ height: '600px', width: '100%', position: 'relative' }}>
//           <ChromaGrid 
//             items={items}
//             radius={300}
//             damping={0.45}
//             fadeOut={0.6}
//             ease="power3.out"
//             cols={3}
//             rows={2}
//           />
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const items = [
    {
      image: "/pikaprojects.png",
      title: "PikaProjects",
      subtitle: "An ECommerce Site for Buying and Selling projects (NextJS , Firebase )",
      handle: "Live Preview",
      git: "Git Hub",
       borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, #F59E0B, #000)",
      
      url: "https://google.com/"
    },
    {
      image: "/foodchain.jpg",
      title: "FoodChain",
      subtitle: "Project where ML meets Web Dev to ensure quality Food Supply to street food sellers",
      handle: "View Project",
       git: "Git Hub",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://portfoliosaburi.vercel.app/"
    },
    {
      image: "/psychologist.png",
      title: "Visiting Website",
      subtitle: "A landing website with Quiz(HTML,Tailwind,JS)",
      handle: "View Project",
       git: "Git Hub",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      url: "https://psychologistsingh.in/"
    },
    {
      image: "/vpnweb.png",
      title: "Website for VPN Digital Services",
      subtitle: "Visiting Platform for Vpn digital Services(NextJS)",
      handle: "View Project",
       git: "Git Hub",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
     
      url: "https://vpndigitalservice.com/"
    },
    {
      image: "/Whatsapp.png",
      title: "WhatsApp Chat Analysis",
      subtitle: "A overall and personalised chat analysis and visualization",
      handle: "View Project",
       git: "Git Hub",
     borderColor: "#EC4899",
      gradient: "linear-gradient(180deg, #EC4899, #000)",
      url: "https://government-landrecord-chatbot.vercel.app/"
    },
    {
      image: "https://ddi-dev.com/uploads/srs-users.png",
      title: "Phase1",
      subtitle: "A single platform for client,manager and developer ",
      handle: "Ongoin",
       git: "Git Hub",
      borderColor: "#EF4444",
      gradient: "linear-gradient(180deg, #EF4444, #000)",
      url: "https://github.com/saburi004/srsgenerator"
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length)
  }

  const ProjectCard = ({ item, index }) => (
    <motion.div
      key={index}
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      style={{
        border: `2px solid ${item.borderColor}`,
        background: item.gradient,
        boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${item.borderColor}20`
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.open(item.url, '_blank')}
    >
      <div className="aspect-square relative">
        {/* Image with black and white overlay */}
       <div className="relative w-full bg-black rounded-t-xl overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-60 md:h-64 lg:h-72 object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0"
  />
</div>
        {/* Black and white overlay that disappears on hover */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <motion.h3 
            className="text-xl font-bold mb-2 opacity-100 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.title}
          </motion.h3>
          <motion.p 
            className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.1 }}
          >
            {item.subtitle}
          </motion.p>
          <motion.div
            className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium">
              {item.handle}
            </span>
             <span className="inline-block px-4 py-2 ml-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium">
              {item.git}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section
      className="relative z-10 min-h-screen px-6 py-20 flex flex-col items-center"
    style={{
  background: `radial-gradient(circle at center,rgb(13, 174, 163) 0%,rgb(12, 34, 31) 40%, #000000 80%)`,
  minHeight: "100vh",
}}
    id="projects">
  
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg cinzel-bold">
          My Projects
        </h2>
      </motion.div>

      {/* Desktop Grid */}
      {!isMobile && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {items.map((item, index) => (
            <ProjectCard key={index} item={item} index={index} />
          ))}
        </div>
      )}

      {/* Mobile Carousel */}
      {isMobile && (
        <div className="relative w-full max-w-sm">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {items.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <ProjectCard item={item} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#08F6D8] scale-125'
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}