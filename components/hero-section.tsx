"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search } from "lucide-react"

export function HeroSection() {
  const [width, setWidth] = useState("")
  const [profile, setProfile] = useState("")
  const [diameter, setDiameter] = useState("")

  return (
    <section className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Decorative elements */}
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Free shipping on orders over $200
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Premium Tyres for{" "}
              <span className="text-primary">Every Journey</span>
            </h1>
            
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Discover our extensive range of quality tyres from top brands. 
              Expert advice, competitive prices, and professional fitting services.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Shop All Tyres
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Find by Vehicle
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Tyre Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </div>
          
          {/* Right - Tyre finder */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Search className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Find Your Tyres</h2>
                  <p className="text-sm text-muted-foreground">Enter your tyre size</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Width
                    </label>
                    <select
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="185">185</option>
                      <option value="195">195</option>
                      <option value="205">205</option>
                      <option value="215">215</option>
                      <option value="225">225</option>
                      <option value="235">235</option>
                      <option value="245">245</option>
                      <option value="255">255</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Profile
                    </label>
                    <select
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="40">40</option>
                      <option value="45">45</option>
                      <option value="50">50</option>
                      <option value="55">55</option>
                      <option value="60">60</option>
                      <option value="65">65</option>
                      <option value="70">70</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Diameter
                    </label>
                    <select
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="15">R15</option>
                      <option value="16">R16</option>
                      <option value="17">R17</option>
                      <option value="18">R18</option>
                      <option value="19">R19</option>
                      <option value="20">R20</option>
                    </select>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">or search by vehicle</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <select className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Make</option>
                    <option value="audi">Audi</option>
                    <option value="bmw">BMW</option>
                    <option value="ford">Ford</option>
                    <option value="honda">Honda</option>
                    <option value="toyota">Toyota</option>
                    <option value="vw">Volkswagen</option>
                  </select>
                  <select className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Model</option>
                  </select>
                </div>
                
                <Button className="w-full gap-2" size="lg">
                  <Search className="h-4 w-4" />
                  Search Tyres
                </Button>
              </div>
              
              <p className="mt-4 text-center text-xs text-muted-foreground">
                {"Don't know your tyre size?"}{" "}
                <a href="#" className="text-primary hover:underline">
                  Find it here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
