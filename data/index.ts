export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration and open communication in every project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Amman, Jordan - Flexible with time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Passionate about building real-world systems with modern web technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on NOTO - E-commerce platform for automotive solutions",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NOTO - Automotive E-commerce Platform",
    des: "A comprehensive e-commerce platform for automotive solutions featuring dashboards, product management, order tracking, and quote management systems.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/a7madiv",
  },
  {
    id: 2,
    title: "ScytheEx - Cybersecurity Monitoring Tool",
    des: "1st Place Winner at AI Hackathon Jordan. Advanced cybersecurity tool for real-time network traffic monitoring and threat analysis.",
    img: "/p2.svg",
    iconLists: ["/c.svg", "/re.svg", "/ts.svg"],
    link: "https://github.com/a7madiv",
  },
  {
    id: 3,
    title: "Gauntlet - Code Verification Framework",
    des: "Adversarial code verification framework designed to ensure code quality and security through automated testing and analysis.",
    img: "/p3.svg",
    iconLists: ["/ts.svg", "/re.svg"],
    link: "https://github.com/a7madiv",
  },
  {
    id: 4,
    title: "Full-Stack Learning Management System",
    des: "Complete LMS with React Native mobile app, React admin dashboard, and Node.js + Express REST API backend.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/a7madiv",
  },
];

export const testimonials = [
  {
    quote:
      "Ahmad demonstrated exceptional technical skills and professionalism during his internship. His ability to quickly adapt to our .NET-based CMS and contribute meaningfully to the KAFD project was impressive.",
    name: "Publicis Groupe",
    title: "KAFD Project Team",
  },
  {
    quote:
      "Working with Ahmad on ERP systems was a great experience. His understanding of Python, SQL, and Odoo framework helped deliver robust solutions for our enterprise clients.",
    name: "JOCOM Team",
    title: "ERP Development Division",
  },
  {
    quote:
      "Ahmad's work on ScytheEx showcased his ability to combine cybersecurity knowledge with practical development skills. The 1st place win at the AI Hackathon was well-deserved.",
    name: "AI Hackathon Jordan",
    title: "Competition Judges",
  },
  {
    quote:
      "His participation in the Summer Work & Travel USA Program demonstrated strong adaptability, communication skills, and the ability to thrive in multicultural environments.",
    name: "Cultural Exchange Program",
    title: "Program Coordinator",
  },
  {
    quote:
      "Ahmad's commitment to continuous learning is evident through his certifications in AWS, React, AI/ML, and Flutter. He brings both theoretical knowledge and practical experience to every project.",
    name: "Professional Development",
    title: "Certification Programs",
  },
];

export const companies = [
  {
    id: 1,
    name: "react",
    img: "/re.svg",
    nameImg: "/re.svg",
  },
  {
    id: 2,
    name: "typescript",
    img: "/ts.svg",
    nameImg: "/ts.svg",
  },
  {
    id: 3,
    name: "next.js",
    img: "/next.svg",
    nameImg: "/next.svg",
  },
  {
    id: 4,
    name: "tailwind",
    img: "/tail.svg",
    nameImg: "/tail.svg",
  },
  {
    id: 5,
    name: "git",
    img: "/git.svg",
    nameImg: "/git.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern - Publicis Groupe",
    desc: "Worked with Optimizely (.NET-based CMS) on internal content management tools for the KAFD Project.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - JOCOM",
    desc: "Developed ERP systems (Sales, CRM, Inventory, Accounting) using Odoo, Python, XML, and SQL.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Developer - NOTO",
    desc: "Building an e-commerce platform for automotive solutions with React, TypeScript, and Vite.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "AI Hackathon Winner - ScytheEx",
    desc: "1st Place Winner in Jordan AI Hackathon. Developed real-time cybersecurity monitoring tool.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/a7madiv",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/ahmadibrahim1/",
  },
  {
    id: 3,
    img: "/wha.svg",
    link: "https://wa.me/962782077622",
  },
];
