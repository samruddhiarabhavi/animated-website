"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Headline stagger animation
    gsap.from(".letter", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
    });

    // Stats animation
    gsap.from(".stat", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.8,
      ease: "power2.out",
    });

    // Scroll based animation
    gsap.to(carRef.current, {
      x: 500,
      rotation: 10,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      ease: "none",
    });

  }, []);

  const text = "WELCOME ITZFIZZ";

  return (
    <section
      ref={heroRef}
      className="h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-[0.4em] mb-8 flex">
        {text.split("").map((char, i) => (
          <span key={i} className="letter">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <div className="flex gap-10">
        <div className="stat text-center">
          <h2 className="text-3xl font-bold">95%</h2>
          <p className="text-sm text-gray-400">Customer Satisfaction</p>
        </div>
        <div className="stat text-center">
          <h2 className="text-3xl font-bold">120K+</h2>
          <p className="text-sm text-gray-400">Active Users</p>
        </div>
        <div className="stat text-center">
          <h2 className="text-3xl font-bold">4.9★</h2>
          <p className="text-sm text-gray-400">User Rating</p>
        </div>
      </div>

      <img
        ref={carRef}
        src="/car.png"
        alt="Car"
        className="absolute bottom-10 left-10 w-64 md:w-96"
      />
    </section>
  );
}