"use client"

import { motion, useScroll } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Sidebar } from "@/components/layout/sidebar"
import { Hero } from "@/components/sections/hero"
import { Categories } from "@/components/sections/categories"
import { ChatPreview } from "@/components/sections/chat-preview"
import { Pricing } from "@/components/sections/pricing"
import { useAppStore } from "@/lib/store"
import cn from "classnames"

export default function Page() {
  const { scrollYProgress } = useScroll()
  const { isSidebarOpen } = useAppStore()

  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 transform-origin-0 z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Sidebar />
      <main className={cn("transition-all duration-300", isSidebarOpen ? "ml-64" : "ml-16")}>
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Categories />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ChatPreview />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Pricing />
        </motion.div>
        <Footer />
      </main>
    </div>
  )
}

