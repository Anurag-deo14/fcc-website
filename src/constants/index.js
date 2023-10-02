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
  hh,
  vachan,
  ab,
  f,
  tl,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "sponsors",
    title: "Sponsors",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "Non-Core Weekend",
    company_name: "Club Orientation & Guess-It-Mate",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Orientation program introducing finance and consulting opportunities, followed by a guesstimate competition.",
      "Seminar to address investment, taxation, and asset management queries.",
      "Fin-Ace: A Business Quiz followed by above events.",
    ],
  },
  {
    title: "Synergy: Orientation on innovation in Finance",
    company_name: "Noble lectures & Biz-Tech Summit",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Hands on session by distinguished experts from academia.",
      "Talks by industry CXOs",
    ],
  },
  {
    title: "FinFiesta2.0",
    company_name: "Case O Maze & Money Haul",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Week-long mock trading/portfolio competition & case study contest.",
      "Case O Maze-Case Study Competition.",
      "Money Haul: Mock Trading event.",
    ],
  },
  {
    title: "Mudra2.0",
    company_name: "Equity Edge & Indianomics IQ",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2023 - Aug 2023",
    points: [
      "Indianomics IQ: Budget and Monetary Policy quiz.",
      "Equity Edge: Equity Research Competition.",
      "Equity research competition for aspiring analysts to develop skills for analysing and valuing companies.",
      "Followed by a seminar and a quiz to test knowledge and understanding of monetary policy concepts, principles, and practices in a fun and interactive way.",
      
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to get the project back on track, but FCC proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met an organization which truly cares about their clients' success like FCC does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After FCC optimized our bussiness model, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HUDA",
    description:
      "Conducted an expansive operations optimization initiative spanning Gymkhanas & Golf clubs throughout Haryana, enhancing efficiency and resource utilization.",
    tags: [
      {
        name: "consulting",
        color: "blue-text-gradient",
      },
      {
        name: "problem-solving",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Nail Company",
    description:
      "Strategically devised a comprehensive market entry and expansion plan to facilitate the successful entry of a nail-focused company into new markets.",
    tags: [
      {
        name: "strategizing",
        color: "blue-text-gradient",
      },
      {
        name: "planning",
        color: "green-text-gradient",
      },
      {
        name: "finance",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phasal Bazar",
    description:
      "Executed on-field market research and devised a data-driven pricing strategy to empower Phasal Bazar in navigating competitive agricultural markets effectively.",
    tags: [
      {
        name: "research",
        color: "blue-text-gradient",
      },
      {
        name: "analysis",
        color: "green-text-gradient",
      },
      {
        name: "consulting",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
const projecti = [
  {
    name: "Henry Harvin",
    image: hh,
  },
  {
    name: "Vachan",
    image: vachan,
  },
  {
    name: "AB Classes",
    image: ab,
  },
  {
    name: "Finlatics",
    image: f,
  },
  {
    name: "The Terrace Lounge",
    image: tl,
  },
];

export { services, technologies, experiences, testimonials, projects,projecti };
