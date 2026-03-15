"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
