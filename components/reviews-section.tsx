"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    initial: "A",
    name: "ADITYA.S",
    verified: true,
    date: "03/14/2026",
    title: "Excellent Taste and Quality",
    content:
      "Taste, quality is superb. It reminds me and takes me to back to the memories of having kehwah for first time I had in Kashmir and absolutely loved it. Purchased kehwah from many brands - almost all from online but none came close to the feel as your brand is. Keep up the quality and never compromise on it.",
  },
  {
    initial: "C",
    name: "Chhibberramesh",
    verified: true,
    date: "02/25/2026",
    title: "Everything is fine except quantity in a pouch",
    content:
      "Everything is fine except quantity in a pouch. It should be slightly increased. You can charge for it.",
  },
  {
    initial: "J",
    name: "Jyoti Kapur",
    verified: true,
    date: "12/28/2025",
    title: "Good taste",
    content: "Good taste. Enjoyed drinking the tea.",
  },
  {
    initial: "C",
    name: "Customer",
    verified: true,
    date: "12/26/2025",
    title: "I just love it 💖",
    content:
      "I just love it 💖 I can carry it to workplace or while travelling and taste is so good and refreshing",
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-[#FAF9F6] py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1B3B36] mb-4">
            Customer Reviews
          </h2>
          
          {/* Rating Summary */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "fill-[#E87722] text-[#E87722]" : "fill-[#E87722]/30 text-[#E87722]/30"}`}
                />
              ))}
            </div>
            <p className="text-gray-500 font-medium">
              4.5 · 29 reviews
            </p>
          </div>
        </div>

        {/* Reviews Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Dark Green Avatar */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B3B36] text-white flex items-center justify-center font-bold text-lg">
                  {review.initial}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1B3B36]">{review.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>Verified</span>
                    <span>·</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>

              {/* Stars for individual review */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#E87722] text-[#E87722]"
                  />
                ))}
              </div>

              {/* Title & Content */}
              <h4 className="font-bold text-[#1B3B36] mb-2 text-lg">
                {review.title}
              </h4>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}