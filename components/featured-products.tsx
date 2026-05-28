import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Michelin Pilot Sport 5",
    size: "225/45 R17",
    price: 189.99,
    originalPrice: 219.99,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    badge: "Best Seller",
    fuelEfficiency: "A",
    wetGrip: "A",
    noise: 68,
  },
  {
    id: 2,
    name: "Continental SportContact 7",
    size: "235/40 R18",
    price: 209.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    badge: "Premium",
    fuelEfficiency: "B",
    wetGrip: "A",
    noise: 70,
  },
  {
    id: 3,
    name: "Pirelli P Zero",
    size: "245/35 R19",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    badge: "Sale",
    fuelEfficiency: "B",
    wetGrip: "A",
    noise: 71,
  },
  {
    id: 4,
    name: "Bridgestone Potenza Sport",
    size: "215/55 R16",
    price: 159.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    badge: null,
    fuelEfficiency: "B",
    wetGrip: "B",
    noise: 69,
  },
]

export function FeaturedProducts() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Featured Tyres
            </h2>
            <p className="mt-2 text-muted-foreground">
              Top-rated tyres chosen by our customers
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View All Products
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.badge && (
                    <Badge
                      className={`absolute left-3 top-3 ${
                        product.badge === "Sale"
                          ? "bg-primary text-primary-foreground"
                          : product.badge === "Best Seller"
                          ? "bg-chart-2 text-foreground"
                          : "bg-foreground text-background"
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-semibold leading-tight">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.size}</p>
                  
                  {/* EU Labels */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded bg-chart-2/20 px-1.5 py-0.5 text-xs font-medium text-chart-2">
                      Fuel: {product.fuelEfficiency}
                    </span>
                    <span className="rounded bg-primary/20 px-1.5 py-0.5 text-xs font-medium text-primary">
                      Wet: {product.wetGrip}
                    </span>
                    <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {product.noise}dB
                    </span>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="icon" variant="outline" className="h-9 w-9">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
