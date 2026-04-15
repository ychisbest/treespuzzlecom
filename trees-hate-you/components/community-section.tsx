import { Play, MessageCircle, Quote } from "lucide-react"

const videos = [
  {
    title: "DashieGames Full Playthrough",
    views: "570K+ views",
    thumbnail: "DashieGames",
  },
  {
    title: "MoistCr1TiKaL Reacts",
    views: "Most cursed deaths",
    thumbnail: "MoistCr1TiKaL",
  },
  {
    title: "TikTok Compilation",
    views: "500K+ plays",
    thumbnail: "TikTok",
  },
]

const quotes = [
  {
    text: "Bro the trees are actually bullying me",
    author: "@CaseOh",
  },
  {
    text: "This is the funniest rage game of 2026",
    author: "Reddit r/IndieGaming",
  },
  {
    text: "I hate these trees but I can't stop playing",
    author: "8-BitRyan chat",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Internet is Obsessed
          </h2>
          <p className="text-lg text-muted-foreground">
            Join millions of players raging at these evil trees
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground ml-1" />
                  </div>
                  <span className="text-foreground font-bold">{video.thumbnail}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.views}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium text-foreground">What Players Are Saying</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 relative"
              >
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
                <div className="relative z-10 pt-4">
                  <p className="text-foreground text-lg mb-4 leading-relaxed">
                    &quot;{quote.text}&quot;
                  </p>
                  <p className="text-sm text-primary font-medium">
                    – {quote.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
