import React from 'react'
import Link from 'next/link'
import { Zap, ArrowLeft } from 'lucide-react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'

export const metadata = {
  title: '404 - Page Not Found | Torque E-Bikes Australia',
  robots: { index: false, follow: true }
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <Nav />
      <main className="flex-grow flex items-center justify-center p-4 pt-32">
        <div className="text-center space-y-8 max-w-lg">
          <div className="relative inline-block">
            <Zap className="w-24 h-24 text-brand-red animate-pulse mx-auto" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black italic">404</span>
          </div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter">Circuit Interrupted.</h1>
          <p className="text-brand-gray text-lg italic">
            The page you are looking for has been disconnected or relocated. Let&apos;s get you back on the right trail.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
