import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../Data/featuredProjects";
import { timelineData } from "../Data/timelineData";
import MyImgProfile from "../Img/Picsart_25-01-21_11-09-34-893.jpg";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <motion.div
              className="mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <img
                className="w-32 h-32 mx-auto border-4 rounded-full shadow-2xl border-primary/20"
                alt="Rabea Shaban Ibrahem - Full Stack Developer"
                src={MyImgProfile}
              />
            </motion.div>
            <div>
  <h1 className="mb-6 text-4xl font-bold md:text-6xl">
    Hi, I'm <span className="gradient-text">Rabea Shaban</span>
  </h1>

  <p className="mb-4 text-xl md:text-2xl text-muted-foreground">
    Frontend Developer
  </p>

  <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
    I’m a Frontend Developer specializing in{" "}
    <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
    <strong>TypeScript</strong>, and modern UI frameworks like{" "}
    <strong>Tailwind CSS</strong> and <strong>MUI</strong>.  
    I build high-performance, scalable, and visually refined interfaces focused
    on clean architecture, accessibility, and exceptional user experience.
    I’m passionate about crafting fast, maintainable frontends and continuously
    exploring advanced tools, patterns, and technologies to deliver top-quality
    digital products.
  </p>
</div>

          
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="group">
                <a href="https://flowcv.com/resume/a7n0o85l8o65" download className="flex items-center">
                  Download CV
                  <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-primary">
            <div className="w-1 h-3 mt-2 rounded-full bg-primary"></div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Journey</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              A timeline of my educational background, professional training,
              and key courses.
            </p>
          </motion.div>
          <Timeline items={timelineData} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 project-card glass-effect rounded-xl hover:shadow-xl">
                <div className="mb-4">
                  <img
                    className="object-cover w-full h-48 rounded-lg"
                    alt={`${project.title} project screenshot`}
                    src={project.img}
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 glass-effect rounded-2xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's work together to bring your ideas to life with modern web
              technologies
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
