"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { Search, Bell, Menu } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ProfileDropdown } from "@/components/layout/profile-dropdown";
import { motion } from "framer-motion";

const categories = [
  "Sexy Female",
  "Dominant Male",
  "Dominant Female",
  "Dominant Futa",
  "Submissive Female",
  "Sexy Male",
  "✨ Deluxe",
  "👧 Female",
  "👨 Male",
  "🎭 Scenarios",
];

export function Header() {
  const [activeCategory, setActiveCategory] = useState("Sexy Female");
  const { isNSFW, toggleNSFW, toggleSidebar, isSidebarOpen } = useAppStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMainPage = pathname === "/";

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition-all duration-200 w-full ",
        isScrolled
          ? "bg-[#1A1B1E]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-evenly h-16 px-4">
        {/* Left Section */}
        <div className="flex items-center  gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            CompanionAI
          </span>
        </div>

        {/* Center Section - Search (Desktop Only) */}
        <div className="hidden md:flex flex-1 max-w-xl  px-4">
          <div className="relative w-full">
            <Input
              placeholder="Search companions..."
              className="w-full bg-white/5 border-white/10 pl-10 focus:border-purple-500 transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 ">
          {/* NSFW Toggle - Always visible but compact on mobile */}
          <div className="flex items-center gap-2 px-2 py-1.5 bg-white/5 rounded-full border border-white/10">
            <span className="text-xs font-medium">NSFW</span>
            <Switch
              checked={isNSFW}
              onCheckedChange={toggleNSFW}
              className="scale-75 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600"
            />
          </div>

          {/* Always Visible Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20"
          >
            <Bell className="w-4 h-4" />
          </Button>

          <ProfileDropdown />
        </div>
      </div>

      {/* Categories - Hidden when sidebar is open on mobile */}
      {isMainPage && !isSidebarOpen && (
        <div className="overflow-x-auto no-scrollbar border-t border-white/5">
          <div className="flex gap-2 p-2 px-4 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  " py-2 rounded-full text-sm transition-all duration-200 whitespace-nowrap p-2",
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white"
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
