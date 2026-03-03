// 📦 Import images
import ApiCountryImg from "../Img/ApiCountryImg.png";
import Latest_Products from "../Img/Latest_Products.png";
import UMS from "../Img/UMS.png";

// 🌟 Featured Projects
export const featuredProjects = [
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
    title: "🌍 API Country Search App",
    description:
      "A modern country search app using React + TypeScript + Tailwind. Fetches and displays detailed info about countries from REST Countries API in a sleek dark UI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Axios", "Vite"],
    category: ["React", "web-app"],
    demo: "https://api-cuntry.vercel.app",
    github: "https://github.com/rabea-shaban/APICuntry",
    featured: true,
    img: ApiCountryImg,
  },
];
