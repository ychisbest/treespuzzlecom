"use client"

import { Button } from "@/components/ui/button"
import { Maximize2, ExternalLink } from "lucide-react"
import { useState } from "react"

export function GameSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    const iframe = document.getElementById("game-iframe") as HTMLIFrameElement
    if (iframe) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
        setIsFullscreen(false)
      } else {
        iframe.requestFullscreen()
        setIsFullscreen(true)
      }
    }
  }

  return (
    <section id="play" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Play Trees Hate You Demo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            The latest demo (Version 17) is live! New traps, character creator, and even more savage trees.
          </p>
          <p className="text-sm text-accent font-medium">
            It&apos;s Free – Start hiking now!
          </p>
        </div>

        {/* Game Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Game Frame */}
          <div className="relative bg-background rounded-2xl border-4 border-primary/50 shadow-2xl shadow-primary/20 overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between bg-card px-4 py-2 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Trees Hate You – Demo v17</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 hover:bg-muted rounded-md transition-colors"
                  aria-label="Toggle fullscreen"
                >
                  <Maximize2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* iframe */}
            <div className="aspect-[16/9] w-full">
              <iframe
                id="game-iframe"
                src="https://game.doritosscript.com/trees-hate-you/index.html"
                className="w-full h-full border-0"
                allow="fullscreen; autoplay; clipboard-write"
                title="Trees Hate You Game"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-100" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-bounce delay-300" />
          <div className="absolute top-1/2 -right-6 w-4 h-4 bg-accent rounded-full animate-pulse" />
        </div>

        {/* Alternative Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button 
            asChild 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-8"
          >
            <a href="https://tykenn.itch.io/trees-hate-you" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Play on itch.io
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-8"
          >
            <a href="https://store.steampowered.com/app/4171850/Trees_Hate_You/" target="_blank" rel="noopener noreferrer">
              Wishlist on Steam – Full Release 2026
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
