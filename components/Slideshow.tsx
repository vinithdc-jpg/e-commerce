"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/fashion1.jpg",
    title: "New Collection",
    description: "Discover the latest fashion trends.",
  },
  {
    image: "/images/fashion2.jpg",
    title: "Summer Style",
    description: "Fresh styles for your summer wardrobe.",
  },
  {
    image: "/images/fashion3.jpg",
    title: "Premium Fashion",
    description: "Elegant clothing for every occasion.",
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

      <div
        className="relative min-h-[40vh] bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[40vh] items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold">{slides[current].title}</h1>

            <p className="mt-4 text-lg">{slides[current].description}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
  );
}
