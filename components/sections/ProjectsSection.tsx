import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="card fade-up p-7">
        <h2 className="section-title">Projects</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card card-hover group overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden bg-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-[family-name:var(--font-sub)] text-lg text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-brand-orange/15 px-2.5 py-0.5 text-xs text-brand-orange"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
