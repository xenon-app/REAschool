import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  text: string;
  href?: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
}: TestimonialsSectionProps) {
  // Duplicate for smooth infinite scroll
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-white py-24 px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4">
          {title}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Marquee Wrapper */}
        <div className="group flex w-full space-x-6 overflow-hidden">
          <div className="flex shrink-0 animate-marquee space-x-6 group-hover:[animation-play-state:paused]">
            {items.map((testimonial, i) => (
              <div
                key={i}
                className="w-80 shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
              >
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {testimonial.author.name}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {testimonial.author.handle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Second block for seamless scroll */}
          <div className="flex shrink-0 animate-marquee space-x-6 aria-hidden group-hover:[animation-play-state:paused]">
            {items.map((testimonial, i) => (
              <div
                key={i + items.length}
                className="w-80 shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
              >
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {testimonial.author.name}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {testimonial.author.handle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient fades on left and right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
