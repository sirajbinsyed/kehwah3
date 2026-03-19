import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    { name: "No Sugar", kehwah: true, regular: false },
    { name: "Helps Digestion", kehwah: true, regular: false },
    { name: "Premium Ingredients", kehwah: true, regular: false },
    { name: "No Chemicals", kehwah: true, regular: false },
    { name: "Relaxing Effect", kehwah: true, regular: false },
  ]

  return (
    <section className="py-20 px-4 bg-[#F9F3E9]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3B2E] text-center mb-12">
          Why Kehwah Beats Regular Tea
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1B3B2E] text-white">
                <th className="py-6 px-8 text-xl font-medium">Feature</th>
                <th className="py-6 px-4 text-center text-xl font-medium">Kesar Kehwah</th>
                <th className="py-6 px-4 text-center text-xl font-medium">Regular Tea</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((feature, index) => (
                <tr key={index} className="bg-[#FFFCF9]">
                  <td className="py-6 px-8 text-lg text-[#1B3B2E] font-medium">
                    {feature.name}
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-[#6BC297] rounded-md">
                      <Check className="text-white" size={20} strokeWidth={3} />
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <X className="inline-block text-[#F26B8A]" size={32} strokeWidth={2.5} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}