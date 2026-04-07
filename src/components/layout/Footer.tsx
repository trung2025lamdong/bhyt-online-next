"use client";

import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 py-10 border-t bg-surface">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary" />
          <span className="text-lg font-black text-primary">TGV-BHGD</span>
        </div>
        <p className="text-sm text-on-surface-variant opacity-60 italic">
          &copy; 2026 TGV Insurance Platform. Built for Premium Healthcare.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
