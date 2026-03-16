"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Are Kehwah products vegan and keto-friendly?",
    answer:
      "Yes, all our Kehwah products are 100% vegan and keto-friendly. They contain no animal products and are low in carbohydrates, making them perfect for various dietary preferences.",
  },
  {
    question: "Are the ingredients really all-natural?",
    answer:
      "Absolutely! We source only the finest natural ingredients. Our Kesar Kehwah uses grade-1 mogra saffron from the Pampore valley in Kashmir, along with natural cardamom, almonds, and cinnamon.",
  },
  {
    question: "Do Kehwah teas contain any preservatives or chemicals?",
    answer:
      "No, our teas are completely free from preservatives, chemicals, and additives. We believe in keeping our products as pure and natural as possible.",
  },
  {
    question: "Are Kehwah products gluten-free?",
    answer:
      "Yes, all our Kehwah products are naturally gluten-free, making them suitable for those with gluten sensitivities or celiac disease.",
  },
  {
    question: "How should I store Kehwah teas to keep them fresh?",
    answer:
      "Store your Kehwah tea in a cool, dry place away from direct sunlight. Keep the package sealed when not in use to maintain freshness and aroma. For best results, consume within 12 months of purchase.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-tea-cream py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-tea-brown-dark text-center mb-4">
          you asked we answered
        </h2>

        <Accordion type="single" collapsible className="w-full mt-8">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`} className="border-tea-beige">
              <AccordionTrigger className="text-left text-tea-brown-dark hover:text-tea-brown font-medium">
                {idx + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
