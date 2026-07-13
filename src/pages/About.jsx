import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Calendar, MapPin, Code2, School } from "lucide-react";
import { experience } from "../Data/experience";
import { skills } from "../Data/skills";
import MYimgProfile from "../Img/rabea.jpg";
import { useSEO } from "../hooks/useSEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  useSEO({
    title: "About Me",
    description: "Learn about Rabea Shaban's professional journey, MIS education, training at Ministry of Communications (MCIT), and technical skill set spanning MERN stack, APIs, and cloud basics.",
    keywords: "Rabea Shaban, MERN stack training, Digilians MCIT, NTI training Egypt, IT profile Egypt, software engineer bio"
  });

  const education = [
    {
      degree: "AI-Based Software Development Diploma",
      program: "Digilians Initiative (Presidential Digital Pioneers)",
      institution: "Egyptian Military Academy",
      organizedBy: "Ministry of Communications and Information Technology (MCIT)",
      period: "2026 – Present",
      location: "Heliopolis, Cairo, Egypt",
      grade: "Currently Enrolled",
      status: "Currently Enrolled",
      isAcademy: true,
      achievements: [
        "Currently Enrolled", 
        "Egyptian Military Academy", 
        "MCIT Presidential Pioneers"
      ]
    },
    {
      degree: "Bachelor of Management Information Systems (MIS)",
      institution: "Higher Institute of Technology, Management and Information – Minya",
      period: "Oct 2020 – Jul 2024",
      location: "Minya, Egypt",
      grade: "Excellent Grade (Imtiyaz)",
      graduationProject: "Crime Prediction System using React & Firebase (Awarded Excellent)",
      achievements: ["Top of Class Option", "Excellent Graduation Project Award"]
    },
  ];

  return (
    <div className="pt-28 pb-20 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Introduction
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">About Me</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full Stack Software Engineer specializing in building modern, scalable web applications using the MERN Stack. 
            Passionate about Cloud Computing, DevOps, and creating secure, production-ready software with modern development practices.
          </p>
        </motion.div>

        {/* Personal Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6 font-display flex items-center gap-2">
              <span className="w-1.5 h-8 bg-primary rounded-full"></span>
              Get to Know Me
            </h2>

            <div className="space-y-5 text-muted-foreground text-md leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Rabea Shaban</strong>, a Full Stack Software Engineer based in Minya, Egypt. 
                I graduated in 2024 with a Bachelor's degree in Management Information Systems (MIS), earning an Excellent grade.
              </p>

              <p>
                I specialize in developing end-to-end web applications using <strong className="text-foreground">MongoDB, Express.js, React.js, Node.js, Next.js, and TypeScript</strong>. 
                My experience includes designing responsive user interfaces, building secure RESTful APIs, implementing JWT authentication, and creating maintainable applications following clean architecture principles.
              </p>

              <p>
                Alongside Full Stack development, I'm expanding my expertise in <strong className="text-foreground">Cloud Computing and DevOps</strong>. 
                I work with <strong className="text-foreground">Docker</strong> for containerization, <strong className="text-foreground">Kubernetes and Helm</strong> for container orchestration, 
                <strong className="text-foreground">Terraform</strong> for Infrastructure as Code (IaC), <strong className="text-foreground">GitHub Actions</strong> for CI/CD automation, and AWS and Linux as part of modern cloud-native development.
              </p>

              <p>
                I'm currently enrolled in the <strong className="text-foreground">Digilians AI-Based Software Development Diploma</strong> at the Egyptian Military Academy in Heliopolis, Cairo, 
                where I'm strengthening my skills in Software Engineering, Cloud Computing, Artificial Intelligence, and DevOps through intensive hands-on training.
              </p>

              <p>
                I've contributed to projects for clients in Egypt and the Gulf region, delivering responsive websites, business dashboards, booking systems, and modern web applications with a strong focus on performance, scalability, accessibility, and user experience.
              </p>

              <p>
                I'm committed to continuous learning, writing clean and maintainable code, and building reliable, production-ready software that follows modern engineering best practices.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Highlighted Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Software Engineer",
                  "MERN Stack",
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                  "JWT Authentication",
                  "AWS Cloud",
                  "Docker",
                  "Kubernetes",
                  "Helm",
                  "Terraform",
                  "GitHub Actions",
                  "Linux",
                  "DevOps",
                  "Clean Architecture",
                  "Software Engineering"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center relative group"
          >
            {/* Ambient image background glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <img
              src={MYimgProfile}
              alt="Rabea Shaban working on software development"
              className="w-80 h-80 rounded-2xl shadow-2xl object-cover border border-border group-hover:scale-[1.02] transition-transform duration-500 relative z-10"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Technical Toolbox</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-5 pb-3 border-b border-border/30">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary mr-3.5 group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="text-xl font-bold">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/5 text-foreground hover:bg-primary/10 hover:text-primary rounded-full text-xs font-medium border border-border/30 hover:border-primary/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Experience & Education Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-10 font-display flex items-center gap-2">
              <span className="w-1.5 h-8 bg-primary rounded-full"></span>
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/20 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <span className="flex items-center text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-10 font-display flex items-center gap-2">
              <span className="w-1.5 h-8 bg-primary rounded-full"></span>
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="glass-effect rounded-2xl p-6 border border-border/40 hover:border-primary/20 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                  
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                        {edu.isAcademy ? (
                          <School className="w-6 h-6" />
                        ) : (
                          <GraduationCap className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-snug">{edu.degree}</h3>
                        {edu.program && (
                          <p className="text-sm font-semibold text-foreground/90 mt-0.5">{edu.program}</p>
                        )}
                        <p className="text-sm text-primary font-medium mt-0.5">{edu.institution}</p>
                        {edu.organizedBy && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Organized by: <span className="font-semibold text-primary/80">{edu.organizedBy}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === "Currently Enrolled" 
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                        : "bg-emerald-500/10 text-emerald-500"
                    }`}>
                      <Award className="w-3.5 h-3.5" />
                      {edu.grade}
                    </span>
                  </div>

                  {edu.graduationProject && (
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Graduation Project</h4>
                      <p className="text-sm text-foreground/90 font-medium">{edu.graduationProject}</p>
                    </div>
                  )}

                  {edu.achievements && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.achievements.map((ach, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                          {ach}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
