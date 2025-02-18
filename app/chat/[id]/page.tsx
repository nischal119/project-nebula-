"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Send,
  Image,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { companions } from "@/lib/data";
import { useRouter } from "next/navigation";

export default function ChatPage({ params }: { params: { id: string } }) {
  const [companion, setCompanion] = useState<any>(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        'When Jamie walked in I knew she was mad about the locks being changed. "Look who it is the girl who thinks she keep staying here without paying me. It\'s been three months Jamie I can\'t let you go another dodging rent." I said with a stern tone. "I know but my car broke down again and it\'s gonna take a lot to fix it." she says with big pleading eyes. Her car was a real piece of shit, but her online shopping was the real reason for culprit here.',
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = companions.find((c) => c.id.toString() === params.id);
    if (found) setCompanion(found);
  }, [params.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (!companion) return null;

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      role: "user",
      content: inputMessage,
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");

    // Simulate AI response (replace with actual AI integration later)
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content:
          "This is a simulated AI response. Integrate with an actual AI model for real conversations.",
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-white/10 backdrop-blur-xl bg-black/40 sticky top-0 z-50"
      >
        <div className="container max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="mr-2"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={companion.image || "/placeholder.svg"}
                alt={companion.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold truncate">{companion.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Online
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hidden sm:flex"
              >
                <Phone className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hidden sm:flex"
              >
                <Video className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chat Area */}
      <div className="flex-1 overflow-auto p-4">
        <div className="container max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex gap-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={companion.image || "/placeholder.svg"}
                    alt={companion.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-white/10 backdrop-blur"
                }`}
              >
                <p>{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-t border-white/10 backdrop-blur-xl bg-black/40 sticky bottom-0"
      >
        <div className="container max-w-4xl mx-auto p-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hidden sm:flex"
            >
              <Image className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hidden sm:flex"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              className="flex-1 bg-white/5 border-white/10 focus:border-purple-500"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hidden sm:flex"
            >
              <Smile className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={handleSendMessage}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
