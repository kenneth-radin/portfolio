import { asset } from "@/lib/paths";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  repo?: string;
  demo?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; icon: string }[];
}

export interface Certificate {
  src: string;
  alt: string;
}

export const profile = {
  name: "Kenneth Radin",
  headline: "Aspiring IT Professional | Full-Stack Developer",
  photo: asset("/pics/profile_portfolio.jpg"),
  about: [
    "Hello! I'm Kenneth Radin, a passionate developer with a keen interest in building responsive, user-friendly web and mobile applications.",
    "I work with TypeScript, Next.js, Node.js, and AI integrations to build seamless digital experiences — from REST APIs and mobile apps to full-stack AI products.",
  ],
  email: "elmarkennethradin@gmail.com",
  github: "https://github.com/kenneth-radin",
  linkedin: "https://www.linkedin.com/in/kenneth-radin-041b95359",
  // TODO: replace with your real Facebook / Instagram profile URLs.
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

// TODO: edit descriptions/screenshots to match your real projects.
// Screenshots currently reuse images from the legacy site — drop real
// screenshots into public/pics and update the `image` fields below.
export const projects: Project[] = [
  {
    title: "grAIn",
    description:
      "AI-powered full-stack product built with TypeScript, split across a Next.js frontend (app-grain) and a dedicated backend (backend-grain).",
    tech: ["TypeScript", "Next.js", "AI", "Node.js"],
    image: asset("/pics/stdomicon.png"),
    repo: "https://github.com/kenneth-radin/app-grain",
  },
  {
    title: "Hogwarts Treasury",
    description:
      "Harry Potter-inspired e-commerce website designed with a magical wizarding-world aesthetic. Built during a 24-hour coding challenge, combining themed visual design with an online shopping experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "E-Commerce"],
    image: asset("/pics/pfkona.jpg"),
  },
  {
    title: "ScentryX",
    description:
      "Backend service for the ScentryX platform, built with Node.js and Express.",
    tech: ["Node.js", "JavaScript", "Backend"],
    image: asset("/pics/insta2.jpg"),
    repo: "https://github.com/kenneth-radin/ScentryX-BE",
  },
  {
    title: "Student Schedule Tracker",
    description:
      "Mobile app that helps students track their subject schedules and navigate their classes easily. Built with Flutter and Firebase.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: asset("/pics/studenprof.png"),
    repo: "https://github.com/kenneth-radin/SDCA-IT-ELEC4-Flutter",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", icon: asset("/pics/java-script.png") },
      { name: "JavaScript", icon: asset("/pics/java-script.png") },
      { name: "Java", icon: asset("/pics/java.png") },
      { name: "C", icon: asset("/pics/letter-c.png") },
      { name: "Dart", icon: asset("/pics/dart.png") },
      { name: "HTML5", icon: asset("/pics/html_icon.png") },
      { name: "CSS3", icon: asset("/pics/css_icon.png") },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", icon: asset("/pics/java-script.png") },
      { name: "React", icon: asset("/pics/java-script.png") },
      { name: "HTML5", icon: asset("/pics/html_icon.png") },
      { name: "CSS3", icon: asset("/pics/css_icon.png") },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node.js", icon: asset("/pics/node-js.png") },
      { name: "MongoDB", icon: asset("/pics/mongodb.jpg") },
      { name: "Firebase", icon: asset("/pics/firebase.png") },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: asset("/pics/git.png") },
      { name: "IntelliJ", icon: asset("/pics/intel.png") },
      { name: "VS Code", icon: asset("/pics/vs.png") },
      { name: "NetBeans", icon: asset("/pics/netbeans.png") },
      { name: "Flutter", icon: asset("/pics/flutter.png") },
      { name: "Render", icon: asset("/pics/render.jpg") },
    ],
  },
];

export const certificates: Certificate[] = [
  { src: asset("/pics/cert1.png"), alt: "Certificate 1" },
  { src: asset("/pics/cert2.png"), alt: "Certificate 2" },
  { src: asset("/pics/cert3.png"), alt: "Certificate 3" },
  { src: asset("/pics/oracle.jpg"), alt: "Oracle Certificate" },
  { src: asset("/pics/databasecert.jpg"), alt: "Database Certificate" },
  { src: asset("/pics/mscert.jpg"), alt: "Microsoft Certificate" },
];

// TODO: fill in your real education details, then update this entry.
export const education = [
  {
    school: "Your School Name",
    degree: "Your Course / Degree",
    years: "20XX – 20XX",
    logo: asset("/pics/profile_portfolio.jpg"),
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
