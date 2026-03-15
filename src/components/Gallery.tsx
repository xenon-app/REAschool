"use client";

import React from "react";
import Link from "next/link";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

function DirectionHoverCard({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl} className="w-full h-full md:w-80 md:h-80">
        <p className="font-bold text-xl">{title}</p>
      </DirectionAwareHover>
    </div>
  );
}

const galleryPhotos = [
  {
    imageUrl: "/rea school image.png",
    title: "Main Campus Entrance",
  },
  {
    imageUrl: "/library.jpg",
    title: "University Library",
  },
  {
    imageUrl: "/computer lab.jpg",
    title: "Computer Lab",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=800&auto=format&fit=crop",
    title: "Annual Sports Meet",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    title: "Student Discussion",
  },
  {
    imageUrl: "/Science exhibation.jpg",
    title: "Science Exhibition",
  }
];

const photoItems = galleryPhotos.map((item) => (
  <DirectionHoverCard
    key={item.title}
    imageUrl={item.imageUrl}
    title={item.title}
  />
));

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest uppercase text-orange-500 mb-2">
            Gallery
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Capturing Moments of <span className="text-orange-500">Excellence</span>
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Take a look at our vibrant campus life, modern facilities, and the diverse activities of our students.
          </p>
        </div>
        <Link
          href="/gallery"
          className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap hidden sm:block"
        >
          View All Photos
        </Link>
      </div>

      <div className="h-[30rem] md:h-[40rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={photoItems.slice(0, 5)} direction="right" speed="slow" className="bg-transparent" />
      </div>

      <div className="mt-8 flex justify-center sm:hidden">
        <Link
          href="/gallery"
          className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
        >
          View All Photos
        </Link>
      </div>
    </section>
  );
}
