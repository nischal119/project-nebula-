"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: ["Basic chat features", "1 AI personality"],
    buttonText: "Get Started",
    buttonVariant: "default" as const,
  },
  {
    name: "Premium",
    price: "$29",
    period: "/month",
    features: ["All basic features", "Unlimited AI personalities", "Voice messages"],
    buttonText: "Choose Premium",
    buttonVariant: "premium" as const,
    popular: true,
  },
  {
    name: "VIP",
    price: "$99",
    period: "/month",
    features: ["All premium features", "Custom AI personality creation", "Priority support"],
    buttonText: "Choose VIP",
    buttonVariant: "default" as const,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-purple-300">{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={cn(
                  "w-full",
                  tier.buttonVariant === "premium"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : "bg-purple-600 hover:bg-purple-700",
                )}
              >
                {tier.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

