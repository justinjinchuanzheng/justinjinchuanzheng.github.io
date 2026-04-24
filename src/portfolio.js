/* Change this file to get your personal Portfolio */
// cd developerFolio
// npm run deploy
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Justin J. Zheng",
  title: "Justin Jinchuan Zheng",
  subTitle: emoji(
    "I am an undergraduate student at the University of Michigan with a research focus on soft robotics. I am interested in how the composition and structure of soft materials, such as liquid metal based conductors, battery materials, and architected soft composites, shape the behavior of robotic actuators and bodies. My goal is to design functional materials that can bend, stretch, and distribute forces in a controlled way so that robots can navigate safely through complex environments. I envision a future where soft robots are built from materials that are intrinsically safe for close human interaction and energetically sustainable throughout their life cycle.",
  ),
  resumeLink:
    "https://scholar.google.com/citations?hl=en&user=XVc7h10AAAAJ&view_op=list_works&gmla=AKzYXQ3YJXS2bDhbIpt6reHK-TmlO_rzsUAFdN1H1yPuXGp_ya6MzLa4ksd5MhPkLgByQGzoUKkwuMLl4YoEXdMU", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "#",
  linkedin: "https://www.linkedin.com/in/justin-j-zheng-918876373/",
  gmail: "justinjz@umich.edu",
  //gitlab: "#",
  //facebook: "#",
  //medium: "#",
  //stackoverflow: "#",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Research",
  subTitle:
    "Soft and micro-robotics projects focusing on liquid-metal actuators and compliant mechanisms.",
  skills: [
    emoji("⚡ Liquid-metal based soft actuators for safe, high-strain motion."),
    emoji("⚡ Micro-scale jumping and flapping mechanisms inspired by insects."),
    emoji("⚡ Experimental characterization and high-speed imaging of actuator dynamics.")
  ],
  softwareSkills: [],   // hide the tech icons row
  display: true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    /*{
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Doctor of Philosophy in Engineering Science",
      duration: "September 2027 - April 2032",
      desc: "Lab: Harvard Microrobotics Laboratory",
      descBullets: [
        "Advisor: Prof. Robert J. Wood",
        "Thesis: Soft Microrobotics",
        "GPA: 4.0 / 4.0",
      ]
    },*/
    {
      schoolName: "University of Michigan, Ann Arbor",
      college: "College of Engineering, Robotics Institute",
      logo: require("./assets/images/umichLogo.png"),
      subHeader: "Bachelor of Science in Engineering, Robotics",
      duration: "Expected December 2026",
      desc:
        "",
      descBullets: [
        "Research Area: Soft Robotics",
        "GPA: 4.0 / 4.0",
      ]
    }
  ]
};

const researchAppointmentsInfo = {
  display: true,
  title: "Research Appointments",
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      //college: "School of Computer Science, Robotics Institute",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "Undergraduate Researcher",
      duration: "",
      desc: "Lab: Soft Machines Lab",
      descBullets: [
        "Advisor: Professor Carmel Majidi",
        "Research Area: Soft Robotics",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,  // <- change this from true to false
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

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

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
  display: false // <-- hide the whole Big Projects section
};

// Achievement Section
// Include certificates, talks etc

// Achievement Section
// Graduate-level courses

// Achievement Section
// Graduate-level courses

// Achievement Section
// Graduate-level courses

const achievementSection = {
  title: "Graduate Level Courses",
  subtitle:
    "Graduate courses I completed during my undergraduate studies at the University of Michigan.",
  achievementsCards: [
  {
    courseNumber: "ROB 535",
    courseTitle: "Self Driving Cars: Perception and Control",
    credits: "",
    grade: "",
    image: require("./assets/images/umichLogo.png"),
    footerLink: []
  },
  {
    courseNumber: "ROB 530",
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
    courseTitle: "Fundamentals of Defects in Materials and Applications of Atomistic Modeling",
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "",
  number: "", // leave empty so phone number is NOT shown
  email_address: "justinjz@umich.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  researchAppointmentsInfo,
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
