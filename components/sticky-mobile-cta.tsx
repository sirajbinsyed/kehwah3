"use client"

import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Bar becomes visible after scrolling down 600px
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FUNCTION: Smooth scroll to the Hero Section
  const handleScrollToProduct = () => {
    const heroSection = document.getElementById('product-purchase');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden bg-[#1B3B36] border-t border-white/10 px-6 py-4 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom duration-500">
      
      {/* Price Information */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
            <span className="text-white font-serif font-bold text-xl tracking-tight">₹1,220</span>
            <span className="text-white/40 line-through text-[10px] font-medium">₹1,298</span>
        </div>
        <p className="text-[#E87722] text-[10px] font-bold uppercase tracking-[0.1em]">
            Free Shipping & COD
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={handleScrollToProduct}
        className="bg-[#E87722] hover:bg-[#d46a1e] text-white font-black px-7 py-3 rounded-xl text-sm shadow-lg active:scale-90 transition-all flex items-center gap-2 animate-pulse"
        style={{ animationDuration: '3s' }}
      >
        ORDER NOW 🛒
      </button>
      
    </div>
  );
}