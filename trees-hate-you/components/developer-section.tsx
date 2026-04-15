import { User, Calendar, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const milestones = [
  { icon: Calendar, text: "Started June 2025 as a tiny joke project" },
  { icon: TrendingUp, text: "Went mega-viral on TikTok November 2025" },
  { icon: Sparkles, text: "Full Steam release planned for 2026" },
]

export function DeveloperSection() {
  return (
    <section id="developer" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-4">
              <User className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Meet the Creator</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Made by Tykenn
            </h2>
            <p className="text-xl text-secondary font-bold">
              One Guy, One Angry Forest
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Avatar/Image placeholder */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-display text-6xl md:text-8xl text-primary">T</span>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full animate-bounce" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-bounce delay-200" />
                </div>
              </div>

              {/* Story */}
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Solo developer <span className="font-bold text-primary">Tykenn</span> started Trees Hate You in June 2025 as a tiny joke project. A single TikTok clip went mega-viral in November 2025 and turned it into a full Steam release planned for 2026.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  Now the game has multiple biomes, character creation, collectibles, and the most evil trees in indie gaming history.
                </p>

                {/* Milestones */}
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <milestone.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{milestone.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10 pt-8 border-t border-border">
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full"
              >
                <a href="https://www.tiktok.com/@tykenn" target="_blank" rel="noopener noreferrer">
                  Follow @tykenn on TikTok
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold rounded-full"
              >
                <a href="https://discord.gg/zteGwprHT5" target="_blank" rel="noopener noreferrer">
                  Join Official Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
