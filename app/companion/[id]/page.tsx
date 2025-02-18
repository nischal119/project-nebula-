"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, Flag, Eye, Star, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { companions } from "@/lib/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CompanionPage({ params }: { params: { id: string } }) {
  const [companion, setCompanion] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const found = companions.find((c) => c.id.toString() === params.id);
    if (found) setCompanion(found);
  }, [params.id]);

  if (!companion) return null;

  return (
    <div className="pb-16 pt-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Image and Actions */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[3/4] relative rounded-xl overflow-hidden"
            >
              <img
                src={companion.image || "/placeholder.svg"}
                alt={companion.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                      {companion.name}
                    </h1>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge
                        variant="secondary"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {companion.rating}
                      </Badge>
                      <span className="flex items-center gap-1 text-gray-300">
                        <Eye className="w-4 h-4" /> {companion.views}
                      </span>
                      <span className="flex items-center gap-1 text-gray-300">
                        <Star className="w-4 h-4" /> 4.9
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-2 justify-center">
              <Button variant="secondary" size="lg" className="flex-1">
                <Heart className="w-5 h-5 mr-2" /> Like
              </Button>
              <Button variant="secondary" size="lg" className="flex-1">
                <Share2 className="w-5 h-5 mr-2" /> Share
              </Button>
              <Button variant="secondary" size="lg" className="flex-1">
                <Flag className="w-5 h-5 mr-2" /> Report
              </Button>
            </div>
          </div>

          {/* Right Column - Info and Tabs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur"
            >
              <div className="flex gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400">
                    {companion.views}
                  </div>
                  <div className="text-sm text-gray-400">Views</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400">
                    {companion.likes}
                  </div>
                  <div className="text-sm text-gray-400">Likes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">
                    {companion.messages}
                  </div>
                  <div className="text-sm text-gray-400">Messages</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur"
            >
              <h3 className="text-lg font-medium mb-4">About</h3>
              <p className="text-gray-300 leading-relaxed">
                {companion.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur"
            >
              <h3 className="text-lg font-medium mb-4">Creator</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600" />
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-medium truncate">
                    @{companion.creator}
                  </div>
                  <div className="text-sm text-gray-400">
                    Created {companion.createdAt}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur"
            >
              <h3 className="text-lg font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {companion.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/10 text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              <Link href={`/chat/${companion.id}`}>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  size="lg"
                >
                  Start New Chat
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-400 hover:bg-purple-600/10"
                size="lg"
              >
                Generate Pictures
              </Button>
            </div>

            <Tabs defaultValue="gallery" className="w-full">
              <TabsList className="w-full bg-black/20">
                <TabsTrigger value="gallery" className="flex-1">
                  Media Gallery
                </TabsTrigger>
                <TabsTrigger value="chats" className="flex-1">
                  Recent Chats
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="gallery" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-white/5 rounded-lg overflow-hidden"
                    >
                      <img
                        src="/placeholder.svg"
                        alt="Gallery item"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="chats" className="mt-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-600" />
                        <div>
                          <div className="font-medium">User{item}</div>
                          <div className="text-sm text-gray-400">
                            2 hours ago
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        This is a preview of a recent chat message...
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-600" />
                        <div>
                          <div className="font-medium">Reviewer{item}</div>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        This companion is amazing! The conversations feel so
                        real and engaging.
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
