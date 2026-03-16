import Image from "next/image"

export function HowToMake() {
  const steps = [
    {
      number: 1,
      title: "Step 1",
      description: "Empty 1 sachet of Kesar Kehwah into a transparent cup",
    },
    {
      number: 2,
      title: "Step 2",
      description: "Pour 150ml of boiling water.",
    },
    {
      number: 3,
      title: "Step 3",
      description: "Stir and enjoy your cup!",
    },
  ]

  return (
    <section className="bg-[#FAF9F6] py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Top Centered Header */}
        <h2 className="text-center text-gray-400 tracking-[0.3em] font-light text-xs md:text-sm mb-12 uppercase">
          HOW TO MAKE ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Just the Image (Border/Frame Removed) */}
          <div className="relative aspect-[4/4] md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-lg">
            <Image
              src="/images/lifestyle-1.jpg"
              alt="A luxury cup of Kesar Kehwah"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT COLUMN: Instructions */}
          <div className="flex flex-col lg:pl-4">
            <h3 className="font-serif text-3xl md:text-4xl text-[#1B3B36] mb-10">
              Steep It Hot
            </h3>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3B36] text-white flex items-center justify-center text-lg font-bold shadow-md">
                    {step.number}
                  </div>
                  
                  {/* Step Text */}
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[#1B3B36] text-lg mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}