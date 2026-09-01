/* Change this file to get your personal Portfolio */
// cd developerFolio
// npm run deploy
// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Justin J. Zheng",
  title: "Justin Jinchuan Zheng",
  subTitle: emoji(
    "I am a senior undergraduate student in Robotics at the University of Michigan. My research interests include soft robotics, wearable electronics, and functional materials for robotics. I am currently an undergraduate researcher in the Soft Machines Lab at Carnegie Mellon University. I am interested in how the composition and structure of soft and functional materials, including liquid metals, stretchable conductors, battery materials, and soft composites, can be designed to create robotic systems that sense, actuate, and interact safely with the physical world. My goal is to develop robotic systems that are soft, adaptive, and safe for close human interaction."
  ),
  resumeLink:
    "https://scholar.google.com/citations?hl=en&user=XVc7h10AAAAJ&view_op=list_works&gmla=AKzYXQ3YJXS2bDhbIpt6reHK-TmlO_rzsUAFdN1H1yPuXGp_ya6MzLa4ksd5MhPkLgByQGzoUKkwuMLl4YoEXdMU",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/justinjinchuanzheng",
  linkedin: "https://www.linkedin.com/in/justin-j-zheng-918876373/",
  gmail: "justinjz@umich.edu",
  display: false
};

// Skills Section

const skillsSection = {
  title: "Research",
  subTitle:
    "Soft and micro-robotics projects focusing on liquid-metal actuators and compliant mechanisms.",
  skills: [
    emoji("⚡ Liquid-metal based soft actuators for safe, high-strain motion."),
    emoji(
      "⚡ Micro-scale jumping and flapping mechanisms inspired by insects."
    ),
    emoji(
      "⚡ Experimental characterization and high-speed imaging of actuator dynamics."
    )
  ],
  softwareSkills: [],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Michigan, Ann Arbor",
      college: "College of Engineering, Robotics Institute",
      logo: require("./assets/images/umichLogo.png"),
      subHeader: "Bachelor of Science in Engineering, Robotics",
      duration: "Expected December 2026",
      desc: "",
      descBullets: [
        "Irma M. Wyman Scholar",
        "Research Focus: Soft Robotics",
        "GPA: 4.0 / 4.0",
        "Class Rank: 1st"
      ]
    }
  ]
};

// Research Appointments Section

const researchAppointmentsInfo = {
  display: true,
  title: "Research Appointments",
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "Undergraduate Researcher",
      duration: "",
      desc: "Lab: Soft Machines Lab",
      descBullets: [
        "Faculty Host: Prof. Carmel Majidi",
        "Research Focus: Soft Robotics, Wearable Electronics"
      ]
    }
  ]
};

// Publications Section

const publicationsInfo = {
  display: true,

  publications: [
    {
      title:
        "Synaptic Plasticity in a Liquid Metal Actuator: Tunable Shape Memory via Electrochemical Oxide Retention",
      authors:
        "Seung Won Lee*, Marta Calisto Freitas*, Justin Jinchuan Zheng, Mahmoud Tavakoli, Carmel Majidi.",
      status: "Manuscript in preparation",
      authorNote: "Equal contribution.",
      year: "2026"
    },
    {
      title:
        "Exploring Chaos Theory through Numerical Simulations of a Bouncing Regular n-Sided Polygonal Die",
      authors:
        "Jonathan Li, Arnold Yuxuan Xie, Justin Jinchuan Zheng, Bing Q. Li.",
      status: "Manuscript submitted to",
      journal: "AIP Advances",
      year: "2026"
    }
  ],

  acknowledgedContributions: [
    {
      title:
        "Revealing the Neglected Role of Passivation Layers of Current Collectors for Solid-State Anode-Free Batteries",
      journal: "Advanced Materials",
      volume: "37",
      issue: "47",
      articleNumber: "e13090",
      year: "2025",
      contribution:
        "Battery assembly; acknowledged by name in the published article.",
      url: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202513090"
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: false,
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Big Projects Section

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false
};

// Graduate-Level Courses Section

const achievementSection = {
  title: "Graduate Level Courses",
  subtitle:
    "Graduate courses I completed during my undergraduate studies at the University of Michigan.",
  achievementsCards: [
    {
      courseNumber: "Robotics 560",
      courseTitle: "Bio-Inspired Robotic Design",
      credits: "",
      grade: "",
      image: require("./assets/images/umichLogo.png"),
      footerLink: []
    },
    {
      courseNumber: "Robotics 535",
      courseTitle: "Self Driving Cars: Perception and Control",
      credits: "",
      grade: "",
      image: require("./assets/images/umichLogo.png"),
      footerLink: []
    },
    {
      courseNumber: "Robotics 530",
      courseTitle: "Mobile Robotics: Methods and Algorithms",
      credits: "",
      grade: "",
      image: require("./assets/images/umichLogo.png"),
      footerLink: []
    },
    {
      courseNumber: "BIOMEDE 561",
      courseTitle: "Biological Micro- and Nanotechnology",
      credits: "",
      grade: "",
      image: require("./assets/images/umichLogo.png"),
      footerLink: []
    },
    {
      courseNumber: "MECHENG 570",
      courseTitle:
        "Fundamentals of Defects in Materials and Applications of Atomistic Modeling",
      credits: "",
      grade: "",
      image: require("./assets/images/umichLogo.png"),
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "",
  number: "",
  email_address: "justinjz@umich.edu",
  email_addresses: ["justinjz@umich.edu", "justinz2@andrew.cmu.edu"]
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  researchAppointmentsInfo,
  publicationsInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};