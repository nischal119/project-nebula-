"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { useAppStore } from "@/lib/store"
import Link from "next/link"
import { companions } from "@/lib/data"

export function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Perfect Companion</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {companions.map((companion, index) => (
            <CompanionCard key={companion.id} {...companion} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CompanionCard({ id, name, description, image, rating, views, tags, index }: any) {
  const { isNSFW } = useAppStore()

  return (
    <Link href={`/companion/${id}`}>
      <motion.div
        className="group relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          y: -5,
          transition: { duration: 0.2 },
        }}
      >
        <div className="aspect-[3/4] relative">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-300 ${
              !isNSFW ? "blur-2xl" : ""
            } group-hover:scale-110`}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

          <div className="absolute top-2 left-2">
            <Badge className="bg-white/10 backdrop-blur border-0 text-xs">{rating}</Badge>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-2 transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-sm font-bold mb-1">{name}</h3>
            <p className="text-xs text-gray-300 mb-2 line-clamp-2">{description}</p>

            <div className="flex flex-wrap gap-1 mb-2">
              {tags.slice(0, 2).map((tag: string) => (
                <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 transition-colors text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-end text-xs text-gray-400">
              <Eye className="w-3 h-3 mr-1" />
              {views}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

