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
              className="group overflow-hidden rounded-lg border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/50">Click a certificate to zoom</p>
      </div>

      {/* Modal (ported from legacy cert.js) */}
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
