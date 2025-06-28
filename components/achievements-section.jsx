
"use client"

import CircularGallery from "./ReactBits/CircularGallery"

export default function AchievementsSection() {
  return (
    <section className="relative z-10 min-h-screen bg-black px-6 py-20" id="experience">
      {/* Centered Heading */}
      <div className="flex justify-center items-center mb-12">
        <h1 className="text-5xl font-bold text-[#1CC1B9] cinzel-bold">Achievements</h1>
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
