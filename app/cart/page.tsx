
"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Star, Minus, Plus, Trash2, CreditCard, Smartphone, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useCart } from '@/components/cart-provider'

const productImages = [
  "/images/product-1.png",
  "/images/product-2.jpg",
  "/images/product-3.jpg",
  "/images/product-4.jpg",
];
const productName = 'Kesar Kehwah – Organic Herbal Tea (Light & Refreshing) – Bestseller'

export default function CartPage() {
  const searchParams = useSearchParams()
  const { state, addItem, updateQty, removeItem, getTotalCount, getTotalPrice } = useCart()
  
  const variant = searchParams.get('variant')
  const qtyStr = searchParams.get('qty')
  const priceStr = searchParams.get('price')

  useEffect(() => {
    if (variant && qtyStr && priceStr) {
      const quantity = parseInt(qtyStr)
      const price = parseFloat(priceStr)
      if (!isNaN(quantity) && !isNaN(price) && quantity > 0) {
        const itemKey = `${variant}-${price}`
        if (!state.items.some(item => item.variant === variant && item.price === price)) {
        addItem({
          variant,
          price,
          quantity,
          image: '/images/product-1.png'
        })
        }
      }
    }
  }, [variant, qtyStr, priceStr])

  if (getTotalCount() === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="py-20 text-center">
          <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">Your cart is empty</h2>
          <Link href="/" className="inline-block bg-[#1B3B36] text-white py-3 px-8 rounded-md font-bold uppercase tracking-wide">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const totalPrice = getTotalPrice()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-12 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <h1 className="font-serif text-3xl font-bold text-[#1B3B36] mb-8">Your Cart</h1>
            <div className="space-y-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-6 p-6 border border-gray-200 rounded-xl">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                    <Image src={productImages[0]} alt={item.variant} width={96} height={96} className="w-full h-full object-cover" />

                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl font-bold text-[#1B3B36] mb-1 truncate">{productName}</h3>
                    <p className="text-gray-600 mb-4">{item.variant}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-md">
                        <Button variant="ghost" size="sm" className="h-9 w-10 p-0" onClick={() => updateQty(item.id, Math.max(1, item.quantity - 1))}>
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                        <Button variant="ghost" size="sm" className="h-9 w-10 p-0" onClick={() => updateQty(item.id, item.quantity + 1)}>
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-lg font-bold text-[#1B3B36]">₹{(item.price * item.quantity).toLocaleString()}</div>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 p-0 h-auto w-auto" onClick={() => removeItem(item.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Sidebar */}
          <div className="lg:w-1/3">
            <div className="p-8 border border-gray-200 rounded-xl sticky top-8">
              <div className="text-right mb-8">
                <div className="text-3xl font-bold text-[#1B3B36]">₹{totalPrice.toLocaleString()}</div>
                <div className="text-gray-500">incl. taxes</div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4 mb-8">
                <p className="font-medium text-[#1B3B36]">Payment Method</p>
<RadioGroup value="cod" className="space-y-2">
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="cod" id="cod" className="mr-3" />
                    <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Truck className="w-5 h-5 text-green-600" />
                      Cash on Delivery
                    </Label>
                  </div>
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="card" id="card" className="mr-3" />
                    <Label htmlFor="card" className="flex items-start gap-2 cursor-pointer flex-1">
                      <CreditCard className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div>Cards / UPI</div>
                        <div className="text-xs text-gray-500">Visa, Mastercard, RuPay, UPI</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button className="w-full bg-[#1B3B36] hover:bg-[#152e2a] text-white py-4 text-lg font-bold rounded-xl uppercase tracking-wider mb-4">
                Proceed to Checkout
              </Button>
              <Button className="w-full bg-[#E87722] hover:bg-[#d46a1e] text-white py-4 text-lg font-bold rounded-xl uppercase tracking-wider">
                Buy Now - Pay Later
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

