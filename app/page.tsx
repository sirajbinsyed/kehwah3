import { Header } from "@/components/header"
import { ProductHero } from "@/components/product-hero"
import { ProductDetails } from "@/components/product-details"
import { IngredientsSection } from "@/components/ingredients-section"
import { HowToMake } from "@/components/how-to-make"
import { TeaFeatures } from "@/components/tea-features"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductHero />
      <ProductDetails />
      <IngredientsSection />
      <HowToMake />
      <TeaFeatures />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
