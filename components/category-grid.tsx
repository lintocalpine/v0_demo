import { Car, Truck, Bike, Tractor, Mountain, Snowflake } from "lucide-react"

const categories = [
  {
    name: "Car Tyres",
    description: "Passenger vehicles",
    icon: Car,
    count: "2,500+ tyres",
  },
  {
    name: "SUV & 4x4",
    description: "All-terrain & highway",
    icon: Mountain,
    count: "1,200+ tyres",
  },
  {
    name: "Van Tyres",
    description: "Light commercial",
    icon: Truck,
    count: "800+ tyres",
  },
  {
    name: "Motorcycle",
    description: "Sport & touring",
    icon: Bike,
    count: "600+ tyres",
  },
  {
    name: "Winter Tyres",
    description: "Cold weather grip",
    icon: Snowflake,
    count: "950+ tyres",
  },
  {
    name: "Agricultural",
    description: "Farm & industrial",
    icon: Tractor,
    count: "400+ tyres",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Find the perfect tyres for your vehicle type
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-secondary"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {category.count}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-8 translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
