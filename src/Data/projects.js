import Shahn365 from "../Img/365.png";
import AboRaslan from "../Img/AboRaslan.png";
import AddToDo from "../Img/AddToDo.png";
import AlAmar from "../Img/AlAmar.png";
import AlaYman from "../Img/AlaYman.png";
import AlertSestem from "../Img/AlertSestem.png";
import ALRamaADS from "../Img/ALRamaADS.png";
import ApiCountryImg from "../Img/ApiCountryImg.png";
import BasmatAlwafa from "../Img/BasmatAlwafa.png";
import CarRent from "../Img/CarRent.png";
import HadayiqAlMarjan from "../Img/HadayiqAlMarjan.png";
import Kashf3laj from "../Img/Kashf3laj.png";
import KayanGardens from "../Img/KayanGardens.png";
import Latest_Products from "../Img/Latest_Products.png";
import Programming from "../Img/Programming.png";
import SolidaritySolarImg from "../Img/SolidaritySolarImg.png";
import SpiderMan from "../Img/Spider-Man.png";
import TakseerSA from "../Img/TakseerSA.png";
import TaksirWatarmim from "../Img/TaksirWatarmim.png";
import TansiqGarden from "../Img/TansiqGarden.png";
import TaskOenUpskilling from "../Img/TaskOenUpskilling.png";
import UMS from "../Img/UMS.png";

