'use client'

import React from 'react'
import { motion } from 'motion/react'
import { SITE, CONTACT, BRAND } from '@/src/config/site'
import { Package, Truck, ShieldCheck, Headphones, ArrowRight, Building2, Globe2, Zap } from 'lucide-react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import JsonLd from '@/src/components/JsonLd'

export default function WholesalePage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // WebForge CORS method: FormData + Accept only
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Simulate submission or use a real webhook if configured
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSuccess(true)
    } catch (error) {
      console.error('Submission failed', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: <Building2 className="w-6 h-6 text-brand" />,
      title: "Authorized Dealership",
      description: "Join the Australian network for ETM™, Strike Cycles, and high-performance power systems."
    },
    {
      icon: <Truck className="w-6 h-6 text-brand" />,
      title: "Priority DG Freight",
      description: "Class 9 Dangerous Goods certified logistics across all Australian states and territories."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand" />,
      title: "Wholesale Tiers",
      description: "Competitive margins for workshops, retailers, and conversion specialists."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      title: "Warranty Support",
      description: "Direct Brisbane-based technical support and local Australian warranty fulfillment."
    }
  ]

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand selection:text-[#140800]">
      <JsonLd 
        type="AboutPage" 
        data={{
          name: `Wholesale Supply Portal | ${SITE.name}`,
          description: "Wholesale opportunities for Australian e-bike retailers and workshops."
        }} 
      />
      
      <Nav />

      <main id="main">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,57,70,0.05),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">B2B Supply Portal</p>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                Power Your <span className="text-brand">Business</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Join Australia&apos;s premier network for high-torque electric motors, conversion systems, and E-Moto technology. 
                Wholesale tiers available for verified Australian workshops and retailers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-[#1d2024] border border-white/5 rounded-sm space-y-4 hover:border-brand/30 transition-all group"
                >
                  <div className="bg-brand/10 w-12 h-12 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase italic tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="py-24 bg-[#16181b]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Wholesale Inquiry</h2>
                  <p className="text-gray-400">
                    Complete the form below to request a wholesale account. Our Brisbane team will verify your business details (ABN/ACN) and get back to you within 24-48 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand/10 p-3 rounded-sm">
                      <Globe2 className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500">Service Area</h4>
                      <p className="text-sm">Australia-wide (TNT/FedEx DG Certified)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-brand/10 p-3 rounded-sm">
                      <Building2 className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500">Headquarters</h4>
                      <p className="text-sm">{CONTACT.hq}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1d2024] p-8 md:p-12 border border-white/5 rounded-sm">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-12"
                  >
                    <div className="bg-brand/20 w-20 h-20 flex items-center justify-center rounded-full mx-auto">
                      <ShieldCheck className="w-10 h-10 text-brand" />
                    </div>
                    <h3 className="text-2xl font-black uppercase italic">Inquiry Received</h3>
                    <p className="text-gray-400">Our B2B team will review your application and contact you via email shortly.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-brand uppercase text-xs font-bold tracking-widest hover:underline"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Business Name</label>
                        <input 
                          required
                          type="text" 
                          name="business_name"
                          className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
                          placeholder="e.g. Torque Motors QLD"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">ABN / ACN</label>
                        <input 
                          required
                          type="text" 
                          name="abn_acn"
                          className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
                          placeholder="11-digit ABN"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
                        placeholder="Primary Contact"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Work Email</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm"
                        placeholder="name@business.com.au"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Message / Requirements</label>
                      <textarea 
                        required
                        rows={4}
                        name="message"
                        className="w-full bg-brand-dark border border-white/10 p-4 text-sm focus:outline-none focus:border-brand transition-colors rounded-sm resize-none"
                        placeholder="Tell us about your business and stock requirements..."
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-brand text-white p-4 font-black uppercase italic tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand/90 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : (
                        <>Submit Wholesale Application <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
