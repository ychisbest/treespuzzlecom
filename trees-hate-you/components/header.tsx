"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Play Now", href: "#play" },
  { label: "Gameplay", href: "#gameplay" },
  { label: "Community", href: "#community" },
  { label: "Developer", href: "#developer" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <TreePine className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              TREES HATE YOU
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6">
              <a href="https://store.steampowered.com/app/4171850/Trees_Hate_You/" target="_blank" rel="noopener noreferrer">
                Wishlist on Steam
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full mt-2">
                <a href="https://store.steampowered.com/app/4171850/Trees_Hate_You/" target="_blank" rel="noopener noreferrer">
                  Wishlist on Steam
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
