import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Chatbot from "@/components/chat/Chatbot";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "TGV-BHGD | Hệ thống Đăng ký BHYT & BHXH Trực tuyến",
  description: "Bản clone Muabhyt chuyên nghiệp, tích hợp hoàn toàn Next.js và Framer Motion. Tối ưu UI/UX cho người dân Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
