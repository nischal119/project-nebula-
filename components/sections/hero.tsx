"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="min-h-[calc(100vh-4rem)] px-4 py-8 md:py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
              Your Perfect AI Companion Awaits
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience meaningful conversations and deep connections with AI
              companions designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-purple-600 text-purple-400 hover:bg-purple-600/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-VX8bxCndCxvAhcUdTtBC4ntR5Hz3cG.png"
                alt="AI Companion"
                className="object-contain w-full h-full"
              />
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl" />
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
