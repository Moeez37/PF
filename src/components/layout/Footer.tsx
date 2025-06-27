import React from "react";
import homeContent from "@/content/homeContent";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Button from "@/components/common/Button";

const iconMap = { Github, Linkedin, Twitter };

const Footer = () => {
  const { navLinks, servicesLinks, socials, subscribe, copyright } = homeContent.footer;
  return (
    <footer className="bg-overlay/80 backdrop-blur-lg border-t border-border-dark mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation */}
        <div>
          <h4 className="font-bold text-foreground mb-4">Navigation</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-muted hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="font-bold text-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {servicesLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-muted hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Socials */}
        <div>
          <h4 className="font-bold text-foreground mb-4">Follow Me</h4>
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap] || Github;
              return (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
        {/* Subscribe */}
        <div>
          <h4 className="font-bold text-foreground mb-4">Subscribe</h4>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder={subscribe.placeholder}
              className="px-4 py-2 rounded-lg border border-border-dark bg-card-dark text-foreground placeholder-muted focus:ring-2 focus:ring-primary outline-none"
            />
            <Button type="submit" variant="primary">
              {subscribe.button}
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center text-muted text-sm py-4 border-t border-border-dark">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer; 