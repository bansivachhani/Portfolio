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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  java,
  binkey,
  todo,
  faculty,
  jokes_app,
  quote_app,
  todolist,
  binkeyit,
  weather,
  
} from "../assets";


export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full Stack Web Developer", icon: web },
  { title: "React.js Developer", icon: mobile },
  { title: "Backend Developer (Node.js)", icon: backend },
  { title: "Database & API Integrator", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  // { name: "Three JS", icon: threejs },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
];

const experiences = [
  {
    title: "Frontend Developer - To-Do List App",
    company_name: "Personal Project",
    icon: todo,
    iconBg: "#383E86",
    date: "May 2024",
    points: [
      "Built a task management app using HTML, CSS, and JavaScript.",
      "Implemented localStorage to persist tasks between sessions.",
      "Enabled add/edit/delete and mark-as-complete functionalities.",
    ],
  },
  {
    title: "Full Stack Developer - Binkey It",
    company_name: "Personal Project",
    icon: binkey,
    iconBg: "#E6DE25",
    date: "Jan 2025 - June 2025",
    points: [
      "Developed a full-stack e-commerce grocery application using React.js and Node.js.",
      "Implemented product listings, cart system, and authentication.",
      "Integrated MongoDB for database management and REST APIs.",
    ],
  },
  {
    title: "Team Lead - Faculty Rating & Leave System",
    company_name: "Group Project",
    icon: faculty,
    iconBg: "#FF69B4",
    date: "Dec 2024 - Apr 2025",
    points: [
      "Designed a MERN-based platform for student-faculty interaction and leave tracking.",
      "Handled faculty rating UI and backend leave logic with PostgreSQL.",
      "Led a team of developers and contributed TypeScript + React.js codebase.",
    ],
  },
];

const testimonials = [
  {
    name: "Bhakti Patel",
    testimonial:
      "Bansi is incredibly dedicated and detail-oriented. Her ability to take ownership of tasks and deliver them flawlessly is inspiring.",
  },
  {
    name: "Mahi Patel",
    testimonial:
      "Working with Bansi has always been smooth and efficient. She brings creativity and problem-solving skills to every discussion.",
  },
  {
    name: "Prachi Bhawanani",
    testimonial:
      "Bansi is a great teammate who’s always ready to help others. Her expertise in React and backend systems makes her a complete developer.",
  },
];

// const projects = [
//   {
//     name: "To-Do List App",
//     description:
//       "A lightweight task management web app allowing users to add, edit, mark complete, and delete tasks using localStorage.",
//     tags: [
//       { name: "javascript", color: "yellow-text-gradient" },
//       { name: "html", color: "blue-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: todolist,
//     source_code_link: "https://github.com/bansivachhani/todo-list-app",
//   },
//   {
//     name: "Binkey It (Grocery App)",
//     description:
//       "Full-stack MERN-based e-commerce application with product catalog, cart functionality, and secure user login.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "nodejs", color: "green-text-gradient" },
//       { name: "mongodb", color: "pink-text-gradient" },
//     ],
//     image: binkeyit,
//     source_code_link: "https://github.com/bansivachhani/Binkey-it",
//   },
//   {
//     name: "Faculty Rating & Leave System",
//     description:
//       "Web platform where students can rate faculty and faculty can apply for leave with real-time admin control and analytics.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "typescript", color: "green-text-gradient" },
//       { name: "postgresql", color: "pink-text-gradient" },
//     ],
//     image: facultyy,
//     source_code_link:
//       "https://github.com/bansivachhani/faculty-rating-and-leave-system",
//   },
//   {
//     name: "Quote Generator App",
//     description:
//       "A quote generator app that fetches new quotes on every click and allows users to tweet them directly on Twitter.",
//     tags: [
//       { name: "javascript", color: "yellow-text-gradient" },
//       { name: "html", color: "blue-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: quote_app,
//     source_code_link: "https://github.com/bansivachhani/Quote_APP",
//   },
//   {
//     name: "Jokes Reader App",
//     description:
//       "A simple jokes app where users can read fun, manually added jokes. New joke shown each time you click next.",
//     tags: [
//       { name: "javascript", color: "yellow-text-gradient" },
//       { name: "html", color: "blue-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: jokes_app,
//     source_code_link: "https://github.com/bansivachhani/jokes-web",
//   },
// ];

