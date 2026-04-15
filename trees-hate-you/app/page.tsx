import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GameSection } from "@/components/game-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { CommunitySection } from "@/components/community-section"
import { DeveloperSection } from "@/components/developer-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function TreesHateYouPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GameSection />
      <AboutSection />
      <FeaturesSection />
      <CommunitySection />
      <DeveloperSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
