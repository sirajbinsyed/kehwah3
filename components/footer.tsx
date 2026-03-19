"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Floating Animation Helper
const float = {
  animate: { y: [0, -8, 0], rotate: [0, 2, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
}

export function Footer() {
  return (
    <footer className="relative bg-[#1B3B36] text-white py-12 md:py-16 overflow-hidden border-t border-white/5">
      
      {/* --- DECORATIVE BRANDING IMAGES (Watermarks) --- */}
      
      {/* Left Motif (1-21) */}
      <motion.div 
        {...float}
        className="absolute top-0 -left-6 opacity-10 pointer-events-none"
      >
        <Image src="/images/brand-deck/1-21.png" alt="" width={150} height={150} className="w-24 md:w-32" />
      </motion.div>

      {/* Right Motif (1-20) */}
      <motion.div 
        {...float}
        transition={{ ...float.transition, delay: 1 }}
        className="absolute top-4 -right-6 opacity-10 pointer-events-none"
      >
        <Image src="/images/brand-deck/1-20.png" alt="" width={140} height={140} className="w-20 md:w-28" />
      </motion.div>

      {/* --- CENTRAL CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* LOGO IMAGE (INCREASED SIZE) */}
        <Link href="/" className="inline-block mb-6 transition-transform hover:scale-105">
          <Image 
            src="/images/1-30.png" 
            alt="Kehwah Logo"
            width={500} // Increased for high resolution
            height={150}
            className="h-24 md:h-36 w-auto object-contain" // Significantly larger height
            priority 
          />
        </Link>

        {/* Subtitle */}
        <p className="text-[#E87722] text-[11px] md:text-sm font-bold tracking-[0.4em] uppercase mb-8 opacity-90">
          The Authentic Kashmiri Tea Company
        </p>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-white/10 w-full max-w-[250px] mx-auto">
          <p className="text-gray-500 text-[9px] md:text-[11px] tracking-widest uppercase font-medium">
            © 2026 Kehwah. Crafted in Kashmir.
          </p>
        </div>
        
      </div>
    </footer>
  )
}