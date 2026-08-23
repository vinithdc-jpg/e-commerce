"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwgOX2Z5ECeUkih0Xyv9Iav-qGrxhCG6zjCZCrFcgLw&s=10",
    title: "New Collection",
    description: "Discover the latest fashion trends.",
    button: "Visit new collection",
    link: "/newarraval",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkeFuCD7CJ06U0TmEPBzEFGZfem4V3Wi4y3WhRlJseIg&s=10",
    title: "Fassion",
    description: "Fresh styles for your summer wardrobe.",
    button: "Visit summber style",
    link: "/fassion",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplOCDvRbtQ6H3UldtMZBRjUvKNgpqcziwvvn5C9F-uQ&s=10",
    title: "Classic",
    description: "Elegant clothing for every occasion.",
    button: "Visit premium fashion",
    link: "/classic",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmPkMJBIh_WOsHASMrQG7HIkzmkXtA-5Up3PaeSwriA&s=10",
    title: "Premiam",
    description: "Elegant clothing for every occasion.",
    button: "Visit premium fashion",
    link: "/Pre",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-black/40 py-8">
      {/* Slider */}
      <div className="relative mx-auto w-[92%] max-w-7xl overflow-hidden rounded-2xl">
        {/* Slides Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-[45vh] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="max-w-xl px-8 text-white md:px-16">
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em]">
                    New Arrival
                  </p>

                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 max-w-lg text-base text-white/90 md:text-lg">
                    {slide.description}
                  </p>

                  <Link
                    href={slide.link}
                    className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:bg-gray-200 hover:scale-105"
                  >
                    {slide.button}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow-md transition hover:bg-white"
        >
          ←
        </button>

        {/* Next Button */}
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow-md transition hover:bg-white"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
