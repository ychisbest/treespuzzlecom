import { TreePine, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex p-4 bg-primary/20 rounded-full mb-6">
            <TreePine className="w-12 h-12 text-primary" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Forest is Waiting…
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join 10,000+ players who already hate these trees
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-10 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
            >
              <a href="#play">
                <Gamepad2 className="w-5 h-5 mr-2" />
                START HIKING
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold rounded-full px-10 py-6 text-lg transition-all hover:scale-105"
            >
              <a href="https://discord.gg/zteGwprHT5" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-10 text-muted-foreground">
            <a 
              href="https://discord.gg/zteGwprHT5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Discord
            </a>
            <span className="text-border">•</span>
            <a 
              href="https://www.tiktok.com/@tykenn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <span className="text-border">•</span>
            <a 
              href="https://trees-hate-you.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Official Site
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
