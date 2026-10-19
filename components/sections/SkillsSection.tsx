import { skillCategories } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="card fade-up p-7">
        <h2 className="section-title">Skills</h2>
        <div className="mt-5 space-y-6">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="font-[family-name:var(--font-sub)] text-sm uppercase tracking-[0.2em] text-[#a79a9e]">
                {category.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={`${category.name}-${skill.name}`}
                    className="group flex w-[68px] flex-col items-center gap-2"
                  >
                    <span
                      className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-[#3a2a2f] bg-[linear-gradient(145deg,#241720,#2a1a22)] transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-y-[3px] group-hover:shadow-[0_4px_15px_var(--glow)]"
                      style={{ ["--glow" as string]: skill.glow }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={skill.icon}
                        alt=""
                        className="h-7 w-7 object-contain"
                      />
                    </span>
                    <span className="text-center text-[11px] text-[#a79a9e] transition-colors group-hover:text-white">
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
