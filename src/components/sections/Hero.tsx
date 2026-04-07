"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-surface">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-6xl font-black text-on-surface mb-8 leading-tight">
            Kiến tạo an tâm <br /> cho <span className="text-primary italic">gia đình Việt</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed">
            Đăng ký BHYT hộ gia đình và BHXH tự nguyện nhanh chóng, tiện lợi.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Đăng ký ngay <ArrowRight /></Button>
            <Button variant="outline" size="lg">Tra cứu</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
          <img src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=800" className="rounded-3xl shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
