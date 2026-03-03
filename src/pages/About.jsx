import { motion } from "framer-motion";
import React from "react";
import { experience } from "../Data/experience";
import { skills } from "../Data/skills";
import MYimgProfile from "../Img/rabea.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  const education = [
    {
      degree: "Bachelor of Management Information Systems (MIS)",
      institution:
        "Higher Institute of Technology, Management and Information – Minya",
      period: "Oct 2020 – Jul 2024",
      location: "Minya, Egypt",
      grade: "Graduated with Excellent grade",
      graduationProject:
        "Crime Prediction System using React and Firebase (Awarded Excellent)",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Frontend Developer specialized in <strong>React.js</strong> and{" "}
            <strong>JavaScript</strong>. I build fast, scalable, and clean user
            interfaces with a focus on performance, UI/UX, and modern frontend
            best practices.
          </p>
        </motion.div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get to Know Me</h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm <strong>Rabea Shaban Elzayat</strong>, a passionate
                Front-End Developer from Minya, Egypt. I graduated in 2024 with
                a Bachelor's degree in Management Information Systems (MIS).
              </p>

              <p>
                I specialize in building modern and scalable web interfaces
                using <strong>React.js</strong>, <strong>JavaScript</strong>,{" "}
                <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>,{" "}
                <strong>MUI</strong>, <strong>SCSS</strong>, and tools like{" "}
                <strong>Vite</strong> and <strong>React Hook Form</strong>.
              </p>

              <p>
                I focus on writing clean, maintainable code, improving UI/UX,
                building reusable components, and delivering fast, responsive,
                and SEO-friendly web applications.
              </p>

              <p>
                I have worked with clients across Egypt and the Gulf, delivering
                websites for marketing agencies, landscaping businesses, car
                rental platforms, and more — always aiming for high performance
                and pixel-perfect user interfaces.
              </p>

              <p>
                I am passionate about continuous learning, improving my skills,
                and staying up to date with the latest front-end technologies
                and best practices.
              </p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex justify-center"
          >
            <img
              src={MYimgProfile}
              alt="Rabea Shaban working on frontend projects"
              className="w-80 h-80 rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Skills */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {Icon && <Icon className="h-8 w-8 text-primary mr-3" />}
                    <h3 className="text-xl font-semibold">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground my-2">{edu.period}</p>
                  <p className="text-muted-foreground my-2">{edu.location}</p>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">
                    {edu.grade}
                  </span>
                  <p className="mt-4">{edu.graduationProject}</p>
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
