"use client";

import { useSearchParams } from "next/navigation";
import { weddingData } from "@/lib/weddingData";
import Countdown from "@/components/Countdown";
import { motion } from "framer-motion";

export default function InviteClient() {
  const params = useSearchParams();
  const guest = params.get("guest");

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#fdf6e3] to-[#f7f3ee] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-10 pointer-events-none"></div>

      {/* Card container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white p-12 rounded-3xl shadow-2xl max-w-xl w-full text-center space-y-10 border border-[#e6dbc8] font-serif relative z-10"
      >
        {/* Guest Welcome */}
        {guest && (
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl leading-relaxed text-gray-800"
          >
            أهلاً وسهلاً بك يا{" "}
            <span className="text-[#b59b5b] font-semibold">{guest}</span>،
            <br />
            نُشرف بحضورك ومشاركتك فرحتنا
          </motion.p>
        )}

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex justify-center my-6"
        >
          <svg width="100" height="4" viewBox="0 0 100 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="4" rx="2" fill="#b59b5b" />
          </svg>
        </motion.div>

        {/* Wedding Names */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold tracking-wide hover:text-[#d4af37] transition-colors"
        >
          {weddingData.bride} <span className="text-[#b59b5b]">&</span> {weddingData.groom}
        </motion.h1>

        {/* Wedding Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="space-y-2 text-lg text-gray-700"
        >
          <p>{weddingData.date}</p>
          <p className="font-semibold">{weddingData.venue} – {weddingData.city}</p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pt-4"
        >
          <p className="text-lg font-semibold text-gray-800 mb-2">الوقت المتبقي على الزفاف</p>
          <Countdown targetDate={weddingData.date} />
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-[#e6dbc8]"
        >
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(weddingData.venue + " " + weddingData.city)}&output=embed`}
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </main>
  );
}