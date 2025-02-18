"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Copy, Check, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const dummyReferrals = [
  { name: "User 1", date: "2023-10-26", coins: 100 },
  { name: "User 2", date: "2023-10-27", coins: 150 },
  { name: "User 3", date: "2023-10-28", coins: 200 },
];

export default function ReferPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const referralLink = "https://companionai.com/ref/SexySarah69";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Refer and Earn
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4">Your Referral Link</h2>
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 bg-white/10 border border-gray-600 rounded-l-md p-2"
          />
          <Button
            onClick={copyToClipboard}
            className="rounded-l-none bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </Button>
        </div>
        <h2 className="text-xl font-semibold mb-4">Successful Referrals</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Coins Earned</th>
              </tr>
            </thead>
            <tbody>
              {dummyReferrals.map((referral, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-2">{referral.name}</td>
                  <td className="p-2">{referral.date}</td>
                  <td className="p-2">{referral.coins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
