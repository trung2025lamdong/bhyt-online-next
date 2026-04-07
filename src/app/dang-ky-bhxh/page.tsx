"use client";

import { motion } from "framer-motion";
import { Upload, ShieldCheck, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function DangKyBHXH() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-40 pb-20 bg-surface">
        <div className="container mx-auto px-6 text-center max-w-3xl">
           <h1 className="text-4xl md:text-6xl font-black text-on-surface mb-6">BHXH Tự nguyện 2026</h1>
        </div>
      </header>
      <section className="py-20 container mx-auto px-6">
        <div className="bg-white p-12 rounded-[40px] shadow-ambient border border-outline-variant max-w-4xl mx-auto">
            <div className="aspect-video border-2 border-dashed border-outline-variant rounded-3xl flex flex-col items-center justify-center">
                <Upload className="w-12 h-12 text-primary mb-4" />
                <p className="font-bold">Chọn ảnh CCCD (Mặt trước/Mặt sau)</p>
            </div>
            <div className="mt-10 flex justify-end">
                <Button size="lg">Gửi yêu cầu ngay <ChevronRight/></Button>
            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
