"use client";

import type React from "react";

import { AuthProvider } from "@/lib/context/authcontext";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { useAppStore } from "@/lib/store";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen } = useAppStore();

  return (
    <html lang="en" className="antialiased">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <AuthProvider>
          <div className="min-h-screen bg-[#0D0B1F] text-white flex">
            <Sidebar />
            <div
              className={cn(
                "flex-1 flex flex-col transition-all duration-300 w-full",
                isSidebarOpen ? "md:ml-64" : "md:ml-16"
              )}
            >
              <Header />
              <main className="flex-1 overflow-x-hidden">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
