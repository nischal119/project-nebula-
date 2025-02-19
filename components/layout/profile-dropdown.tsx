"use client";

import { useState, useRef, useEffect } from "react";
import { User, Coins, Share2, LogOut } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/authcontext";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleSignOut = () => {
    signOut();
    router.push("/auth/sign-in");
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Avatar className="h-8 w-8 transition-all duration-200 hover:ring-2 hover:ring-purple-600 ring-offset-2 ring-offset-[#0D0B1F]">
        <AvatarImage src={user?.image} />
        <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600">
          {user?.name?.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-[#1A1B1E] border border-white/10 backdrop-blur-xl overflow-hidden z-50"
          >
            <div className="p-2 border-b border-white/10">
              <div className="px-2 py-1">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
              </div>
            </div>

            <div className="p-1">
              {[
                { href: "/profile", icon: User, label: "Profile" },
                { href: "/coins", icon: Coins, label: "Coins" },
                { href: "/refer", icon: Share2, label: "Refer & Earn" },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors hover:bg-white/5"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="border-t border-white/10 mt-1 pt-1">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors hover:bg-white/5 text-red-400 hover:text-red-300 w-full"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
