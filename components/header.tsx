"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full bg-[#fcfbf7]">
      {/* Top announcement bar */}
      <div className="bg-[#c41e1e] text-white text-center py-2 text-[12px] md:text-[13px] font-medium tracking-wide">
        Worldwide Shipping | COD available
      </div>

      {/* Main header */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          {/* 3-Column Grid to ensure perfect centering */}
          <div className="grid grid-cols-3 items-center h-20 md:h-24">
            
            {/* 1. Left Spacer (Empty to balance the grid) */}
            <div className="hidden md:block"></div>

            {/* 2. LOGO IMAGE (Centered) */}
            <div className="flex justify-start md:justify-center col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/kehwa.png" 
                  alt="Kehwah Logo"
                  width={200} 
                  height={60}
                  className="h-10 w-auto md:h-14 object-contain"
                  priority 
                />
              </Link>
            </div>

            {/* 3. ACTION ICONS (Right Aligned) */}
            <div className="flex items-center justify-end gap-1 md:gap-3">
              <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent w-9 h-9 md:w-10 md:h-10">
                <Search className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent w-9 h-9 md:w-10 md:h-10">
                <User className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent relative w-9 h-9 md:w-10 md:h-10">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
                <span className="absolute top-1 right-1 bg-[#c41e1e] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}