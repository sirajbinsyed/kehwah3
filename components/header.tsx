"use client"

import Link from "next/link"
import { useCart } from "@/components/cart-provider"
import Image from "next/image"
import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { getTotalCount } = useCart()
  return (
    <header className="w-full bg-[#fcfbf7]">
      {/* 1. Top Bar */}
      <div className="bg-[#c41e1e] text-white text-center py-2 text-[12px] md:text-[13px] font-medium tracking-wide relative z-30">
        Worldwide Shipping | COD available
      </div>

      {/* 2. Main Header (Strictly h-20 on mobile and h-24 on desktop) */}
      <div className="border-b border-gray-100 relative z-20 h-20 md:h-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-full">
          
          {/* 3-Column Grid for perfect button placement */}
          <div className="grid grid-cols-3 items-center h-full relative">
            
            {/* Left Spacer */}
            <div className="flex justify-start"></div>

            {/* THE LOGO: Massive Floating Centered Design */}
            <div className="relative h-full flex items-center justify-center">
              <Link href="/" className="flex items-center justify-center">
                <Image 
                  src="/images/1-31.png" 
                  alt="Kehwah Logo"
                  width={600} 
                  height={200}
                  className="
                    /* THE SIZES: Massive height compared to 80px (h-20) and 96px (h-24) container */
                    h-[105px] md:h-[155px] 
                    w-auto 
                    object-contain 
                    
                    /* THE MAGIC CENTERING: Prevents left-shift on mobile and stabilizes position */
                    absolute 
                    left-1/2 
                    top-1/2 
                    -translate-x-1/2 
                    -translate-y-1/2
                    
                    /* Prevents overlap with right-side icons on small screens */
                    max-w-[170px] md:max-w-[320px] 
                    
                    transition-transform duration-300
                    hover:scale-105
                    z-50
                  " 
                  priority 
                />
              </Link>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center justify-end gap-1 md:gap-3 relative z-[60]">
              <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent w-9 h-9 md:w-10 md:h-10">
                <Search className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </Button>

              <Button variant="ghost" size="icon" className="hidden sm:inline-flex text-gray-800 hover:bg-transparent w-9 h-9 md:w-10 md:h-10">
                <User className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent relative w-9 h-9 md:w-10 md:h-10 cursor-pointer" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
                  <span className="absolute top-1 right-1 bg-[#c41e1e] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {getTotalCount()}
                  </span>
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}