import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      name: "LinkedIn",
      label: "Connect on LinkedIn",
      color: "bg-gradient-to-br from-[#0a66c2] to-[#0077B5] shadow-[0_4px_20px_rgba(0,119,181,0.35)]",
      href: "https://linkedin.com/in/rabea-sh-elzayat",
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      label: "Chat on WhatsApp",
      color: "bg-gradient-to-br from-[#25D366] to-[#20ba5a] shadow-[0_4px_20px_rgba(37,211,102,0.35)]",
      href: "https://wa.me/201156807072",
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm11.953-21.813c-5.43 0-9.85 4.42-9.853 9.85-.001 2.014.528 3.982 1.533 5.727l.1.173-1.02 3.722 3.812-1c1.686.92 3.565 1.4 5.426 1.401 5.431 0 9.853-4.421 9.857-9.854.001-2.63-1.024-5.101-2.871-6.953-1.847-1.853-4.321-2.873-6.956-2.873zm5.395 13.06c-.295-.147-1.745-.86-2.013-.959-.267-.098-.463-.147-.659.147-.197.295-.76.959-.933 1.157-.173.197-.346.221-.641.074-1.28-.641-2.122-1.164-2.884-2.471-.2-.347.2-.32.571-1.064.098-.197.05-.37-.024-.518-.074-.147-.659-1.588-.903-2.176-.237-.571-.478-.495-.659-.504-.17-.008-.365-.01-.56-.01s-.513.073-.78.37c-.267.296-1.02 1.002-1.02 2.44 0 1.439 1.047 2.827 1.194 3.023.148.197 2.059 3.144 4.989 4.407.697.3 1.24.479 1.664.613.7.222 1.338.19 1.843.114.562-.083 1.745-.712 1.991-1.4.246-.688.246-1.277.172-1.4-.074-.122-.27-.196-.565-.343z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-end gap-3.5">
      {/* Expanded Actions Stack */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3.5 mb-1.5">
            {actions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 15 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 350, 
                  damping: 22,
                  delay: (actions.length - 1 - index) * 0.04 
                }}
                className="flex items-center justify-end group pointer-events-auto"
              >
                {/* Action Text Label */}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                  className="mr-3 px-3 py-1.5 text-xs font-bold rounded-full glass-effect border border-border/40 shadow-lg text-foreground whitespace-nowrap pointer-events-none group-hover:scale-105 transition-transform duration-200"
                >
                  {action.label}
                </motion.span>

                {/* Circular Button */}
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${action.color} border border-white/10 hover:scale-110 active:scale-95 transition-transform duration-200`}
                  aria-label={action.name}
                >
                  {action.icon}
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(139,39,242,0.4)] pointer-events-auto relative z-10 border border-white/10"
        style={{
          background: "linear-gradient(135deg, #8B27F2, #6A35F7)",
        }}
        aria-label="Toggle contact menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
