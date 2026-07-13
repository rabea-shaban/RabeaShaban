import {
  GraduationCap,
  Code,
  Award,
  BookOpen,
  Zap,
  Globe,
  Database,
  Cloud,
} from "lucide-react";

export const certificates = [
  {
    id: 1,
    title: "Bachelor's in Management Information Systems (MIS)",
    issuer: "Institute of Management Information Systems",
    date: "2024",
    type: "degree",
    grade: "Excellent (Imtiyaz)",
    description:
      "Graduated with distinction in Management Information Systems, focusing on software development, database management, and system analysis.",
    icon: GraduationCap,
    category: "Education",
    verified: true,
    pdf: "/cv.pdf",
    image: "/certificate-placeholder.jpg",
  },
  {
    id: 100,
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2025",
    category: "Cloud",
    grade: "Completed",
    description:
      "Detailed education in cloud computing concepts, AWS core services, security, architecture, pricing, and support models.",
    icon: Cloud,
    verified: true,
    image: "/awsCloudFoundations.jpg",
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "Jan 2026",
    category: "Web Development",
    description:
      "Professional certificate from Meta covering HTML, CSS, JavaScript, React, version control, UX/UI principles, and a final capstone project.",
    icon: Code,
    verified: true,
    image: "/metaFrontend.jpeg",
  },

  {
    id: 3,
    title: "Front-End Developer Capstone",
    issuer: "Meta (Coursera)",
    date: "2024",
    category: "Web Development",
    description:
      "Capstone project demonstrating real-world front-end development skills using React and modern best practices.",
    icon: Code,
    verified: true,
    image: "/Front-End Developer Capstone.jpeg",
  },

  {
    id: 4,
    title: "Foundations of Digital Marketing & E-commerce",
    issuer: "Google (Coursera)",
    date: "2024",
    category: "Education",
    description:
      "Comprehensive training in digital marketing fundamentals, SEO, analytics, and e-commerce strategies.",
    icon: Award,
    verified: true,
    image: "/DigitalMarketing.png",
  },

  {
    id: 5,
    title: "Digital Marketing Certificate",
    issuer: "Google",
    date: "2021",
    category: "Education",
    description:
      "Completed Google Digital Marketing program covering marketing fundamentals and online growth strategies.",
    icon: Award,
    verified: true,
    image: "/Google.jpg",
  },

  {
    id: 6,
    title: "Learn HTML & CSS",
    issuer: "Mahara-Tech (ITI)",
    date: "2022",
    category: "Web Development",
    description:
      "Hands-on training covering HTML5, CSS3, layouts, and responsive design fundamentals.",
    icon: Globe,
    verified: true,
    image: "/MaharaTch.jpg",
  },

  {
    id: 7,
    title: "Web Design Training Program",
    issuer: "National Telecommunication Institute (NTI)",
    date: "2023",
    category: "Web Development",
    description:
      "Professional web design program including UI fundamentals and real projects.",
    icon: Globe,
    verified: true,
    image: "/NTI.png",
  },

  {
    id: 8,
    title: "Web Development Challenger Track",
    issuer: "Udacity – MCIT Egypt",
    date: "2022",
    category: "Web Development",
    description:
      "Completed intensive web development track powered by Udacity and MCIT Egypt.",
    icon: Code,
    verified: true,
    image: "/Udacity.jpg",
  },

  {
    id: 9,
    title: "Frontend Advanced React",
    issuer: "Upskilling IT Center",
    date: "2025",
    category: "Programming",
    description:
      "Advanced React concepts including performance optimization and modern patterns.",
    icon: Code,
    verified: true,
    image: "/UPSKILLING.jpg",
  },

  {
    id: 10,
    title: "Web Fundamentals Summer Training",
    issuer: "Information Technology Institute (ITI)",
    date: "2023",
    category: "Web Development",
    description:
      "Intensive summer training covering HTML, CSS, JavaScript, Bootstrap, and Firebase.",
    icon: Globe,
    verified: true,
    image: "/ITI SUmar.jpg",
  },
  // =======================
  // Meta – Coursera
  // =======================

  {
    id: 11,
    title: "Introduction to Front-End Development",
    issuer: "Meta (Coursera)",
    date: "2024",
    category: "Training",
    description:
      "Introduction to front-end development fundamentals including HTML, CSS, and basic web concepts.",
    icon: Globe,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~H6RTRX49KV5Q.jpeg",
  },

  {
    id: 12,
    title: "React Basics",
    issuer: "Meta (Coursera)",
    date: "2024",
    category: "Training",
    description:
      "Learned React fundamentals including components, props, state, and JSX.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~3DENVJMKRJZT.jpeg",
  },

  {
    id: 13,
    title: "Principles of UX/UI Design",
    issuer: "Meta (Coursera)",
    date: "2026",
    category: "Training",
    description:
      "Principles of user experience and user interface design focusing on usability and accessibility.",
    icon: BookOpen,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~BLXGMEHIRE69.jpeg",
  },

  {
    id: 14,
    title: "Programming with JavaScript",
    issuer: "Meta (Coursera)",
    date: "2024",
    category: "Programming",
    description:
      "Core JavaScript programming concepts including functions, loops, and problem solving.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~J6LM5LHGCXEY.jpeg",
  },

  {
    id: 15,
    title: "HTML and CSS in Depth",
    issuer: "Meta (Coursera)",
    date: "2024",
    category: "Web Development",
    description:
      "Advanced HTML and CSS techniques with responsive layouts and best practices.",
    icon: Globe,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~TEMME3EEAEFH.jpeg",
  },

  {
    id: 16,
    title: "Version Control",
    issuer: "Meta (Coursera)",
    date: "2024",
    category: "Programming",
    description:
      "Version control fundamentals using Git and GitHub for collaborative development.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~VVDM6BY8G9KA.jpeg",
  },

  // =======================
  // Government / National Programs
  // =======================

  {
    id: 17,
    title: "Digital Egypt Pioneers Program (DEPI)",
    issuer: "MCIT – Ministry of Communications & IT",
    date: "2024",
    category: "Training",
    description:
      "Software Development (.NET Web Developer) track under Digital Egypt Pioneers Program.",
    icon: Code,
    verified: true,
    image: "/Depi net.jpg",
  },

  {
    id: 18,
    title: "Web Masters Front-End Development Program",
    issuer: "Web Masters",
    date: "2023",
    category: "Training",
    description:
      "Front-End Development training program with focus on React and real-world projects.",
    icon: Globe,
    verified: true,
    image: "/webMaster.jpg",
  },

  {
    id: 19,
    title: "Meta React Specialization",
    issuer: "Meta (Coursera)",
    date: "2026",
    category: "Training",
    level: "Advanced",
    description:
      "Professional React specialization by Meta covering both fundamental and advanced React concepts, including reusable components, state management, data flow, and advanced React patterns. The specialization consists of React Basics and Advanced React courses.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~Z1MO3QV3BU85.jpeg",
  },
  {
    id: 21,
    title: "Database Fundamentals",
    issuer: "Mahara-Tech (ITI Platform)",
    date: "2024",
    category: "Database",
    level: "Fundamentals",
    duration: "2 Hours 47 Minutes",
    description:
      "Introduction to database fundamentals including basic concepts, data organization, and relational databases.",
    icon: Database,
    verified: true,
    image: "/dataBse-iti.jpg",
  },

  {
    id: 22,
    title: "Freelancing Basics",
    issuer: "Mahara-Tech (ITI Platform)",
    date: "2022",
    category: "Training",
    level: "Fundamentals",
    duration: "3 Hours 8 Minutes",
    description:
      "Fundamentals of freelancing including client communication, pricing, and working on freelance platforms.",
    icon: BookOpen,
    verified: true,
    image: "/freelancing.jpg",
  },
];

export const certificateCategories = [
  { id: "all", name: "All Certificates", icon: Award },
  { id: "Education", name: "Education", icon: GraduationCap },
  { id: "Programming", name: "Programming", icon: Code },
  { id: "Web Development", name: "Web Development", icon: Globe },
  { id: "Database", name: "Database", icon: Database },
  { id: "Cloud", name: "Cloud", icon: Cloud },
];
