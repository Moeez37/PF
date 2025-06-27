// Configurable content for the portfolio site
const content = {
  header: {
    name: "Mo-iz",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Service", href: "/service" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    resumeUrl: "/resume.pdf",
  },
  hero: {
    title: "Hi, I'm Mo-iz",
    subtitle: "Full Stack Developer",
    description: "I build modern, scalable web applications.",
    cta: "Hire Me",
    image: "/profile.jpg",
  },
  experience: {
    years: 5,
    clients: 30,
    satisfaction: 98,
    skillsHeading: "My Skills",
    skillsSub: "Technologies I excel at:",
    skills: [
      { name: "React", percent: 95 },
      { name: "Node.js", percent: 90 },
      { name: "TypeScript", percent: 85 },
      { name: "MongoDB", percent: 80 },
      { name: "Cloud", percent: 75 },
    ],
  },
  services: {
    title: "Popular Services",
    subtitle: "Support me in services",
    buttons: ["Development"],
    cards: [
      {
        icon: "Globe",
        title: "Web Development",
        description: "Building responsive and modern web apps.",
        cta: "Learn More",
      },
      {
        icon: "Smartphone",
        title: "App Development",
        description: "Cross-platform mobile app solutions.",
        cta: "Learn More",
      },
      {
        icon: "Code2",
        title: "Software Development",
        description: "Custom software for your business.",
        cta: "Learn More",
      },
    ],
  },
  workExperience: {
    title: "My Work Experience",
    subtitle: "A journey through my career",
    cards: [
      {
        date: "2021-2023",
        companyLogo: "/company1.png",
        jobTitle: "Senior Developer",
        location: "Remote",
        type: "Remote",
        companyUrl: "https://company1.com",
      },
      {
        date: "2019-2021",
        companyLogo: "/company2.png",
        jobTitle: "Frontend Engineer",
        location: "Onsite, NY",
        type: "Onsite",
        companyUrl: "https://company2.com",
      },
    ],
  },
  recentWork: {
    title: "Recent Work",
    subtitle: "Some of my latest projects",
    icon: "Rocket",
    projects: [
      {
        image: "/project1.jpg",
        title: "Portfolio Website",
        tag: "Web Development",
        url: "https://portfolio.com",
      },
      {
        image: "/project2.jpg",
        title: "E-commerce App",
        tag: "App Development",
        url: "https://ecommerce.com",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    cards: [
      {
        quote: "Mo-iz is a fantastic developer!",
        name: "Jane Doe",
        title: "CTO, TechCorp",
      },
      {
        quote: "Delivered our project on time and exceeded expectations.",
        name: "John Smith",
        title: "Product Manager, Webify",
      },
    ],
  },
  pricing: {
    title: "Pricing Plans",
    cards: [
      {
        tag: "Basic",
        rate: "$499",
        title: "Starter Website",
        features: ["1-3 pages", "Basic SEO", "Responsive Design"],
        cta: "Order Now",
      },
      {
        tag: "Premium",
        rate: "$999",
        title: "Business Website",
        features: ["Up to 10 pages", "Advanced SEO", "CMS Integration"],
        cta: "Order Now",
      },
      {
        tag: "Advanced",
        rate: "$1999",
        title: "Enterprise Solution",
        features: ["Unlimited pages", "Custom Features", "Priority Support"],
        cta: "Order Now",
      },
    ],
  },
  contact: {
    title: "Let's Talk",
    fields: ["Name", "Email", "Phone", "Service", "Message"],
    services: ["Web Development", "App Development", "Software Development"],
    cta: "Submit Now",
  },
  blogs: {
    title: "Latest Blogs",
    cards: [
      {
        image: "/blog1.jpg",
        title: "How to Build a Portfolio",
        excerpt: "Tips and tricks for a standout developer portfolio.",
        url: "#",
      },
      {
        image: "/blog2.jpg",
        title: "React vs Next.js",
        excerpt: "Comparing two popular frontend frameworks.",
        url: "#",
      },
    ],
  },
  footer: {
    services: ["Web Development", "App Development", "Software Development"],
    navigation: ["Home", "About", "Service", "Portfolio", "Contact", "Blog"],
    socials: [
      { icon: "Github", url: "https://github.com/" },
      { icon: "Linkedin", url: "https://linkedin.com/" },
      { icon: "Twitter", url: "https://twitter.com/" },
    ],
    subscribeCta: "Subscribe",
  },
};

export default content;
