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
  username: "David Ken",
  title: "Hi all, I'm Ken",
  subTitle: emoji(
    "Aspiring IT Consultant seeking to drive innovation by leveraging a strong understanding of the product development lifecycle and data-driven decision making  to deliver impactful, technology-driven solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SdWdAsRdaLTmkHLVqbasYfGNosNjUzHM/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kennyz2004",
  linkedin: "https://www.linkedin.com/in/david-ken-del-mundo/",
  gmail: "davidkendelmundo@gmail.com",
  facebook: "https://www.facebook.com/ken.delmundo.1/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Your GO-TO Product Owner and Manager that is flexible to conducting tech-stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Progressive in aegentic workflows in such n8n workflows and API calls for business operations"
    ),
    emoji(
      "⚡ Aspiring Big Data Operations through Google cloud and visualization through Tableau"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google CLoud",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Jupyter Notebook",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ateneo de Manila University",
      logo: require("./assets/images/ateneoicon.png"),
      subHeader: "Bachelors in Management Information Systems",
      duration: "August 2021 - July 2025",
      desc: "Specialized in Data Analytics",
      descBullets: [
        "Google Developers Student Clubs Loyola - Operations Officer",
        "Management Information Systems Association (MISA) - IT Skills & Training and Networking Officer"
      ]
    },
    {
      schoolName: "Colegio San Agustin Makati",
      logo: require("./assets/images/CSA.png"),
      subHeader: "High School Diploma",
      duration: "August 2017 - April 2020",
      desc: " Humanities and Social Sciences (HUMSS)",
      descBullets: [
        "Academic Distiction Certificate- Top 50",
        "Sky Experience Award - Finance Head for student activities council"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Education Innovation Fellowship (EIF) Intern ",
      company: "Eskwelabs",
      companylogo: require("./assets/images/eskwelabs.jpg"),
      date: "September 2025-Present",
      desc: "Part of the Advanced Learners Internship My duties are to utilize n8n & AI augmented systems to create better workflow automations for the organization",
      descBullets: [
        "Lead as Product Manger of a team in creating a comprehensive SOP for the Eskwelabs Hackathon, streamlining 200+ tasks across operations, communications, and participant management. ",
        "Built and deployed 6 n8n automation workflows that cut manual work on checklist tracking and analytics data collection by 40%, improving event monitoring and reporting."
      ]
    },
    {
      role: "RBBS Department  - Deputy to Chief Information Officer ",
      company: "Security Bank Corporation",
      companylogo: require("./assets/images/security-bank-icon.png"),
      date: "June 2024- August 2024",
      desc: "Under the STAR Internship Team, the goal of the program was to familiarize and educate graduating students on banking operations and apply personal expertise towards business SOP",
      descBullets: [
        "Evaluated 70+ RBBS change request tickets to calculate the monetary impact, enabling more accurate budgeting and prioritization of high-value initiatives.",
        "Supported the Chief Information Officer in overseeing 2 scrum teams in the RBBS department that consist of 21 team members.",
        "Planned and prioritized 9-11 change request tickets per sprint cycle for the RBBS department work to ensure clear direction of IT development tasks."
      ]
    },
    {
      role: "Product Team Intern",
      company: "Penbrothers Inc",
      companylogo: require("./assets/images/penbrother.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Tasked to re-engineer current organizational practices of document managment and streamline document approval process through an IT solution",
      descBullets: [
        "Developed a Prototype Document Management System under Google Appscript code to streamline document Security and Approval between 17 different stakeholders.",
        "Mapped and collaborated on end-to-end business process models with stakeholders from 4 departments, establishing a new and more efficient way of working for Penbrothers’ core document management process."
      ]
    },
    {
      role: "IT Intern ",
      company: "Verafede",
      companylogo: require("./assets/images/verafede.jpg"),
      date: "August 2022- November 2022",
      desc: "Draft an PRF proposal towards IT security of the organization and draft a disaster risk managment protocalls for malware attacks",
      descBullets: [
        "Managed a team of IT and Computer Science interns to advise the company on integrating cybersecurity solutions to prevent email phishing.",
        "Researched and budgeted a product proposal form on IT solutions for cyber security that complied with ISO standards for executive, managerial, and departmental data privacy."
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
  title: "Past Projects",
  subtitle: "Websites and Data Analytics Projects Done personally or from work",
  projects: [
    {
      image: require("./assets/images/MISA.jpg"),
      projectName: "Ateneo Misa Website Homepage",
      projectDesc:
        "Worked on the backend database for modeling voting process for upcoming election of officers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://misa.org.ph/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AAP.jpg"),
      projectName: "AAP analytics Integration with CRM",
      projectDesc:
        "Implement towards the backend of the website to add members through zoho ecosystem and categorize by membership subscription to avail for perks",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aap.ph/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    //cool
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63 09060593690",
  email_address: "davidkendelmundo@gmail.com"
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
  //blogSection,
  //talkSection,
  contactInfo,
  //twitterDetails,
  isHireable,
  resumeSection
};
export const blogSection = {
  title: "Blogs",
  blogs: [] // empty array since Medium is disabled
};
export const talkSection = {
  title: "talk",
  blogs: [] // empty array since Medium is disabled
};
export const twitterDetails = {
  title: "twitter",
  blogs: [] // empty array since Medium is disabled
};
export const podcastSection = {
  title: "podcast",
  blogs: [] // empty array since Medium is disabled
};
