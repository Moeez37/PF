// Home Page Content Config
// All text, images, links, and config values for the Home page live here.
// Update this file to change content site-wide.

const homeContent = {
  header: {
    logo: {
      text: "Mo-iz",
      // image: "/images/profile.png", // Optionally use an image logo
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    resumeButton: {
      label: "Download Resume",
      href: "/documents/moeez.pdf", // Update with actual file
    },
  },
  hero: {
    name: "Moeez Hayder",
    role: "Full Stack Developer",
    pitch: "Full Stack Developer with over 5 years of experience in developing and maintaining complex MERN stack applications using modern tools and best practices. Eager to learn and contribute to impactful, high-quality software solutions.",
    cta: {
      label: "Hire Me",
      href: "/contact",
    },
    image: "/images/profile.png",
    alt: "Moeez Hayder profile photo",
  },
  experience: {
    years: 5,
    yearsLabel: "Years Experience",
    clientSatisfaction: 98,
    clientSatisfactionLabel: "Client Satisfaction",
    skills: [
      { name: "Python", percent: 90 },
      { name: "SQL", percent: 85 },
      { name: "JavaScript", percent: 95 },
      { name: "TypeScript", percent: 90 },
      { name: "ReactJs", percent: 95 },
      { name: "Nextjs", percent: 92 },
      { name: "NodeJs", percent: 90 },
      { name: "NestJs", percent: 85 },
      { name: "ExpressJs", percent: 90 },
      { name: "Django", percent: 80 },
      { name: "API/CRM Integration", percent: 85 },
      { name: "GCP", percent: 80 },
      { name: "Docker", percent: 75 },
    ],
    skillsDescription: "My expertise spans the modern web stack, from front-end to cloud deployment, with a focus on MERN, Python, and cloud technologies.",
  },
  services: {
    title: "Popular Services",
    subtitle: "What I Offer",
    mainButton: {
      label: "Development",
      href: "/services",
    },
    cards: [
      {
        icon: "Globe", // Use icon name from icon library
        title: "Web Development",
        description: "Modern, responsive websites and web apps.",
        href: "/services/web",
      },
      {
        icon: "Smartphone",
        title: "App Development",
        description: "Cross-platform mobile apps for iOS and Android.",
        href: "/services/app",
      },
      {
        icon: "Code",
        title: "Software Development",
        description: "Custom software solutions for your business.",
        href: "/services/software",
      },
    ],
  },
  workExperience: {
    title: "Work Experience",
    subtitle: "Where I've Worked",
    jobs: [
      {
        date: "Jul 2024 – present",
        company: "MergeStack",
        logo: "/images/mergestack.jpeg",
        title: "Senior Software Engineer",
        location: "Pakistan",
        type: "Onsite",
        website: "https://mergestack.com",
      },
      {
        date: "Aug 2023 – Jul 2024",
        company: "Arrivy",
        logo: "/images/arrivy.png",
        title: "Software Engineer",
        location: "Bellevue, Washington",
        type: "Hybrid",
        website: "https://arrivy.com",
      },
      {
        date: "Feb 2021 – Aug 2023",
        company: "Remotify",
        logo: "/images/letsremotify.jpeg",
        title: "Software Engineer",
        location: "USA",
        type: "Remote",
        website: "https://letsremotify.com/",
      },
    ],
  },
  recentWork: {
    title: "Recent Work",
    subtitle: "Selected Projects",
    icon: "Folder",
    projects: [
      {
        image: "/images/image-ai.png",
        title: "AI Image Generator",
        tag: "Web App",
        href: "https://image-generator-beed6.web.app/",
      },
      {
        image: "/images/muvfl.png",
        title: "MUVFL",
        tag: "E-commerce Platform",
        href: "https://arrivy.com",
      },
      {
        image: "/images/flight.png",
        title: "FlightRadar Tracker and Dashboard",
        tag: "Dashboard",
        href: "https://fly.volanta.app/",
      },
      {
        image: "/images/arrivy-proj.png",
        title: "Arrivy Integration Automation",
        tag: "CRM",
        href: "https://arrivy.com",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What Clients Say",
    items: [
      {
        name: "M. Abbas",
        role: "Senior Software Engineer",
        avatar: "/images/abbas.jpeg",
        quote: "Moeez is a talented developer who consistently delivers clean and efficient code, even under tight deadlines. His strong work ethic and problem-solving skills made him a great teammate. It was a pleasure working with him, and I highly recommend him.",
      },
      {
        name: "Atif Aqeel",
        role: "Software Engineer",
        avatar: "/images/atif.jpeg",
        quote: "Moeez is an incredible person to work with! We had the chance to study and collaborate on our FYP at PUCIT, and I can confidently say he’s one of the best teammates I’ve ever had. He’s always ready to lend a hand and support others, which makes him a great colleague. His collaborative and positive attitude makes him a valuable asset to any team. Moeez’s contributions were truly impactful, and I’d be thrilled to work with him again in the future!",
      },
    ],
  },
  pricing: {
    title: "Pricing Plans",
    subtitle: "Choose Your Plan",
    plans: [
      {
        tag: "Basic",
        price: "$499",
        features: [
          "1 Landing Page",
          "Basic SEO",
          "Responsive Design",
        ],
        cta: {
          label: "Order Now",
          href: "/contact?plan=basic",
        },
      },
      {
        tag: "Premium",
        price: "$999",
        features: [
          "Up to 5 Pages",
          "Advanced SEO",
          "Animations",
          "Contact Form",
        ],
        cta: {
          label: "Order Now",
          href: "/contact?plan=premium",
        },
      },
      {
        tag: "Advanced",
        price: "$1999",
        features: [
          "Unlimited Pages",
          "Custom Integrations",
          "Priority Support",
        ],
        cta: {
          label: "Order Now",
          href: "/contact?plan=advanced",
        },
      },
    ],
  },
  contact: {
    title: "Let's Talk",
    subtitle: "Contact Me",
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel", required: false },
        { name: "service", label: "Choose Service", type: "select", required: true, options: ["Web Development", "App Development", "Software Development"] },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
      submit: {
        label: "Submit Now",
      },
    },
  },
  blogs: {
    title: "Latest Blogs",
    subtitle: "Insights & Stories",
    items: [
      {
        image: "/blog1.png",
        title: "How to Build Modern Web Apps",
        excerpt: "A step-by-step guide to building scalable web applications...",
        href: "/blog/modern-web-apps",
      },
      {
        image: "/blog2.png",
        title: "UI/UX Trends 2024",
        excerpt: "Stay ahead with the latest design trends for developers...",
        href: "/blog/ui-ux-trends-2024",
      },
    ],
  },
  footer: {
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    servicesLinks: [
      { label: "Web Development", href: "/services/web" },
      { label: "App Development", href: "/services/app" },
      { label: "Software Development", href: "/services/software" },
    ],
    socials: [
      { icon: "Github", href: "https://github.com/Moeez37" },
      { icon: "Linkedin", href: "https://www.linkedin.com/in/moeez-hayder" },
      { icon: "Twitter", href: "https://x.com/MoeezHayder" },
    ],
    subscribe: {
      placeholder: "Enter your email",
      button: "Subscribe",
    },
    copyright: "© 2024 Mo-iz. All rights reserved.",
  },
};

export default homeContent; 