"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/context/authcontext";
import { useRouter } from "next/navigation";
import { Chrome } from "lucide-react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // Simulate Google sign in
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data (replace with actual Google Auth later)
      const mockUser = {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        createdAt: new Date().toISOString(),
      };

      signIn(mockUser);
      router.push("/");
    } catch (error) {
      console.error("Sign in failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0D0B1F]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
          >
            <span className="text-2xl font-bold">AI</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Welcome to CompanionAI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400"
          >
            Sign in to continue your journey
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
        >
          <Button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full h-12 bg-white hover:bg-gray-100 text-gray-900 flex items-center justify-center gap-3 mb-4 relative overflow-hidden group"
          >
            <Chrome className="w-5 h-5" />
            <span className="font-medium">Continue with Google</span>
            {isLoading && (
              <motion.div
                className="absolute inset-0 bg-black/10"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1,
                  ease: "linear",
                }}
              />
            )}
          </Button>

          <div className="text-center text-sm text-gray-400">
            <p>By continuing, you agree to our</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
