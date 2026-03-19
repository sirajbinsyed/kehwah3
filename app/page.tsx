import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { Header } from "@/components/header"
import { ProductHero } from "@/components/product-hero"
import { ExperienceSection } from "@/components/experience-section"
import { OutcomesSection } from "@/components/outcome-section" // Fixed spelling and added { }
import { ProductDetails } from "@/components/product-details"
import { IngredientsSection } from "@/components/ingredients-section"
import { PerfectForYou } from "@/components/perfect-for-you"
import { ComparisonSection } from "@/components/comparison-section"
import { HowToMake } from "@/components/how-to-make"
import { TeaFeatures } from "@/components/tea-features"
import { ReviewsSection } from "@/components/reviews-section"
import { BundleSection } from "@/components/bundle-section"
import { BatchUrgency } from "@/components/batch-urgency"
import { FAQSection } from "@/components/faq-section"
import { StorySection } from "@/components/story-section"
import { Footer } from "@/components/footer"
import { PremiumSection } from "@/components/premium-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyMobileCTA />
      <Header />
      <ProductHero />
      
      {/* Narrative Sections */}
      <ExperienceSection />
      <OutcomesSection />
      <PremiumSection />
      {/* Product Information */}
      <ProductDetails />
      <IngredientsSection />
      <PerfectForYou />
      <ComparisonSection />
      <HowToMake />
      <TeaFeatures />
      
      {/* Social Proof & Support */}
      <ReviewsSection />
      <BundleSection /> 
      <BatchUrgency />
      <FAQSection />
      <StorySection /> 
      <Footer />
    </main>
  )
}