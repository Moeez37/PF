'use client';
import React, { useState } from "react";
import homeContent from "@/content/homeContent";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import  Button from "@/components/common/Button";

const BlogCarousel = () => {
  const { title, subtitle, items } = homeContent.blogs;
  const [index, setIndex] = useState(0);
  const total = items.length;

  const handlePrev = () => setIndex((i) => (i - 1 + total) % total);
  const handleNext = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{title}</h3>
      <p className="text-muted mb-8">{subtitle}</p>
      <div className="relative flex flex-col items-center">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-card/60 dark:bg-card-dark/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-primary/10"
            >
              <img
                src={items[index].image}
                alt={items[index].title}
                className="w-40 h-32 object-cover rounded-xl mb-4 shadow"
              />
              <h4 className="text-xl font-bold text-foreground mb-2">{items[index].title}</h4>
              <p className="text-muted mb-4">{items[index].excerpt}</p>
              <Button href={items[index].href} variant="primary" className="px-5 py-2 rounded-lg text-foreground font-semibold shadow hover:bg-primary/90 transition-colors" >
                {items[index].cta}
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Navigation Arrows */}
        <div className="flex gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-muted dark:bg-muted-dark hover:bg-primary/20 transition-colors"
            aria-label="Previous"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-muted dark:bg-muted-dark hover:bg-primary/20 transition-colors"
            aria-label="Next"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel; 