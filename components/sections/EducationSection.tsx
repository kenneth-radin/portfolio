import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education">
      <div className="card fade-up p-7">
        <h2 className="section-title">Education</h2>
        <div className="mt-5 space-y-6">
          {education.map((entry) => (
            <div key={entry.school} className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.logo}
                alt={entry.school}
                className="h-16 w-16 rounded-full border-2 border-brand-orange/50 object-cover shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-[family-name:var(--font-sub)] text-white">
                    {entry.school}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-[family-name:var(--font-sub)] ${
                      entry.status === "Currently Pursuing"
                        ? "bg-brand-orange/20 text-brand-orange border border-brand-orange/40"
                        : "bg-white/10 text-white/70 border border-white/10"
                    }`}
                  >
                    {entry.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/70">{entry.degree}</p>
                {entry.details && (
                  <p className="mt-3 text-sm text-white/85 leading-relaxed">
                    {entry.details}
                  </p>
                )}
                {entry.achievements && entry.achievements.length > 0 && (
                  <div className="mt-4 pl-2 border-l-2 border-brand-orange/40">
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-2">
                      Achievements
                    </p>
                    <ul className="space-y-1.5 text-sm text-white/85 list-disc pl-5">
                      {entry.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
