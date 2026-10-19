"use client";

import { useState } from "react";
import { certificates } from "@/lib/data";

export default function CertificatesSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certificates">
      <div className="card fade-up p-7">
        <h2 className="section-title">Certificates</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {certificates.map((cert) => (
            <button
              key={cert.src}
              type="button"
              onClick={() => setSelected(cert.src)}
              className="group overflow-hidden rounded-[10px] border border-[#3a2a2f] bg-[#241720] text-left transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(232,121,58,0.3)]"
            >
              {/* Image with hover overlay + magnify icon */}
              <div className="relative h-32 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-full w-full object-cover object-top"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[rgba(27,18,24,0.55)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-white drop-shadow"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </div>

              {/* Caption bar */}
              <div className="border-t border-[#3a2a2f] px-2.5 py-2.5">
                <p className="text-[12px] leading-snug text-[#f1ece8]">
                  {cert.title}
                </p>
                <p className="mt-0.5 text-[10px] text-[#8a7a80]">
                  {cert.issuer}
                </p>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/50">Click a certificate to zoom</p>
      </div>

      {/* Modal (ported from legacy cert.js — click-to-zoom behavior unchanged) */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-6 top-4 text-4xl text-white transition-colors hover:text-brand-orange"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected}
            alt="Certificate enlarged"
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
