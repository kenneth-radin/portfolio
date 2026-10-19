import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education">
      <div className="card fade-up p-6">
        <h2 className="section-title">Education</h2>
        <div className="mt-5 space-y-4">
          {education.map((entry) => (
            <div key={entry.school} className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.logo}
                alt={entry.school}
                className="h-14 w-14 rounded-full border-2 border-brand-orange/50 object-cover"
              />
              <div>
                <h3 className="font-[family-name:var(--font-sub)] text-white">
                  {entry.school}
                </h3>
                <p className="text-sm text-white/70">{entry.degree}</p>
                <p className="text-xs text-white/50">{entry.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
