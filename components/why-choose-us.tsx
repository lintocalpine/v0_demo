import { Truck, Shield, Clock, Wrench, CreditCard, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on orders over $200 across the country",
  },
  {
    icon: Shield,
    title: "Price Guarantee",
    description: "Found it cheaper? We&apos;ll match any competitor&apos;s price",
  },
  {
    icon: Clock,
    title: "Next Day Delivery",
    description: "Order before 2pm for next working day delivery",
  },
  {
    icon: Wrench,
    title: "Expert Fitting",
    description: "Professional installation at 500+ partner locations",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Split your purchase into 4 interest-free payments",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer service and expert advice",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Why Choose TyrePro?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We make buying tyres simple, affordable, and hassle-free
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
