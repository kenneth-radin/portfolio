"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-brand-dark/95 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-10 w-10 rounded-full border-2 border-brand-orange object-cover"
          />
          <span className="font-[family-name:var(--font-sub)] text-lg text-white sm:text-xl">
            {profile.name}
          </span>
        </a>

        <div className="flex flex-wrap items-center justify-end gap-1 text-sm sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`rounded-lg px-2 py-1.5 transition-colors sm:px-3 ${
                active === link.href
                  ? "text-brand-orange"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-lg bg-brand-orange px-4 py-1.5 font-[family-name:var(--font-sub)] text-white transition-colors hover:bg-brand-orange/85 sm:block"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
