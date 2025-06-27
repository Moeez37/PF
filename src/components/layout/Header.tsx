'use client'
import React, { useState } from "react";
import homeContent from "@/content/homeContent";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";

const Header = () => {
  const { logo, navLinks, resumeButton } = homeContent.header;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 backdrop-blur bg-overlay/60 shadow-glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl text-primary">
          {typeof logo === 'object' && 'image' in logo && typeof logo.image === 'string' && logo.image ? (
            <img src={logo.image} alt={logo.text} className="h-8 w-8 rounded-full object-cover" />
          ) : (
            <span>{logo.text}</span>
          )}
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="p-6 rounded-full relative group text-base font-medium text-muted hover:text-primary hover:bg-overlay transition-colors"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.08, color: "var(--primary)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {link.label}
              </motion.span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
          ))}
        </nav>
        {/* Resume Button */}
        <Button href={resumeButton.href} target={"_blank"} variant="primary" className="shadow-glass hover:bg-card-dark">
          {resumeButton.label}
        </Button>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-overlay/95 shadow-glass animate-slide-down z-40">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href={resumeButton.href} target={"_blank"} variant="primary" className="mt-4 shadow-glass">
              {resumeButton.label}
            </Button>
          </nav>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.25s ease;
        }
      `}</style>
    </header>
  );
};

export default Header; 