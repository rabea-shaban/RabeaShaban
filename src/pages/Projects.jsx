import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "../Data/projects";
import { useSEO } from "../hooks/useSEO";

const Projects = () => {
  useSEO({
    title: "Projects Showcase",
    description: "Explore the collection of web development projects built by Rabea Shaban, including Journey Care Mother, Sa2yanti, and AGRSUP e-commerce.",
    keywords: "React projects, MERN Stack portfolio, agricultural e-commerce AGRSUP, Sa2yanti car maintenance, web dev portfolio"
  });

  const [filter, setFilter] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-app", name: "Web Apps" },
    { id: "React", name: "React.Js" },
    { id: "e-commerce", name: "E-commerce" },
    { id: "website", name: "Websites" },
    { id: "component", name: "Components" },
    { id: "wordpress", name: "WordPress" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(filter);
          }
          return project.category === filter;
        });

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's a collection of projects I've worked on, showcasing my skills
            in full-stack development, and modern web technologies. Explore a
            variety of solutions built using React.js, .NET Core, TypeScript,
            WordPress, and more — tailored to real-world needs and creative
            concepts.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="flex items-center gap-2 rounded-full px-5 py-2 glass-effect border-border/50 hover:bg-primary/15 transition-all text-sm"
            >
              <Filter className="h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <h2 className="sr-only">Project List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="project-card glass-effect rounded-2xl overflow-hidden group flex flex-col justify-between border border-border/40 hover:border-primary/40 hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="relative overflow-hidden h-48">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={`${project.title} project screenshot`}
                    src={project.img}
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Collapsible Panel for Features, Challenges, and Lessons */}
                {project.features && (
                  <div className="mb-6 border-t border-border/30 pt-4">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                      className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1 focus:outline-none transition-colors"
                    >
                      {expandedProject === project.title ? (
                        <>
                          Hide Technical Specs <ChevronUp className="h-3.5 w-3.5" />
                        </>
                      ) : (
                        <>
                          View Technical Specs <ChevronDown className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedProject === project.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 text-xs space-y-4 text-muted-foreground"
                        >
                          <div>
                            <strong className="text-foreground block mb-2 font-display">Key Features:</strong>
                            <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
                              {project.features.map((feat, idx) => (
                                <li key={idx}>{feat}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <strong className="text-foreground block font-display">Technical Challenges:</strong>
                            <p className="mt-1 leading-relaxed">{project.challenges}</p>
                          </div>
                          <div>
                            <strong className="text-foreground block font-display">Lessons Learned:</strong>
                            <p className="mt-1 leading-relaxed">{project.lessons}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 glass-effect hover:bg-primary/10 border-border/50 group/btn"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 glass-effect hover:bg-primary/10 border-border/50"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto border border-border/40 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, database designs, full-stack architectures, or junior-to-mid developer roles.
            </p>
            <Button size="lg" asChild className="shadow-lg">
              <a href="/contact">
                Start a Conversation
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
