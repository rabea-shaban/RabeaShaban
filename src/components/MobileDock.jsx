import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Layers, Award, Mail } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const MobileDock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "about", label: "About", icon: User, path: "/about" },
    { id: "projects", label: "Projects", icon: Briefcase, path: "/projects" },
    { id: "services", label: "Services", icon: Layers, path: "/services" },
    { id: "certificates", label: "Certificates", icon: Award, path: "/Certificates" },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  ];

  // Sync active state based on pathname for subpages
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    if (currentPath === "/" || currentPath === "") {
      setActiveItem("home");
    } else if (currentPath.includes("about")) {
      setActiveItem("about");
    } else if (currentPath.includes("project")) {
      setActiveItem("projects");
    } else if (currentPath.includes("service")) {
      setActiveItem("services");
    } else if (currentPath.includes("certificate")) {
      setActiveItem("certificates");
    } else if (currentPath.includes("contact")) {
      setActiveItem("contact");
    }
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setActiveItem(item.id);
    navigate(item.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 md:hidden flex justify-center px-4 pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <div 
        className="flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-2 sm:py-3 rounded-full pointer-events-auto transition-colors duration-300 glass-effect border border-border/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-background/80"
        style={{
          boxShadow: theme === "dark" 
            ? "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" 
            : "0 20px 45px rgba(23, 35, 55, 0.15)",
        }}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Tooltip Label */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute -top-10 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md shadow-lg pointer-events-none whitespace-nowrap bg-primary text-white border border-primary/20"
                    style={{
                      boxShadow: "0 4px 15px rgba(139, 39, 242, 0.3)",
                    }}
                  >
                    {item.label}
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-primary"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation button */}
              <button
                onClick={() => handleNavClick(item)}
                className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-transform duration-300"
                aria-label={item.label}
              >
                {/* Active Indicator Circle */}
                {isActive && (
                  <motion.div
                    layoutId="activeDockCircle"
                    className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(139,39,242,0.4)]"
                    style={{
                      background: "linear-gradient(135deg, #8B27F2, #6A35F7)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Icon wrapper */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 ${isActive ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <Icon className="w-5 h-5 transition-colors" />
                </motion.div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileDock;
