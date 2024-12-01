/* Change this file to get your personal Portfolio */

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
  username: "Sarthak Mehta",
  title: "Hi, I'm Sarthak",
  subTitle: emoji(
    "Currently an MS in Robotics Engineering at Worcester Polytechnic Institute, focusing on Deep Learning and Perception. My work revolves around using these technologies to advance robotic systems and autonomy.\n\n" 
    +
    "\n\n Apart from academics, I am also passionate about badminton, which has also helped me in building perseverance and teamwork."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dNXz8RDSLII-WNBn_1sEpYhvKKEvB4Yj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sarthak9711",
  linkedin: "https://www.linkedin.com/in/mehtasarthak/",
  gmail: "smehta1@wpi.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Motivated in learning and exploring the field of Robotics",
  skills: [
    emoji(
      "⚡ Design and develop advanced algorithms and software solutions for robotics and automation systems."
    ),
    emoji("⚡  Build robust and scalable perception systems for autonomous robots using deep learning and computer vision techniques."),
    emoji(
      "⚡  Integration of third-party services and platforms such as ROS and custom cloud-based solutions for robotics applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ROS",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
      // <FontAwesomeIcon icon="fa-brands fa-python" />
    },
    // {
    //   skillName: "Machine Learning",
    //   fontAwesomeClassname: "fas fa-head-side-gear"
    // },
    {
      skillName: "R-Pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "Image Processing",
      fontAwesomeClassname: "far fa-image"
    }

    // <FontAwesomeIcon icon="fa-regular fa-image" />
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Worcester Polytechnic Institute",
      logo: require("./assets/images/WPI_LOgo.jpg"),
      subHeader: "M.S in Robotics Engineering",
      duration: "August 2024 - May 2026",
      desc: "Coursework",
      descBullets: [
        "Deep Learning",
        "Vision-Based Robotic Manipulation",
        "Robot Perception"
      ]
    },
    {
      schoolName: "Pandit Deendayal Energy University",
      logo: require("./assets/images/PDPU-Logo.png"),
      subHeader: "Bachelors in Computer Science",
      duration: "August 2019 - May 2023",
      desc: "Coursework",
      descBullets: [
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Pattern Recognition",
        "Data Structures",
        "Probability and Statistics",
        "Discrete Mathematical Structures"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Python, ROS2, ", //Insert stack or technology you have experience in
  //     progressPercentage: "90%" //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%"
  //   }
  // ],
  // displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern",
      company: "HCR Laboratory, IIT Gandhinagar",
      companylogo: require("./assets/images/Hcr_logo.png"),
      date: "August 2023 - February 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed a deep learning model to establish correlations between specific poses and corresponding sEMG signals, resulting in an accurate interpretation of muscle activity",
        "Trained a neural network for ground reaction force analysis by processing 1,00,000+ data samples from force plates, resulting in a streamlined analysis process that reduced data processing time by approximately 25%"
      ]
    },
    {
      role: "President",
      company: "Cretus - Robotics and Automation Club",
      companylogo: require("./assets/images/cretus_logo.jpeg"),
      date: "August 2021 - June 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Presented at 4+ workshops and established seamless communication across 5 departments  ",

        "Led a team of 5 undergraduates in developing a robot localization simulation using ArUco markers"
      ]
    },
    
    {
      role: "Intern",
      company: "Rhyno Wheels Pvt. Ltd.",
      companylogo: require("./assets/images/rhyno_logo.jpeg"),
      date: "May 2022 - July 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Built and implemented I2C and SPI on micro-controller platforms",
        "Optimized the sensor configuration within the system design to make the vehicle safer by approximately 22.5%",
        "Enhanced assembly line time by 20%, also relocating the battery box which resulted in reducing inventory costs"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Img_Seg.png"),
      projectName: "Drone Path Frame Detection using SegNet-Based Segmentation",
      projectDesc: "Generated a dataset of 60000+ images representing frames through which a drone will navigate and applied various augmentation techniques to enhance the variability in training data. Developed an image segmentation pipeline usiny SegNet deep learning model to identify frame boundaries accurately."
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
        //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/PoseDriven.png"),
      projectName: "Pose-driven Muscle Activity Prediction",
      projectDesc: "Collected data using pose estimation from Mediapipe, with correspondence to sEMG signals. Integrated the collected data to train a deep learning model using an encoder, achieving 72% accuracy in predicting muscle activity",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/pathPlanning.png"),
      projectName: "Implementation and Analysis of Path Planning Algorithms",
      projectDesc: "Conducted a comprehensive analysis of path planning algorithms such as RRT, RRT*, and A*.   Analyzed time and distance metrics for statistical analysis to determine efficiency",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  // achievementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle:
  //       "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLogo.webp"),
  //     imageAlt: "Google Code-In Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
  //       },
  //       {
  //         name: "Award Letter",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
  //       },
  //       {
  //         name: "Google Code-in Blog",
  //         url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle:
  //       "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     imageAlt: "Google Assistant Action Logo",
  //     footerLink: [
  //       {
  //         name: "View Google Assistant Action",
  //         url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
  //       }
  //     ]
  //   },

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     imageAlt: "PWA Logo",
  //     footerLink: [
  //       {name: "Certification", url: ""},
  //       {
  //         name: "Final Project",
  //         url: "https://pakistan-olx-1.firebaseapp.com/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  // title: "Resume",
  // subtitle: "Feel free to download my resume",

  // // Please Provide with Your Podcast embeded Link
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 774-253-7846",
  email_address: "smehta1@wpi.edu"
};

// Twitter Section

const twitterDetails = {
  // userName: "twitter", //Replace "twitter" with your twitter username without @
  // display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
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
