"use client";

import { motion, useScroll } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { ChatPreview } from "@/components/sections/chat-preview";
import { Pricing } from "@/components/sections/pricing";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 transform-origin-0 z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
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
    </div>
  );
}
