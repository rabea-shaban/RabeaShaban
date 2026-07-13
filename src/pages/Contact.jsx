import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Download,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSEO } from "../hooks/useSEO";

const Contact = () => {
  useSEO({
    title: "Get in Touch",
    description: "Contact Rabea Shaban for project inquiries, freelance web development work, or full-time opportunities. Available via email, WhatsApp, and LinkedIn.",
    keywords: "Contact Rabea Shaban, hire developer Egypt, WhatsApp developer, project query"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "rabea.elzayate@gmail.com",
      href: "mailto:rabea.elzayate@gmail.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+20 115 680 7072",
      href: "https://wa.me/201156807072",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Minya, Egypt",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/rabea-shaban",
      color: "hover:text-purple-400 hover:border-purple-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/rabea-sh-elzayat",
      color: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:rabea.elzayate@gmail.com",
      color: "hover:text-pink-400 hover:border-pink-400",
    },
    {
      icon: Phone,
      name: "WhatsApp",
      href: "https://wa.me/201156807072",
      color: "hover:text-emerald-400 hover:border-emerald-400",
    },
    {
      icon: Briefcase,
      name: "Upwork",
      href: "https://upwork.com/freelancers/~01d2bd68b7d6e8fbce",
      color: "hover:text-green-400 hover:border-green-400",
    },
    {
      icon: Briefcase,
      name: "Mostaql",
      href: "https://mostaql.com/u/rabea_elzayat",
      color: "hover:text-blue-400 hover:border-blue-400",
    },
  ];

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">Let's Connect</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Let's discuss your next project, deployment pipeline, or team expansion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-effect rounded-3xl p-8 border border-border/40 shadow-xl relative overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/5 rounded-full blur-xl"></div>
              <h2 className="text-2xl font-bold mb-6 font-display">Send Me a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-foreground/80"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-foreground/80"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2 text-foreground/80"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                    placeholder="Project / Job Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-foreground/80"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm resize-none"
                    placeholder="Describe your goals, tech requirements, or details..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Cards */}
            <div className="glass-effect rounded-3xl p-6 border border-border/40 shadow-xl space-y-6">
              <h2 className="text-xl font-bold mb-4 font-display">Contact Details</h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const InfoIcon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                        <InfoIcon className="h-5 w-5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{info.title}</p>
                        {info.href === "#" ? (
                          <p className="text-sm font-bold text-foreground truncate">{info.value}</p>
                        ) : (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-foreground hover:text-primary transition-colors truncate block"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="glass-effect rounded-3xl p-6 border border-border/40 shadow-xl bg-gradient-to-br from-primary/5 to-purple-900/5 relative overflow-hidden group">
              <h2 className="text-xl font-bold mb-2 font-display">Resume / CV</h2>
              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                Download my up-to-date professional resume details highlighting skills, qualifications, and past system architecture successes.
              </p>
              <Button asChild size="lg" className="w-full glass-effect bg-primary text-white hover:bg-primary/95 group/btn">
                <a href="https://flowcv.com/resume/a7n0o85l8o65" target="_blank" rel="noopener noreferrer">
                  Download Resume / CV
                  <Download className="ml-2 h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Social Cards Grid */}
            <div className="glass-effect rounded-3xl p-6 border border-border/40 shadow-xl">
              <h2 className="text-xl font-bold mb-4 font-display">Follow Me</h2>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border border-border/60 hover:shadow-md transition-all ${social.color}`}
                    >
                      <SocialIcon className="h-5 w-5" />
                      <span className="text-xs font-bold text-foreground/90">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
