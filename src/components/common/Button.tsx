'use client';
import React from "react";
import Link from "next/link";

const base =
  "inline-flex items-center justify-center font-bold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-card px-6 py-2 text-base";

const variants: Record<string, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 border border-primary",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 border border-secondary",
  accent:
    "bg-accent text-white hover:bg-accent/90 border border-accent",
  ghost:
    "bg-white text-primary border border-primary hover:bg-primary/10 dark:bg-card-dark dark:text-primary",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: "_blank" | "self"
};

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  target
}: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    console.log(target)
    return (
      <Link href={href} target={target} className={classes}>
       {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 