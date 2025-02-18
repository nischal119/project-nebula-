"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
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
          Manage Profile
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 max-w-md mx-auto"
      >
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username
          </label>
          <Input id="username" defaultValue="SexySarah69" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" type="email" defaultValue="sarah@example.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="bio" className="block text-sm font-medium mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            rows={4}
            className="w-full bg-white/5 border border-gray-600 rounded-md p-2"
            defaultValue="I'm a fun-loving girl who enjoys deep conversations and naughty roleplay. Let's explore our wildest fantasies together!"
          />
        </div>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          Save Changes
        </Button>
      </motion.div>
    </div>
  );
}
