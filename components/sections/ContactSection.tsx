"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

// Get a free form endpoint at https://formspree.io and set
// NEXT_PUBLIC_FORMSPREE_ID in .env.local, e.g. NEXT_PUBLIC_FORMSPREE_ID=xyzabc
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const formspreeUrl = `https://formspree.io/f/${formspreeId}`;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Fallback: no Formspree configured yet — open the user's mail client.
    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("email")}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formspreeUrl, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <div className="card fade-up p-6">
        <h2 className="section-title">Contact</h2>
        <p className="mt-2 text-sm text-white/70">
          Feel free to reach out — I&apos;m open to opportunities and
          collaborations.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand-orange"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand-orange"
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand-orange"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-brand-orange px-6 py-2.5 font-[family-name:var(--font-sub)] text-white transition-colors hover:bg-brand-orange/85 disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-400">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong — please email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
