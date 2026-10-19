import { skillCategories } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="card fade-up p-6">
        <h2 className="section-title">Skills</h2>
        <div className="mt-5 space-y-6">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="font-[family-name:var(--font-sub)] text-sm uppercase tracking-wider text-white/60">
                {category.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={`${category.name}-${skill.name}`}
                    className="flex w-20 flex-col items-center gap-2 rounded-lg p-2 transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 object-contain"
                    />
                    <span className="text-center text-xs text-white/80">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
