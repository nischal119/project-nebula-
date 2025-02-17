import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="w-32 h-8 bg-purple-500/20 rounded" />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-purple-400 transition">
            Pricing
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%208.26.16%E2%80%AFPM-Ncn7dpoMTbcCmr1IKNdc2hRe3q4eVR.png"
          alt="AI Companion"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="max-w-2xl text-4xl md:text-5xl font-bold mb-6">
            Experience intimate conversations and deep connections with AI companions designed just for you.
          </h1>
          <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-6">Start Chatting Now →</Button>
        </div>
      </section>

      {/* Character Cards */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        <div className="bg-purple-900/50 p-6 rounded-lg">
          <h3 className="text-xl mb-2 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">🏠</span>
            Your Roommate
          </h3>
          <p className="text-purple-200">She's always around... but now things are getting interesting.</p>
        </div>
        <div className="bg-purple-900/50 p-6 rounded-lg">
          <h3 className="text-xl mb-2 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">💼</span>
            Your Co-worker
          </h3>
          <p className="text-purple-200">Long meetings and late nights... what happens when work gets steamy?</p>
        </div>
        <div className="bg-purple-900/50 p-6 rounded-lg">
          <h3 className="text-xl mb-2 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">🏘️</span>
            Your Hot Neighbor
          </h3>
          <p className="text-purple-200">The girl next door is full of secrets.</p>
        </div>
      </section>

      {/* Chat Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-purple-900/30 p-6 rounded-lg max-w-2xl mx-auto">
          <div className="mb-4">
            <p className="bg-purple-800/50 p-3 rounded-lg inline-block">
              Hey there! I've been thinking about you all day... 😊
            </p>
          </div>
          <div className="flex justify-end">
            <p className="bg-pink-600/30 p-3 rounded-lg inline-block">I can't stop thinking about you either...</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-purple-900/30 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-purple-300">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Basic chat features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>1 AI personality
              </li>
            </ul>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </div>

          <div className="bg-purple-900/30 p-8 rounded-lg relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600">Most Popular</Badge>
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-purple-300">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                All basic features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Unlimited AI personalities
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Voice messages
              </li>
            </ul>
            <Button className="w-full bg-pink-600 hover:bg-pink-700">Choose Premium</Button>
          </div>

          <div className="bg-purple-900/30 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">VIP</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-purple-300">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                All premium features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Custom AI personality creation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Priority support
              </li>
            </ul>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose VIP</Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-purple-900/30 p-6 rounded-lg max-w-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full" />
            <div>
              <h4 className="font-bold">Alex M.</h4>
              <div className="flex gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-none" />
                  ))}
              </div>
            </div>
          </div>
          <p className="text-purple-200">
            "The most engaging AI companion I've ever experienced. The conversations feel so natural and intimate."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/50 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-purple-300 max-w-[200px]">Experience the future of digital companionship.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-purple-300">
                <li>
                  <a href="#" className="hover:text-purple-100">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-100">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-100">
                    NSFW Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-purple-300">
                <li>
                  <a href="#" className="hover:text-purple-100">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-100">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-100">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-purple-300 hover:text-purple-100">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-purple-300 hover:text-purple-100">
                  <span className="sr-only">Discord</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                  </svg>
                </a>
                <a href="#" className="text-purple-300 hover:text-purple-100">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-900/50 text-center text-sm text-purple-300">
            © 2025 LoveAI. All rights reserved. Must be 18+ to use this service.
          </div>
        </div>
      </footer>
    </div>
  )
}

