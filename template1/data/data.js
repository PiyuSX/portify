import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiKicad,
  SiAutodesk,
} from "react-icons/si";

const Data = {
  personal: {
    name: "Piyush Raj",
    username: "PiyusX",
    dob: "2009-04-18",
    role: "Future Engineer",
    location: "Biratnagar, Nepal",
    bio: "I'm Passionate about engineering, with a strong interest in mathematics and web development, while exploring electronics, PCB design, and hardware.",
    emails: ["piyushraj9825@gmail.com", "hi@piyushrajbanshi.com.np"],
    profileImage: "/profile.png",
    animatedText: "Code. Circuits. Systems.",
  },
  social: {
    github: "https://github.com/PiyusX",
    linkedin: "https://linkedin.com/in/piyush-raj",
    instagram: "https://instagram.com/PiyusX.builds",
  },
  skills: [
    { name: "JS", icon: <SiJavascript className="w-4 h-4 " /> },
    { name: "Python", icon: <SiPython className="w-4 h-4 " /> },
    { name: "C++", icon: <SiCplusplus className="w-4 h-4 " /> },
    { name: "C", icon: <SiC className="w-4 h-4 " /> },
    { name: "React", icon: <SiReact className="w-4 h-4 " /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-4 h-4 " />,
    },
    { name: "Express.js", icon: <SiExpress className="w-4 h-4" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="w-4 h-4 " />,
    },
    { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 " /> },
    { name: "Git", icon: <SiGit className="w-4 h-4 " /> },
    { name: "KiCad", icon: <SiKicad className="w-4 h-4 " /> },
    {
      name: "Fusion 360",
      icon: <SiAutodesk className="w-4 h-4 " />,
    },
  ],
  projects: [
    {
      name: "CodeMate",
      description:
        "A developer matching platform where you create a dev profile, match with other developers, and jump into random video calls to collaborate on challenges and projects.",
      link: "https://codemate.piyushrajbanshi.com.np/",
      github: "https://github.com/PiyuSX/codemate",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Zustand",
        "WebRTC",
      ],
      image:
        "https://raw.githubusercontent.com/PiyuSX/codemate/master/frontend/public/home.png",
    },
    {
      name: "BerryJs",
      description:
        "A lightweight, zero-dependency 2D game engine for the browser with scenes, actors, collisions, sprite animations, camera and sound. Scaffold a game with `npm create berryjs`.",
      link: "https://piyusx.github.io/berryjs-site/",
      github: "https://github.com/PiyuSX/BerryJs",
      technologies: ["JS", "Node.js", "Git"],
      image: "https://raw.githubusercontent.com/PiyuSX/BerryJs/main/docs/demo.png",
    },
    {
      name: "PiPad",
      description:
        "A custom 3×3 mechanical macropad built from scratch with 9 keys, a rotary encoder and a 128x32 OLED. It has 4 profiles, 36 macros and custom QMK firmware, with a KiCad PCB and a Fusion 360 enclosure.",
      link: "https://github.com/PiyuSX/PiPad/blob/main/JOURNAL.md",
      github: "https://github.com/PiyuSX/PiPad",
      technologies: ["KiCad", "Fusion 360", "C"],
      image: "https://raw.githubusercontent.com/PiyuSX/PiPad/main/images/front.png",
    },
  ],
  metaData: {
    title: "PiyusX - Portfolio",
    description: "PiyusX's Portfolio",
  },

  about: {
    bio: "I'm Piyush, a curious learner from Biratnagar, Nepal, passionate about technology and engineering. I enjoy building projects, experimenting with hardware, and participating in hackathons. I'm always exploring new ideas, learning new skills, and challenging myself to build things from scratch. Currently, I'm working towards pursuing higher education in Germany, with a long-term goal of becoming an engineer.",
  },
  reels: [
    "https://www.instagram.com/p/DfetLntsE7k/",
  ],
};

export default Data;