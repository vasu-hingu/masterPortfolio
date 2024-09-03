/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vasu's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vasu Hingu Portfolio",
    type: "website",
    url: "https://vasuhingu.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Vasu Hingu",
  logo_name: "VasuHingu",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1bn8JRPRq9BrGA0yIAnEl3UjS2M9UHkio/edit?usp=drive_link&ouid=109307340069802182836&rtpof=true&sd=true",
  githubProfile: "https://github.com/vasu-hingu",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vasu-hingu/  ",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vahingu17102000@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/v.a.hingu1710?igsh=b2R4anZmMG5zNWxh",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Github",
    link: "https://github.com/vasu-hingu",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular, React",
        "⚡ Using RestAPIs and Microservices",
        "⚡ Creating application backend in MySQL and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "fa-brands fa-java",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Googlde Cloud Plateform",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    */
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/HinguVasu",
    },
    /*
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
    */
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Of Regina",
      subtitle: "Diploma in Computer Science",
      logo_path: "university_of_regina_logo.png",
      alt_name: "U Of R",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.uregina.ca/",
    },
    {
      title: "University Of Regina",
      subtitle: "Diploma in Computer Science",
      logo_path: "university_of_regina_logo.png",
      alt_name: "U Of R",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.uregina.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full stack Development",
      subtitle: "- StackRoute NIIT",
      logo_path: "StackRoute.png",
      certificate_link:
        "https://www.credly.com/badges/b1b858c9-60ec-46de-a9af-b7701d26d8dc/linked_in_profile",
      alt_name: "StackRoute NIIT",
      color_code: "#2A73CC",
    },
    {
      title: "CompTIA PenTest+: Scoping and Engagement",
      subtitle: "- Skillsoft",
      logo_path: "skillsoft_logo.png",
      certificate_link:
        "https://skillsoft.digitalbadges.skillsoft.com/4ed9c60a-45ce-4cef-ac31-71b3c818b85b",
      alt_name: "Skillsoft",
      color_code: "#2A73CC",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.youracclaim.com/badges/cc19464d-4806-431b-92ad-f243a768396b?source=linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#2A73CC",
    },
    {
      title: "ITIL 4 Foundation",
      subtitle: "- Cybrary",
      logo_path: "cybrary_logo.png",
      certificate_link:
        "https://app.cybrary.it/courses/api/certificate/CC-c268d6e0-a57e-4c5f-9023-3c676abd778c/view",
      alt_name: "Cybrary",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many well established as Full Stack Developer, Designer and Software Architect. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "CGI",
          company_url: "https://www.cgi.com/en",
          logo_path: "cgi_logo.png",
          duration: "June 2022 - Present",
          location: "Regina, SK, Canada",
          description:
            "Developed and maintained web applications using Java, Angular, TypeScript, Restful API/RestAPI, HTML, CSS, JavaScript, jQuery, AJAX, JSON, MongoDB, JIRA, Eureka Server, Microservices, GIT, Spring Boot and SQL.Using ITIL/Software Development lifecycle to plan and deploy changes using change request, release, and tasks.Agile Methodology.Unit test cases, Postman and Swagger for API testing.Web Usability (UI/UX Design).",
          color: "#0879bf",
        },
        {
          title: "IT Application Analyst",
          company: "Viterra North America",
          company_url: "https://www.viterra.ca/",
          logo_path: "viterra_logo.png",
          duration: "Jan 2022 - June 2022",
          location: "Regina, SK, Canada",
          description:
            "Developed and maintained a web application using C#,ASP.NET, HTML, CSS, JavaScript, bootstrap, jquery, AJAX, JSON and SQL/Oracle SQL Developer.Do API testing using Postman.Check in changes and edit code using TFS.Making test plan and do deployment with ITIL standards.",
          color: "#9b1578",
        },
        {
          title: "Configuration Technician Assistant",
          company: "Government of Saskatchewan",
          company_url: "https://www.saskatchewan.ca/",
          logo_path: "government_of_saskatchewan_logo.png",
          duration: "May 2021 - Jan 2022",
          location: "Regina, SK, Canada",
          description:
            "Troubleshooting and Case management in Midas Help desk/PSC Client. Testing changes to maintain accurate results within the system Managing Security and configuration access for employees. Working with Vendor and client to make sure errors and bugs solution while testing. Pulling the Historical data and scrubbing the data to get clean data. Developed a program to automate the data cleaning with Python. Make data usable for each Ministry and support Team and users. Data Analysis and Management, written and oral communication to explain the data.",
          color: "#fc1f20",
        },
        {
          title: "Teaching Assitant of Advanced Data Structures",
          company: "University Of Regina",
          company_url: "https://www.uregina.ca/",
          logo_path: "university_of_regina_logo.png",
          duration: "Dec 202 - May 2021",
          location: "Regina, SK, Canada",
          description:
            "I was In charge of Teaching assistant for CS 340 -Advanced Data Structures.Attend course meetings and respond promptly to emails from the instructor or Head TA.Be approachable, helpful, and familiar with the course content and assignments.Hold office hours and/or monitor an online discussion forum.Conduct tutorials, labs or review sessions.Mark assignments and tests.Be prepared to ask questions about handling alternate solutions to assignments and test questions.Discuss any changes to the marking scheme with the course instructor.Provide sufficient feedback. Students must be able to understand why marks were removed. Ensure that your writing is readable and that your comments are tactful and constructive.Report any suspected academic integrity issues to the course instructor.Proctor tests and final exams.Manage course grades.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor",
          company: "Canada Learning Code",
          company_url: "https://www.canadalearningcode.ca/",
          logo_path: "canadalearningcode_logo.png",
          duration: "Feb 2023 - Present",
          location: "Regina, SK, Canada",
          description:
            "Teach and mentor the events about teaching code to targated audience",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {},
  addressSection: {},
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
