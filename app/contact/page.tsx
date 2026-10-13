'use client'

import React from 'react'
import { motion } from 'motion/react'
import { SITE, CONTACT, CHAT } from '@/src/config/site'
import { MessageSquare, Phone, Mail, MapPin, ArrowRight, Clock, Send } from 'lucide-react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import JsonLd from '@/src/components/JsonLd'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // WebForge CORS method: FormData + Accept only
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSuccess(true)
    } catch (error) {
      console.error('Submission failed', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5 text-brand" />,
      title: "Call Us",
      value: CONTACT.phone,
      link: `tel:${CONTACT.phone.replace(/\s/g, '')}`
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-brand" />,
      title: "WhatsApp",
      value: CONTACT.whatsapp,
      link: `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}`
    },
    {
      icon: <Mail className="w-5 h-5 text-brand" />,
      title: "Email",
      value: CONTACT.email,
      link: `mailto:${CONTACT.email}`
    },
    {
      icon: <Clock className="w-5 h-5 text-brand" />,
      title: "Office Hours",
      value: "Mon-Fri: 9am - 5pm AEST",
      link: null
    }
  ]

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand selection:text-[#140800]">
      <JsonLd 
        type="ContactPage" 
        data={{
          name: `Contact Us | ${SITE.name}`,
          description: "Get in touch with the Torque E-Bikes team in Brisbane for sales, support and conversion advice."
        }} 
      />
      
      <Nav />

      <main id="main">
        {/* Header */}
        <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,57,70,0.05),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Support & Inquiries</p>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                Get In <span className="text-brand">Touch</span>
              </h1>
              <p className="text-gray-400">
                Whether you&apos;re looking for a complete E-Moto, a custom conversion kit, or technical support for your high-torque build, our Brisbane-based team is ready to assist.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {contactMethods.map((method, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="bg-brand/10 w-10 h-10 flex items-center justify-center rounded-sm">
                        {method.icon}
                      </div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{method.title}</h4>
                      {method.link ? (
                        <a href={method.link} className="text-lg font-bold hover:text-brand transition-colors block italic">{method.value}</a>
                      ) : (
                        <p className="text-lg font-bold italic">{method.value}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="p-8 bg-[#1d2024] border border-white/5 rounded-sm space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-brand" />
                    <h3 className="text-xl font-black italic uppercase tracking-tight">Brisbane Headquarters</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {CONTACT.address}<br />
                    Technical inspections and local pickups are by appointment only. Please contact us via phone or WhatsApp to schedule a visit.
                  </p>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="bg-[#1d2024] p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl relative">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <Send className="w-48 h-48" />
                  </div>
                  
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16 space-y-6"
                    >
                      <div className="bg-brand/20 w-20 h-20 flex items-center justify-center rounded-full mx-auto">
                        <ArrowRight className="w-10 h-10 text-brand" />
                      </div>
                      <h3 className="text-3xl font-black uppercase italic">Message Sent</h3>
                      <p className="text-gray-400">Thanks for reaching out. A Torque Specialist will get back to you shortly.</p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-brand uppercase text-[10px] font-bold tracking-widest hover:underline"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Inquiry Type</label>
                        <select 
                          name="type"
                          className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
                        >
                          <option>Sales Inquiry</option>
                          <option>Technical Support</option>
                          <option>Conversion Kit Advice</option>
                          <option>Shipping & Logistics</option>
                          <option>Warranty Claim</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                        <textarea 
                          required
                          rows={6}
                          name="message"
                          className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm resize-none"
                          placeholder="How can we help with your e-bike project?"
                        ></textarea>
                      </div>

                      <button 
                        disabled={isSubmitting}
                        className="w-full bg-brand text-white p-5 font-black uppercase italic tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand/90 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>Send Message <ArrowRight className="w-4 h-4" /></>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
