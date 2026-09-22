// Central list of every quiz topic on QuizMaster Learn.
// Each topic powers three things: the quiz page (/quiz/slug),
// the public study guide (/learn/slug) and the category hub pages.
// To add a new quiz: import its questions file, add one entry below,
// then add its two URLs to public/sitemap.xml.

import html from "./html";
import css from "./css";
import javascript from "./javascript";
import react from "./react";
import nodejs from "./nodejs";
import bootstrap from "./bootstrap";
import tailwind from "./tailwind";
import jquery from "./jquery";
import typescript from "./typescript";
import firebase from "./firebase";
import mongodb from "./mongodb";
import mysql from "./mysql";
import php from "./php";
import python from "./python";
import java from "./java";
import cpp from "./cpp";
import flutter from "./flutter";
import gitGithub from "./gitGithub";
import webDevelopment from "./webDevelopment";
import cyberSecurity from "./cyberSecurity";
import linux from "./linux";
import restApi from "./restApi";
import dataScience from "./dataScience";
import machLearn from "./mach-learn";
import devops from "./devops";

import cProgramming from "../programming/cProgramming";
import dataStructure from "../programming/dataStructure";
import algorithms from "../programming/algorithms";
import objectOrientedProgramming from "../programming/objectOrientedProgramming";
import databaseSystems from "../programming/databaseSystems";

import aiBasics from "./aiBasics";
import machineLearning from "./machineLearning";
import deepLearning from "./deepLearning";
import nlp from "./nlp";
import computerVision from "./computerVision";

import englishGrammar from "./englishGrammar";
import tenses from "./tenses";
import vocabulary from "./vocabulary";
import synonymsAntonyms from "./synonymsAntonyms";
import idioms from "./idioms";

import algebra from "./algebra";
import geometry from "./geometry";
import trigonometry from "./trigonometry";
import calculus from "./calculus";
import statistics from "./statistics";

import physics from "./physics";
import chemistry from "./chemistry";
import biology from "./biology";
import generalScience from "./generalScience";
import spaceScience from "./spaceScience";

import pakistanGK from "./pakistanGK";
import worldGK from "./worldGK";
import islamicStudies from "./islamicStudies";
import currentAffairs from "./currentAffairs";
import sports from "./sports";

export const SITE_URL = "https://www.quizmasterlearn.com";

export const groups = [
  {
    key: "web",
    title: "Web Development & Technology",
    icon: "🌐",
    path: "/categories",
    intro: [
      "These quizzes cover the tools people use to build websites, apps and software today: the core web languages, popular frameworks, databases, version control and the systems that keep applications running.",
      "Each topic has a timed quiz and a free study guide with every question, the correct answer and a short explanation. If you are new to a topic, read the study guide first, then take the quiz to see what stuck.",
    ],
  },
  {
    key: "programming",
    title: "Programming Fundamentals",
    icon: "💻",
    path: "/programming",
    intro: [
      "Programming fundamentals are the ideas that stay the same no matter which language you use: how data is stored, how problems are broken into steps, and how code is organised so it can grow.",
      "These topics appear again and again in university courses, job interviews and entry tests. Work through the study guides to revise, then use the quizzes to check your speed and accuracy.",
    ],
  },
  {
    key: "ai",
    title: "Artificial Intelligence",
    icon: "🤖",
    path: "/ai",
    intro: [
      "Artificial intelligence is the field of building systems that can learn from data, recognise patterns and make decisions. It now sits behind search engines, translation tools, photo apps and chat assistants.",
      "Start with AI Basics if you are new, then move to machine learning, deep learning, language processing and computer vision. Every quiz has a study guide that explains the key terms in plain language.",
    ],
  },
  {
    key: "english",
    title: "English Language",
    icon: "📚",
    path: "/english",
    intro: [
      "Good English helps in exams, interviews and everyday work. These quizzes focus on the areas where learners most often lose marks: grammar rules, verb tenses, word meanings, synonyms and antonyms, and idioms.",
      "Use the study guides to review the rule behind each answer, not just the answer itself. Understanding why an option is correct is what helps you get similar questions right later.",
    ],
  },
  {
    key: "mathematics",
    title: "Mathematics",
    icon: "🧮",
    path: "/mathematics",
    intro: [
      "Mathematics builds on itself, so gaps in one area show up everywhere else. These quizzes cover algebra, geometry, trigonometry, calculus and statistics at the level found in school, college and entry tests.",
      "Try solving each question on paper before looking at the options. The study guides show the correct answer with a short explanation you can use to check your working.",
    ],
  },
  {
    key: "science",
    title: "Science",
    icon: "🔬",
    path: "/science",
    intro: [
      "Science explains how the natural world works, from atoms and cells to planets and galaxies. These quizzes cover physics, chemistry, biology, general science and space science.",
      "They are useful for revising before school exams, preparing for entry and job tests, or simply refreshing what you learned years ago. Each topic has a study guide with explanations.",
    ],
  },
  {
    key: "gk",
    title: "General Knowledge",
    icon: "🌍",
    path: "/general-knowledge",
    intro: [
      "General knowledge questions are a large part of many competitive and job tests in Pakistan. These quizzes cover Pakistan studies, world facts, Islamic studies, sports and recent events.",
      "Short daily practice works better than long cramming sessions. Read one study guide, take its quiz, and come back to the questions you missed a few days later.",
    ],
  },
];

