"use client"

import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Trees Hate You free?",
    answer: "The full demo is 100% free on itch.io. The complete game will be a paid release on Steam in 2026.",
  },
  {
    question: "When does Trees Hate You release?",
    answer: "Full version coming 2026. Wishlist now to get notified on launch day!",
  },
  {
    question: "What kind of game is Trees Hate You?",
    answer: "It's a rage-comedy trap platformer / walking simulator where the environment is the enemy. Short, replayable, and extremely funny.",
  },
  {
    question: "Do I need a powerful PC?",
    answer: "Nope! Minimum specs are super low – Windows 10 and 1 GB storage. Runs great on almost anything.",
  },
  {
    question: "Are there more updates coming?",
    answer: "Yes! Tykenn is actively adding new traps, biomes, and features every month. Join Discord for the latest.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">FAQ</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trees Hate You FAQ
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything You Need to Know
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-display text-lg font-bold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
