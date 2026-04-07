"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ShoppingCart, User, Users, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function DangKyBHYT() {
  const [step, setStep] = useState(1);
  const [members, setMembers] = useState(1);
  const BASE_FEE = 1263600;
  const rates = [1, 0.7, 0.6, 0.5, 0.4];
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < members; i++) total += BASE_FEE * rates[Math.min(i, 4)];
    return total;
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 container mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-black mb-12">Đăng ký BHYT Hộ gia đình</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            <div className="bg-white p-10 rounded-[32px] shadow-ambient border border-outline-variant">
                {step === 1 && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold italic text-primary">Bước 1: Thông tin người mua</h2>
                        <input className="w-full h-12 px-4 rounded-xl border border-outline-variant outline-none" placeholder="Họ và tên..." />
                        <Button size="lg" onClick={() => setStep(2)}>Tiếp theo <ArrowRight/></Button>
                    </div>
                )}
                {step === 2 && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold italic text-primary">Bước 2: Số thành viên</h2>
                        <div className="flex gap-4 items-center">
                            <Button onClick={() => setMembers(Math.max(1, members -1))}>-</Button>
                            <span className="text-2xl font-black">{members}</span>
                            <Button onClick={() => setMembers(members + 1)}>+</Button>
                        </div>
                        <div className="flex justify-between pt-8">
                            <Button variant="ghost" onClick={() => setStep(1)}><ArrowLeft/> Quay lại</Button>
                            <Button size="lg" onClick={() => setStep(3)}>Thanh toán</Button>
                        </div>
                    </div>
                )}
                {step === 3 && <div className="text-center py-20 text-emerald-600 font-bold">🎯 Chúc mừng! Bạn đã sẵn sàng hoàn tất.</div>}
            </div>
            <aside className="sticky top-32">
                <div className="bg-primary p-10 rounded-[32px] text-white shadow-2xl">
                    <h3 className="text-xl font-bold mb-6 flex gap-2"><ShoppingCart/> Tóm tắt</h3>
                    <div className="pt-6 border-t border-white/20">
                        <p className="opacity-60 text-xs uppercase font-bold tracking-widest mb-2">Tổng phí dự kiến</p>
                        <p className="text-3xl font-black">{calculateTotal().toLocaleString()} VNĐ</p>
                    </div>
                </div>
            </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
