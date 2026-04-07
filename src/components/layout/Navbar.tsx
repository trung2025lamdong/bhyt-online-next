"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Đăng ký BHYT", href: "/dang-ky-bhyt" },
    { name: "Đăng ký BHXH", href: "/dang-ky-bhxh" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 glass-nav flex items-center">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary" />
          <span className="text-xl font-black text-primary uppercase">TGV-BHGD</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
             <li key={item.href}>
                <Link href={item.href} className={cn("text-sm font-bold uppercase", pathname === item.href ? "text-primary" : "text-on-surface-variant")}>
                    {item.name}
                </Link>
             </li>
          ))}
        </ul>
        <div className="hidden lg:block">
            <Button size="sm">Đăng ký ngay</Button>
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X/> : <Menu/>}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
