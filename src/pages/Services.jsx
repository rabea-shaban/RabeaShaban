import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { process } from "../Data/process";
import { services } from "../Data/services";
import { useSEO } from "../hooks/useSEO";

const Services = () => {
  useSEO({
    title: "Professional Services",
    description: "Professional freelance software services including MERN Stack apps, custom REST APIs, database scaling, and responsive WordPress sites.",
    keywords: "Hire React developer, MERN freelance developer, WordPress site building, database optimization Egypt"
  });

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Offerings
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">Professional Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I provide expert engineering services from database architecture and full-stack building 
            to containerized deployments, Kubernetes orchestration, and cloud computing solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <h2 className="sr-only">Service Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/5 rounded-full">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 leading-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Key features:</h4>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-xs text-muted-foreground"
                        >
                          <CheckCircle className="h-3.5 w-3.5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-6 mt-6">
                  <Button variant="outline" className="w-full glass-effect hover:bg-primary/10 border-border/50" asChild>
                    <Link to="/contact">
                      Request Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">My Development Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center relative p-6 glass-effect rounded-2xl border border-border/30"
              >
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                    <span className="text-xl font-bold text-primary font-display">
                      {step.step}
                    </span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-border/40"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto border border-border/40 shadow-xl">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              If your requirements don't fit into these standard categories, let's hop on a call to design a customized plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg">
                <Link to="/contact">
                  Consultation Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="glass-effect hover:bg-primary/10 border-border/50">
                <a
                  href="https://wa.me/201156807072"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Me
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
