"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

// 1. Define the internal AnimatedSection component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

// Helper for subtle floating animation
const float = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  }
};

export const ExperienceSection = () => {
  return (
    <AnimatedSection className="relative py-24 md:py-32 overflow-hidden bg-emerald-950">
      {/* 1. Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: `url('/images/kashmir-landscape.jpg')` 
        }}
      />
      <div className="absolute inset-0 bg-emerald-950/70" /> 
      
      {/* 2. DECORATIVE BRANDING IMAGES (Filling blank spaces) */}
      
      {/* Top Left Space */}
      <motion.div 
        {...float}
        className="absolute top-10 left-4 md:left-20 opacity-40 z-10"
      >
        <Image src="/images/brand-deck/1-21.png" alt="" width={100} height={100} className="w-20 md:w-32" />
      </motion.div>

      {/* Top Right Space */}
      <motion.div 
        {...float}
        transition={{ ...float.transition, delay: 1 }}
        className="absolute top-16 right-4 md:right-24 opacity-40 z-10"
      >
        <Image src="/images/brand-deck/1-20.png" alt="" width={80} height={80} className="w-16 md:w-28" />
      </motion.div>

      {/* Bottom Left Space */}
      <motion.div 
        {...float}
        transition={{ ...float.transition, delay: 2 }}
        className="absolute bottom-10 left-6 md:left-32 opacity-30 z-10"
      >
        <Image src="/images/brand-deck/1-09.png" alt="" width={120} height={120} className="w-24 md:w-40" />
      </motion.div>

      {/* Bottom Right Space */}
      <motion.div 
        {...float}
        transition={{ ...float.transition, delay: 0.5 }}
        className="absolute -bottom-10 right-4 md:right-20 opacity-40 z-10"
      >
        <Image src="/images/brand-deck/1-03.png" alt="" width={150} height={150} className="w-32 md:w-48" />
      </motion.div>

      {/* Center Left Edge */}
      <motion.div 
        className="absolute top-1/2 -left-10 hidden lg:block opacity-20 z-10"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Image src="/images/brand-deck/1-11.png" alt="" width={150} height={150} />
      </motion.div>

      {/* 3. CONTENT LAYER */}
      <div className="relative container mx-auto px-4 text-center max-w-3xl z-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
          More Than Tea — It's a Daily Ritual
        </h2>
        <div className="space-y-4 text-white/90 text-lg md:text-xl leading-relaxed">
          <p>
            This isn't just another cup of tea.<br />
            It's your moment of pause in a chaotic day.
          </p>
          
          <div className="py-6">
            <p className="font-bold text-[#FAD7BB] text-2xl mb-4 underline decoration-white/20 underline-offset-8">
              A warm, soothing sip that:
            </p>
            <ul className="space-y-4 text-left max-w-sm mx-auto list-none">
              <li className="flex items-center gap-3">
                <span className="text-[#FAD7BB] text-xl">✦</span>
                <span>relaxes your mind after long hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FAD7BB] text-xl">✦</span>
                <span>helps your body feel lighter after meals</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FAD7BB] text-xl">✦</span>
                <span>reconnects you with a sense of calm</span>
              </li>
            </ul>
          </div>

          <p className="pt-4 italic text-white/70 text-base md:text-lg">
            Inspired by a mother's love and crafted with the finest saffron from Kashmir — every cup feels like home.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};