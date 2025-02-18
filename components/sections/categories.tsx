"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { companions } from "@/lib/data";
import { useState } from "react";
import cn from "classnames";

// Dummy categories with subcategories
const categoryMap = {
  "Sexy Female": ["Flirty", "Romantic", "Playful"],
  "Dominant Male": ["Alpha", "CEO", "Bad Boy"],
  "Dominant Female": ["Mistress", "Boss Lady", "Domme"],
  "Dominant Futa": ["Aggressive", "Powerful", "Commanding"],
  "Submissive Female": ["Shy", "Sweet", "Innocent"],
  "Sexy Male": ["Charming", "Athletic", "Artist"],
  "✨ Deluxe": ["VIP", "Premium", "Exclusive"],
  "👧 Female": ["Student", "Professional", "Housewife"],
  "👨 Male": ["Teacher", "Doctor", "Engineer"],
  "🎭 Scenarios": ["Office", "Home", "Public"],
};

export function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );

  // Filter companions based on active category and subcategory
  const filteredCompanions = companions.filter((companion) => {
    if (!activeCategory) return true;
    if (!activeSubcategory) return companion.tags.includes(activeCategory);
    return (
      companion.tags.includes(activeCategory) &&
      companion.tags.includes(activeSubcategory)
    );
  });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-purple-900/20 to-transparent px-4">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Choose Your Perfect Companion
        </h2>

        {/* Subcategories */}
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              <motion.button
                key="all"
                onClick={() => setActiveSubcategory(null)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-200",
                  !activeSubcategory
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white"
                )}
              >
                All {activeCategory}
              </motion.button>
              {categoryMap[activeCategory as keyof typeof categoryMap]?.map(
                (subcategory) => (
                  <motion.button
                    key={subcategory}
                    onClick={() => setActiveSubcategory(subcategory)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm transition-all duration-200",
                      activeSubcategory === subcategory
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-white/5 text-gray-400 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white"
                    )}
                  >
                    {subcategory}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredCompanions.map((companion, index) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              index={index}
              onClick={() => setActiveCategory(companion.tags[0])}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredCompanions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-8"
          >
            No companions found for the selected category.
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CompanionCard({
  id,
  name,
  description,
  image,
  rating,
  views,
  tags,
  index,
  onClick,
}: any) {
  const { isNSFW } = useAppStore();

  return (
    <Link href={`/companion/${id}`}>
      <motion.div
        className="group relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          y: -5,
          transition: { duration: 0.2 },
        }}
        onClick={onClick}
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
            <Badge className="bg-white/10 backdrop-blur border-0 text-xs">
              {rating}
            </Badge>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-3 transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-base font-bold mb-1 truncate">{name}</h3>
            <p className="text-sm text-gray-300 mb-2 line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-1 mb-2">
              {tags.slice(0, 2).map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/5 hover:bg-white/10 transition-colors text-xs"
                >
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
  );
}