export const projects = [
  {
    title: "User Management System",
    description:
      "A complete user management system built with React and Context API. Features include adding, editing, deleting users, toggling active status, and fetching data from an external API.",
    tech: ["React", "Context API", "React Hook Form", "DummyJSON API", "CSS"],
    category: ["React", "web-app"],
    demo: "https://ums-gamma.vercel.app/",
    github: "https://github.com/rabea-shaban/UMS",
    featured: true,
    img: UMS,
  },
  {
    title: "Kayan Gardens - Riyadh Landscaping",
    description:
      "An elegant Arabic website for a landscaping and garden design company in Riyadh. It offers a wide range of outdoor services including artificial grass, irrigation systems, pergolas, water features, and wooden flooring. Built with WordPress and optimized for RTL and local SEO.",
    image: "Website screenshot for Kayan Landscaping Riyadh",
    tech: ["WordPress", "Elementor", "Blocksy", "RTL Arabic", "Local SEO"],
    category: "wordpress",
    demo: "https://kayan-gardens.site/",
    github: "#",
    featured: false,
    img: KayanGardens, // صورة المشروع بعد ما ترفعها
  },

  {
    title: "Basmat Alwafa Medical Center",
    description:
      "An Arabic WordPress website for a multi-specialty medical center in Saudi Arabia offering dentistry, dermatology, and cosmetic services. Built with Elementor and Blocksy, featuring modern UI/UX and high SEO optimization.",
    image: "Medical center homepage with services in Arabic",
    tech: [
      "WordPress",
      "Elementor",
      "Blocksy",
      "Arabic SEO",
      "Medical Services",
    ],
    category: ["wordpress", "e-commerce"],
    demo: "https://basmat-alwafa.com/",
    github: "#",
    featured: false,
    img: BasmatAlwafa, // استخدم اسم الصورة اللي هترفعها مع المشروع
  },
  {
    title: "Tansiq Garden Riyadh",
    description:
      "A professional Arabic WordPress website for a landscaping company based in Riyadh, offering services like garden design, artificial/natural grass installation, irrigation systems, pergolas, and more. Built using Elementor and Blocksy, optimized for performance and local SEO.",
    image: "Garden landscaping service homepage",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO", "Arabic"],
    category: "wordpress",
    demo: "https://tansiq-garden.org/",
    github: "#",
    featured: false,
    img: TansiqGarden, // غيّر الاسم حسب صورة المشروع عندك
  },
  {
    title: "Hadayiq Al-Marjan",
    description:
      "A beautifully crafted Arabic WordPress website for a landscape design and garden services company based in Madinah and Riyadh. Built using Elementor and Blocksy, the site showcases a wide range of services including natural/artificial grass installation, irrigation systems, garden decor, and more — all optimized for local SEO.",
    image: "Landscaping and gardening homepage",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO", "Arabic"],
    category: "wordpress",
    demo: "http://hadayiq-almarjan-ksa.org/",
    github: "#",
    featured: true,
    img: HadayiqAlMarjan, // غيّر الاسم حسب صورة المشروع عندك
  },
  {
    title: "Car Rental React App",
    description:
      "A modern car rental web application with advanced filtering, responsive design, car detail pages, client testimonials, and dynamic data integration.",
    tech: ["React", "Axios", "React Router", "SCSS", "Bootstrap", "Swiper.js"],
    category: ["React", "web-app", "e-commerce"],
    demo: "https://car-rental-eosin-ten.vercel.app/",
    github: "https://github.com/rabea-shaban/Car-Rental",
    featured: true,
    img: CarRent,
  },

  {
    title: "Programming Library",
    description:
      "A comprehensive programming resources library featuring books, podcasts, apps, learning paths, channels, and tools. Built with React and JSON.",
    tech: ["React", "React Router", "Bootstrap", "Vite", "Font Awesome"],
    category: ["React", "web-app", "website"],

    demo: "https://programminglibrary.vercel.app/",
    github: "https://github.com/rabea-shaban/programming-library",
    featured: false,
    img: Programming,
  },

  {
    title: "365 Furniture Website",
    description:
      "A furniture and shipping service website built for a Riyadh-based company. Fully responsive and built using React and custom CSS.",
    tech: ["React", "CSS", "JSX"],
    category: ["e-commerce", "React"],
    demo: "https://company-365.netlify.app/",
    github: "#",
    featured: true,
    img: Shahn365,
  },
  {
    title: "Demolition & Renovation - Medina",
    description:
      "A professional Arabic WordPress website for a building demolition and renovation company in Medina, Saudi Arabia. It showcases services like wall cutting, plumbing systems, marble installation, and structural restoration. Developed with Elementor and optimized for local SEO.",
    image: "Website for construction and renovation company in Arabic",
    tech: ["WordPress", "Elementor", "Blocksy", "Arabic SEO", "Local Services"],
    category: "wordpress",
    demo: "https://taksir-watarmim.site/",
    github: "#",
    featured: false,
    img: TaksirWatarmim, // اسم الصورة اللي هترفعها في المشروع
  },
  {
    title: "Alert System (React + TS)",
    description:
      "A modern alert and notification component system built using React and TypeScript. Supports various alert types, custom styles, and animations.",
    tech: ["React", "TypeScript", "SCSS", "Lucide-react", "@mixin"],
    category: ["component", "React"],

    demo: "https://alert-react-tsx.vercel.app/",
    github: "https://github.com/Rabea-shaban/AlertReactTsx",
    featured: false,
    img: AlertSestem,
  },
  {
    title: "Kashf w 3laj",
    description:
      "A full-featured Arabic WordPress medical booking website for clinics, doctors, and pharmacies. Built using Elementor (v3.29.2), JetEngine, and Blocksy Companion. Offers smart doctor search, appointment booking, pharmacy services, and medical content powered by AI.",
    tech: [
      "WordPress",
      "Elementor 3.29.2",
      "JetEngine",
      "Blocksy Companion",
      "SEO",
      "Arabic",
    ],
    category: ["wordpress", "e-commerce"],
    demo: "https://kashf-3laj.com/",
    github: "#",
    featured: true,
    img: Kashf3laj,
  },
  {
    title: "Spider-Man Far From Home",
    description: "Spider-Man Far From Home",
    tech: ["Html", "Css", "Tailwind css"],
    category: "component",
    demo: "https://task-2-web-master-sbider-man.vercel.app",
    github: "https://github.com/rabea-shaban/Task-2-WebMaster-SbiderMan",
    featured: false,
    img: SpiderMan,
  },

  {
    title: "al-yman landscaping",
    description:
      "A professional WordPress website built using Blocksy and Elementor. Fully responsive and optimized for search engines.",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO"],
    category: "wordpress",
    demo: "https://tansiqhadayiq.com/",
    github: "#",
    featured: false,
    img: AlaYman,
  },
  {
    title: "Al-Amar Concrete Cutting",
    description:
      "A professional WordPress website for a Riyadh-based company specializing in laser wall cutting and core drilling. Built using Elementor and the Blocksy theme. Fully responsive, fast-loading, and optimized for Arabic SEO.",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO", "Arabic"],
    category: "wordpress",
    demo: "https://al-amar.org/",
    github: "#",
    featured: false,
    img: AlAmar, // غيّرها حسب اسم صورة السايد
  },

  {
    title: "Alarahma Ads Website",
    description:
      "A WordPress website for Alarahma Advertising Company. It showcases services like digital printing, signage, exhibitions, and more.",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO"],
    category: "wordpress",
    demo: "http://alrahma-advertising.com/",
    github: "#",
    featured: false,
    img: ALRamaADS,
  },

  {
    title: "Abu Ruslan Garden Website",
    description:
      "A garden design and landscaping company website in Riyadh. Built using WordPress with a clean and elegant design.",
    tech: ["Html", "Css", "JS", "Bootstrap"],
    category: "wordpress",
    demo: "https://aburuslan-garden.com/",
    github: "https://aburuslan-garden.com/",
    featured: false,
    img: AboRaslan,
  },

  {
    title: "Latest Products CRUD App",
    description:
      "A full-featured CRUD app to manage latest products using React 19, TypeScript, and Tailwind CSS 4. Includes toast notifications and unique ID generation.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "UUID",
      "react-hot-toast",
    ],
    category: ["React", "web-app"],

    demo: "https://latest-products.vercel.app",
    github: "https://github.com/rabea-shaban/latest-products",
    featured: true,
    img: Latest_Products,
  },

  {
    title: "Todos List App (Full-Stack)",
    description:
      "A full-stack Todo List application built with React and Strapi. Features JWT authentication, protected routes, advanced data fetching with React Query, and real-time notifications.",
    tech: [
      "React",
      "Strapi",
      "React Query",
      "Tailwind CSS",
      "JWT Auth",
      "Axios",
      "Vite",
    ],
    category: ["React", "web-app"],

    demo: "https://todos-list-zeta.vercel.app",
    github: "https://github.com/rabea-shaban/TodosList",
    featured: true,
    img: AddToDo,
  },
  {
    title: "Takseer SA",
    description:
      "A professional Arabic WordPress website for a concrete and wall demolition company based in Riyadh. Built with Elementor and Blocksy theme, the site offers SEO-optimized content, a service catalog, and detailed informational articles to rank high in local search results.",
    image: "Wall demolition services homepage",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO", "Arabic"],
    category: "wordpress",
    demo: "https://takseer-sa.site/",
    github: "#",
    featured: false,
    img: TakseerSA, // غيّر الاسم حسب الصورة عندك
  },

  {
    title: "🚀 Personal Portfolio - TaskOenUpskilling",
    description:
      "A professional personal portfolio website showcasing my web development projects and skills. Built using React, Vite, React Router, Bootstrap, and Font Awesome. Designed to be responsive and fast, demonstrating modern frontend best practices.",
    image: "Portfolio project screenshot - TaskOenUpskilling",
    tech: [
      "React",
      "Vite",
      "React Router",
      "Bootstrap",
      "Font Awesome",
      "Yarn",
    ],
    category: ["React", "web-app"],
    demo: "https://task-oen-upskilling.vercel.app/",
    github: "https://github.com/Rabea-shaban/TaskOenUpskilling",
    featured: true,
    img: TaskOenUpskilling, // صورة توضيحية من واجهة الموقع لو حابب تضيفها
  },
  {
    title: "🔆 Solar Company Website - Solidarity Solar",
    description:
      "A responsive landing page for a solar installation company in Plymouth. Built with HTML and CSS, showcasing services, values, and products of the company.",
    image: "Solidarity Solar Screenshot", // صورة من واجهة الموقع
    tech: ["HTML", "CSS", "Responsive Design"],
    category: ["website"],
    demo: "https://task-one-web-master-theta.vercel.app/",
    github: "https://github.com/rabea-shaban/Task-One-webMaster",
    featured: false,
    img: SolidaritySolarImg, // لو عندك صورة
  },
  {
    title: "🌍 API Country Search App",
    description:
      "A modern country search app using React + TypeScript + Tailwind. Fetches and displays detailed info about countries from REST Countries API in a sleek dark UI.",
    image: "Country API App Screenshot",
    tech: ["React", "TypeScript", "Tailwind CSS", "Axios", "Vite"],
    category: ["React", "web-app"],
    demo: "https://api-cuntry.vercel.app",
    github: "https://github.com/rabea-shaban/APICuntry",
    featured: false,
    img: ApiCountryImg, // لو عندك صورة للشكل النهائي
  },
];
