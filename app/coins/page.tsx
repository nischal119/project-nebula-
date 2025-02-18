"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Coins, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CoinsPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Total Coins
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto text-center"
      >
        <Coins className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
        <h2 className="text-4xl font-bold mb-2">1,337 Coins</h2>
        <p className="text-gray-400 mb-6">Available Balance</p>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          Earn more Coins
        </Button>
      </motion.div>
    </div>
  );
}
