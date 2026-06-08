"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Good quality for upvc and tuffend glass ISI mark glass good service hd glass najafgarh.",
    name: "Akshaibar Ojha",
    role: "Delhi",
    image: "/reviews/review1.jpg",
  },
  {
    text: "Good service and quality upvc from hd glass.",
    name: "Giriraj",
    role: "Gurugram",
    image: "/reviews/review2.jpg",
  },
  {
    text: "First I was looking to get aluminium installed but UPVC is the best.",
    name: "Jitender Singh",
    role: "Noida",
    image: "/reviews/review3.jpg",
  },
  {
    text: "Best UPVC Door Compare to Aluminium Door.",
    name: "Rahul Dagar",
    role: "Faridabad",
    image: "/reviews/review4.jpg",
  },
  {
    text: "Good quality work.",
    name: "Bilal Khan",
    role: "Delhi",
    image: "/reviews/review5.jpg",
  },
  {
    text: "👍 Nice work and good quality hd glass.",
    name: "Mahendra Singh Sangwan",
    role: "Delhi NCR",
    image: "/reviews/review6.jpg",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimating(true);

      timeoutRef.current = setTimeout(() => {
        setStartIndex((prev) => (prev + 1) % reviews.length);
        console.log(startIndex)
        setAnimating(false);
      }, 300);
    }, 2500);

    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const visibleReviews = [0, 1, 2, 3].map(
    (offset) => reviews[(startIndex + offset) % reviews.length]
  );

  return (
    <section className="overflow-hidden bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Loved By Customers
          </h2>

          <p className="mt-5 text-2xl leading-8 text-gray-600">
            Reviews from our customers who upgraded their spaces with our customized products. 
          </p>
        </div>

        <div className="mt-14 overflow-hidden">
          <div
            className={`grid grid-cols-1 gap-8 transition-all duration-500 md:grid-cols-4 ${
              animating ? "-translate-x-8 opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="group relative overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-[420px] w-full overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-black/40 transition duration-500 group-hover:bg-black/0" />

                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover brightness-75 transition-all duration-500 ease-in-out group-hover:brightness-100 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                      <Quote size={22} />
                    </div>

                    <p className="min-h-[120px] leading-8">"{review.text}"</p>

                    <div className="mt-6 border-t border-white/30 pt-4">
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="mt-1 text-sm text-gray-200">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === startIndex ? "w-6 bg-blue-600" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}