import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1B3B36] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Brand Name - Stylized Script Look */}
        <Link href="/" className="inline-block mb-2">
          <span className="font-serif italic text-4xl md:text-5xl font-bold text-[#E87722] tracking-tight">
            Kehwah
          </span>
        </Link>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide mb-8">
          Kashmiri Tea Company
        </p>

        {/* Copyright Bar */}
        <div className="pt-4">
          <p className="text-gray-400 text-sm md:text-base opacity-80">
            © 2026 Kehwah. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  )
}