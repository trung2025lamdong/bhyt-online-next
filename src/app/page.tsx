"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceGrid />
      <Footer />
    </main>
  );
}
