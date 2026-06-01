"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
    text: "👍Nice work and good quality hd glass.",
    name: "Mahendra Singh Sangwan",
    role: "Delhi NCR",
    image: "/reviews/review6.jpg",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const intervalId = setInterval(() => {
      setFade(false);

      timeoutId = setTimeout(() => {
        setStartIndex(
          (prev) => (prev + 1) % reviews.length
        );
        setFade(true);
      }, 300);
    }, 2500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Loved By Homeowners
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Hear from homeowners who upgraded
            their spaces with premium aluminium windows.
          </p>
        </div>

        {/* Reviews */}
        <div
          className={`mt-14 grid grid-cols-1 gap-8 transition-all duration-500 md:grid-cols-3 ${
            fade
              ? "translate-x-0 opacity-100"
              : "-translate-x-8 opacity-0"
          }`}
        >
          {visibleReviews.map((review, index) => (
            <div
              key={`${review.name}-${startIndex}-${index}`}
              className="group relative overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[420px] w-full overflow-hidden">
                {/* dark overlay default */}
                <div className="absolute inset-0 z-10 bg-black/40 transition duration-500 group-hover:bg-black/0" />

                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="
                    object-cover
                    brightness-75
                    scale-100
                    transition-all
                    duration-500
                    ease-in-out
                    group-hover:brightness-100
                    group-hover:scale-110
                  "
                />

                {/* content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                  {/* icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                    <Quote size={22} />
                  </div>

                  {/* review */}
                  <p className="min-h-[120px] leading-8">
                    "{review.text}"
                  </p>

                  {/* user */}
                  <div className="mt-6 border-t border-white/30 pt-4">
                    <h4 className="font-semibold">
                      {review.name}
                    </h4>

                    <p className="mt-1 text-sm text-gray-200">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === startIndex
                  ? "w-6 bg-blue-600"
                  : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}