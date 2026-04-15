import { Target, Zap, Map, Gamepad } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Trap-First Design",
    description: "The forest plans every death like a stand-up comedy routine. Clean path → fake safety → instant punchline death. You'll laugh before you even respawn.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Retry Loop",
    description: "Die in 3 seconds? Respawn in 1. No long loading screens. No frustration. Just pure chaotic joy.",
    color: "secondary",
  },
  {
    icon: Map,
    title: "Multiple Biomes & Upgrades",
    description: "Start in the classic evil forest, then unlock cursed swamps, haunted orchards, and more. Collect ridiculous hats, find the secret axe, and maybe… fight back?",
    color: "accent",
  },
  {
    icon: Gamepad,
    title: "Controller & Keyboard Friendly",
    description: "Simple controls. Deep troll mechanics. Zero hand-holding.",
    color: "primary",
  },
]

export function FeaturesSection() {
  return (
    <section id="gameplay" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Players Can&apos;t Stop Playing
          </h2>
          <p className="text-lg text-muted-foreground">
            (Even When They Hate It)
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                feature.color === 'primary' ? 'bg-primary/20' :
                feature.color === 'secondary' ? 'bg-secondary/20' :
                'bg-accent/20'
              }`}>
                <feature.icon className={`w-8 h-8 ${
                  feature.color === 'primary' ? 'text-primary' :
                  feature.color === 'secondary' ? 'text-secondary' :
                  'text-accent'
                }`} />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fun quote */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            &quot;The pause menu isn&apos;t safe either.&quot; – every player ever
          </p>
        </div>
      </div>
    </section>
  )
}
