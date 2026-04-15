import { TreePine, Skull, Brain, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-4">
              <TreePine className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">About the Game</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              What the Heck is Trees Hate You?
            </h2>
          </div>

          {/* Main Content */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                <span className="font-bold text-primary">Trees Hate You</span> is a rage-comedy trap game created by solo developer <span className="font-bold text-secondary">Tykenn</span>. You hike through a beautiful-looking forest that absolutely despises you. Every &quot;safe&quot; path is a setup for the funniest, most humiliating death you&apos;ve ever experienced.
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                It&apos;s not just hard – it&apos;s <em className="text-accent">smart</em>. The trees use psychology, fake road signs, fake safety, and punchline-level traps to mess with your head. Think &quot;I Wanna Be The Guy&quot; meets &quot;Level Devil,&quot; but way funnier and way meaner.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Skull className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Hilarious Deaths</h3>
                    <p className="text-sm text-muted-foreground">Every death is a punchline</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-xl">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Psychology Traps</h3>
                    <p className="text-sm text-muted-foreground">Trees play mind games</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Perfect for Streaming</h3>
                    <p className="text-sm text-muted-foreground">Watch friends suffer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
