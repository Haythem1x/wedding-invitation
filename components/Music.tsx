
"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src="/romantic-music.mp3" autoPlay loop />
      <motion.button
        onClick={togglePlay}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? "暂停" : "播放"}
      </motion.button>
    </div>
  );
};

export default Music;
