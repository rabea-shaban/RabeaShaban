import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Layers,
  Network,
  Cpu,
  Play,
  Anchor,
  Terminal,
  Infinity,
  GitFork
} from "lucide-react";

const learningItems = [
  { 
    name: "AWS Cloud", 
    icon: Cloud, 
    desc: "Acquiring fundamental concepts of cloud computing, VPC networking, IAM security, EC2, S3, and RDS through hands-on coursework.", 
    color: "from-orange-500/20 to-amber-500/10 text-orange-400" 
  },
  { 
    name: "Docker", 
    icon: Layers, 
    desc: "Learning containerization concepts, writing Dockerfiles, creating lightweight images, and managing local container storage.", 
    color: "from-blue-500/20 to-sky-500/10 text-blue-400" 
  },
  { 
    name: "Kubernetes", 
    icon: Network, 
    desc: "Studying container orchestration, microservices scheduling, service load balancing, and configuration management in sandbox clusters.", 
    color: "from-indigo-500/20 to-blue-600/10 text-indigo-400" 
  },
  { 
    name: "Helm", 
    icon: Anchor, 
    desc: "Exploring Kubernetes package management, editing values.yaml files, and structuring chart templates for easier cluster installs.", 
    color: "from-cyan-500/20 to-teal-600/10 text-cyan-400" 
  },
  { 
    name: "Terraform", 
    icon: Cpu, 
    desc: "Understanding Infrastructure as Code (IaC) syntax, state management, provider settings, and modular setups for cloud provisioning.", 
    color: "from-purple-500/20 to-violet-600/10 text-purple-400" 
  },
  { 
    name: "GitHub Actions", 
    icon: Play, 
    desc: "Practicing workflow automation, syntax for jobs/steps, integrating unit testing triggers, and setting up simple CI pipelines.", 
    color: "from-neutral-500/20 to-gray-600/10 text-neutral-300" 
  },
  { 
    name: "Linux", 
    icon: Terminal, 
    desc: "Mastering terminal commands, file system permissions, package management, bash scripting, and server configurations.", 
    color: "from-red-500/20 to-orange-600/10 text-red-400" 
  },
  { 
    name: "DevOps", 
    icon: Infinity, 
    desc: "Adopting standard deployment practices, clean release cycles, logging integrations, and infrastructure monitoring concepts.", 
    color: "from-yellow-500/20 to-amber-600/10 text-yellow-400" 
  },
  { 
    name: "System Design", 
    icon: GitFork, 
    desc: "Learning microservices architecture patterns, load balancers, caching layers, database indexing, and scaling practices.", 
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-400" 
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const CurrentlyLearning = () => {
  const statusBadges = ["Learning", "Hands-on Labs", "In Progress"];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Growth Mindset
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl font-display">Currently Learning</h2>
            <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Technologies I'm actively learning and applying through labs, coursework, and hands-on practice.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {learningItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 rounded-xl glass-effect border border-border/50 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Background Gradient Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-display">{item.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/30 flex flex-wrap gap-1.5 relative z-10">
                  {statusBadges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
