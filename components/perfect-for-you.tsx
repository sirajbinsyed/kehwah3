import { Check } from "lucide-react"

export function PerfectForYou() {
  const points = [
    "You feel bloated after meals",
    "You want a healthier tea alternative",
    "You deal with daily stress & fatigue",
    "You enjoy premium, authentic flavors",
    "You want a calming evening ritual",
  ]

  return (
    <section className="py-16 px-4 bg-[#F9F3E9]"> {/* Matches the cream background */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D4739] text-center mb-12">
          Perfect For You If...
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((text, index) => (
            <div 
              key={index} 
              className="bg-[#FFFCF9] p-6 rounded-xl shadow-sm flex items-start gap-4 border border-black/5"
            >
              <Check className="text-orange-500 mt-1 flex-shrink-0" size={24} strokeWidth={3} />
              <span className="text-[#4A4A4A] text-lg font-medium leading-tight">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}