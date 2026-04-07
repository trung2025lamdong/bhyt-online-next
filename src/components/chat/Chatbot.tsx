"use client";

import OpenAI from "openai";
import { marked } from "marked";
import { MessageCircle, X, RefreshCw, Send, Sparkles, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "system" | "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Xin chào! Tôi là trợ lý AI của chuyên gia **Nguyễn Văn A**. Tôi có thể giúp gì cho bạn?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const openai = new OpenAI({
    apiKey: "sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
    baseURL: "https://9router.vuhai.io.vn/v1",
    dangerouslyAllowBrowser: true
  });

  const SYSTEM_PROMPT = "Bạn là AI trợ lý cho Nguyễn Văn A chuyên gia AI & Automation...";

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user" as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    try {
      const resp = await openai.chat.completions.create({
        model: "ces-chatbot-gpt-5.4",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages, userMessage]
      });
      setMessages(prev => [...prev, { role: "assistant", content: resp.choices[0]?.message?.content || "" }]);
    } finally { setIsTyping(false); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-primary p-4 rounded-full text-white shadow-xl">
        <MessageCircle />
      </button>
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-outline-variant">
           <div className="bg-primary p-4 text-white flex justify-between">
              <span>AI Assistant</span>
              <button onClick={() => setIsOpen(false)}><X/></button>
           </div>
           <div className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((m, i) => <div key={i} dangerouslySetInnerHTML={{ __html: marked.parse(m.content) }} />)}
           </div>
           <div className="p-4 border-t flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} className="flex-1 border p-2 rounded-xl" />
              <button onClick={handleSend} className="bg-primary text-white p-2 rounded-xl"><Send/></button>
           </div>
        </div>
      )}
    </div>
  );
};
export default Chatbot;
