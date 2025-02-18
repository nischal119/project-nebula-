"use client";
import {
  Home,
  Heart,
  Users,
  ImageIcon,
  Star,
  Crown,
  Coins,
  Plus,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Following", icon: Heart, href: "/following" },
  { title: "Top Creators", icon: Star, href: "/creators" },
];

const personalNavItems = [
  { title: "My Profile", icon: Users, href: "/profile" },
  { title: "My Collection", icon: ImageIcon, href: "/collection" },
  { title: "Favorites", icon: Heart, href: "/favorites" },
];

const subscriptionNavItems = [
  {
    title: "Premium Access",
    icon: Crown,
    href: "/premium",
    variant: "premium",
  },
  { title: "Coins", icon: Coins, href: "/coins" },
];

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useAppStore();
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  }, [toggleSidebar]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-screen transition-all duration-300 bg-[#0D0B1F]/95 backdrop-blur-xl border-r border-white/10",
          isSidebarOpen
            ? "w-[280px]"
            : "w-16 -translate-x-full md:translate-x-0",
          "flex flex-col"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0" />
            {isSidebarOpen && (
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CompanionAI
              </span>
            )}
          </div>

          {isSidebarOpen && (
            <Button className="w-full mt-4 h-12 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Plus className="w-5 h-5 mr-2" />
              Create Companion
            </Button>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-8">
            <NavSection
              title="MAIN"
              items={mainNavItems}
              isCollapsed={!isSidebarOpen}
            />
            <NavSection
              title="PERSONAL"
              items={personalNavItems}
              isCollapsed={!isSidebarOpen}
            />
            <NavSection
              title="SUBSCRIPTION"
              items={subscriptionNavItems}
              isCollapsed={!isSidebarOpen}
            />
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <NavItem
            title="Settings"
            icon={Settings}
            href="/settings"
            isCollapsed={!isSidebarOpen}
          />
        </div>

        {/* Toggle Button (Desktop Only) */}
        <button
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 rounded-full p-1.5 z-50 md:flex hidden"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
      </div>
    </>
  );
}

function NavSection({
  title,
  items,
  isCollapsed,
}: {
  title: string;
  items: any[];
  isCollapsed: boolean;
}) {
  return (
    <div>
      {!isCollapsed && (
        <div className="text-xs font-semibold text-gray-400 px-2 mb-3">
          {title}
        </div>
      )}
      <ul className="space-y-1">
        {items.map((item) => (
          <NavItem key={item.title} {...item} isCollapsed={isCollapsed} />
        ))}
      </ul>
    </div>
  );
}

function NavItem({
  title,
  icon: Icon,
  href,
  variant,
  isCollapsed,
}: {
  title: string;
  icon: any;
  href: string;
  variant?: "premium";
  isCollapsed?: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-3 py-3 rounded-lg text-base transition-all duration-200",
          isActive
            ? "bg-purple-600/20 text-white font-medium"
            : "text-gray-300 hover:bg-white/5 hover:text-white",
          variant === "premium" && "bg-purple-900/40 hover:bg-purple-900/60",
          isCollapsed ? "justify-center" : "justify-start"
        )}
      >
        <Icon className="w-6 h-6 flex-shrink-0" />
        {!isCollapsed && (
          <>
            <span className="flex-1">{title}</span>
            {variant === "premium" && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                PRO
              </span>
            )}
          </>
        )}
      </Link>
    </li>
  );
}
