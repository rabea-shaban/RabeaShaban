import {
  Code2,
  Globe,
  Server,
  Link2,
  Cloud,
  Package,
  Layers,
  Zap,
  HelpCircle
} from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web applications built with MERN stack or Next.js. Combining responsive frontends with secure, scalable backends.",
    features: [
      "Custom SPAs and dynamic web apps",
      "Authentication & authorization pipelines",
      "State management (Redux/Context)",
      "Database schema design and integration",
      "End-to-end testing and production prep"
    ],
    price: "Starting from $800",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Stunning, fast, and accessible user interfaces using React, Next.js, and TypeScript, optimized for user experience.",
    features: [
      "Responsive and adaptive layouts",
      "Tailwind CSS & Material UI custom themes",
      "Framer Motion micro-animations",
      "Vite & webpack configuration",
      "Web accessibility (WCAG) compliance"
    ],
    price: "Starting from $400",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Robust, scalable server architectures using Node.js, Express, or .NET Core to power complex web platforms.",
    features: [
      "Scalable RESTful API development",
      "JWT-based security implementation",
      "SQL and NoSQL database management",
      "Socket.io real-time communication",
      "Middleware validation & logging"
    ],
    price: "Starting from $500",
  },
  {
    icon: Link2,
    title: "REST API Development",
    description:
      "Design, documentation, and implementation of high-performance and standard RESTful APIs for mobile and web systems.",
    features: [
      "API request-response schema design",
      "Robust input validation & error handling",
      "Postman testing and documentation workflows",
      "Third-party API integrations",
      "Rate limiting and caching layers"
    ],
    price: "Starting from $300",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deploying scalable applications in cloud environments (primarily AWS), including configuration of VPC, ECS, RDS, and S3.",
    features: [
      "Cloud architecture consulting",
      "AWS ECS & EC2 instance setups",
      "Relational and NoSQL cloud databases",
      "Domain management and SSL provisioning",
      "Automated backups and failovers"
    ],
    price: "Starting from $600",
  },
  {
    icon: Package,
    title: "Docker Containerization",
    description:
      "Standardizing software runtime and environment isolation by containerizing frontend, backend, and databases using Docker.",
    features: [
      "Multi-stage Dockerfile configurations",
      "Docker Compose environment orchestrations",
      "Optimized and secure minimal base images",
      "Volume and persistent storage configurations",
      "Development vs production configs"
    ],
    price: "Starting from $300",
  },
  {
    icon: Layers,
    title: "Kubernetes Deployment",
    description:
      "Orchestrating microservices on Kubernetes clusters. Implementing Helm charts, horizontal pod autoscaling, and ingress routes.",
    features: [
      "Kubernetes manifest design",
      "Helm chart development for deployments",
      "Nginx Ingress controller setups",
      "Configmaps and Secret management",
      "Rolling updates and zero-downtime deploys"
    ],
    price: "Starting from $700",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Auditing and enhancing application speed, bundle sizing, query performance, and SEO scores to achieve perfect core web vitals.",
    features: [
      "Next.js SSG / SSR implementation",
      "React code splitting and lazy loading",
      "Database indexing and query optimizations",
      "Asset compression and caching policies",
      "Google Lighthouse auditing fixes"
    ],
    price: "Starting from $400",
  },
  {
    icon: HelpCircle,
    title: "Technical Consulting",
    description:
      "Architectural advice, code reviews, technology stack choices, and scaling planning to align software design with business goals.",
    features: [
      "System Design & architecture planning",
      "Security and vulnerability audit reviews",
      "Database selection & optimization advising",
      "CI/CD automation setup advice",
      "Mentoring and clean code guidelines"
    ],
    price: "Starting from $100/hr",
  },
];
