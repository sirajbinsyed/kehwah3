"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ingredients = [
  {
    name: "Saffron (Kesar)",
    description: "Real Kashmiri kesar for richness and wellness in every sip.",
    image: "/images/saffron.jpg", 
  },
  {
    name: "Cardamom (Elaichi)",
    description: "A small spicy background flavour for both enhanced taste and great digestion.",
    image: "/images/cardamom.jpg",
  },
  {
    name: "Almonds (Badaam)",
    description: "For a nutty and crispy excellence.",
    image: "/images/almonds.jpg",
  },
  {
    name: "Cinnamon (Dalchini)",
    description: "Maintaining your body's warmth helps your immune system function.",
    image: "/images/cinnamon.jpg",
  },
]

// Floating Animation Helper
const float = {
  animate: { y: [0, -12, 0], rotate: [0, 3, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
}

export function IngredientsSection() {
  return (
    <section className="relative bg-[#1B3B36] py-16 md:py-24 overflow-hidden">
      
      {/* --- BRANDING MOTIFS (Background Decor) --- */}
      
      {/* Top Left Motif (1-10) */}
      <motion.div 
        {...float}
        className="absolute -top-10 -left-10 opacity-10 md:opacity-20 pointer-events-none"
      >
        <Image src="/images/brand-deck/1-10.png" alt="" width={250} height={250} />
      </motion.div>

      {/* Top Right Motif (1-01) */}
      <motion.div 
        {...float}
        transition={{ ...float.transition, delay: 1 }}
        className="absolute top-20 -right-10 opacity-10 md:opacity-20 pointer-events-none"
      >
        <Image src="/images/brand-deck/1-01.png" alt="" width={200} height={200} />
      </motion.div>

      {/* Bottom Center Motif (1-09) */}
      <motion.div 
        {...float}
        transition={{ ...float.transition, delay: 2 }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-10 md:opacity-20 pointer-events-none"
      >
        <Image src="/images/brand-deck/1-09.png" alt="" width={280} height={280} />
      </motion.div>

      {/* Side Leaf (1-21) */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 right-10 hidden xl:block opacity-10 pointer-events-none"
      >
        <Image src="/images/brand-deck/1-21.png" alt="" width={120} height={120} />
      </motion.div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-white text-center mb-16 tracking-wide">
          Pure Ingredients
          <div className="w-20 h-1 bg-white/20 mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {ingredients.map((ingredient, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 mb-6 rounded-full overflow-hidden bg-white border-4 border-white/10 transition-all duration-500 group-hover:border-[#E87722] group-hover:scale-105 shadow-2xl">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <h3 className="font-serif text-xl md:text-2xl text-white mb-3">
                {ingredient.name}
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[240px] opacity-90">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}