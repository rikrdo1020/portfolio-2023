import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    youtubeclone,
    journalapp,
    ecommerce,
    freelancer,
    tribunal,
    lios,
    backgroundremover
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "PHP Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FreeLancer",
      company_name: "",
      icon: freelancer,
      iconBg: "#383E56",
      date: "2015 - 2018",
      points: [
        "Design and develop websites using WordPress and other CMS.",
        "Create and modify WordPress themes using HTML, CSS, and PHP.",
        "Implement e-commerce solutions using WooCommerce and other online store platforms.",
        "Optimize websites for search engines using SEO techniques.",
      ],
    },
    {
      title: "Electronic voting station computer technician",
      company_name: "Electoral Tribunal of Panama",
      icon: tribunal,
      iconBg: "#383E56",
      date: "January 2019 - May 2019",
      points: [
        "Install, configure and maintain the hardware and software of the electronic voting stations.",
        "Configure and administer the network of the e-voting stations.",
        "Configure and administer the security of the electronic voting stations, including protection against viruses, attacks and security vulnerabilities.",
        "Install and configure external peripherals, such as ticket printers and laser readers.",
        "Perform preventive and corrective maintenance on equipment, identifying and resolving hardware and software problems."
      ],
    },
    {
      title: "Web Specialist and Wordpress Dev",
      company_name: "Live and Invest Overseas",
      icon: lios,
      iconBg: "#383E56",
      date: "2020 - 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "Frontend application with React and MaterialUI that lists and plays videos and channels from an external API. The application has a clean user interface and includes a search function.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "axios",
          color: "pink-text-gradient",
        },
      ],
      image: youtubeclone,
      source_code_link: "https://rikrdo1020.github.io/youtube-clone/",
    },
    {
      name: "Journal App",
      description:
        "This journal app is built with React and Firebase, allowing you to securely store notes and photos in the cloud, and also features a photo gallery to illustrate your experiences. Its intuitive interface lets you focus on writing and logging your thoughts and experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "materialui",
          color: "pink-text-gradient",
        },
      ],
      image: journalapp,
      source_code_link: "https://journal-app-beta-ecru.vercel.app/",
    },
    {
      name: "Ecommerce",
      description:
        "This e-commerce website, built with React and Node, includes a functional shopping cart. It allows you to browse products, add them to your cart, and securely checkout with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "styledcomponents",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "",
    },
    {
      name: "Background remover",
      description:
        "This application allows you to automatically remove the background of images using a third-party API. The project is designed to be easy to use, allowing users to simply drag and drop the images they want to process into the form.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "cloudinary",
          color: "green-text-gradient",
        },
      ],
      image: backgroundremover,
      source_code_link: "https://github.com/rikrdo1020/background-remover-cloudinary",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };