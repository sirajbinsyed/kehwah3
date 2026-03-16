"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductDetails() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Accordion type="single" collapsible defaultValue="description" className="w-full">
          <AccordionItem value="description" className="border-tea-beige">
            <AccordionTrigger className="font-serif text-lg text-tea-brown-dark hover:text-tea-brown">
              <span className="flex items-center gap-2">
                <span className="text-tea-saffron">&#10070;</span> Product Description
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-tea-brown-dark leading-relaxed">
              <p className="mb-4">
                Introducing Kesar Kehwah, the pride and joy of our tea collection. Kesar Kehwah is our darling first child, made out of the purest saffron from the Kashmir valley. This tea was born out of our mother&apos;s love for us, especially when we would be away from home. She would pack us a small bottle of this magic elixir to wish us health & remind us of home.
              </p>
              <p className="mb-4">
                Made with only the finest grade-1 mogra saffron from the picturesque Pampore valley in Kashmir, this Kesar Tea is a true labour of love. You can savour the rich aroma and taste of saffron with every sip of Kesar Kehwah, and let it transport you to the comforting embrace of loved ones.
              </p>
              <p className="mb-4">
                Indulge in the luxury of Kesar Kehwah, and let it be the highlight of your day, your moment of calm and serenity, just as it is for us.
              </p>
              <p className="mb-4">Order yours today and take a sip of heaven.</p>
              <p className="font-medium text-tea-brown">
                Real Ingredients, No Preservatives, No Chemicals, No Additives.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ingredients" className="border-tea-beige">
            <AccordionTrigger className="font-serif text-lg text-tea-brown-dark hover:text-tea-brown">
              <span className="flex items-center gap-2">
                <span className="text-tea-saffron">&#10070;</span> Ingredients
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-tea-brown-dark">
              <ul className="space-y-2">
                <li>Saffron (Kesar) - Real Kashmiri kesar</li>
                <li>Cardamom (Elaichi)</li>
                <li>Almonds (Badaam)</li>
                <li>Cinnamon (Dalchini)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-to-make" className="border-tea-beige">
            <AccordionTrigger className="font-serif text-lg text-tea-brown-dark hover:text-tea-brown">
              <span className="flex items-center gap-2">
                <span className="text-tea-saffron">&#10070;</span> How To Make Kehwah
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-tea-brown-dark">
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tea-brown text-white flex items-center justify-center text-sm">1</span>
                  <span>Empty 1 sachet of Kesar Kehwah into a transparent cup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tea-brown text-white flex items-center justify-center text-sm">2</span>
                  <span>Pour 150ml of boiling water</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tea-brown text-white flex items-center justify-center text-sm">3</span>
                  <span>Stir and enjoy your cup!</span>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-drink" className="border-tea-beige">
            <AccordionTrigger className="font-serif text-lg text-tea-brown-dark hover:text-tea-brown">
              <span className="flex items-center gap-2">
                <span className="text-tea-saffron">&#10070;</span> Why Drink This Tea
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-tea-brown-dark">
              <ul className="space-y-2">
                <li>Rich in antioxidants</li>
                <li>Promotes relaxation and calm</li>
                <li>Supports immune system</li>
                <li>Aids digestion</li>
                <li>Natural energy boost</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
