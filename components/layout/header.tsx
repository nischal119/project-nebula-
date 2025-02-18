"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { Search, Plus, Bell, Globe, ChevronDown } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
  const { isNSFW, toggleNSFW } = useAppStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useAppStore();

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
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
        isScrolled
          ? " backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      {/* Top Bar */}
      <div className="p-3 flex items-center gap-4">
        <div className="flex items-center gap-4 mr-4">
          {isSidebarOpen && (
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CompanionAI
            </span>
          )}
        </div>

        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Input
              placeholder="Click to open Search..."
              className="bg-[#27282B] border-0 pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Create
            <ChevronDown className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#27282B] rounded-full">
            <span className="text-sm">NSFW</span>
            <Switch
              checked={isNSFW}
              onCheckedChange={toggleNSFW}
              className="data-[state=checked]:bg-purple-600"
            />
          </div>

          <Button variant="ghost" size="icon">
            <Globe className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>

          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
            SL
          </div>
        </div>
      </div>

      {/* Categories */}
      {isMainPage && (
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-2 p-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-colors",
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-[#27282B] text-gray-400 hover:bg-gray-700 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
