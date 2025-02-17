"use client"
import { Home, Heart, Users, Image, Star, Crown, Coins, Plus, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/lib/store"

const mainNavItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Following",
    icon: Heart,
    href: "/following",
  },
  {
    title: "Top Creators",
    icon: Star,
    href: "/creators",
  },
]

const personalNavItems = [
  {
    title: "My Profile",
    icon: Users,
    href: "/profile",
  },
  {
    title: "My Collection",
    icon: Image,
    href: "/collection",
  },
  {
    title: "Favorites",
    icon: Heart,
    href: "/favorites",
  },
]

const subscriptionNavItems = [
  {
    title: "Premium Access",
    icon: Crown,
    href: "/premium",
    variant: "premium",
  },
  {
    title: "Coins",
    icon: Coins,
    href: "/coins",
  },
]

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useAppStore()

  return (
    <>
      {/* Backdrop */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <div
        className={cn("fixed top-0 bottom-0 left-0 z-40 transition-all duration-300", isSidebarOpen ? "w-64" : "w-16")}
      >
        <div className="absolute inset-0 bg-[#1A1B1E]/95 backdrop-blur-xl border-r border-white/10" />
        <div className="relative h-full flex flex-col">
          <div className="sticky top-0 z-10 bg-black/40 backdrop-blur-xl p-4 border-b border-white/10 mt-20">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600" />
              {isSidebarOpen && <span className="font-bold text-lg">CompanionAI</span>}
            </div>

            {isSidebarOpen && (
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Companion
              </Button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
            <nav className="space-y-6">
              <div>
                {isSidebarOpen && <div className="text-xs uppercase text-gray-400 px-2 mb-2">Main</div>}
                <ul className="space-y-1">
                  {mainNavItems.map((item) => (
                    <NavItem key={item.title} {...item} isCollapsed={!isSidebarOpen} />
                  ))}
                </ul>
              </div>

              <div>
                {isSidebarOpen && <div className="text-xs uppercase text-gray-400 px-2 mb-2">Personal</div>}
                <ul className="space-y-1">
                  {personalNavItems.map((item) => (
                    <NavItem key={item.title} {...item} isCollapsed={!isSidebarOpen} />
                  ))}
                </ul>
              </div>

              <div>
                {isSidebarOpen && <div className="text-xs uppercase text-gray-400 px-2 mb-2">Subscription</div>}
                <ul className="space-y-1">
                  {subscriptionNavItems.map((item) => (
                    <NavItem key={item.title} {...item} isCollapsed={!isSidebarOpen} />
                  ))}
                </ul>
              </div>
            </nav>
          </div>
          <div className="sticky bottom-0 z-10 bg-black/40 backdrop-blur-xl p-4 border-t border-white/10">
            <NavItem title="Settings" icon={Settings} href="/settings" isCollapsed={!isSidebarOpen} />
          </div>
        </div>
        <button
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 rounded-full p-1.5 z-50"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </>
  )
}

function NavItem({
  title,
  icon: Icon,
  href,
  variant,
  isCollapsed,
}: {
  title: string
  icon: any
  href: string
  variant?: "premium"
  isCollapsed?: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-2 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors",
          variant === "premium" &&
            "bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30",
          isCollapsed && "justify-center",
        )}
      >
        <Icon className="w-5 h-5" />
        {!isCollapsed && (
          <>
            <span>{title}</span>
            {variant === "premium" && (
              <span className="ml-auto text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full">
                PRO
              </span>
            )}
          </>
        )}
      </Link>
    </li>
  )
}

