"use client"

import { motion } from "framer-motion"
import { Award, Users, Code, Star } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "50+ Projects Completed",
      description: "Successfully delivered projects for clients worldwide",
    },
    {
      icon: Users,
      title: "20+ Happy Clients",
      description: "Built lasting relationships with satisfied customers",
    },
    {
      icon: Code,
      title: "5+ Years Experience",
      description: "Continuous learning and growth in web development",
    },
    {
      icon: Star,
      title: "100% Client Satisfaction",
      description: "Committed to delivering excellence in every project",
    },
  ]

  const experiences = [
    {
      company: "Tech Innovators Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading development of enterprise applications using React, Node.js, and cloud technologies.",
    },
    {
      company: "Digital Solutions Co.",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Developed responsive web applications and improved user experience across multiple platforms.",
    },
    {
      company: "StartupXYZ",
      position: "Junior Developer",
      period: "2019 - 2020",
      description: "Started my journey in web development, working on various projects and learning new technologies.",
    },
  ]

  return (
    <section className="relative z-10 min-h-screen bg-black px-6 py-20">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-pink-600/20 to-purple-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Achievements & Experience
          </h2>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-purple-400/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(147, 51, 234, 0.4)",
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.2)",
              }}
            >
              <achievement.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <motion.h3
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h3>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: "rgba(147, 51, 234, 0.3)",
                backgroundColor: "rgba(17, 24, 39, 0.8)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                  <p className="text-purple-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-pink-400 font-medium">{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
