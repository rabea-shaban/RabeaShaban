import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/Timeline";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import { featuredProjects } from "../Data/featuredProjects";
import { timelineData } from "../Data/timelineData";
import MyImgProfile from "../Img/Picsart_25-01-21_11-09-34-893.jpg";
import { useSEO } from "../hooks/useSEO";

const Home = () => {
  useSEO({
    title: "Full Stack Software Engineer",
    description: "Rabea Shaban - Full Stack Software Engineer. I build scalable, secure, and high-performance web applications using React, Next.js, Node.js, Express, MongoDB, and SQL Server.",
    keywords: "Full Stack Software Engineer, MERN Stack, React Developer, Node.js Developer, Web Development Portfolio, Egypt Developer"
  });

  // Viewport mobile check to optimize performance
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typing Animation
  const roles = ["MERN Stack Developer", "AWS Cloud Practitioner", "Docker & Kubernetes Specialist"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Mouse Parallax for Floating Blobs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const springX2 = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY2 = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // relative movement offset
    const x = (clientX / width - 0.5) * 45;
    const y = (clientY / height - 0.5) * 45;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className="relative pt-16 min-h-screen bg-background overflow-hidden" onMouseMove={handleMouseMove}>
      <ScrollProgress />
      <LoadingScreen />

      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-[95vh] overflow-hidden">
        {/* Animated Background Gradients & Blobs */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating parallax blobs */}
        <motion.div
          style={isMobile ? {} : { x: springX, y: springY }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none floating-animation"
        ></motion.div>
        <motion.div
          style={isMobile ? {} : { x: springX2, y: springY2 }}
          className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
          animate={isMobile ? {} : { scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={isMobile ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-[90px] pointer-events-none floating-animation" style={{ animationDelay: "2s" }}></div>

        <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image Profile with rotating border glow */}
            <motion.div
              className="relative w-36 h-36 mx-auto mb-8 rounded-full p-[2px] bg-gradient-to-tr from-primary via-pink-500 to-blue-500 shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-full h-full object-cover rounded-full border-2 border-background"
                alt="Rabea Shaban - Full Stack Software Engineer"
                src={MyImgProfile}
                fetchpriority="high"
                loading="eager"
                width="144"
                height="144"
              />
            </motion.div>

            <div>
              <h1 className="mb-4 text-4xl font-extrabold md:text-7xl tracking-tight">
                Hi, I'm <span className="gradient-text drop-shadow-sm">Rabea Shaban</span>
              </h1>

              {/* Title & Typing Subtitle */}
              <div className="min-h-[70px] md:min-h-[90px] flex flex-col items-center justify-center mb-6">
                <p className="text-xl md:text-3xl font-bold tracking-wide text-foreground">
                  Full Stack Software Engineer
                </p>
                <p className="mt-2 text-md md:text-xl font-mono text-primary typing-cursor font-medium">
                  {text}
                </p>
              </div>

              {/* Description */}
              <p className="max-w-3xl mx-auto mb-10 text-md md:text-lg text-muted-foreground leading-relaxed">
                I build scalable, secure, and high-performance web applications using{" "}
                <strong className="text-foreground">React</strong>,{" "}
                <strong className="text-foreground">Next.js</strong>,{" "}
                <strong className="text-foreground">TypeScript</strong>,{" "}
                <strong className="text-foreground">Node.js</strong>,{" "}
                <strong className="text-foreground">Express.js</strong>, and{" "}
                <strong className="text-foreground">MongoDB</strong>. I'm also passionate about{" "}
                <strong className="text-foreground">Cloud Computing</strong>,{" "}
                <strong className="text-foreground">Docker</strong>,{" "}
                <strong className="text-foreground">Kubernetes</strong>,{" "}
                <strong className="text-foreground">Terraform</strong>,{" "}
                <strong className="text-foreground">CI/CD</strong>, and building production-ready systems.
              </p>
            </div>

            {/* Actions Buttons Container */}
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              {/* Core Page CTA Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="group shadow-[0_4px_20px_rgba(124,58,237,0.3)] bg-primary text-white hover:bg-primary/95">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="group glass-effect border-border/50 hover:bg-primary/10">
                  <a href="https://flowcv.com/resume/a7n0o85l8o65" target="_blank" rel="noopener noreferrer">
                    Download Resume
                    <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="group glass-effect border-border/50 hover:bg-primary/10">
                  <Link to="/contact">
                    Contact Me
                    <Mail className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Social Channels Actions */}
              <div className="flex items-center gap-3 mt-2">
                <Button variant="ghost" size="icon" asChild className="rounded-full w-12 h-12 glass-effect border border-border/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <a href="https://github.com/rabea-shaban" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full w-12 h-12 glass-effect border border-border/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <a href="https://linkedin.com/in/rabea-sh-elzayat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full w-12 h-12 glass-effect border border-border/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <a href="https://wa.me/201156807072" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <Phone className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2 cursor-pointer hidden md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        >
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-primary/60">
            <div className="w-1.5 h-3 mt-1.5 rounded-full bg-primary animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Timeline/Journey Section */}
      <section id="experience" className="py-24 bg-muted/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Timeline
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Professional Journey</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              A comprehensive timeline of my software engineering career, education, and credentials.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Timeline items={timelineData} />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Featured Work</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              A curated selection of key applications illustrating clean code, scaling patterns, and database design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 project-card glass-effect rounded-2xl border border-border/40 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 overflow-hidden rounded-xl h-48 bg-muted/40 relative">
                    <img
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      alt={`${project.title} project screenshot`}
                      src={project.img}
                      loading="lazy"
                    />
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="mb-5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1 glass-effect hover:bg-primary/10 group/btn">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1 glass-effect hover:bg-primary/10">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="shadow-[0_4px_20px_rgba(124,58,237,0.15)]">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <CurrentlyLearning />

      {/* Ready to start CTA Section */}
      <section className="py-24 bg-muted/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 glass-effect rounded-3xl border border-border/40 shadow-xl"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 max-w-lg mx-auto text-md md:text-lg text-muted-foreground">
              Let's work together to bring your ideas to life with modern web
              technologies, containerized deployments, and clean cloud setups.
            </p>
            <Button asChild size="lg" className="shadow-lg">
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
