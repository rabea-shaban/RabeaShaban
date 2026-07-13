import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Certificates", path: "/Certificates" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`pointer-events-auto transition-all duration-300 w-full md:w-auto rounded-full px-4 md:px-5 py-2 md:py-2.5 border glass-effect shadow-lg flex items-center justify-between gap-4 md:gap-8 ${
          scrolled ? "border-border/30 bg-background/80" : "border-border/10 bg-background/40"
        }`}
      >
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
          <img 
            src={theme === "dark" ? "/logoWhite.png" : "/logo.png"} 
            alt="Rabea Shaban Logo" 
            className="h-7 md:h-8 w-auto object-contain rounded-md group-hover:scale-105 transition-transform" 
          />
          <span className="font-bold text-sm md:text-base gradient-text font-display">
            Rabea Shaban
          </span>
        </Link>
  
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 rounded-full w-8 h-8 hover:bg-primary/10"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
  
        {/* Mobile Theme Toggle */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full w-8 h-8">
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
