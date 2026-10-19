import { asset } from "@/lib/paths";
import { profile } from "@/lib/data";

export default function Sidebar() {
  return (
    <aside className="fade-up space-y-5 lg:sticky lg:top-24">
      {/* Profile card */}
      <div className="card overflow-hidden">
        <div className="h-28 bg-gradient-to-r from-brand-maroon via-brand-orange/70 to-brand-maroon" />
        <div className="px-6 pb-7 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="-mt-[4.5rem] mx-auto h-36 w-36 rounded-full border-[5px] border-brand-orange object-cover shadow-xl"
          />
          <h2 className="mt-5 font-[family-name:var(--font-heading)] text-3xl tracking-wide">
            {profile.name}
          </h2>
          <p className="mt-2 text-base text-white/70">{profile.headline}</p>
        </div>
      </div>

      {/* Quick contact card — all social links live here */}
      <div className="card p-7">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl uppercase tracking-wide text-brand-orange">
          Contact
        </h3>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 p-3.5 transition-colors hover:bg-brand-orange"
            aria-label="LinkedIn"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/pics/linkin.png")} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 p-3.5 transition-colors hover:bg-brand-orange"
            aria-label="GitHub"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/pics/github-logo.png")} alt="GitHub" className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl bg-white/10 p-3.5 transition-colors hover:bg-brand-orange"
            aria-label="Email"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/pics/contact-mail.png")}
              alt="Email"
              className="h-6 w-6 invert"
            />
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 p-3.5 transition-colors hover:bg-brand-orange"
            aria-label="Facebook"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/pics/fblogo.png")} alt="Facebook" className="h-6 w-6" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 p-3.5 transition-colors hover:bg-brand-orange"
            aria-label="Instagram"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/pics/instapng.png")}
              alt="Instagram"
              className="h-6 w-6 object-contain"
            />
          </a>
        </div>
      </div>
    </aside>
  );
}
