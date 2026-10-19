import { asset } from "@/lib/paths";
import { profile } from "@/lib/data";

interface SocialLink {
  label: string;
  href: string;
  icon: string;
  glow: string;
  invert?: boolean;
  external?: boolean;
}

// Thin vertical divider separates professional (LinkedIn/GitHub) from social (Message/Facebook/Instagram).
type ContactItem = SocialLink | { divider: true };

const contactItems: ContactItem[] = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: asset("/pics/linkin.png"),
    glow: "#0a66c2",
    external: true,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: asset("/pics/github-logo.png"),
    glow: "#f1f1f1",
    external: true,
  },
  { divider: true },
  {
    label: "Message",
    href: `mailto:${profile.email}`,
    icon: asset("/pics/contact-mail.png"),
    glow: "#e8793a",
    invert: true,
  },
  {
    label: "Facebook",
    href: profile.facebook,
    icon: asset("/pics/fblogo.png"),
    glow: "#1877f2",
    external: true,
  },
  {
    label: "Instagram",
    href: profile.instagram,
    icon: asset("/pics/instapng.png"),
    glow: "#dd2a7b",
    external: true,
  },
];

function isDivider(item: ContactItem): item is { divider: true } {
  return "divider" in item;
}

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

      {/* Contact card — tagline + labeled social icon row */}
      <div className="card p-7">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl uppercase tracking-wide text-brand-orange">
          Contact
        </h3>
        <p className="mt-1 text-[13px] text-[#8a7a80]">
          Let&apos;s connect — find me here
        </p>

        <div className="mt-5 flex flex-wrap items-start justify-center gap-4">
          {contactItems.map((item) => {
            if (isDivider(item)) {
              return (
                <div
                  key="divider"
                  aria-hidden="true"
                  className="hidden h-12 w-px self-center bg-[#3a2a2f] sm:block"
                />
              );
            }

            const isExternal = item.external ?? false;
            return (
              <a
                key={item.label}
                href={item.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex w-16 flex-col items-center gap-2"
                aria-label={item.label}
              >
                <span
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-[#3a2a2f] bg-[linear-gradient(145deg,#1f1419,#241720)] transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_4px_15px_var(--glow)]"
                  style={{ ["--glow" as string]: item.glow }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt=""
                    className={`h-6 w-6 object-contain ${item.invert ? "invert" : ""}`}
                  />
                </span>
                <span className="text-[11px] text-[#8a7a80] transition-colors group-hover:text-white">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
