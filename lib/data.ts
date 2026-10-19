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
  skills: { name: string; icon: string; glow: string }[];
}

export interface Certificate {
  src: string;
  alt: string;
  title: string;
  issuer: string;
}

export interface Education {
  school: string;
  degree: string;
  status: string;
  details: string;
  achievements?: string[];
  logo: string;
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
  },
  {
    title: "Student Schedule Tracker",
    description:
      "Mobile app that helps students track their subject schedules and navigate their classes easily. Built with Flutter and Firebase.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: asset("/pics/studenprof.png"),
  },
];

// `glow` = brand color used for the hover shadow on each icon tile.
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", icon: asset("/pics/icons/typescript.svg"), glow: "#3178c6" },
      { name: "JavaScript", icon: asset("/pics/java-script.png"), glow: "#f7df1e" },
      { name: "Java", icon: asset("/pics/java.png"), glow: "#e76f00" },
      { name: "C", icon: asset("/pics/letter-c.png"), glow: "#a8b9cc" },
      { name: "Dart", icon: asset("/pics/dart.png"), glow: "#0175c2" },
      { name: "HTML5", icon: asset("/pics/html_icon.png"), glow: "#e34f26" },
      { name: "CSS3", icon: asset("/pics/css_icon.png"), glow: "#1572b6" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", icon: asset("/pics/icons/nextjs.svg"), glow: "#ffffff" },
      { name: "React", icon: asset("/pics/icons/react.svg"), glow: "#61dafb" },
      { name: "HTML5", icon: asset("/pics/html_icon.png"), glow: "#e34f26" },
      { name: "CSS3", icon: asset("/pics/css_icon.png"), glow: "#1572b6" },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node.js", icon: asset("/pics/node-js.png"), glow: "#5fa04e" },
      { name: "MongoDB", icon: asset("/pics/icons/mongodb.svg"), glow: "#00ed64" },
      { name: "Firebase", icon: asset("/pics/firebase.png"), glow: "#ffca28" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: asset("/pics/git.png"), glow: "#f05032" },
      { name: "IntelliJ", icon: asset("/pics/intel.png"), glow: "#fe315d" },
      { name: "VS Code", icon: asset("/pics/vs.png"), glow: "#007acc" },
      { name: "NetBeans", icon: asset("/pics/icons/netbeans.svg"), glow: "#1b6ac6" },
      { name: "Flutter", icon: asset("/pics/flutter.png"), glow: "#02569b" },
      { name: "Render", icon: asset("/pics/icons/render.svg"), glow: "#ffffff" },
    ],
  },
];

// TODO: update issuer names for the 3 newest certs (softdev/htcss/ciscop) if the defaults are wrong.
export const certificates: Certificate[] = [
  {
    src: asset("/pics/cert1.png"),
    alt: "Using HTML and CSS to design a website",
    title: "Using HTML and CSS to design a website",
    issuer: "DICT",
  },
  {
    src: asset("/pics/cert2.png"),
    alt: "Principles of web development",
    title: "Principles of web development",
    issuer: "DICT",
  },
  {
    src: asset("/pics/cert3.png"),
    alt: "Basic JavaScript for web dev",
    title: "Basic JavaScript for web dev",
    issuer: "DICT",
  },
  {
    src: asset("/pics/oracle.jpg"),
    alt: "Java foundations",
    title: "Java foundations",
    issuer: "Oracle Academy",
  },
  {
    src: asset("/pics/databasecert.jpg"),
    alt: "Databases",
    title: "Databases",
    issuer: "Certiport",
  },
  {
    src: asset("/pics/mscert.jpg"),
    alt: "PowerPoint 2019 Associate",
    title: "PowerPoint 2019 Associate",
    issuer: "Microsoft",
  },
  {
    src: asset("/pics/softdev.jpg"),
    alt: "Software Development",
    title: "Software Development",
    issuer: "Issuer TBD",
  },
  {
    src: asset("/pics/htcss.jpg"),
    alt: "HTML & CSS",
    title: "HTML & CSS",
    issuer: "Issuer TBD",
  },
  {
    src: asset("/pics/ciscop.jpg"),
    alt: "Cisco Networking",
    title: "Cisco Networking",
    issuer: "Issuer TBD",
  },
];

// TODO: fill in your real education details, then update this entry.
export const education: Education[] = [
  {
    school: "St. Dominic College of Asia",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    status: "Currently Pursuing",
    details:
      "Developing skills in programming, web development, database management, and software development through academic and personal projects.",
    logo: asset("/pics/stdomicon.png"),
  },
  {
    school: "St. Matthew Academy of Cavite",
    degree: "Senior High School — ICT Strand",
    status: "Graduate",
    achievements: [
      "4th Curricular Awardee",
      "Leadership Award — 24-Hour Coding Hackathon",
      "Project Manager — Overall Champion Hackathon Team",
    ],
    details:
      "Led and coordinated a team during a 24-hour coding challenge, contributing to the successful completion of a project that earned the overall championship.",
    logo: asset("/pics/st-matthew.png"),
  },
  {
    school: "Talaba Elementary School",
    degree: "Elementary Education",
    status: "Graduate",
    details: "",
    logo: asset("/pics/talaba.png"),
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
