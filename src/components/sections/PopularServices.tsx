'use client';
import React from "react";
import homeContent from "@/content/homeContent";
import Link from "next/link";
import { Globe, Smartphone, Code } from "lucide-react";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import Popover from "@/components/common/Popover";

const iconMap = { Globe, Smartphone, Code };

const PopularServices = () => {
  const { title, subtitle, mainButton, cards } = homeContent.services;
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-200">{subtitle}</p>
        </div>
        <Link
          href={mainButton.href}
          className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition-colors text-base"
        >
          {mainButton.label}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap] || Globe;
          return (
            <Popover
              key={card.title}
              trigger={
                <motion.div
                  className="group relative bg-card-dark/80 backdrop-blur-lg rounded-2xl shadow-glass p-8 flex flex-col items-center text-center border border-border-dark transition-transform duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.07, boxShadow: "0 12px 36px 0 var(--primary)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                      background: "linear-gradient(120deg, var(--primary) 0%, var(--secondary) 100%)"
                    }}
                  />
                  <div className="mb-4 z-10">
                    <Icon size={40} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2 z-10">{card.title}</h4>
                  <p className="text-muted mb-4 z-10">{card.description}</p>
                  <Button href={card.href} variant="secondary" className="mt-auto z-10">
                    Learn More
                  </Button>
                </motion.div>
              }
            >
              <div className="text-left">
                <div className="font-bold text-lg mb-1">{card.title}</div>
                <div className="mb-2">{card.description}</div>
                <Link href={card.href} className="underline text-primary">
                  Learn More
                </Link>
              </div>
            </Popover>
          );
        })}
      </div>
    </section>
  );
};

export default PopularServices; 