export const topics = [
  // ---------------- Web & Technology ----------------
  {
    slug: "html",
    title: "HTML",
    group: "web",
    icon: "🌐",
    questions: html,
    intro: [
      "HTML (HyperText Markup Language) is the language that gives every web page its structure. Headings, paragraphs, links, images, lists, tables and forms are all described with HTML elements, which browsers read and turn into what you see on screen.",
      "This quiz checks your knowledge of basic HTML syntax, common tags and attributes, and the HTML5 features used in modern pages. It is a good starting point for anyone beginning web development.",
    ],
  },
  {
    slug: "css",
    title: "CSS",
    group: "web",
    icon: "🎨",
    questions: css,
    intro: [
      "CSS (Cascading Style Sheets) controls how HTML looks: colours, fonts, spacing, layout and how a page adapts to different screen sizes. Without CSS, every website would be plain black text on a white background.",
      "These questions cover selectors, the box model, positioning, units and the properties you use most often when styling a page.",
    ],
  },
  {
    slug: "javascript",
    title: "JavaScript",
    group: "web",
    icon: "⚡",
    questions: javascript,
    intro: [
      "JavaScript is the programming language of the web. It makes pages interactive, handling button clicks, form checks, animations and data loaded from servers. With Node.js it also runs on servers.",
      "This quiz covers variables, data types, functions, operators, arrays, objects and other core concepts every JavaScript developer needs.",
    ],
  },
  {
    slug: "react",
    title: "React",
    group: "web",
    icon: "⚛️",
    questions: react,
    intro: [
      "React is a JavaScript library for building user interfaces out of small, reusable components. It is one of the most widely used front-end tools, and this very website is built with it.",
      "The questions focus on components, JSX, props, state, hooks and how React updates the page efficiently.",
    ],
  },
  {
    slug: "nodejs",
    title: "Node.js",
    group: "web",
    icon: "🟢",
    questions: nodejs,
    intro: [
      "Node.js lets you run JavaScript outside the browser, most often to build web servers and APIs. It uses an event-driven, non-blocking model that handles many connections at once.",
      "This quiz covers modules, npm, the event loop, file handling and the basics of building a server with Node.js.",
    ],
  },
  {
    slug: "bootstrap",
    title: "Bootstrap",
    group: "web",
    icon: "🅱️",
    questions: bootstrap,
    intro: [
      "Bootstrap is a popular CSS framework that provides ready-made classes for grids, buttons, forms, navigation bars and other common interface parts. It helps developers build responsive layouts quickly.",
      "The questions test your understanding of Bootstrap's grid system, utility classes and components.",
    ],
  },
  {
    slug: "tailwind",
    title: "Tailwind CSS",
    group: "web",
    icon: "💨",
    questions: tailwind,
    intro: [
      "Tailwind CSS is a utility-first framework: instead of writing custom CSS, you style elements by combining small classes such as p-4, text-center or bg-blue-500 directly in your markup.",
      "This quiz covers Tailwind's naming patterns, responsive prefixes, state variants and configuration.",
    ],
  },
  {
    slug: "jquery",
    title: "jQuery",
    group: "web",
    icon: "💛",
    questions: jquery,
    intro: [
      "jQuery is a JavaScript library that made selecting elements, handling events and making AJAX requests much simpler in the days before modern browser APIs. Many existing websites still use it.",
      "These questions cover selectors, events, effects and DOM manipulation with jQuery.",
    ],
  },
  {
    slug: "typescript",
    title: "TypeScript",
    group: "web",
    icon: "📘",
    questions: typescript,
    intro: [
      "TypeScript adds static types to JavaScript. By describing what kind of data variables and functions expect, it catches many mistakes before the code ever runs, which is why large projects often prefer it.",
      "This quiz covers types, interfaces, generics, enums and how TypeScript compiles to JavaScript.",
    ],
  },
  {
    slug: "firebase",
    title: "Firebase",
    group: "web",
    icon: "🔥",
    questions: firebase,
    intro: [
      "Firebase is Google's platform for building apps without managing your own servers. It offers authentication, databases such as Firestore, file storage, hosting and analytics.",
      "The questions focus on Firebase services, how they fit together and common setup steps.",
    ],
  },
  {
    slug: "mongodb",
    title: "MongoDB",
    group: "web",
    icon: "🍃",
    questions: mongodb,
    intro: [
      "MongoDB is a NoSQL database that stores data as flexible, JSON-like documents instead of rows and columns. It is often paired with Node.js in the MERN stack.",
      "This quiz covers documents and collections, queries, indexes and basic CRUD operations.",
    ],
  },
  {
    slug: "mysql",
    title: "MySQL",
    group: "web",
    icon: "🐬",
    questions: mysql,
    intro: [
      "MySQL is one of the most widely used relational databases. Data is stored in tables and queried with SQL, the standard language for working with relational data.",
      "These questions cover SQL commands, keys, joins, constraints and database design basics.",
    ],
  },
  {
    slug: "php",
    title: "PHP",
    group: "web",
    icon: "🐘",
    questions: php,
    intro: [
      "PHP is a server-side scripting language that powers a large share of the web, including WordPress. It runs on the server, builds HTML and works closely with databases like MySQL.",
      "This quiz covers PHP syntax, variables, arrays, functions, forms and sessions.",
    ],
  },
  {
    slug: "python",
    title: "Python",
    group: "web",
    icon: "🐍",
    questions: python,
    intro: [
      "Python is known for its clear, readable syntax, which makes it a favourite first language. It is used for web development, automation, data analysis, scientific computing and artificial intelligence.",
      "The questions cover data types, lists, dictionaries, loops, functions and other Python fundamentals.",
    ],
  },
  {
    slug: "java",
    title: "Java",
    group: "web",
    icon: "☕",
    questions: java,
    intro: [
      "Java is an object-oriented language designed to run on any device with a Java Virtual Machine. It is widely used in enterprise software, Android apps and university courses.",
      "This quiz covers classes, objects, inheritance, data types, exceptions and core Java keywords.",
    ],
  },
  {
    slug: "cpp",
    title: "C++",
    group: "web",
    icon: "💠",
    questions: cpp,
    intro: [
      "C++ extends the C language with classes and other object-oriented features. It is valued for speed and control over memory, and is used in games, system software and competitive programming.",
      "These questions cover syntax, pointers, classes, constructors, inheritance and the standard library.",
    ],
  },
  {
    slug: "flutter",
    title: "Flutter",
    group: "web",
    icon: "🩵",
    questions: flutter,
    intro: [
      "Flutter is Google's toolkit for building mobile, web and desktop apps from a single codebase using the Dart language. Everything on screen is built from widgets.",
      "This quiz covers widgets, layouts, state management and the basics of Dart.",
    ],
  },
  {
    slug: "gitgithub",
    title: "Git & GitHub",
    group: "web",
    icon: "🐙",
    questions: gitGithub,
    intro: [
      "Git is a version control system that records every change to your code so you can go back, compare versions and work with others safely. GitHub is a website that hosts Git repositories and adds collaboration tools.",
      "The questions cover commits, branches, merging, remotes, pull requests and everyday Git commands.",
    ],
  },
  {
    slug: "webdevelopment",
    title: "Web Development",
    group: "web",
    icon: "🌐",
    questions: webDevelopment,
    intro: [
      "Web development covers everything involved in building websites and web apps: front-end design, back-end servers, databases, hosting and how browsers talk to servers over HTTP.",
      "This quiz gives a broad overview and is a good way to find which areas you should study in more depth.",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cyber Security",
    group: "web",
    icon: "🔒",
    questions: cyberSecurity,
    intro: [
      "Cyber security is about protecting computers, networks and data from attack. Understanding common threats such as phishing, malware and weak passwords helps everyone stay safer online, not just IT professionals.",
      "These questions cover common attacks, encryption, firewalls, authentication and safe practices.",
    ],
  },
  {
    slug: "linux",
    title: "Linux",
    group: "web",
    icon: "🐧",
    questions: linux,
    intro: [
      "Linux is an open-source operating system that runs most of the world's servers, Android phones and many developer machines. Knowing the command line is a core skill for developers and system administrators.",
      "This quiz covers file system basics, common commands, permissions and processes.",
    ],
  },
  {
    slug: "restapi",
    title: "REST API",
    group: "web",
    icon: "🔗",
    questions: restApi,
    intro: [
      "A REST API is a common way for apps to exchange data over HTTP. The front end of a website or mobile app usually talks to its server through an API like this.",
      "The questions cover HTTP methods, status codes, endpoints, JSON and REST design principles.",
    ],
  },
  {
    slug: "datascience",
    title: "Data Science",
    group: "web",
    icon: "📊",
    questions: dataScience,
    intro: [
      "Data science combines statistics, programming and subject knowledge to find useful patterns in data. Typical work includes collecting and cleaning data, exploring it, building models and presenting results.",
      "This quiz covers the data science workflow, common tools and key statistical ideas.",
    ],
  },
  {
    slug: "mach-learn",
    title: "Machine Learning Fundamentals",
    group: "web",
    icon: "🤖",
    questions: machLearn,
    intro: [
      "Machine learning is a branch of AI where computers learn patterns from examples instead of following hand-written rules. This set focuses on the practical fundamentals developers meet first.",
      "The questions cover supervised and unsupervised learning, training and testing data, and common algorithms. For a second set of questions, see the Machine Learning quiz in the AI category.",
    ],
  },
  {
    slug: "devops",
    title: "DevOps",
    group: "web",
    icon: "⚙️",
    questions: devops,
    intro: [
      "DevOps is a set of practices that brings software development and operations together so code can be built, tested and released quickly and reliably.",
      "This quiz covers continuous integration and delivery, containers, automation and monitoring.",
    ],
  },

  // ---------------- Programming ----------------
  {
    slug: "c-programming",
    aliases: ["cprogramming"],
    title: "C Programming",
    group: "programming",
    icon: "💻",
    questions: cProgramming,
    intro: [
      "C is one of the oldest and most influential programming languages. Operating systems, embedded devices and many other languages are built on it, and it is often the first language taught at university in Pakistan.",
      "This quiz covers data types, operators, control flow, functions, arrays and pointers.",
    ],
  },
  {
    slug: "data-structure",
    aliases: ["datastructure"],
    title: "Data Structures",
    group: "programming",
    icon: "📚",
    questions: dataStructure,
    intro: [
      "Data structures are ways of organising data so it can be used efficiently. Choosing the right one, whether an array, linked list, stack, queue, tree or graph, often decides how fast a program runs.",
      "These questions are common in university exams and technical interviews.",
    ],
  },
  {
    slug: "algorithms",
    title: "Algorithms",
    group: "programming",
    icon: "⚡",
    questions: algorithms,
    intro: [
      "An algorithm is a clear, step-by-step method for solving a problem. Studying algorithms teaches you how to sort, search and process data, and how to judge whether a solution will stay fast as the input grows.",
      "This quiz covers sorting and searching, time complexity and common algorithm design techniques.",
    ],
  },
  {
    slug: "object-oriented-programming",
    aliases: ["oop"],
    title: "Object-Oriented Programming",
    group: "programming",
    icon: "🏛️",
    questions: objectOrientedProgramming,
    intro: [
      "Object-oriented programming (OOP) organises code around objects that combine data and behaviour. Languages such as Java, C++, Python and C# all use it.",
      "The questions cover classes and objects, encapsulation, inheritance, polymorphism and abstraction.",
    ],
  },
  {
    slug: "database-systems",
    title: "Database Systems",
    group: "programming",
    icon: "🗄️",
    questions: databaseSystems,
    intro: [
      "Database systems store and manage large amounts of data safely. This topic covers the theory behind them: data models, keys, normalisation, transactions and SQL.",
      "It is a core subject in computer science degrees and a frequent source of interview questions.",
    ],
  },

  // ---------------- AI ----------------
  {
    slug: "ai-basics",
    title: "AI Basics",
    group: "ai",
    icon: "🧠",
    questions: aiBasics,
    intro: [
      "Artificial intelligence is the effort to build machines that perform tasks we normally associate with human intelligence, such as understanding language, recognising images and making decisions.",
      "This quiz introduces the history of AI, its main branches and the key terms you will meet in every other AI topic.",
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    group: "ai",
    icon: "📈",
    questions: machineLearning,
    intro: [
      "Machine learning lets computers improve at a task by learning from data. Spam filters, product recommendations and fraud detection are everyday examples.",
      "The questions cover types of learning, models, training, overfitting and how results are evaluated.",
    ],
  },
  {
    slug: "deep-learning",
    title: "Deep Learning",
    group: "ai",
    icon: "🕸️",
    questions: deepLearning,
    intro: [
      "Deep learning uses neural networks with many layers to learn complex patterns directly from raw data such as images, audio and text. It powers modern speech recognition, image generation and language models.",
      "This quiz covers neurons, layers, activation functions, training and common network types.",
    ],
  },
  {
    slug: "nlp",
    title: "Natural Language Processing",
    group: "ai",
    icon: "💬",
    questions: nlp,
    intro: [
      "Natural language processing (NLP) is the part of AI that deals with human language: translation, chat assistants, sentiment analysis and search all rely on it.",
      "The questions cover text processing steps, tokenisation, word representations and common NLP tasks.",
    ],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    group: "ai",
    icon: "👁️",
    questions: computerVision,
    intro: [
      "Computer vision teaches machines to understand images and video. Face unlock, number plate readers and medical image analysis are all computer vision applications.",
      "This quiz covers image basics, feature detection, classification and object detection.",
    ],
  },

  // ---------------- English ----------------
  {
    slug: "english-grammar",
    title: "English Grammar",
    group: "english",
    icon: "✍️",
    questions: englishGrammar,
    intro: [
      "Grammar is the set of rules that makes English clear and correct. Mistakes with articles, prepositions and subject-verb agreement are among the most common in exams and written work.",
      "This quiz covers parts of speech, sentence structure and the rules that learners most often get wrong.",
    ],
  },
  {
    slug: "tenses",
    title: "Tenses",
    group: "english",
    icon: "⏳",
    questions: tenses,
    intro: [
      "Tenses show when an action happens and whether it is complete or ongoing. English has twelve main tense forms, and choosing the right one is essential for clear writing.",
      "These questions test present, past and future tenses in their simple, continuous, perfect and perfect continuous forms.",
    ],
  },
  {
    slug: "vocabulary",
    title: "Vocabulary",
    group: "english",
    icon: "📖",
    questions: vocabulary,
    intro: [
      "A strong vocabulary helps you read faster, write more precisely and score higher in verbal sections of tests. The best way to learn new words is to see them in context and use them yourself.",
      "This quiz checks the meaning of commonly tested English words.",
    ],
  },
  {
    slug: "synonyms-antonyms",
    title: "Synonyms & Antonyms",
    group: "english",
    icon: "🔁",
    questions: synonymsAntonyms,
    intro: [
      "Synonyms are words with similar meanings, and antonyms are words with opposite meanings. Both appear in almost every English section of competitive and job tests.",
      "These questions help you build word pairs and notice small differences in meaning.",
    ],
  },
  {
    slug: "idioms",
    title: "Idioms",
    group: "english",
    icon: "🗣️",
    questions: idioms,
    intro: [
      "An idiom is a phrase whose meaning is different from the meaning of its individual words, such as 'break the ice' or 'a piece of cake'. Idioms are common in everyday English and in exam questions.",
      "This quiz tests the meanings of widely used English idioms.",
    ],
  },

  // ---------------- Mathematics ----------------
  {
    slug: "algebra",
    title: "Algebra",
    group: "mathematics",
    icon: "➗",
    questions: algebra,
    intro: [
      "Algebra uses letters and symbols to represent unknown numbers and describe relationships. It is the foundation for almost every other branch of mathematics.",
      "The questions cover expressions, equations, factorisation, exponents and inequalities.",
    ],
  },
  {
    slug: "geometry",
    title: "Geometry",
    group: "mathematics",
    icon: "📐",
    questions: geometry,
    intro: [
      "Geometry studies shapes, sizes, angles and space. It is used in architecture, engineering, design and many everyday measurements.",
      "This quiz covers angles, triangles, circles, polygons, area and volume.",
    ],
  },
  {
    slug: "trigonometry",
    title: "Trigonometry",
    group: "mathematics",
    icon: "📏",
    questions: trigonometry,
    intro: [
      "Trigonometry studies the relationships between the angles and sides of triangles. Sine, cosine and tangent are used in physics, engineering, navigation and computer graphics.",
      "The questions cover trigonometric ratios, standard angles, identities and basic applications.",
    ],
  },
  {
    slug: "calculus",
    title: "Calculus",
    group: "mathematics",
    icon: "∫",
    questions: calculus,
    intro: [
      "Calculus is the mathematics of change. Differentiation measures how fast something changes, and integration adds up small pieces to find totals such as areas.",
      "This quiz covers limits, derivatives, integrals and their basic rules.",
    ],
  },
  {
    slug: "statistics",
    title: "Statistics",
    group: "mathematics",
    icon: "📊",
    questions: statistics,
    intro: [
      "Statistics is about collecting, summarising and interpreting data. It helps us make sense of surveys, experiments, sports results and business figures.",
      "The questions cover mean, median, mode, range, probability and basic data representation.",
    ],
  },

  // ---------------- Science ----------------
  {
    slug: "physics",
    title: "Physics",
    group: "science",
    icon: "⚛️",
    questions: physics,
    intro: [
      "Physics studies matter, energy, motion and forces, from falling objects to electricity and light. Its laws explain how nearly every machine and natural process works.",
      "This quiz covers units, motion, forces, energy, waves, heat and electricity.",
    ],
  },
  {
    slug: "chemistry",
    title: "Chemistry",
    group: "science",
    icon: "🧪",
    questions: chemistry,
    intro: [
      "Chemistry is the study of substances, what they are made of and how they react with each other. It explains everything from cooking and cleaning to medicines and fuels.",
      "The questions cover atoms, elements, the periodic table, bonding, acids and bases, and reactions.",
    ],
  },
  {
    slug: "biology",
    title: "Biology",
    group: "science",
    icon: "🧬",
    questions: biology,
    intro: [
      "Biology is the science of living things: how cells work, how organisms grow and reproduce, and how living things interact with their environment.",
      "This quiz covers cells, human body systems, genetics, plants and ecology.",
    ],
  },
  {
    slug: "general-science",
    title: "General Science",
    group: "science",
    icon: "🌍",
    questions: generalScience,
    intro: [
      "General science questions mix physics, chemistry, biology and everyday science facts. They are a regular part of many job and entry tests in Pakistan.",
      "This quiz is a quick way to check your all-round science knowledge.",
    ],
  },
  {
    slug: "space-science",
    title: "Space Science",
    group: "science",
    icon: "🚀",
    questions: spaceScience,
    intro: [
      "Space science explores the Sun, planets, stars, galaxies and the missions humans have sent to study them.",
      "The questions cover the solar system, famous space missions and basic astronomy facts.",
    ],
  },

  // ---------------- General Knowledge ----------------
  {
    slug: "pakistan-gk",
    title: "Pakistan General Knowledge",
    group: "gk",
    icon: "🇵🇰",
    questions: pakistanGK,
    intro: [
      "Pakistan studies and general knowledge about Pakistan are tested in almost every government job test, from FPSC and PPSC to NTS and army entry exams.",
      "This quiz covers Pakistan's history, geography, constitution, national symbols and important personalities.",
    ],
  },
  {
    slug: "world-gk",
    title: "World General Knowledge",
    group: "gk",
    icon: "🌐",
    questions: worldGK,
    intro: [
      "World general knowledge covers countries, capitals, international organisations, famous landmarks and major events in world history.",
      "These questions are useful for competitive exams and for anyone who wants to broaden their knowledge.",
    ],
  },
  {
    slug: "islamic-studies",
    aliases: ["islamic-studie"],
    title: "Islamic Studies",
    group: "gk",
    icon: "🕌",
    questions: islamicStudies,
    intro: [
      "Islamic studies is a compulsory subject in Pakistani schools and a regular section in many job and entry tests.",
      "This quiz covers the life of the Prophet Muhammad (PBUH), the Quran, the pillars of Islam and important events in Islamic history.",
    ],
  },
  {
    slug: "current-affairs",
    title: "Current Affairs",
    group: "gk",
    icon: "📰",
    questions: currentAffairs,
    intro: [
      "Current affairs questions test your awareness of recent national and international events. They appear in most competitive exams and interviews.",
      "Because news changes quickly, always confirm current affairs facts with a reliable news source before your exam.",
    ],
  },
  {
    slug: "sports",
    title: "Sports",
    group: "gk",
    icon: "🏏",
    questions: sports,
    intro: [
      "Sports questions cover famous players, tournaments, records and the rules of popular games such as cricket, hockey and football.",
      "They are a lighter part of general knowledge tests, and a fun way to practise.",
    ],
  },
];

const topicMap = {};
topics.forEach((t) => {
  topicMap[t.slug] = t;
  (t.aliases || []).forEach((a) => {
    topicMap[a] = t;
  });
});

export function getTopic(slug) {
  return topicMap[slug] || null;
}

export function getGroup(key) {
  return groups.find((g) => g.key === key) || null;
}

export function topicsInGroup(key) {
  return topics.filter((t) => t.group === key);
}
