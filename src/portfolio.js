/* Change this file to get your personal Portfolio */
// cd developerFolio
// npm run deploy
// To change portfolio colors globally go to the _globalColor.scss file

import React from "react";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import "./components/educationCard/EducationCard.scss";

const ResearcherLink = ({href, children}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="education-bullet-link"
    aria-label={`${children} (opens in a new tab)`}
    style={{
      display: "inline-block",
      whiteSpace: "nowrap",
      fontFamily: "inherit",
      fontSize: "inherit",
      fontWeight: "inherit",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
      textDecorationThickness: "1px"
    }}
  >
    {children}
    <span className="education-link-arrow" aria-hidden="true">
      ↗
    </span>
  </a>
);

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
  subTitle: (
    <>
      I am a senior undergraduate student majoring in Robotics at the
      University of Michigan. My current research advisors include{" "}
      <ResearcherLink href="https://www.meche.engineering.cmu.edu/directory/bios/majidi-carmel.html">
        Prof. Carmel Majidi
      </ResearcherLink>{" "}
      at Carnegie Mellon University and{" "}
      <ResearcherLink href="https://che.engin.umich.edu/people/gong-xiwen/">
        Prof. Xiwen Gong
      </ResearcherLink>{" "}
      at the University of Michigan. I am also an alumnus of the Free
      Appropriate Sustainable Technology (FAST) Research Group in Canada, where
      I continue to collaborate with{" "}
      <ResearcherLink href="https://en.wikipedia.org/wiki/Joshua_Pearce">
        Prof. Joshua Pearce
      </ResearcherLink>
      <span style={{marginLeft: "-0.2rem"}}>.</span>
      <br />
      <br />
      My research interests focus on wearable robotics and electronics, as well
      as soft functional materials. I am particularly interested in how material
      design and electronic integration can improve sensing and actuation in
      wearable devices. By combining these areas with AI, I aim to create
      robotic systems that sense, actuate, and interact safely with the physical
      world.
    </>
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
        {
          text: "Irma M. Wyman Scholar",
          link: "https://en.wikipedia.org/wiki/Irma_Wyman"
        },
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
        "Wireless ultrasonic blood pressure monitoring for versatile diagnostics",
      authors:
        "Daniel Ranke, Lloyd Lobo, Natalie Ficca, Justin J. Zheng, Adam Jacobs, Yelim Kim, Doug Weber, Maysam Chamanzar, Carmel Majidi.",
      status: "Manuscript in preparation",
      year: "2026"
    },
    {
      title:
        "Longitudinal Computer Vision for Full-Cycle Plant Phenotyping and Yield Prediction of Nasturtium in Vertical Agrivoltaics",
      authors:
        "Justin J. Zheng*, Hansheng Liu*, Farzad Hasan, Nima Asgari, Riya Roy, and Joshua M. Pearce.",
      status: "Manuscript in preparation",
      authorNote: "Equal contribution.",
      year: "2026"
    },
    {
      title:
        "Wall-Scale Computer Vision for Plant Phenotyping: Full-Cycle Lettuce Leaf Counting and Yield Prediction in Vertical Agrivoltaics",
      authors:
        "Justin J. Zheng*, Hansheng Liu*, Nima Asgari, Riya Roy, Haotian Li, Joshua M. Pearce.",
      status: "Manuscript in preparation",
      authorNote: "Equal contribution.",
      year: "2026"
    },
    {
      title:
        "Synaptic Plasticity in a Liquid Metal Actuator: Tunable Shape Memory via Electrochemical Oxide Retention",
      authors:
        "Marta Freitas*, Seung Won Lee*, Justin J. Zheng, Mahmoud Tavakoli, Carmel Majidi.",
      status: "Manuscript in preparation",
      authorNote: "Equal contribution.",
      year: "2026"
    },
    {
      title:
        "High-speed, low-voltage soft actuation through field-effect elastocapillarity",
      authors:
        "Jiahe Liao, Xiangqiang Bao, Yihao Geng, Marta Freitas, Seung Won Lee, Zihuan Bai, Jianhua Zhang, Jimmy Liao, Justin J. Zheng, Abrar Shariff, Muhammad Yunusa, Mahmoud Tavakoli, Massimo Mastrangeli, Carmel Majidi, Metin Sitti.",
      status: "Manuscript in preparation",
      year: "2026"
    },
    {
      title:
        "Decoupling Compliance from Toughness Enables Scalp-Adhesive Solid Ionic Conductors for Stable Transcranial Direct Current Stimulation",
      authors:
        "Zhengtao Hu, Zhuokai Qu, Melinda Xu, Jackson Frey, Zachary Pizzo, Amelia Scanio, Mohammad Asadi Tokmedash, Ajay Chavda, Sijun Seong, Carlos A. Figueroa Morales, Jouha Min, Justin J. Zheng, Benjamin Hampstead, and Xiwen Gong.",
      status: "Manuscript submitted to",
      journal: "ACS Nano",
      year: "2026"
    },
    {
      title:
        "Exploring Chaos Theory through Numerical Simulations of a Bouncing Regular n-Sided Polygonal Die",
      authors: "Haotian Li, Arnold Xie, Justin J. Zheng, Bing Q. Li.",
      status: "Manuscript under revision at",
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
      contribution: "Battery assembly over a four-month period.",
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
  experience: []
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
    },
    {
      courseNumber: "Robotics 599",
      courseTitle: "Computational Symmetry in AI & Robotics",
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
  email_addresses: ["justinjz@umich.edu"]
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