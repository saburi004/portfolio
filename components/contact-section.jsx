// "use client"

// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Send } from "lucide-react"

// export default function ContactSection() {
//   return (
//     <section className="relative z-10 min-h-screen px-6 py-20">

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg glegoo-bold ">
//           Contact Me
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Ready to bring your ideas to life? Let's create something amazing together!
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
//             <div className="space-y-6">
//               {[
//                 { icon: Mail, label: "Email", value: "saburinikam@gmail.com" },
//                 { icon: Phone, label: "GitHub", value: "https://github.com/saburi004" },
//                 { icon: MapPin, label: "Linkdln", value: "https://www.linkedin.com/in/saburi-nikam/" },
//               ].map((contact, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 border border-[#39D3E0]-400/20 rounded-xl shadow-2xl shadow-purple-500/10"
//                   whileHover={{
//                     borderColor: "rgba(90, 183, 237, 0.4)",
//                     backgroundColor: "rgba(74, 225, 255, 0.09)",
//                     boxShadow: "0 10px 30px rgba(51, 194, 234, 0.56)",
//                   }}
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
//                     <contact.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-gray-400 text-sm font-medium">{contact.label}</p>
//                     <a><p className="text-white font-semibold">{contact.value}</p></a>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="backdrop-blur-md bg-white/5 border border-[#42E9E9]-400/20 rounded-2xl p-8 shadow-2xl shadow-[#42E9E9]-500/10">
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
//                     <input
//                       type="email"
//                       className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-gray-300 text-sm font-semibold mb-2">Subject</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
//                     placeholder="Project Discussion"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
//                   <textarea
//                     rows={5}
//                     className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>
//                 <motion.button
//                   type="submit"
//                   className="w-full px-8 py-4 bg-gradient-to-r from-[#42E9E9]-600 via-pink-500 to-cyan-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
//                   whileHover={{
//                     scale: 1.02,
//                     boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Send className="w-5 h-5" />
//                   Send Message
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      await emailjs.send(
        'service_wwdtika',
        'template_2ph6y7e',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'oXzakgZQyo88JHMYj'
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section className="relative z-10 min-h-screen px-6 py-20" id="contact">

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#08F6D8] via-[#45DBF1] to-[#0DB8A5] bg-clip-text drop-shadow-lg cinzel-bold ">
          Contact Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto lobster-two-regular">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-white mb-8 cinzel-bold">Get In Touch</h3>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "saburinikam@gmail.com", isClickable: false },
                { icon: Phone, label: "GitHub", value: "https://github.com/saburi004", isClickable: true },
                { icon: MapPin, label: "LinkedIn", value: "https://www.linkedin.com/in/saburi-nikam/", isClickable: true },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 border border-[#39D3E0]-400/20 rounded-xl shadow-2xl shadow-purple-500/10 ${contact.isClickable ? 'cursor-pointer' : ''}`}
                  whileHover={{
                    borderColor: "rgba(90, 183, 237, 0.4)",
                    backgroundColor: "rgba(74, 225, 255, 0.09)",
                    boxShadow: "0 5px 15px rgba(51, 194, 234, 0.2)",
                  }}
                  onClick={contact.isClickable ? () => window.open(contact.value, '_blank') : undefined}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{contact.label}</p>
                    <p className="text-white font-semibold">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/5 border border-[#42E9E9]-400/20 rounded-2xl p-8 shadow-2xl shadow-[#42E9E9]-500/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">
                    Failed to send message. Please try again.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#42E9E9]-600 via-pink-500 to-cyan-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.02,
                    boxShadow: isSubmitting ? undefined : "0 20px 40px rgba(6, 182, 212, 0.4)",
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}