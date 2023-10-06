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
    title: "Non-Core Week",
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
    title: "FinFiesta 2.0",
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
    title: "Mudra 2.0",
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
      "Their expertise, responsive approach, and empathetic problem-solving were impressive. Their data-driven recommendations and seamless collaboration exceeded our expectations. I highly recommend the club for transformative and innovative solutions.",
    name: "Archit Watts",
    designation: "Associate",
    company: "CMGGA",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Their expertise in market entry strategies, in-depth market research, and cutting-edge customer acquisition methods have been instrumental in our growth and success. I highly recommend the team and their solutions.",
    name: "Aishwarya Yadav",
    designation: "Co-Founder",
    company: "The Nail Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
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
