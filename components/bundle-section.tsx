"use client"

import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function BundleSection() {
  const bundles = [
    {
      label: "1 Pack (30 Pouches)",
      sub: "Starter Kit",
      price: "1,220",
      discount: null,
      popular: false,
    },
    {
      label: "2 Pack (60 Pouches)",
      sub: "Most Loved",
      price: "2,196",
      discount: "Save 10%",
      popular: true,
      badge: "MOST POPULAR"
    },
    {
      label: "3 Pack (90 Pouches)",
      sub: "Best Value",
      price: "2,928",
      discount: "Save 20%",
      popular: false,
      badge: "BEST VALUE"
    },
  ]

  const scrollToHero = () => {
    document.getElementById('product-purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Reduced vertical padding from py-24 to py-12
    <section className="py-12 px-4 bg-[#F9F3E9]">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Tightened Header */}
        <div className="flex flex-col items-center mb-8 space-y-1">
           <h2 className="text-3xl md:text-4xl font-serif text-[#1B3B36] font-bold">
             Save More With Bundles
           </h2>
           <div className="w-16 h-0.5 bg-[#1B3B36]/10 rounded-full mt-2" />
        </div>

        {/* Compact Grid with tighter gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              onClick={scrollToHero}
              className={cn(
                "relative group flex flex-col p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden", // Reduced padding p-10 to p-6
                bundle.popular 
                  ? "bg-white border-2 border-[#E87722] shadow-lg scale-105 z-10" 
                  : "bg-white/60 border border-[#E5DFD9] hover:bg-white"
              )}
            >
              {/* Smaller Badge */}
              {(bundle.popular || bundle.badge) && (
                <div className={cn(
                  "absolute top-3 right-3 text-[9px] font-black tracking-widest px-2 py-0.5 rounded",
                  bundle.popular ? "bg-[#E87722] text-white" : "bg-[#1B3B36]/10 text-[#1B3B36]"
                )}>
                  {bundle.badge}
                </div>
              )}

              <div className="text-left">
                <p className="text-[#1B3B36]/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                  {bundle.sub}
                </p>
                <h3 className="text-[#1B3B36] text-lg font-serif font-bold mb-3 leading-tight">
                  {bundle.label}
                </h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-xl font-serif text-[#1B3B36]">₹</span>
                  <span className="text-3xl font-serif font-bold text-[#1B3B36]">
                    {bundle.price}
                  </span>
                </div>

                {bundle.discount && (
                  <div className="inline-flex items-center gap-1.5 bg-[#FDF2E9] border border-[#FAD7BB] px-3 py-1 rounded-lg text-[#E87722] text-xs font-bold italic">
                    <Sparkles size={12} />
                    {bundle.discount}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[#1B3B36]/40 text-[11px] font-medium italic">
          *Select your favorite bundle above to scroll to order
        </p>
      </div>
    </section>
  )
}