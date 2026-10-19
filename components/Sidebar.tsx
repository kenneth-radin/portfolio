import { asset } from "@/lib/paths";
import { profile } from "@/lib/data";

export default function Sidebar() {
  return (
    <aside className="fade-up space-y-4 lg:sticky lg:top-24">
      {/* Profile card */}
      <div className="card overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-brand-maroon via-brand-orange/70 to-brand-maroon" />
        <div className="px-5 pb-5 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="-mt-12 mx-auto h-24 w-24 rounded-full border-4 border-brand-card object-cover shadow-lg"
          />
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-xl">
            {profile.name}
          </h2>
          <p className="mt-1 text-sm text-white/70">{profile.headline}</p>

          <div className="mt-4 flex justify-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-brand-orange"
              aria-label="GitHub"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/pics/github-logo.png")} alt="GitHub" className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-brand-orange"
              aria-label="LinkedIn"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/pics/linkin.png")} alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-brand-orange"
              aria-label="Email"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/pics/contact-mail.png")}
                alt="Email"
                className="h-5 w-5 invert"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Quick contact card */}
      <div className="card p-5">
        <h3 className="section-title text-sm">Contact</h3>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          <li className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/pics/contact-mail.png")} alt="" className="h-4 w-4 invert" />
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-brand-orange"
            >
              {profile.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/pics/github.png")} alt="" className="h-4 w-4 invert" />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange"
            >
              github.com/kenneth-radin
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
