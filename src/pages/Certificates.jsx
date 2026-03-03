import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Download, 
  ExternalLink, 
  Filter,
  CheckCircle2,
  Calendar,
  GraduationCap,
  ZoomIn,
  X
} from "lucide-react";
import React, { useState } from "react";
import { certificates, certificateCategories } from "../Data/certificates";

const Certificates = () => {
  const [filter, setFilter] = useState("all");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates =
    filter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === filter);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Certificates & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my educational achievements, professional certifications, 
            and completed courses that showcase my continuous learning journey and 
            commitment to excellence in web development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {certificateCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCertificates.map((certificate, index) => {
            const Icon = certificate.icon;
            return (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Certificate Image Preview */}
                {certificate.image && (
                  <div 
                    className="relative overflow-hidden cursor-pointer group/image"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/10">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.parentElement?.querySelector('.image-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden image-fallback absolute inset-0 items-center justify-center bg-primary/10">
                        <Icon className="w-16 h-16 text-primary/30" />
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                        >
                          <ZoomIn className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Certificate Header */}
                <div className="relative p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {certificate.verified && (
                      <div className="flex items-center gap-1 text-primary">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {certificate.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{certificate.date}</span>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Issued by
                    </p>
                    <p className="text-foreground font-medium">
                      {certificate.issuer}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Grade/Status
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {certificate.grade}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {certificate.description}
                  </p>

                  {/* Certificate Footer */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">
                      {certificate.category}
                    </span>
                    {certificate.pdf && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="group/btn"
                      >
                        <a
                          href={certificate.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-1 transition-transform" />
                          Download
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              {certificates.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Certificates</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              {certificateCategories.length - 1}
            </div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              {certificates.filter(c => c.type === "degree").length}
            </div>
            <div className="text-sm text-muted-foreground">Degrees</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              {certificates.filter(c => c.verified).length}
            </div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Continuous Learning JExperienceourney
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I believe in continuous learning and staying updated with the latest 
              technologies. These certificates represent my commitment to professional 
              growth and excellence in web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Let's Connect
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://flowcv.com/resume/a7n0o85l8o65" download>
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Image Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <AnimatePresence>
          {selectedCertificate && (
            <DialogContent className="max-w-5xl w-full p-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Modal Header */}
                <DialogHeader className="p-6 pb-4 border-b">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <DialogTitle className="text-2xl font-bold mb-2">
                        {selectedCertificate.title}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{selectedCertificate.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Issued by:</span>
                            <span className="font-medium">{selectedCertificate.issuer}</span>
                          </div>
                          {selectedCertificate.verified && (
                            <div className="flex items-center gap-1 text-primary">
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="text-sm font-medium">Verified</span>
                            </div>
                          )}
                        </div>
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                {/* Certificate Image */}
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                  <div className="relative max-h-[70vh] overflow-auto rounded-lg bg-white shadow-2xl">
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.parentElement?.querySelector('.modal-image-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden modal-image-fallback absolute inset-0 items-center justify-center bg-primary/5">
                      <div className="text-center">
                        {(() => {
                          const CertIcon = selectedCertificate.icon;
                          return <CertIcon className="w-24 h-24 text-primary/20 mx-auto mb-4" />;
                        })()}
                        <p className="text-muted-foreground">صورة الشهادة غير متاحة</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 pt-4 border-t flex items-center justify-between bg-background">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {selectedCertificate.grade}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                      {selectedCertificate.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {selectedCertificate.pdf && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={selectedCertificate.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          onClick={(e) => e.stopPropagation()}
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
                    >
                      <X className="w-4 h-4 mr-2" />
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
