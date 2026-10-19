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
  photo: "/pics/profile_portfolio.jpg",
  about: [
    "Hello! I'm Kenneth Radin, a passionate developer with a keen interest in building responsive, user-friendly web and mobile applications.",
    "I work with TypeScript, Next.js, Node.js, and AI integrations to build seamless digital experiences — from REST APIs and mobile apps to full-stack AI products.",
  ],
  email: "elmarkennethradin@gmail.com",
  github: "https://github.com/kenneth-radin",
  linkedin: "https://www.linkedin.com/in/kenneth-radin-041b95359",
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
    image: "/pics/stdomicon.png",
    repo: "https://github.com/kenneth-radin/app-grain",
  },
  {
    title: "AgriDry-AI",
    description:
      "AI-driven frontend application focused on agriculture-tech use cases.",
    tech: ["AI", "Frontend"],
    image: "/pics/pfkona.jpg",
    repo: "https://github.com/kenneth-radin/AgriDry-AI-FE",
  },
  {
    title: "ScentryX",
    description:
      "Backend service for the ScentryX platform, built with Node.js and Express.",
    tech: ["Node.js", "JavaScript", "Backend"],
    image: "/pics/insta2.jpg",
    repo: "https://github.com/kenneth-radin/ScentryX-BE",
  },
  {
    title: "Student Schedule Tracker",
    description:
      "Mobile app that helps students track their subject schedules and navigate their classes easily. Built with Flutter and Firebase.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/pics/studenprof.png",
    repo: "https://github.com/kenneth-radin/SDCA-IT-ELEC4-Flutter",
  },
  {
    title: "REST API (IT303)",
    description:
      "Backend API built with Node.js and MongoDB, following REST conventions with full CRUD operations.",
    tech: ["Node.js", "MongoDB", "REST API"],
    image: "/pics/prevproj.png",
    repo: "https://github.com/kenneth-radin/SDCA-IT303-API",
  },
  {
    title: "Next.js App (IT308)",
    description:
      "Full-stack web application developed with Next.js and TypeScript for an IT coursework project.",
    tech: ["Next.js", "TypeScript", "React"],
    image: "/pics/stdomicon.png",
    repo: "https://github.com/kenneth-radin/SDCA-IT308-Next-App",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", icon: "/pics/java-script.png" },
      { name: "JavaScript", icon: "/pics/java-script.png" },
      { name: "Java", icon: "/pics/java.png" },
      { name: "C", icon: "/pics/letter-c.png" },
      { name: "Dart", icon: "/pics/dart.png" },
      { name: "HTML5", icon: "/pics/html_icon.png" },
      { name: "CSS3", icon: "/pics/css_icon.png" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", icon: "/pics/java-script.png" },
      { name: "React", icon: "/pics/java-script.png" },
      { name: "HTML5", icon: "/pics/html_icon.png" },
      { name: "CSS3", icon: "/pics/css_icon.png" },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "/pics/node-js.png" },
      { name: "MongoDB", icon: "/pics/mongodb.jpg" },
      { name: "Firebase", icon: "/pics/firebase.png" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "/pics/git.png" },
      { name: "IntelliJ", icon: "/pics/intel.png" },
      { name: "VS Code", icon: "/pics/vs.png" },
      { name: "NetBeans", icon: "/pics/netbeans.png" },
      { name: "Flutter", icon: "/pics/flutter.png" },
      { name: "Render", icon: "/pics/render.jpg" },
    ],
  },
];

export const certificates: Certificate[] = [
  { src: "/pics/cert1.png", alt: "Certificate 1" },
  { src: "/pics/cert2.png", alt: "Certificate 2" },
  { src: "/pics/cert3.png", alt: "Certificate 3" },
  { src: "/pics/oracle.jpg", alt: "Oracle Certificate" },
  { src: "/pics/databasecert.jpg", alt: "Database Certificate" },
  { src: "/pics/mscert.jpg", alt: "Microsoft Certificate" },
];

// TODO: fill in your real education details, then update this entry.
export const education = [
  {
    school: "Your School Name",
    degree: "Your Course / Degree",
    years: "20XX – 20XX",
    logo: "/pics/profile_portfolio.jpg",
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
