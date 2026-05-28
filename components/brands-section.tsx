import Image from "next/image"

const brands = [
  { name: "Michelin", logo: "/brands/michelin.svg" },
  { name: "Continental", logo: "/brands/continental.svg" },
  { name: "Pirelli", logo: "/brands/pirelli.svg" },
  { name: "Bridgestone", logo: "/brands/bridgestone.svg" },
  { name: "Goodyear", logo: "/brands/goodyear.svg" },
  { name: "Dunlop", logo: "/brands/dunlop.svg" },
]

export function BrandsSection() {
  return (
    <section className="border-y border-border bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by leading brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-12 w-24 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <span className="text-lg font-bold text-foreground/60">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
