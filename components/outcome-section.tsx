"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const AnimatedSection = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

const outcomes = [
  "Feel lighter after heavy meals",
  "Reduced bloating & acidity",
  "A calm, relaxed mind",
  "Warmth that comforts your body",
  "A premium tea experience — every single time",
];

export const OutcomesSection = () => {
  return (
    <AnimatedSection className="bg-white py-12 md:py-16 border-y border-tea-beige">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-tea-brown-dark">
            What You'll Experience After Every Cup
          </h2>
          {/* Decorative underline matching the theme */}
          <div className="w-24 h-px bg-tea-saffron mx-auto mt-4 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {outcomes.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-start gap-4 pb-4 border-b border-tea-beige/50 last:border-0 md:even:border-b md:[&:nth-last-child(2)]:border-0 
                ${index === 4 ? "md:col-span-2 md:border-0" : ""}`}
            >
              {/* Saffron Diamond Symbol from reference */}
              <span className="text-tea-saffron text-xl leading-none mt-1">
                &#10070;
              </span>
              
              <span className="text-lg text-tea-brown-dark font-normal leading-tight">
                {text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 text-center">
            <p className="font-serif italic text-tea-brown opacity-80">
                A ritual of wellness in every sip.
            </p>
        </div>
      </div>
    </AnimatedSection>
  );
};