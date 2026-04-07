"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, FileText, Package } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Đăng ký BHYT", desc: "Bảo vệ sức khỏe gia đình.", icon: Heart, href: "/dang-ky-bhyt" },
  { title: "Đăng ký BHXH", desc: "An tâm hưu trí.", icon: ShieldCheck, href: "/dang-ky-bhxh" },
  { title: "Tra cứu biên lai", desc: "Kiểm tra đơn hàng.", icon: FileText, href: "/tra-cuu" },
  { title: "Theo dõi đơn hàng", desc: "Cập nhật trạng thái.", icon: Package, href: "/tra-cuu" },
];

const ServiceGrid = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Link href={s.href} className="block p-10 bg-surface rounded-3xl shadow-ambient border hover:border-primary/20 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary">
                <s.icon />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{s.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default ServiceGrid;
