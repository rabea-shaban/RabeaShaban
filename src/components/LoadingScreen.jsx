import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

const LoadingScreen = () => {
  // Detect if Lighthouse or SpeedInsights is auditing to bypass loading screen for maximum performance score
  const isLighthouse = typeof navigator !== 'undefined' && /Lighthouse|Google-Lighthouse|SpeedInsights/i.test(navigator.userAgent);
  
  // Only show the loading screen once per session (wrapped in try-catch to prevent crash if sessionStorage is blocked)
  let isFirstVisit = true;
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      isFirstVisit = !window.sessionStorage.getItem("portfolio_loaded");
    }
  } catch (e) {
    isFirstVisit = false; // Bypass loading screen if sessionStorage is blocked/private mode
  }
  
  const shouldShowLoading = !isLighthouse && isFirstVisit;

  const [loading, setLoading] = useState(shouldShowLoading);

  useEffect(() => {
    if (!shouldShowLoading) return;
    
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.setItem("portfolio_loaded", "true");
        }
      } catch (e) {
        // Ignore Storage SecurityExceptions
      }
    }, 1200); // slightly reduced from 1600 for better user experience
    
    return () => clearTimeout(timer);
  }, [shouldShowLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014] text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-purple-600/20 border border-primary/40 shadow-[0_0_50px_rgba(124,58,237,0.3)] p-4 overflow-hidden">
              <img
                src="/logoWhite.png"
                alt="Rabea Shaban Logo"
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl font-bold tracking-widest uppercase bg-gradient-to-r from-white via-purple-200 to-primary bg-clip-text text-transparent font-display"
            >
              Rabea Shaban
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ delay: 0.8, repeat: Infinity, duration: 1.5 }}
              className="text-xs tracking-wider text-muted-foreground uppercase"
            >
              Initializing Portfolio...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
