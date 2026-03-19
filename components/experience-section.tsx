"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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

// 2. Define and Export the ExperienceSection
export const ExperienceSection = () => {
  return (
    <AnimatedSection className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/images/kashmir-landscape.jpg')` 
        }}
      />
      <div className="absolute inset-0 bg-emerald-950/80" /> 
      
      <div className="relative container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
          More Than Tea — It's a Daily Ritual
        </h2>
        <div className="space-y-4 text-white/90 text-lg leading-relaxed">
          <p>
            This isn't just another cup of tea.<br />
            It's your moment of pause in a chaotic day.
          </p>
          <p className="font-bold">A warm, soothing sip that:</p>
          <ul className="space-y-2 text-left max-w-md mx-auto list-none">
            <li>– relaxes your mind after long hours</li>
            <li>– helps your body feel lighter after meals</li>
            <li>– reconnects you with a sense of calm</li>
          </ul>
          <p className="pt-4 italic text-white/80">
            Inspired by a mother's love and crafted with the finest saffron from Kashmir — every cup feels like home.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};