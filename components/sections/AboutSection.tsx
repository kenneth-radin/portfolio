import { profile } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="card fade-up p-6">
      <h2 className="section-title">About</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-white/85">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 30)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
