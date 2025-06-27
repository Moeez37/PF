'use client';
import React from "react";
import homeContent from "@/content/homeContent";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const { name, role, pitch, cta, image, alt } = homeContent.hero;

  return (
    <section className="relative mx-auto flex flex-col md:flex-row items-center justify-between max-w-7xl px-4 pt-40 pb-8 md:pt-40 md:pb-24 min-h-[70vh]">
      {/* Animated Background Circles */}
      {/* <motion.div
        className="absolute inset-0 -z-10 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="rounded-full bg-primary/10 blur-2xl w-96 h-96 absolute left-[-10%] top-[-10%] hidden md:block"
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="rounded-full bg-secondary/10 blur-2xl w-72 h-72 absolute right-[-10%] bottom-[-10%] hidden md:block"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </motion.div> */}
      {/* Left: Intro */}
      <div className="flex-1 flex flex-col items-start gap-6 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-primary">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-amber-300 mb-2">
          {role}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-4">
          {pitch}
        </p>
        <Link
          href={cta.href}
          className="inline-block px-7 py-3 rounded-lg bg-gray-700 text-white font-semibold shadow-lg hover:bg-primary/90 transition-colors text-lg"
        >
          {cta.label}
        </Link>
      </div>
      {/* Right: Profile Image */}
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 z-10">
        <motion.img
          src={image}
          alt={alt}
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-neutral-900 bg-neutral-900/60 backdrop-blur-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default HeroSection; 