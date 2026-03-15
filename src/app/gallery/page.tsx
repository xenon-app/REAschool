"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const allGalleryPhotos = [
  {
    imageUrl: "/rea school image.png",
    title: "Main Campus Entrance",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    imageUrl: "/library.jpg",
    title: "School Library",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    title: "Science Laboratory",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800",
    title: "Annual Sports Meet",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800",
    title: "Student Discussion",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    title: "Graduation Day",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800",
    title: "Classroom Session",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
    title: "Interactive Learning",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    title: "Yoga & Wellness",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    imageUrl: "/computer lab.jpg",
    title: "Computer Lab",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    title: "Reading Nook",
    span: "md:col-span-1 md:row-span-1",
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-[#333333] tracking-tight mb-6"
            >
              Our <span className="text-orange-500">Photo</span> Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#999999] max-w-2xl mx-auto font-medium"
            >
              Capturing the vibrant essence, academic excellence, and joyful moments at R.E.A Public School.
            </motion.p>
          </div>

          {/* Mosaic Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-5">
            {allGalleryPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`${photo.span} relative group cursor-pointer overflow-hidden rounded-[16px] shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                {/* Image */}
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-600/60 transition-all duration-500 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Plus size={32} strokeWidth={3} />
                  </motion.div>

                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
