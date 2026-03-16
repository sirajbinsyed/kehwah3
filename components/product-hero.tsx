"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { Star, Minus, Plus, Check, Loader2 } from "lucide-react" // Added Check and Loader2
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from '@/components/cart-provider'
import { toast } from '@/components/ui/use-toast'
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const productImages = [
  "/images/products/product-1.png",
  "/images/products/product-2.png",
  "/images/products/product-jar.png",
  "/images/products/product-info.jpg",
  "/images/products/whats-inside.jpg",
  "/images/products/how-to-make.jpg",
]

const variants = [
  { label: "2 Pack (60 Pouches)", price: "1,220.70", originalPrice: "1,298.70" },
  { label: "1 Pack (30 Pouches)", price: "648.70", originalPrice: "698.70" },
  { label: "3 Pack (90 Pouches)", price: "1,753.70", originalPrice: "1,898.70" },
  { label: "Family Bottle (200 Cups)", price: "3,118.70", originalPrice: "3,298.70" },
];

export function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedPack, setSelectedPack] = useState(variants[0].label)
  const [purchaseType, setPurchaseType] = useState("one-time")
  const [isAdding, setIsAdding] = useState(false) // State for animation

  const router = useRouter()
  const { addItem } = useCart()

  const currentVariant = variants.find(v => v.label === selectedPack) || variants[0];

  const handleAddToCart = () => {
    setIsAdding(true)
    
    const priceNum = parseFloat(currentVariant.price.replace(/,/g, ''))
    
    addItem({
      variant: selectedPack,
      price: priceNum,
      quantity,
      image: productImages[selectedImage]
    })

    toast({
      title: "Success!",
      description: `${quantity} x ${selectedPack} added to your cart.`,
      variant: "default",
    })

    // Revert animation after 2 seconds
    setTimeout(() => {
      setIsAdding(false)
    }, 2000)
  }

  return (
    <section className="bg-white py-6 md:py-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Images */}
          <div className="flex flex-col gap-4 w-full">
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#F7F7F7] border border-gray-100">
              <Image
                src={productImages[selectedImage]}
                alt="Product Image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-row gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-[#1B3B36]" : "border-transparent hover:border-gray-200"
                  }`}
                >
                  <Image src={img} alt={`View ${idx + 1}`} width={100} height={100} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Details */}
          <div className="flex flex-col w-full">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3B36] leading-tight">
              Kesar Kehwah – Organic Herbal Tea (Light & Refreshing) – Bestseller
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-[#E87722] text-[#E87722]" : "fill-gray-200 text-gray-200"}`} />
                ))}
              </div>
              <span className="text-gray-400 text-sm">29 reviews</span>
            </div>

            {/* Price Display */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-gray-400 line-through text-base">₹ {currentVariant.originalPrice}</span>
              <span className="text-2xl font-bold text-[#1B3B36]">₹ {currentVariant.price}</span>
              <span className="bg-[#E87722] text-white text-[10px] px-2 py-0.5 rounded font-bold">Sale</span>
            </div>

            <p className="mt-6 text-gray-700 text-sm font-medium">No Added Sugar</p>

            {/* Pack Selection */}
            <div className="mt-3">
              <RadioGroup value={selectedPack} onValueChange={setSelectedPack} className="flex flex-wrap gap-2">
                {variants.map((variant, i) => (
                  <div key={i}>
                    <RadioGroupItem value={variant.label} id={`p-${i}`} className="peer sr-only" />
                    <Label 
                      htmlFor={`p-${i}`} 
                      className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md cursor-pointer peer-data-[state=checked]:bg-[#1B3B36] peer-data-[state=checked]:text-white text-gray-600 text-sm transition-colors"
                    >
                      {variant.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Availability */}
            <div className="mt-6 pb-4 border-b border-gray-100">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                Availability : <span className="w-2 h-2 rounded-full bg-green-500"></span> Only 700 left in stock!
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-gray-700 text-sm mb-2">Quantity</p>
              <div className="flex items-center border border-gray-200 rounded-md w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-gray-400 hover:text-black transition-colors"><Minus className="w-3 h-3" /></button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-gray-400 hover:text-black transition-colors"><Plus className="w-3 h-3" /></button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mt-6">
              <Button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className={cn(
                  "w-full py-6 text-sm font-bold rounded-md uppercase tracking-wider transition-all duration-300 relative overflow-hidden",
                  isAdding ? "bg-green-600 hover:bg-green-600" : "bg-[#1B3B36] hover:bg-[#152e2a]"
                )}
              >
                <span className={cn(
                  "flex items-center justify-center gap-2 transition-all duration-300",
                  isAdding ? "transform translate-y-0 opacity-100" : "opacity-100"
                )}>
                  {isAdding ? (
                    <>
                      <Check className="w-4 h-4 animate-in zoom-in duration-300" />
                      ITEM ADDED TO CART!
                    </>
                  ) : (
                    "ADD TO CART"
                  )}
                </span>
              </Button>

              <Button 
                onClick={() => router.push(`/cart?variant=${encodeURIComponent(selectedPack)}&qty=${quantity}&price=${parseFloat(currentVariant.price.replace(/,/g, ''))}&direct=true`)}
                className="w-full bg-[#E87722] hover:bg-[#d46a1e] text-white py-6 text-sm font-bold rounded-md uppercase tracking-wider"
              >
                BUY IT NOW
              </Button>
            </div>

            {/* Subscription Box */}
            <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
              <label className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${purchaseType === 'one-time' ? 'bg-[#F2F1ED]' : 'bg-white hover:bg-gray-50'}`}>
                <input 
                  type="radio" 
                  name="type" 
                  checked={purchaseType === 'one-time'} 
                  onChange={() => setPurchaseType('one-time')}
                  className="w-4 h-4 accent-[#1B3B36]" 
                />
                <span className="text-sm text-gray-700">One-time purchase</span>
              </label>
              <label className={`flex items-start gap-3 p-4 border-t border-gray-200 cursor-pointer transition-colors ${purchaseType === 'subscribe' ? 'bg-[#F2F1ED]' : 'bg-white hover:bg-gray-50'}`}>
                <input 
                  type="radio" 
                  name="type" 
                  checked={purchaseType === 'subscribe'} 
                  onChange={() => setPurchaseType('subscribe')}
                  className="w-4 h-4 accent-[#1B3B36] mt-1" 
                />
                <div>
                  <span className="text-sm text-gray-700 font-medium">Subscribe and save</span>
                  <p className="text-xs text-gray-400 mt-0.5">Deliver every 3 months, 10% off</p>
                </div>
              </label>
            </div>

            {/* Footer Text */}
            <div className="mt-4 space-y-2">
              <p className="text-xs text-gray-400">Auto-renews, skip or cancel anytime.</p>
              <div className="pt-2 flex flex-col gap-1 text-sm text-gray-600">
                <p>- Free Shipping On All Orders</p>
                <p>- Express Delivery On Request</p>
                <p>- Easy Return Pick Up From Home</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}