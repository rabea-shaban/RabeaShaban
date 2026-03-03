import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 px-4 mx-auto text-center max-w-4xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 200
            }}
            className="relative"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold gradient-text leading-none">
              404
            </h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 blur-3xl"></div>
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              الصفحة غير موجودة
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
            </p>
          </motion.div>

          {/* Animated Search Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="p-4 rounded-full bg-primary/10"
            >
              <Search className="w-12 h-12 text-primary" />
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                العودة للصفحة الرئيسية
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group"
            >
              <Link to="/" onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}>
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                العودة للخلف
              </Link>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-12"
          >
            <p className="text-sm text-muted-foreground mb-4">
              صفحات قد تهمك:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "الرئيسية", path: "/" },
                { name: "من أنا", path: "/about" },
                { name: "المشاريع", path: "/projects" },
                { name: "الخدمات", path: "/services" },
                { name: "اتصل بي", path: "/contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                >
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="glass-effect hover:bg-primary/10"
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
