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
    <section className="bg-[#FAF9F6] py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Section Title */}
        <h2 className="text-center text-gray-400 tracking-[0.3em] font-light text-xs md:text-sm mb-12 uppercase">
          THESE TEAS ARE
        </h2>

        {/* Badges Grid - 5 columns on desktop, 3 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="relative w-24 h-24 md:w-32 md:h-32 transition-transform duration-300 hover:scale-110">
              <Image
                src={badge.src}
                alt={badge.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}