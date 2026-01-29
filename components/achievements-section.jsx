
"use client"

import CircularGallery from "./ReactBits/CircularGallery"
import BlurText from "./blurtext/BlurText"
export default function AchievementsSection() {
  return (
    <section className="relative z-10 min-h-screen bg-black px-6 py-20" id="experience">
      {/* Centered Heading */}
      <div className="flex justify-center items-center mb-12">
        <BlurText
    text="Achievements"
    delay={120}
    animateBy="letters"
    direction="top"
    className="cinzel-bold text-5xl md:text-6xl tracking-wide text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg"
  />
      </div>

      {/* Enhanced Glow effects with #3AE0EC */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-[#114C4E]/20 to-blue-600/20 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-pink-600/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-[#3AE0EC]/15 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#3AE0EC]/20 rounded-full blur-3xl" />

      <div style={{ height: '500px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </section>
  )
}
