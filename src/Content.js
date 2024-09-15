// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";


import project1 from "./assets/images/projects/img1.jpg";
import project2 from "./assets/images/projects/img2.jpg";
import project3 from "./assets/images/projects/img3.jpg";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SONIA",
    LastName: "AKTER",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: " Structure, Tags, Semantics, Accessibility",
        logo: html,
      },
      {
        name: "CSS",
        para: "Styling, Layout, Animations, Responsive",
        logo: css,
      },
      {
        name: "JS",
        para: "Functions, Events, Objects, Interactivity",
        logo: js,
      },
      {
        name: "React js",
        para: "Components, Hooks, State, Routing",
        logo: reactjs,
      },
      {
        name: "Figma",
        para: "Prototyping, Wireframes, Collaboration, Design Systems",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I offer expert web development with clean coding, responsive design, interactive features, and optimized performance for engaging, user-friendly websites",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "I provide exceptional UI/UX design with intuitive interfaces, user-centered designs, seamless navigation, and engaging visuals to enhance user satisfaction and usability.",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "To-Do list",
        image: project1,
        liveLink:'https://soniareactdeveloper.github.io/TodoList/'
      },
      {
        title: "Money Transactions",
        image: project2,
        liveLink:'https://soniareactdeveloper.github.io/Money-Transaction/'
      },
      {
        title: "Creative Website",
        image: project3,
        liveLink:'https://smart-n-otes.vercel.app/'
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    para: "Experienced React developer creating responsive, visually engaging web applications with smooth animations and modern designs. Let's collaborate",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "soniareactdeveloper@gmail.com",
        icon: GrMail,
        link: "mailto:soniareactdeveloper@gmail.com",
      },
      {
        text: "+8801885119313",
        icon: MdCall,
        link: "https://web.whatsapp.com/",
      },
      {
        text: "soniareactdeveloper",
        icon: FaGithub,
        link: "https://github.com/soniareactdeveloper",
      },
    ],
  },
};
