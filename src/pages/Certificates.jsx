import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Download, 
  ExternalLink, 
  CheckCircle2,
  Calendar,
  GraduationCap,
  ZoomIn,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { certificates, certificateCategories } from "../Data/certificates";
import { useSEO } from "../hooks/useSEO";

const Certificates = () => {
  useSEO({
    title: "Professional Certificates",
    description: "Professional IT and web development credentials earned by Rabea Shaban from Meta, Google, MCIT, ITI, Udacity, and NTI.",
    keywords: "Web development certificates, Meta Frontend credential, DEPI MCIT diploma, ITI SQL certification, developer credentials"
  });

  const [filter, setFilter] = useState("all");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates =
    filter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === filter);

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Award className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">
            Certificates & Credentials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A verified timeline of my academic degrees, professional certifications, 
            and continuous cloud & DevOps upskilling accomplishments.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {certificateCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="flex items-center gap-2 rounded-full px-5 py-2 glass-effect border-border/50 hover:bg-primary/15 transition-all text-sm"
              >
                <Icon className="h-3.5 w-3.5" />
                {category.name}
              </Button>
            );
          })}
        </motion.div>

        {/* Certificates Grid */}
        <h2 className="sr-only">Credential Showcase</h2>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((certificate, index) => {
              const Icon = certificate.icon;
              return (
                <motion.div
                  layout
                  key={certificate.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group glass-effect rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Certificate Image Preview */}
                    {certificate.image && (
                      <div 
                        className="relative overflow-hidden cursor-pointer group/image h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border/30"
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width="400"
                          height="192"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.parentElement?.querySelector('.image-fallback');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden image-fallback absolute inset-0 flex items-center justify-center bg-primary/5">
                          <Icon className="w-16 h-16 text-primary/20" />
                        </div>
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-md rounded-full p-3.5 shadow-lg">
                            <ZoomIn className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className="text-xs px-2.5 py-1 bg-secondary rounded-full text-muted-foreground font-semibold">
                          {certificate.category}
                        </span>
                        {certificate.verified && (
                          <div className="flex items-center gap-1 text-primary">
                            <CheckCircle2 className="w-4.5 h-4.5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Verified</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {certificate.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Issued: {certificate.date}</span>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-border/30">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground">Issuer:</span>
                          <span className="font-semibold text-foreground">{certificate.issuer}</span>
                        </div>
                        {certificate.grade && (
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">Grade:</span>
                            <span className="font-semibold text-emerald-500">{certificate.grade}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground mt-4 leading-relaxed line-clamp-3">
                        {certificate.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 mt-2">
                    {certificate.pdf && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full glass-effect hover:bg-primary/10 border-border/50 group/btn"
                      >
                        <a
                          href={certificate.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-0.5 transition-transform" />
                          Download Certificate PDF
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="glass-effect rounded-2xl p-6 text-center border border-border/30">
            <div className="text-4xl font-extrabold text-primary mb-1 font-display">
              {certificates.length}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Credentials</div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 text-center border border-border/30">
            <div className="text-4xl font-extrabold text-primary mb-1 font-display">
              {certificateCategories.length - 1}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Specialties</div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 text-center border border-border/30">
            <div className="text-4xl font-extrabold text-primary mb-1 font-display">
              {certificates.filter(c => c.type === "degree").length}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Academic Degrees</div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 text-center border border-border/30">
            <div className="text-4xl font-extrabold text-primary mb-1 font-display">
              {certificates.filter(c => c.verified).length}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Verified Badges</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto border border-border/40 shadow-xl">
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">
              Commitment to Excellence
            </h2>
            <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              These credentials represent structural milestones in my quest to master full-stack software architecture, cloud platforms, and DevOps automation pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg">
                <a href="/contact">
                  Let's Connect
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="glass-effect hover:bg-primary/10 border-border/50">
                <a href="https://flowcv.com/resume/a7n0o85l8o65" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Viewer Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <AnimatePresence>
          {selectedCertificate && (
            <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-[#0a0814] border border-border/40 text-white rounded-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {/* Modal Header */}
                <DialogHeader className="p-6 pb-4 border-b border-border/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <DialogTitle className="text-2xl font-bold leading-tight font-display">
                        {selectedCertificate.title}
                      </DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground mt-2">
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Issued: {selectedCertificate.date}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Issuer:</span>{" "}
                            <span className="font-semibold text-white">{selectedCertificate.issuer}</span>
                          </div>
                          {selectedCertificate.verified && (
                            <div className="flex items-center gap-1 text-primary">
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="text-xs font-bold uppercase">Verified</span>
                            </div>
                          )}
                        </div>
                      </DialogDescription>
                    </div>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="p-1 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </DialogHeader>

                {/* Certificate Image */}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-purple-900/5 flex items-center justify-center">
                  <div className="relative max-h-[60vh] overflow-hidden rounded-xl bg-black/40 border border-border/20 shadow-2xl flex items-center justify-center w-full">
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="max-h-[55vh] max-w-full object-contain"
                      loading="lazy"
                      width="800"
                      height="500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.parentElement?.querySelector('.modal-image-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden modal-image-fallback absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[#07050d]">
                      {(() => {
                        const CertIcon = selectedCertificate.icon;
                        return <CertIcon className="w-20 h-20 text-primary/30 mb-4" />;
                      })()}
                      <p className="text-muted-foreground font-medium">Certificate Image Preview</p>
                      <p className="text-xs text-muted-foreground/60 max-w-xs mt-1">Image download is not directly hosted on this server. Please download the verification PDF below.</p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 pt-4 border-t border-border/20 flex items-center justify-between bg-black/40">
                  <div className="flex items-center gap-3">
                    {selectedCertificate.grade && (
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">
                        Grade: {selectedCertificate.grade}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {selectedCertificate.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {selectedCertificate.pdf && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="glass-effect hover:bg-primary/10 border-border/40 text-white"
                      >
                        <a
                          href={selectedCertificate.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCertificate(null)}
                      className="hover:bg-white/5 text-muted-foreground hover:text-white"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </div>
  );
};

export default Certificates;
