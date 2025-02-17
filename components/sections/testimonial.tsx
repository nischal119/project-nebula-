import { Star } from "lucide-react"

export function Testimonial() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-purple-900/30 p-6 rounded-lg max-w-md backdrop-blur">
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
  )
}

