import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Filter, Github } from "lucide-react";
import React, { useState } from "react";
import { projects } from "../Data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

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
      : projects.filter((project) => project.category.includes(filter));

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="project-card glass-effect rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={`${project.title} project screenshot`}
                  src={project.img}
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer">
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
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects and opportunities.
              Let's create something amazing together!
            </p>
            <Button size="lg" asChild>
              <a href="/contact">
                Start a Project
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
