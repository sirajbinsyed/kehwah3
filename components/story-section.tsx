import Image from "next/image"

export function StorySection() {
  return (
    <section className="py-20 px-4 bg-[#F9F3E9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image with Overlay Text */}
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
            <Image 
              src="/images/lifestyle-3.jpg" // Replace with your actual image name
              alt="Brand Story"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
            />
            {/* The white text overlay on the image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-black/10">
              <h3 className="text-white text-4xl md:text-6xl font-serif italic leading-tight drop-shadow-lg max-w-sm">
                A luxury for all occasions
              </h3>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="flex flex-col space-y-8 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B3B36] font-bold leading-tight">
              Born From Love, Crafted <br /> With Care
            </h2>

            <div className="space-y-6 text-[#4A4A4A] text-lg md:text-xl leading-relaxed">
              <p>
                Kesar Kehwah started as a simple ritual — a mother 
                packing warmth and wellness for her children.
              </p>
              
              <p>
                Today, we bring that same emotion to you — through 
                every cup.
              </p>

              <p className="text-[#1B3B36] font-bold italic pt-4">
                Pure. Authentic. From Kashmir to your home.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}