// const projects = [
//   {
//     name: "Binkey It (Blinkit Clone)",
//     description:
//       "A full-stack grocery delivery clone app with authentication, product filtering, cart functionality, and responsive UI.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "nodejs", color: "green-text-gradient" },
//       { name: "mongodb", color: "pink-text-gradient" },
//     ],
//     image: binkeyit,
//     source_code_link: "https://github.com/bansivachhani/Binkey-it",
//     live_demo_link: "https://www.youtube.com/watch?v=slN124MPVrc",
//   },
//   {
//     name: "To-Do List App",
//     description:
//       "Minimalistic React-based task manager with CRUD operations and localStorage persistence.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "javascript", color: "yellow-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: todolist,
//     source_code_link: "https://github.com/bansivachhani/todo-list-app",
//     live_demo_link: "https://todo-list-app-alpha-lyart.vercel.app/",
//   },
//   {
//     name: "Jokes App",
//     description:
//       "Fun web app that displays jokes from APIs and cycles through new ones with smooth animations.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "api", color: "green-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: jokes_app,
//     source_code_link: "https://github.com/bansivachhani/Joke-Generator",
//     live_demo_link: "https://joke-generator-lake.vercel.app/",
//   },
//   {
//     name: "Quote Generator App",
//     description:
//       "A quote app that fetches motivational quotes and lets users tweet them directly.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "api", color: "green-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: quote_app,
//     source_code_link: "https://github.com/bansivachhani/quote-generator-",
//     live_demo_link: "https://quote-generator-liart-chi.vercel.app/",
//   },
//   {
//     name: "Quiz Application",
//     description:
//       "Interactive quiz app with score tracking, category selection, and analytics.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "javascript", color: "yellow-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image:
//       "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
//     source_code_link: "https://github.com/bansivachhani/quizapp",
//     live_demo_link: "https://quizapp-zeta-sand.vercel.app/",
//   },
//   {
//     name: "Weather App",
//     description:
//       "Current weather + 5-day forecast app using OpenWeatherMap API with unit conversion and clean UI.",
//     tags: [
//       { name: "react", color: "blue-text-gradient" },
//       { name: "api", color: "green-text-gradient" },
//       { name: "css", color: "pink-text-gradient" },
//     ],
//     image: weatherImg,
//     source_code_link: "https://github.com/bansivachhani/weather-app",
//     live_demo_link: "https://weather-app-lime-omega-94.vercel.app/",
//   },
// ];

const projects = [
  {
    name: "Binkey It (Blinkit Clone)",
    description:
      "A full-stack grocery delivery clone app with authentication, product filtering, cart functionality, and responsive UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: binkeyit,
    source_code_link: "https://github.com/bansivachhani/Binkey-it",
    live_demo_link: "https://www.youtube.com/watch?v=slN124MPVrc",
  },
  {
    name: "To-Do List App",
    description:
      "Minimalistic React-based task manager with CRUD operations and localStorage persistence.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: todolist,
    source_code_link: "https://github.com/bansivachhani/todo-list-app",
    live_demo_link: "https://todo-list-app-alpha-lyart.vercel.app/",
  },
  {
    name: "Jokes App",
    description:
      "Fun web app that displays jokes from APIs and cycles through new ones with smooth animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: jokes_app,
    source_code_link: "https://github.com/bansivachhani/Joke-Generator",
    live_demo_link: "https://joke-generator-lake.vercel.app/",
  },
  {
    name: "Quote Generator App",
    description:
      "A quote app that fetches motivational quotes and lets users tweet them directly.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: quote_app,
    source_code_link: "https://github.com/bansivachhani/quote-generator-",
    live_demo_link: "https://quote-generator-liart-chi.vercel.app/",
  },
  {
    name: "Quiz Application",
    description:
      "Interactive quiz app with score tracking, category selection, and analytics.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image:
      "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
    source_code_link: "https://github.com/bansivachhani/quizapp",
    live_demo_link: "https://quizapp-zeta-sand.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Current weather + 5-day forecast app using OpenWeatherMap API with unit conversion and clean UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://github.com/bansivachhani/weather-app",
    live_demo_link: "https://weather-app-lime-omega-94.vercel.app/",
  },
];



export { services, technologies, experiences, testimonials, projects };
