import Image from "next/image"

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

export function IngredientsSection() {
  return (
    <section className="bg-[#1B3B36] py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Reduced margin-bottom for the title */}
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-10">
          Ingredients
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {ingredients.map((ingredient, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              {/* Reduced image size to decrease overall section height */}
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden bg-white border-4 border-[#244d46] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ingredient Name - Adjusted size */}
              <h3 className="font-serif text-lg md:text-xl text-white mb-2">
                {ingredient.name}
              </h3>

              {/* Ingredient Description - Adjusted size */}
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-[220px]">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}