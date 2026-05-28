"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "James Mitchell",
    location: "Sydney, NSW",
    rating: 5,
    text: "Exceptional service from start to finish. The tyre finder tool made it so easy to find exactly what I needed. Fast delivery and the fitting was done professionally. Highly recommend!",
    vehicle: "BMW 3 Series",
  },
  {
    id: 2,
    name: "Sarah Chen",
    location: "Melbourne, VIC",
    rating: 5,
    text: "Best prices I found anywhere online. The price match guarantee actually works - they matched a competitor and gave me free fitting. Will definitely be back!",
    vehicle: "Toyota RAV4",
  },
  {
    id: 3,
    name: "David Thompson",
    location: "Brisbane, QLD",
    rating: 5,
    text: "Outstanding customer service. Had questions about which tyres would be best for my driving style and the team gave expert advice. Very happy with my Michelin Pilot Sports.",
    vehicle: "Audi A4",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Join thousands of satisfied customers who trust TyrePro
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <Quote className="mb-6 h-10 w-10 text-primary/30" />
            
            <div className="mb-6 flex gap-1">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            
            <blockquote className="mb-8 text-lg leading-relaxed text-foreground lg:text-xl">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{testimonials[current].name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].location} • {testimonials[current].vehicle}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prev}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="icon" onClick={next}>
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              >
                <span className="sr-only">Go to slide {i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
