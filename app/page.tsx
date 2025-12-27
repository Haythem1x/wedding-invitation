"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Countdown from "../components/Countdown";
import Guestbook from "../components/Guestbook";

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState("");
  const router = useRouter();

  const handleOpen = () => {
    if (!guestName) return alert("الرجاء كتابة اسمك أولاً!");
    setOpened(true);
    setTimeout(() => {
      router.push(`/invite?guest=${encodeURIComponent(guestName)}`);
    }, 2000); // wait for flap animation
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f7f3ee] perspective-1000">
      <input
        type="text"
        placeholder="اكتب اسمك هنا"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        className="mb-6 p-3 rounded-lg border border-gray-300 w-64 text-center font-serif"
      />

      <div className="relative w-80 h-60 cursor-pointer" onClick={handleOpen}>
        {/* Envelope body */}
        <div className="absolute inset-0 bg-[#b59b5b] rounded-lg shadow-lg z-0"></div>

        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-t-lg z-10 shadow-md origin-bottom"
          animate={opened ? { rotateX: -150 } : { rotateX: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-serif text-[#b59b5b]">
              اضغط لفتح الدعوة
            </p>
          </div>
        </motion.div>

        {/* Envelope inner content */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-1/2 bg-white rounded-b-lg z-5 shadow-inner flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={opened ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-lg font-serif text-gray-800">دعوتك لحضور الزفاف</p>
        </motion.div>
      </div>

      <Gallery />
      <Location />
      <Countdown targetDate="2024-12-30T19:00:00" />
      <Guestbook />
    </main>
  );
}
