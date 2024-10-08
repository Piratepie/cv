import {
  InfoSupportLogo,
  ProvincieUtrechtLogo,
  Deck1Logo,
  EnzoSystemsLogo,
  UtilusLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jasper de Bie",
  initials: "J.B.",
  location: "Amsterdam, Netherlands",
  locationLink: "https://www.google.com/maps/place/amsterdam",
  about: "Full Stack Engineer and agile advocate",
  summary:
    "Full stack software engineer with a passion for agile and the creative freedom it promotes. I'm a real teamplayer who's always out to improve the way we work and the products we build. Besides my passion for software engineering, I'm also socially engaged and always looking for ways to improve the world around me.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4E03AQGl_ET0IfMEcw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714058272699?e=1729123200&v=beta&t=-xOYHoPr-ZxBbg-YKqxCjN3OG7cy7FLwufp4oH52ssQ",
  personalWebsiteUrl: "https://www.jasperdebie.dev/",
  contact: {
    // email: "",
    // tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Piratepie",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jasper-de-bie/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Universiteit van Amsterdam",
      degree: "Master's degree, Software Engineering",
      start: "2024",
      end: "2026",
    },
    {
      school: "HU University of Applied Sciences Utrecht",
      degree: "Bachelor's degree, HBO-ICT (Software Development)",
      start: "2020",
      end: "2024",
    },
    {
      school: "Keizer Karel College",
      degree: "Atheneum",
      start: "2011",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Utilus",
      link: "https://www.utilus.nl/",
      badges: ["Part-time"],
      title: "Frontend Developer",
      logo: UtilusLogo,
      start: "2024",
      end: "Present",
      description:
        "Working on ProximaRed, managing the development of Next.js applications and supporting the backend team where needed.",
    },
    {
      company: "Info Support",
      link: "https://infosupport.com/",
      badges: ["Thesis internship"],
      title: "Software Engineer",
      logo: InfoSupportLogo,
      start: "2024",
      end: "2024",
      description:
        "Writing a thesis on the implementation of Mobile Augmented Reality to better the travel experience in public transport.",
    },
    {
      company: "Provincie Utrecht",
      link: "https://www.provincie-utrecht.nl/",
      badges: ["Internship"],
      title: "Software Engineer",
      logo: ProvincieUtrechtLogo,
      start: "2023",
      end: "2024",
      description:
        "Creating a holographic Digital Twin to help reduce the envirmental impact of the logitics surrounding construction sites. Technologies: GIS, Blender, Unity, Holographs",
    },
    {
      company: "Deck1",
      link: "https://www.deck1.dev/",
      badges: ["Internship"],
      title: "Flutter Developer",
      logo: Deck1Logo,
      start: "2023",
      end: "2023",
      description:
        "Created a multiplatform app for a client helping them manage logistics surrounding offshore windfarms. Technologies: Flutter, GraphQL",
    },
    {
      company: "Enzosystems",
      link: "https://enzosystems.com/",
      badges: ["Part-time", "Internship"],
      title: "Junior web developer",
      logo: EnzoSystemsLogo,
      start: "2022",
      end: "2023",
      description:
        "Helped develop a web application for clients to manage their kiosks. Technologies: React, Node.js",
    },
  ],
  skills: [
    "JS/TS",
    "React/Next.js",
    "Node.js",
    "Python",
    "Kotlin",
    "Android",
    "AR/VR",
    "Java",
    "Spring Boot",
    "Dart",
    "Flutter",
  ],
  projects: [
    {
      title: "Deck1 DispatchApp",
      techStack: ["Flutter", "GraphQL"],
      description:
        "A mobile app to help manage logistics surrounding offshore windfarms.",
      logo: Deck1Logo,
      link: {
        label: "GitHub repo",
        href: "https://github.com/DECK1xUCN/DispatchApp/tree/main",
      },
    },
    {
      title: "Digital Twin Provincie Utrecht",
      techStack: ["Unity", "Holographic", "GIS", "Blender"],
      description: "A holographic digital twin for the Provincie Utrecht.",
      logo: ProvincieUtrechtLogo,
    },
    {
      title: "Multipurpose Discord bot",
      techStack: ["Typescript", "MongoDB"],
      description: "A multipurpose Discord bot.",
      logo: null,
      link: {
        label: "GitHub repo",
        href: "https://github.com/Piratepie/gta-factions-bot",
      },
    },
  ],
} as const;
