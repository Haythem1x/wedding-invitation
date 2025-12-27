
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

interface Message {
  id?: number;
  name: string;
  message: string;
  created_at?: string;
}

const Guestbook = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      const { error } = await supabase.from("guestbook").insert([{ name, message }]);
      if (error) {
        console.error("Error inserting message:", error);
      } else {
        fetchMessages(); // Refresh messages after inserting
        setName("");
        setMessage("");
      }
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8"> سجل الزوار </h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
              <input
                type="text"
                placeholder="اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="رسالتك"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300"
                rows={4}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#b59b5b] text-white p-3 rounded-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              إرسال
            </motion.button>
          </form>
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id || index}
                className="bg-white p-4 rounded-lg shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="font-bold">{msg.name}</p>
                <p>{msg.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
