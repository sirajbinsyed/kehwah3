"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { Star, Minus, Plus, Check, Truck, Wallet, Zap, ShieldCheck, Flame } from "lucide-react"
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
  "/images/lifestyle-3.jpg",
  "/images/product-3.jpg",
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
  const [isAdding, setIsAdding] = useState(false)

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

    setTimeout(() => {
      setIsAdding(false)
    }, 2000)
  }

  return (
    <section id="product-purchase" className="bg-white py-6 md:py-10">
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
            {/* 🔥 NEW URGENCY BANNER */}
            <div className="mb-4 inline-flex items-center gap-2 bg-[#FEF2F2] border border-[#FECACA] px-4 py-2 rounded-lg w-full md:w-fit animate-pulse shadow-sm">
                <Flame className="w-4 h-4 text-red-600 fill-red-600" />
                <span className="text-red-700 font-bold text-xs md:text-sm uppercase tracking-wider">
                  🔥 Selling Fast — Limited Fresh Batch Available
                </span>
            </div>

            {/* Headline Section */}
            <div className="space-y-2 mb-4">
                <p className="text-[#E87722] font-bold tracking-wide text-sm uppercase flex items-center gap-2">
                   <Zap className="w-4 h-4 fill-[#E87722]" /> Feel the Calm of Kashmir in Every Sip 🌿
                </p>
                <h1 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3B36] leading-tight">
                  Kesar Kehwah – Organic Herbal Tea
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Premium Saffron Kehwah that boosts immunity, digestion & daily calm — without sugar or chemicals.
                </p>
            </div>

            {/* Rating & Social Proof */}
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <div className="flex items-center bg-[#FDF2E9] px-2 py-1 rounded border border-[#FAD7BB]">
                <div className="flex mr-1.5">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "fill-[#E87722] text-[#E87722]" : "fill-gray-300 text-gray-300"}`} />
                    ))}
                </div>
                <span className="text-[#E87722] font-bold text-sm">4.5 Rating</span>
              </div>
              <span className="text-gray-400 text-sm">| 29 reviews</span>
              <span className="text-[#1B3B36] text-xs font-semibold bg-green-50 px-2 py-1 rounded-full border border-green-100">
                 🔥 700+ bought this week
              </span>
            </div>

            {/* Price Display */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-gray-400 line-through text-lg">₹ {currentVariant.originalPrice}</span>
              <span className="text-3xl font-bold text-[#1B3B36]">₹ {currentVariant.price}</span>
              <span className="bg-[#E87722] text-white text-xs px-2 py-1 rounded font-bold">SALE</span>
            </div>

            {/* Trust Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-6 py-4 border-y border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-700 font-medium"><Check className="w-4 h-4 text-green-600 stroke-[3]" /> Made with Grade-1 Kashmiri Kesar</div>
                <div className="flex items-center gap-2 text-sm text-gray-700 font-medium"><Check className="w-4 h-4 text-green-600 stroke-[3]" /> No Sugar | No Preservatives</div>
                <div className="flex items-center gap-2 text-sm text-gray-700 font-medium"><Check className="w-4 h-4 text-green-600 stroke-[3]" /> Ready in 60 seconds</div>
                <div className="flex items-center gap-2 text-sm text-gray-700 font-medium"><Check className="w-4 h-4 text-green-600 stroke-[3]" /> Trusted by 10,000+ customers</div>
            </div>

            {/* Pack Selection */}
            <div className="mt-6">
              <p className="text-sm font-bold text-[#1B3B36] mb-3">Select Pack Size:</p>
              <RadioGroup value={selectedPack} onValueChange={setSelectedPack} className="flex flex-wrap gap-2">
                {variants.map((variant, i) => (
                  <div key={i}>
                    <RadioGroupItem value={variant.label} id={`p-${i}`} className="peer sr-only" />
                    <Label 
                      htmlFor={`p-${i}`} 
                      className="flex items-center justify-center px-4 py-3 border-2 border-gray-100 rounded-lg cursor-pointer peer-data-[state=checked]:bg-[#1B3B36] peer-data-[state=checked]:border-[#1B3B36] peer-data-[state=checked]:text-white text-gray-600 text-sm font-medium transition-all hover:border-gray-300"
                    >
                      {variant.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Quantity & Action Buttons */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg h-12">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 text-gray-400 hover:text-black transition-colors"><Minus className="w-4 h-4" /></button>
                    <span className="w-8 text-center font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 text-gray-400 hover:text-black transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
                
                <Button 
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className={cn(
                    "flex-1 h-12 text-sm font-bold rounded-lg uppercase tracking-wider transition-all duration-300",
                    isAdding ? "bg-green-600 hover:bg-green-600" : "bg-[#1B3B36] hover:bg-[#152e2a]"
                    )}
                >
                    {isAdding ? (<span className="flex items-center gap-2"><Check className="w-4 h-4" /> ADDED!</span>) : "Add to Cart"}
                </Button>
              </div>

              <Button 
                onClick={() => router.push(`/cart?variant=${encodeURIComponent(selectedPack)}&qty=${quantity}&price=${parseFloat(currentVariant.price.replace(/,/g, ''))}&direct=true`)}
                className="w-full bg-[#E87722] hover:bg-[#d46a1e] text-white h-14 text-base font-bold rounded-lg uppercase tracking-widest shadow-lg shadow-orange-100"
              >
                BUY IT NOW — FREE SHIPPING
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 py-3 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center gap-1"><Truck className="w-5 h-5 text-[#1B3B36]" /><span className="text-[10px] font-bold uppercase text-gray-500">Free Shipping</span></div>
                <div className="flex flex-col items-center gap-1"><Wallet className="w-5 h-5 text-[#1B3B36]" /><span className="text-[10px] font-bold uppercase text-gray-500">COD Available</span></div>
                <div className="flex flex-col items-center gap-1"><ShieldCheck className="w-5 h-5 text-[#1B3B36]" /><span className="text-[10px] font-bold uppercase text-gray-500">Secure Payment</span></div>
            </div>

            {/* Subscription Box */}
            <div className="mt-6 border-2 border-gray-100 rounded-xl overflow-hidden">
              <label className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${purchaseType === 'one-time' ? 'bg-[#F2F1ED]' : 'bg-white hover:bg-gray-50'}`}>
                <input type="radio" name="type" checked={purchaseType === 'one-time'} onChange={() => setPurchaseType('one-time')} className="w-4 h-4 accent-[#1B3B36]" />
                <span className="text-sm font-semibold text-gray-700">One-time purchase</span>
              </label>
              <label className={`flex items-start gap-3 p-4 border-t-2 border-gray-100 cursor-pointer transition-colors ${purchaseType === 'subscribe' ? 'bg-[#F2F1ED]' : 'bg-white hover:bg-gray-50'}`}>
                <input type="radio" name="type" checked={purchaseType === 'subscribe'} onChange={() => setPurchaseType('subscribe')} className="w-4 h-4 accent-[#1B3B36] mt-1" />
                <div>
                  <span className="text-sm text-gray-700 font-bold">Subscribe & Save 10%</span>
                  <p className="text-xs text-gray-500 mt-0.5">Delivered every 3 months. Skip or cancel anytime.</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}