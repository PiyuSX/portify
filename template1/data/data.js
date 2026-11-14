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
    { name: "JS", icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> },
    { name: "Python", icon: <SiPython className="w-4 h-4 text-blue-400" /> },
    { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-blue-500" /> },
    { name: "C", icon: <SiC className="w-4 h-4 text-blue-600" /> },
    { name: "React", icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-4 h-4 text-green-500" />,
    },
    { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="w-4 h-4 text-cyan-300" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-green-400" /> },
    { name: "Git", icon: <SiGit className="w-4 h-4 text-orange-500" /> },
    { name: "KiCad", icon: <SiKicad className="w-4 h-4 text-red-400" /> },
    {
      name: "Fusion 360",
      icon: <SiAutodesk className="w-4 h-4 text-orange-400" />,
    },
  ],
  projects: [
    {
      name: "CodeMate",
      description: "A platform to find coding partners and collabotors",
      link: "https://codemate.piyushrajbanshi.com.np/",
      github: "github.com",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      images: ["/home.png", "/projects/codemate2.png"],
    },
    {
      name: "Demo",
      description: "A platform to find coding partners and collabotors",
      link: "https://codemate.piyushrajbanshi.com.np/",
      github: "github.com",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      images: ["/home.png", "/projects/codemate2.png"],
    },
    {
      name: "PiPad",
      description: "A platform to find coding partners and collabotors",
      link: "https://codemate.piyushrajbanshi.com.np/",
      github: "github.com",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      images: ["/home.png", "/projects/codemate2.png"],
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
    "https://www.instagram.com/p/DfetLntsE7k/",
    "https://www.instagram.com/p/DfetLntsE7k/",
    "https://www.instagram.com/p/DfetLntsE7k/",
  ],
};

export default Data;
