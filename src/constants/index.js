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
    title: "First Year",
    company_name: "Click To Explore",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Second Year",
    company_name: "Click To Explore",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Third Year",
    company_name: "Click To Explore",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Fourth Year",
    company_name: "Click To Explore",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/prova",
  },
  {
    title: "Fifth Year",
    company_name: "Click To Explore",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    path: "/ciao",
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
    name: "Hackaton",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const SubjectTopics = [
  {
    name: "Italiano",
    topics: [
      {
        topic: "Imperialismo e colonialismo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIh9iTSfDwYkf7_C8oW6hBcqBCbnGaJqcKcsenJgGGFQ&s",
        descrizione:
          "L'imperialismo e il colonialismo rappresentano l'espansione politica ed economica delle potenze europee oltre i loro confini, sfruttando territori e popolazioni indigene.",
      },
      {
        topic: "Prima guerra mondiale",
        image: "https://cdn.skuola.net/news_foto/image-grabber/image-5bfb139eb1b4d.jpg",
        descrizione:
          "La Prima guerra mondiale è stato un conflitto globale che coinvolse le principali potenze del mondo tra il 1914 e il 1918, con devastanti conseguenze politiche, sociali ed economiche.",
      },
      {
        topic: "Rivoluzione russa",
        image: "https://static.sevendaysweb.com/2077/2017/07/31/109219/russia1.scale-to-max-width.825x.png",
        descrizione:
          "La Rivoluzione russa del 1917 portò alla caduta dello zarismo e all'ascesa del comunismo, determinando profonde trasformazioni sociali ed economiche in Russia e nel mondo.",
      },
      {
        topic: "Trattato di Versailles",
        image: "https://ilbolive.unipd.it/sites/default/files/2019-06/treaty_of_versailles_signing_hall_of_mirrors.jpg",
        descrizione:
          "Il Trattato di Versailles, firmato nel 1919, pose fine alla Prima guerra mondiale e impose pesanti condizioni alla Germania, contribuendo alle tensioni che portarono alla Seconda guerra mondiale.",
      },
      {
        topic: "Rivoluzione industriale",
        image: "https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2022/12/Panorama-di-Birmingham.jpg?im=AspectCrop=(16,9);",
        descrizione:
          "La Rivoluzione industriale segnò il passaggio dalla produzione artigianale alla produzione industriale in larga scala, trasformando radicalmente la società, l'economia e la vita quotidiana.",
      },
      {
        topic: "Seconda guerra mondiale",
        image: "https://cdn.studenti.stbm.it/images/2016/09/02/seconda-guerra-mondiale_600x400.jpeg",
        descrizione:
          "La Seconda guerra mondiale, combattuta tra il 1939 e il 1945, fu uno dei conflitti più devastanti della storia, coinvolgendo le principali potenze mondiali e causando milioni di morti.",
      }, 
      {
        topic: "Guerra fredda",
        image: "https://www.focusjunior.it/content/uploads/2022/03/guerra-fredda-900x506.jpg",
        descrizione:
          "La Guerra fredda fu il periodo di tensione politica e militare tra gli Stati Uniti e l'Unione Sovietica dopo la Seconda guerra mondiale, caratterizzato da una rivalità globale e una corsa agli armamenti.",
      },
      {
        topic: "Movimenti per i diritti civili",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Marchers_with_signs_at_the_March_on_Washington%2C_1963.jpg",
        descrizione:
          "I movimenti per i diritti civili sono stati una serie di movimenti sociali che hanno lottato per i diritti delle minoranze e per porre fine alla discriminazione razziale, sessuale e sociale.",
      },
      {
        topic: "Globalizzazione",
        image: "https://cdn.studenti.stbm.it/images/2022/01/25/ricerca-sulla-globalizzazione-orig.jpeg",
        descrizione:
          "La globalizzazione è un processo di interconnessione economica, politica e culturale a livello mondiale, che ha portato a un'integrazione sempre maggiore delle economie e delle società.",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects , SubjectTopics};
