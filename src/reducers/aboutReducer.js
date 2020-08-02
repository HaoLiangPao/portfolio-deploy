import python from "../resources/img/timeline/01_python.png";
import gpa from "../resources/img/timeline/02_gpa.png";
import b20 from "../resources/img/timeline/03_cscb20.jpeg";
import bioline from "../resources/img/timeline/04_bioline.png";
import kalPolymers from "../resources/img/timeline/07_kal_polymers.png";
import shareEd from "../resources/img/timeline/08_share_ed.JPG";
import EMRB from "../resources/img/timeline/09_EMRB.jpg";
import powerChina from "../resources/img/timeline/10_powerchina.jpg";
import javaBackend from "../resources/img/timeline/11_java_backend.jpg";
import mernStack from "../resources/img/timeline/12_mern.jpg";

const initialState = {
  timelines: [
    {
      id: 1,
      title: "2015: Python",
      category: "Tech",
      description: [
        "Completed CSCA20, CSCA48:'Introduction'",
        "Python is the first programming language I learnt. By finishing entry level CS courses provided in U of T, I became comfortable with procedual programming in Python and familiar with core computer science topics like data structure, algorithums, complexity, testing and debugging.",
      ],
      img: python,
      link: "https://www.utsc.utoronto.ca/~bretscher/b20/",
    },
    {
      id: 2,
      title: "2015: GPA",
      category: "Entrepreneur",
      description: [
        "Green Path Association (GPA) is an official Chinese student union in UTSC. Established by Green Path Office in 2005, served 3000+ international students from China.",
        "I joined GPA as an 'Event Assistant' in my first year, then unpresidentedly being nominated as vice president at the next semester. At the end of my second year, I worked as the president for a whole year.",
        "As a president, I oversaw the association in events organizing (10 - 500 people from different cultures) and funds raising ($18,000/year), collaborating with companies like Google, Bell etc. and Universities such as U of T, York and Queens.",
        "During my tenure, the association unexpectedly grow by doubling the number of members, gaining higher reputations from student community and being invited by Chinese Embassy to seasonal meetings as a representative for students in UTSC.",
      ],
      img: gpa,
    },
    {
      id: 3,
      title: "2016: HTML/CSS, JS, PHP, SQL",
      category: "Tech",
      description: [
        "Completed CSCB20:'Introduction to Databases and Web Applications' with Grade A.",
        "Became familiar with relational databases. Being able to create, query, design and update databases with SQL.",
        "Became familiar with web documents and applications, including static & interactive documents. Gained knowledge of web servers and dynamic server-generated content. Practiced web application development and interface with database.",
      ],
      img: b20,
      link: "https://www.utsc.utoronto.ca/~bretscher/b20/",
    },
    {
      id: 4,
      title: "2016: U of T (Bioline Lab)",
      category: "Work-Research & Web",
      description: [
        "With fundamental knowledge learnt from University courses, I worked in Bioline Lab as a 'work-study' intern",
        "I maintained consistency of content on Bioline website, kept it up-to-date by converting categorized scholarly published articles to XML and CSS files.",
        "I worked in an international team to maintain the Bioline global database, by doing data collection, data processing, and code reviewing.",
      ],
      img: bioline,
      link: "http://www.bioline.org.br/",
    },
    {
      id: 5,
      title: "2016: Java, Git, OOP",
      category: "Tech",
      description: [
        "Completed CSCB07: 'Software Design'",
        "Gained basic knowledge of software design, development concepts, methods and tools with a statically-typed object-oriented language such as Java",
        "Got familiar with version control, build management, unit testing, refactoring, object-oriented design and development, design patterns and advanced IDE usage.",
        "Implemented a customized virtual file operating system in terminal within a group of 4.",
      ],
      img: "Not Available",
    },
    {
      id: 6,
      title: "2016: C",
      category: "Tech",
      description: [
        "Completed CSCB09: 'Software Tools and Systems Programming'",
        "Learnt software techniques in a Unix-Style environment, using scripting languages and a machine-oriented programming language (typically C).",
        "Got familiar with core topics such as creating and using software tools, pipes and filters, file processing, shell programming, processes, system calls, signals, basic network programming.",
      ],
      img: "Not Available",
      link: "https://www.cs.utoronto.ca/~bianca/cscb09w17/courseinfo.shtml",
    },
    {
      id: 7,
      title: "2017: Kal-Polymers",
      category: "Work-Sales & Lab",
      description: [
        "Worked as a 'Lab Assistant' and 'Sales representative' in Kal-Polymers for 8 months",
        "I joined Kal-Polymers in my first co-op work term as a sophomore. Working as a sales representative who is in charge of internaional business, I directly reports to the CEO every day.",
        "By watching Mr.Gobby making business decisions every day, I was inspired by the spirit of entrepreneurs and then started my own company with management students in U of T after the internship.",
      ],
      img: kalPolymers,
      link: "https://kalpolymers.com/",
    },
    {
      id: 8,
      title: "2018: SHAR.ED Inc.",
      category: "Entrepreneur",
      description: [
        "Inspired by the previous internship experience, I started my own company with couple stake holders.",
        "We participated in inovation competitions hosted by UTSC Hub (UTSC Inovation Hub for University students start-up business), then got accepted and supported by it.",
      ],
      img: shareEd,
    },
    {
      id: 9,
      title: "2019: Ontario Ministry of Environment",
      category: "Work-Research",
      description: [
        "I wokred in Ontario Ministry of Environment for 4 months as my second co-op work term.",
        "With a hope of getting experience with practical research, I worked in two research labs with Dr.Holeton Claire and Dr.Bhavsar Satyendra.",
        "Druing the co-op work term, I established a framework of workflow for water quality monitoring project which becomes part of the research routine activities to save technicians’ time by at least 5 hours/week.",
        "As the first ever co-op student who presents in EMRBTALK conference, introduced the framework to the entire ministry.",
      ],
      img: EMRB,
    },
    {
      id: 10,
      title: "2019: PowerChina (Fortune Global #161/500)",
      category: "Work-Engineering",
      description: [
        "I worked in PowerChina as an assistant engineer for 4 months",
        "I quickly picked up tech skills which I never learnt in University such as AutoCAD and ArcGIS.",
        "I am able to transfer my knowledge from English to Chinese and took responsibilities during on-site communication and technical conferences.",
        "Earned a return offer as a junior engineer in oversea department after graduation by great potential shown during business trips.",
      ],
      img: powerChina,
      link: "http://www.ecidi.com/en/index.html",
    },
    {
      id: 11,
      title: "2019: React Native, Flask, SpringBoot, Agile",
      category: "Tech",
      description: [
        "Completed CSCC01: 'Introduction to Software Engineering'",
        "Learnt software devlelopment methodologies with an emphasis on agile development methods appropriate for rapidly-moving projects.",
        "Gained knowledge of software development topics including basic project management, UML, software architecture, design pattern, testing and requirements elicitation & tracking.",
        "Gained practical experience on non-relational databases such as MongoDB and Neo4j.",
        "Implemented a mobile application with Agile methodologies according to a start-up idea provided by U of T management department.",
        "Maintained Jira borads and used Jenkins for DevOps purposes. Did couple presentations to the product owner so that we can adjust the implementation schedule and arrange Jira tasks in each sprint.",
      ],
      img: javaBackend,
      link: "https://github.com/HaoLiangPao",
    },
    {
      id: 12,
      title: "2020: React, Node.js, Express, MongoDB",
      category: "Tech",
      description: [
        "Completed 5 web development courses on Udemy after graduation",
        "I made up my mind to be a web developer after graduation, so I enrolled in 5 Udemy Courses right after I finished my last final exam",
      ],
      img: mernStack,
      link: "/projects",
    },
  ],
  bio: {
    intros: [
      {
        id: 1,
        role: "As a NEW GRED",
        description:
          "I recently graduated from the University of Toronto as an Hournous Bachelor of Science. I completed a specialist program in Environmental Chemistry and a minor program in computer science.",
      },
      {
        id: 2,
        role: "As a Junior Web Developer",
        description:
          "I devoted most of my time in learning web development after I finished my last course in U of T. Many small web projects have been created, as shown in the PROJECTS section; Source codes could be found in my Github Account.",
      },
      {
        id: 3,
        role: "As a Junior Entrepreneur",
        description:
          "My shareholders and I ran a start-up business with the support from THE HUB (UTSC innovation cube). We provided Canadian high school courses online for Chinese students.",
      },
    ],
    awards: [
      {
        id: 1,
        title: "Student",
        description: "I ran an Chinese student club in U of T",
      },
      {
        id: 2,
        title: "Employee",
        description: "I worked in varies fields",
      },
      {
        id: 3,
        title: "Entrepreneur",
        description: "I started a company with my stackholders",
      },
    ],
  },
};

export default (state = initialState, action) => {
  return state;
};
