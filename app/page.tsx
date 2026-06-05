"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      let nextSection = currentSection;

      if (e.deltaY > 0) {
        nextSection = Math.min(
          currentSection + 1,
          sectionsRef.current.length - 1
        );
      } else {
        nextSection = Math.max(currentSection - 1, 0);
      }

      setCurrentSection(nextSection);

      sectionsRef.current[nextSection]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () =>
      window.removeEventListener("wheel", handleWheel);
  }, [currentSection]);

  return (
    <main className="overflow-hidden">
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
      >
        <Hero />
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
      >
        <Features />
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
      >
        <Products />
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
      >
        <Testimonials />
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
      >
        <ContactForm />
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[5] = el;
        }}
      >
        <Footer />
      </section>
    </main>
  );
}