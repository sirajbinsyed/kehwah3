import Image from "next/image"

const badges = [
  { src: "/images/these/badge-pure.png", alt: "Pure Badge" },
  { src: "/images/these/badge-organic.png", alt: "Organic Badge" },
  { src: "/images/these/badge-natural.png", alt: "Natural Badge" },
  { src: "/images/these/badge-healthy.png", alt: "Healthy Badge" },
  { src: "/images/these/badge-recipe.png", alt: "Recipe Badge" },
]

export function TeaFeatures() {
  return (
    <section className="bg-[#FAF9F6] py-12 md:py-20 border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Title - Editorial Style Typography */}
        <h2 className="text-center text-gray-400 tracking-[0.4em] font-bold text-[10px] md:text-xs mb-10 md:mb-16 uppercase opacity-80">
          TRUSTED FOR QUALITY & PURITY
        </h2>

        {/* 
          Flexbox Layout:
          - justify-center: Ensures the 5th logo sits in the middle on mobile
          - flex-wrap: Allows logos to wrap to new lines naturally
        */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 md:gap-x-16 lg:gap-x-24">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className="group flex items-center justify-center transition-all duration-500"
            >
              {/* 
                Reduced Logo Sizes:
                - Mobile: w-16 (64px)
                - Desktop: w-24 (96px)
              */}
              <div className="relative w-16 h-16 md:w-24 md:h-24 transition-all duration-500 hover:scale-110">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}