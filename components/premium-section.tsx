import AnimatedSection from "./animated-section";
import Image from "next/image";

const points = [
  "Made with Grade-1 Pampore saffron (world's finest)",
  "Handpicked natural ingredients — no shortcuts",
  "No artificial flavors or chemicals",
  "Each sachet = perfectly measured luxury",
];

export const PremiumSection = () => (
  <AnimatedSection className="py-20 md:py-28 bg-kehwah-warm">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
            Why This Kehwah Is Worth It
          </h2>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-lg font-body text-foreground">
                <span className="text-kehwah-gold mt-1 font-bold">✔</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-kehwah-gold font-body font-semibold italic text-lg">
            One cup costs less than your daily coffee — but gives you far more.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/lifestyle-2.jpg"
            alt="Premium Kesar Kehwah being served"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default PremiumSection;