"use client"

import { Button } from "@/components/ui/button"

export function BatchUrgency() {
  const scrollToProduct = () => {
    const element = document.getElementById('product-purchase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-[#F9F3E9] text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3B36] font-bold">
          Don't Miss This Batch
        </h2>
        
        <p className="text-gray-700 text-lg md:text-xl">
          This is a limited saffron batch — once sold out, restock may take weeks.
        </p>

        <div className="pt-4">
          <Button 
            onClick={scrollToProduct}
            className="bg-[#1B3B36] hover:bg-[#152e2a] text-white h-16 px-10 text-xl font-bold rounded-lg shadow-xl transition-transform hover:scale-105"
          >
            👉 Get Your Kesar Kehwah Now
          </Button>
        </div>

        <p className="text-gray-500 font-medium pt-4 tracking-wide uppercase text-sm">
          Free Shipping | COD Available | Easy Returns
        </p>
      </div>
    </section>
  )
}