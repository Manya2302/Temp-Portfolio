import { Layers, Zap, Code, Database, Palette, Smartphone, Globe, Cpu } from "lucide-react";

export const NAVIGATION_LINKS = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

export const SOCIAL_LINKS = [
  { 
    name: "Email", 
    href: "mailto:manyaparikh23@gmail.com",
    icon: "Mail",
    label: "MAIL_PROTOCOL"
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/manyaparikh",
    icon: "Linkedin",
    label: "LINKEDIN_NODE"
  },
  { 
    name: "GitHub", 
    href: "https://github.com/Manya2302",
    icon: "Github",
    label: "GITHUB_REPO"
  },
];

export const SKILLS_DATA = [
  {
    category: "Frontend Architecture",
    items: [
      { name: "React / Next.js", level: 98 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 90 },
      { name: "Three.js / R3F", level: 85 },
    ],
    icon: Layers,
  },
  {
    category: "Backend Systems",
    items: [
      { name: "Node.js", level: 92 },
      { name: "PostgreSQL / SQL", level: 88 },
      { name: "GraphQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Serverless (AWS Lambda)", level: 82 },
    ],
    icon: Database,
  },
  {
    category: "Design & UX",
    items: [
      { name: "Figma", level: 90 },
      { name: "UI Animation", level: 92 },
      { name: "Design Systems", level: 95 },
      { name: "Accessibility (WCAG)", level: 88 },
    ],
    icon: Palette,
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Neon Finance",
    description: "A decentralized exchange interface with real-time trading charts, wallet integration, and kinetic micro-interactions.",
    tags: ["React", "Web3", "D3.js", "Framer Motion"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop", // crypto dashboard abstract
  },
  {
    id: 2,
    title: "Aero Dashboard",
    description: "Enterprise analytics platform for aviation logistics featuring 3D globe visualizations and predictive maintenance AI.",
    tags: ["TypeScript", "Three.js", "Python", "FastAPI"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // data visualization
  },
  {
    id: 3,
    title: "Synth UI Kit",
    description: "An open-source React component library focused on glassmorphism and neomorphism design trends.",
    tags: ["Storybook", "React", "Rollup", "NPM"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop", // retro tech synth
  },
  {
    id: 4,
    title: "Omni Chat",
    description: "Real-time collaboration tool with video conferencing, whiteboard sharing, and end-to-end encryption.",
    tags: ["WebRTC", "Socket.io", "Redis", "Node.js"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop", // social connection abstract
  },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "TechNova Corp",
    period: "2023 - Present",
    description: "Leading the frontend architecture migration to Next.js 14. Mentoring a team of 5 developers. Implemented CI/CD pipelines reducing deployment time by 40%.",
  },
  {
    id: 2,
    role: "UI/UX Developer",
    company: "Creative Pulse Studio",
    period: "2021 - 2023",
    description: "Designed and developed award-winning marketing sites for Fortune 500 clients. Specialized in WebGL interactions and performance optimization.",
  },
  {
    id: 3,
    role: "Frontend Engineer",
    company: "StartUp Inc",
    period: "2019 - 2021",
    description: "Built the MVP for a fintech application that secured Series A funding. Collaborated closely with product managers to iterate on user feedback.",
  },
];
