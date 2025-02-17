"use client";

import type React from "react";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen } = useAppStore();

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#0D0B1F] text-white">
          <Header />
          <Sidebar />
          <main
            className={cn(
              "transition-all duration-300 pt-20 px-4",
              isSidebarOpen ? "ml-64" : "ml-16"
            )}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
