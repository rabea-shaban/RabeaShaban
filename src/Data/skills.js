import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux",
      "Context API",
      "Vite",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [".NET Core", "API Development", "RESTful Services"],
  },
  {
    category: "Styling",
    icon: Palette,
    skills: ["Bootstrap", "Tailwind CSS", "Sass", "Responsive Design"],
  },
  {
    category: "CMS & Tools",
    icon: Code2,
    skills: ["WordPress", "Elementor", "Blocksy", "Git", "GitHub"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["SQL Server", "MySQL", "API Integration"],
  },
  {
    category: "Deployment",
    icon: Smartphone,
    skills: ["Hosting", "Deployment", "Domain Management"],
  },
];
