import Link from "next/link"
import { TreePine } from "lucide-react"

const quickLinks = [
  { label: "Play Demo", href: "#play" },
  { label: "Steam Wishlist", href: "https://store.steampowered.com/app/4171850/Trees_Hate_You/" },
  { label: "Gameplay", href: "#gameplay" },
  { label: "FAQ", href: "#faq" },
]

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@tykenn" },
  { label: "YouTube", href: "https://www.youtube.com/results?search_query=trees+hate+you+game" },
  { label: "Discord", href: "https://discord.gg/zteGwprHT5" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="w-6 h-6 text-primary" />
              <span className="font-display text-lg font-bold text-foreground">
                TREES HATE YOU
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The funniest rage game where the entire forest is out to get you. Don&apos;t trust the trees.
            </p>
            <p className="text-sm text-muted-foreground">
              Fan Hub • Not affiliated with Tykenn (but we love his game)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Follow</h3>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Trees Hate You Fan Hub
            </p>
            
            {/* SEO Keywords */}
            <p className="text-xs text-muted-foreground/50">
              Trees Hate You | Trees Hate You game | Trees Hate You demo | Tykenn | Rage comedy game 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
