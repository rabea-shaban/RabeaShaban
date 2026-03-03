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
import React from "react";

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
    { icon: Globe, href: "https://rabeashaban.site", label: "Website" },
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

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold gradient-text">
              Rabea Shaban
            </span>
            <p className="mt-4 text-muted-foreground">
              Full Stack Developer skilled in React.js, TypeScript, .NET Core,Mern,
              WordPress, and Strapi. I build modern, responsive websites and
              scalable web apps with clean code, strong UI/UX, and smooth API
              integration. Always learning, always building.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="mt-4 space-y-2">
              <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                About Me
              </p>
              <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                Projects
              </p>
              <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                Services
              </p>
              <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                Contact
              </p>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold">Connect With Me</span>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass-effect hover:bg-primary/10 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-muted-foreground">
            © {2024} Rabea Shaban  All rights reserved. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
