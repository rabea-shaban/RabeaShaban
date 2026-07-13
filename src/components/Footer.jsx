import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/rabea-shaban", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rabea-sh-elzayat",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/rabea_sh_elzayat",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:rabea-elzayate@gmail.com", label: "Email" },
    { icon: Phone, href: "https://wa.me/201156807072", label: "WhatsApp" },
    { icon: Globe, href: "https://rabea-shaban.com", label: "Website" },
    {
      icon: Briefcase,
      href: "https://upwork.com/freelancers/~01d2bd68b7d6e8fbce",
      label: "Upwork",
    },
    {
      icon: Briefcase,
      href: "https://mostaql.com/u/rabea_elzayat",
      label: "Mostaql",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Certificates", path: "/Certificates" },
  ];

  const techStack = [
    "React & Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js & MongoDB",
    "Docker & Kubernetes",
    "AWS & Terraform",
  ];

  return (
    <footer className="bg-card border-t border-border/50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold font-display gradient-text">
              Rabea Shaban
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Full Stack Software Engineer designing high-performance web systems, 
              containerized orchestration pipelines, and scalable cloud architectures. 
              Delivering secure backend APIs and fluid frontends.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass-effect border border-border/60 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="h-4.5 w-4.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Tech Stack Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">Tech Stack</h3>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rabea Shaban. All rights reserved.</p>
          <p className="font-mono">
            Built with React, Tailwind CSS, Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
