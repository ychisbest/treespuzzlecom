"use client"

import { Button } from "@/components/ui/button"
import { Gamepad2, Star, Play } from "lucide-react"

const trustItems = [
  "MoistCr1TiKaL",
  "DashieGames", 
  "CaseOh",
  "8-BitRyan",
  "4.9/5 on itch.io",
  "500K+ TikTok plays",
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
          <Star className="w-4 h-4 text-secondary fill-secondary" />
          <span className="text-sm font-medium text-foreground">The Funniest Rage Game of 2026</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 text-balance">
          Trees Hate You
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary font-bold mb-2">
          The worst forest you&apos;ll ever hike through.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance leading-relaxed">
          The trees are out to get you… and they&apos;re not even sorry. Every path, every sign, every &quot;shortcut&quot; is a trap. If only you had an axe…
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
          >
            <a href="#play">
              <Gamepad2 className="w-5 h-5 mr-2" />
              Play Free Demo Now
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold rounded-full px-8 py-6 text-lg transition-all hover:scale-105"
          >
            <a href="https://store.steampowered.com/app/4171850/Trees_Hate_You/" target="_blank" rel="noopener noreferrer">
              Wishlist on Steam
            </a>
          </Button>

          <Button 
            asChild 
            size="lg" 
            variant="ghost"
            className="text-accent hover:text-accent hover:bg-accent/10 font-bold rounded-full px-8 py-6 text-lg transition-all"
          >
            <a href="https://www.tiktok.com/@tykenn" target="_blank" rel="noopener noreferrer">
              <Play className="w-5 h-5 mr-2" />
              Watch Viral TikTok
            </a>
          </Button>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <span className="font-medium">Featured by:</span>
          {trustItems.map((item, index) => (
            <span 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-full px-3 py-1 text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
