// Editorial content shown on each quiz landing page (/quiz/:slug).
// Keep these texts unique per category: they are what makes each page useful on its own.

export const groups = {
  programming: {
    title: "Programming & Web Development",
    path: "/programming",
    icon: "💻",
    color: "#2563eb",
    intro:
      "Practice web technologies, programming languages, databases and core computer science topics. Every quiz comes with answer explanations so you learn why an option is right, not just which one to click.",
  },
  ai: {
    title: "Artificial Intelligence",
    path: "/ai",
    icon: "🤖",
    color: "#7c3aed",
    intro:
      "Build a solid foundation in AI, machine learning, deep learning, natural language processing and computer vision with short, focused quizzes and clear explanations.",
  },
  english: {
    title: "English",
    path: "/english",
    icon: "📖",
    color: "#db2777",
    intro:
      "Improve your grammar, tenses, vocabulary, synonyms and idioms. Each question is followed by a short explanation so you can fix mistakes you keep repeating.",
  },
  mathematics: {
    title: "Mathematics",
    path: "/mathematics",
    icon: "➗",
    color: "#ea580c",
    intro:
      "Revise algebra, geometry, trigonometry, calculus and statistics through exam-style multiple choice questions with worked reasoning in every explanation.",
  },
  science: {
    title: "Science",
    path: "/science",
    icon: "🔬",
    color: "#16a34a",
    intro:
      "Test your understanding of physics, chemistry, biology, general science and space science, and read short explanations that connect each answer to the underlying idea.",
  },
  gk: {
    title: "General Knowledge",
    path: "/general-knowledge",
    icon: "🌍",
    color: "#0d9488",
    intro:
      "Quizzes on Pakistan, the world, Islamic studies, sports and current events to help with exam preparation and everyday general knowledge.",
  },
};

export const categoryInfo = {
  // ---------- Programming & Web ----------
  html: {
    title: "HTML",
    group: "programming",
    icon: "🌐",
    overview:
      "HTML (HyperText Markup Language) gives every web page its structure. This quiz covers the fundamentals: what HTML is, how documents are laid out, common tags and attributes, and how browsers read markup. It is a good first quiz for anyone starting web development.",
    topics: ["Document structure and DOCTYPE", "Headings, paragraphs, links and images", "Lists, tables and forms", "Semantic elements and attributes"],
    tip: "Open a browser’s developer tools on any website and inspect its HTML; matching real markup to quiz questions makes the tags easier to remember.",
  },
  css: {
    title: "CSS",
    group: "programming",
    icon: "🎨",
    overview:
      "CSS (Cascading Style Sheets) controls how HTML looks: colours, spacing, fonts and layout. These questions check your knowledge of selectors, the box model, positioning, units and the way styles cascade and override each other.",
    topics: ["Selectors and specificity", "Box model: margin, border, padding", "Colours, fonts and units", "Positioning and layout basics"],
    tip: "When you miss a question about specificity or positioning, build a tiny example in a code editor and change one property at a time to see the effect.",
  },
  javascript: {
    title: "JavaScript",
    group: "programming",
    icon: "⚡",
    overview:
      "JavaScript is the programming language of the web. This quiz tests variables, data types, functions, operators, arrays, objects and how code interacts with a page, so you can find weak spots before an interview or exam.",
    topics: ["Variables, data types and operators", "Functions and scope", "Arrays and objects", "DOM and events"],
    tip: "Run small snippets in the browser console after each question; seeing the real output makes type coercion and scope rules stick.",
  },
  react: {
    title: "React",
    group: "programming",
    icon: "⚛️",
    overview:
      "React is a JavaScript library for building user interfaces from reusable components. The questions here cover JSX, components, props, state, hooks and the rendering model, which are the ideas every React job interview starts with.",
    topics: ["JSX and components", "Props and state", "Hooks such as useState and useEffect", "Rendering, keys and lists"],
    tip: "Build a small to-do app while you study; most beginner React questions map directly to something you will use in it.",
  },
  nodejs: {
    title: "Node.js",
    group: "programming",
    icon: "🟢",
    overview:
      "Node.js lets you run JavaScript on the server. This quiz looks at the runtime, modules, the event loop, asynchronous programming, npm and building simple servers and APIs.",
    topics: ["Runtime and event loop", "Modules and npm", "Asynchronous code and callbacks", "Basic servers and the file system"],
    tip: "Write a tiny HTTP server and log the order in which callbacks run; it makes the event loop much easier to understand.",
  },
  bootstrap: {
    title: "Bootstrap",
    group: "programming",
    icon: "🅱️",
    overview:
      "Bootstrap is a popular CSS framework for building responsive layouts quickly. Questions focus on the grid system, breakpoints, utility classes, components such as navbars and cards, and how to customise them.",
    topics: ["Grid system and breakpoints", "Utility classes", "Navbars, cards and modals", "Responsive design basics"],
    tip: "Resize your browser window while testing a Bootstrap page to see how each breakpoint changes the layout.",
  },
  tailwind: {
    title: "Tailwind CSS",
    group: "programming",
    icon: "💨",
    overview:
      "Tailwind CSS is a utility-first framework where you style elements by combining small classes. This quiz covers core utilities, responsive prefixes, state variants, configuration and the reasoning behind the utility-first approach.",
    topics: ["Utility-first concept", "Spacing, colour and typography utilities", "Responsive and state variants", "Configuration and customisation"],
    tip: "Recreate a simple card or navbar using only utility classes; repetition builds the vocabulary faster than reading the docs.",
  },
  jquery: {
    title: "jQuery",
    group: "programming",
    icon: "💛",
    overview:
      "jQuery simplifies DOM selection, events, effects and AJAX calls. Although newer tools exist, it is still found in many existing websites, so these questions cover selectors, methods, events, effects and AJAX basics.",
    topics: ["Selectors and DOM traversal", "Events and effects", "Manipulating content and CSS", "AJAX methods"],
    tip: "Compare each jQuery method with its plain JavaScript equivalent to understand what the library is doing for you.",
  },
  typescript: {
    title: "TypeScript",
    group: "programming",
    icon: "📘",
    overview:
      "TypeScript adds static types to JavaScript to catch mistakes before code runs. The quiz covers basic types, interfaces, generics, enums, classes and how TypeScript compiles to plain JavaScript.",
    topics: ["Basic and union types", "Interfaces and type aliases", "Generics and enums", "Classes and compilation"],
    tip: "Turn on strict mode in a small project; the compiler messages teach you the type rules as you go.",
  },
  firebase: {
    title: "Firebase",
    group: "programming",
    icon: "🔥",
    overview:
      "Firebase is Google’s platform for building apps without managing your own servers. Expect questions about authentication, Firestore and the Realtime Database, hosting, security rules and common use cases.",
    topics: ["Authentication", "Firestore and Realtime Database", "Hosting and storage", "Security rules"],
    tip: "Read the security rules for a small project and try to predict which reads and writes will be allowed or denied.",
  },
  mongodb: {
    title: "MongoDB",
    group: "programming",
    icon: "🍃",
    overview:
      "MongoDB is a document-oriented NoSQL database that stores data as JSON-like documents. This quiz tests collections, documents, CRUD operations, indexes, aggregation and how it differs from relational databases.",
    topics: ["Documents and collections", "CRUD operations", "Indexes and queries", "Aggregation and NoSQL concepts"],
    tip: "Model the same data once in MongoDB and once in SQL tables to see where each approach is stronger.",
  },
  mysql: {
    title: "MySQL",
    group: "programming",
    icon: "🐬",
    overview:
      "MySQL is one of the most widely used relational databases. The questions cover SQL commands, data types, keys, joins, constraints and basic database administration.",
    topics: ["SELECT, INSERT, UPDATE and DELETE", "Primary and foreign keys", "Joins and constraints", "Data types and functions"],
    tip: "Practise by writing the query first and checking your result against the explanation, especially for joins.",
  },
  php: {
    title: "PHP",
    group: "programming",
    icon: "🐘",
    overview:
      "PHP is a server-side scripting language that powers a large share of the web, including WordPress. This quiz checks syntax, variables, arrays, functions, forms, sessions and how PHP works with databases.",
    topics: ["Syntax, variables and operators", "Arrays and functions", "Forms, GET and POST", "Sessions, cookies and databases"],
    tip: "Build a simple contact form that stores messages in a database; it touches most of the topics in this quiz.",
  },
  python: {
    title: "Python",
    group: "programming",
    icon: "🐍",
    overview:
      "Python is known for readable syntax and is used in web development, automation, data science and AI. The questions cover data types, control flow, functions, lists, dictionaries, strings and basic object-oriented ideas.",
    topics: ["Data types and operators", "Conditions and loops", "Lists, tuples and dictionaries", "Functions and modules"],
    tip: "Type the code from each question into a Python shell; predicting the output before you run it is the fastest way to improve.",
  },
  java: {
    title: "Java",
    group: "programming",
    icon: "☕",
    overview:
      "Java is a widely used object-oriented language for enterprise software and Android. This quiz covers the JVM, syntax, classes and objects, inheritance, exceptions and the standard library.",
    topics: ["JVM, JDK and JRE", "Classes, objects and constructors", "Inheritance and interfaces", "Exceptions and collections"],
    tip: "Pay attention to the difference between the JDK, JRE and JVM; it is one of the most common interview questions.",
  },
  cpp: {
    title: "C++",
    group: "programming",
    icon: "💠",
    overview:
      "C++ extends C with object-oriented features and is used for games, systems software and performance-critical code. Expect questions about syntax, pointers, references, classes, constructors and the standard template library.",
    topics: ["Syntax and data types", "Pointers and references", "Classes and constructors", "Inheritance and STL"],
    tip: "Draw pointers and references as boxes and arrows on paper; it makes memory questions much clearer.",
  },
  flutter: {
    title: "Flutter",
    group: "programming",
    icon: "🩵",
    overview:
      "Flutter is Google’s toolkit for building mobile, web and desktop apps from a single Dart codebase. The questions cover widgets, stateless and stateful widgets, layouts, navigation and the basics of Dart.",
    topics: ["Widgets and the widget tree", "Stateless vs stateful widgets", "Layouts and navigation", "Dart basics"],
    tip: "Remember that almost everything in Flutter is a widget; thinking in widget trees makes layout questions easy.",
  },
  gitgithub: {
    title: "Git & GitHub",
    group: "programming",
    icon: "🐙",
    overview:
      "Git tracks changes in your code and GitHub hosts repositories for collaboration. This quiz covers commits, branches, merging, pull requests, remotes and the commands you use every day.",
    topics: ["init, add, commit and status", "Branches and merging", "Remotes, push and pull", "Pull requests and collaboration"],
    tip: "Create a practice repository and deliberately cause a merge conflict; resolving it once teaches more than reading about it.",
  },
  webdevelopment: {
    title: "Web Development",
    group: "programming",
    icon: "🌐",
    overview:
      "This quiz covers general web development concepts that every developer should know: how the web works, front end versus back end, HTTP, browsers, responsive design and common tools.",
    topics: ["Front end and back end", "HTTP and how browsers work", "Responsive design", "Tools and best practices"],
    tip: "Trace what happens when you type a web address into a browser; many questions are variations of that journey.",
  },
  cybersecurity: {
    title: "Cyber Security",
    group: "programming",
    icon: "🔒",
    overview:
      "Cyber security protects systems, networks and data from attacks. The questions cover common threats such as phishing and malware, passwords, encryption, firewalls and good security habits.",
    topics: ["Threats: phishing, malware and ransomware", "Passwords and authentication", "Encryption and firewalls", "Safe online habits"],
    tip: "Apply each answer to your own accounts: enable two-factor authentication and use a password manager while you learn.",
  },
  linux: {
    title: "Linux",
    group: "programming",
    icon: "🐧",
    overview:
      "Linux is the operating system behind most servers and many developer machines. This quiz tests the command line, file system layout, permissions, processes and basic shell usage.",
    topics: ["Common commands", "File system structure", "Permissions and ownership", "Processes and packages"],
    tip: "Use a Linux terminal for a week of normal tasks; commands you use become automatic.",
  },
  restapi: {
    title: "REST API",
    group: "programming",
    icon: "🔗",
    overview:
      "REST is the most common style for web APIs. Questions cover HTTP methods, status codes, endpoints, JSON, statelessness and how clients and servers exchange data.",
    topics: ["GET, POST, PUT and DELETE", "Status codes", "Endpoints and resources", "JSON and statelessness"],
    tip: "Call a public API from the browser or a tool such as curl and read the status codes it returns.",
  },
  datascience: {
    title: "Data Science",
    group: "programming",
    icon: "📊",
    overview:
      "Data science combines statistics, programming and domain knowledge to find insight in data. The quiz covers the data science workflow, data cleaning, visualisation, common libraries and basic statistics.",
    topics: ["Data science workflow", "Data cleaning", "Visualisation", "Libraries such as pandas and NumPy"],
    tip: "Take a small public dataset and walk through the full workflow once: clean, explore, visualise, summarise.",
  },
  "mach-learn": {
    title: "Machine Learning Concepts",
    group: "programming",
    icon: "🤖",
    overview:
      "This quiz focuses on core machine learning concepts rather than definitions: overfitting and underfitting, features and labels, training and test sets, evaluation and regularisation. It complements the Machine Learning Basics quiz.",
    topics: ["Features and labels", "Training and testing data", "Overfitting and underfitting", "Evaluation and regularisation"],
    tip: "Explain overfitting in your own words with an example; if you can, you understand most of this quiz.",
  },
  devops: {
    title: "DevOps",
    group: "programming",
    icon: "⚙️",
    overview:
      "DevOps brings development and operations together to deliver software faster and more reliably. Expect questions about CI/CD, containers, automation, monitoring, infrastructure as code and teamwork practices.",
    topics: ["CI/CD pipelines", "Containers and Docker", "Automation and infrastructure as code", "Monitoring and culture"],
    tip: "Set up a free CI pipeline for a small project to see continuous integration working end to end.",
  },
  "c-programming": {
    title: "C Programming",
    group: "programming",
    icon: "💻",
    overview:
      "C is the foundation of many other languages and of operating systems. This quiz checks syntax, data types, operators, control statements, functions, arrays, pointers and memory.",
    topics: ["Data types and operators", "Control statements and loops", "Functions and arrays", "Pointers and memory"],
    tip: "Trace each code question by hand, writing down variable values line by line, before you pick an answer.",
  },
  "data-structure": {
    title: "Data Structures",
    group: "programming",
    icon: "📚",
    overview:
      "Data structures decide how data is stored and how fast it can be used. The questions cover arrays, linked lists, stacks, queues, trees and the typical operations and applications of each.",
    topics: ["Arrays and linked lists", "Stacks (LIFO) and queues (FIFO)", "Trees and balanced trees", "Applications such as parentheses matching"],
    tip: "For each structure, remember one real application; exam questions often ask which structure fits a scenario.",
  },
  algorithms: {
    title: "Algorithms",
    group: "programming",
    icon: "⚡",
    overview:
      "Algorithms are step-by-step methods for solving problems. This quiz covers Euclid’s GCD algorithm, Strassen’s matrix multiplication, divide and conquer and how time complexity is described with Big-O.",
    topics: ["Euclid’s algorithm and GCD", "Divide and conquer", "Matrix multiplication", "Time complexity"],
    tip: "Work through Euclid’s algorithm on paper with two or three pairs of numbers until the pattern is obvious.",
  },
  "object-oriented-programming": {
    title: "Object-Oriented Programming",
    group: "programming",
    icon: "🏛️",
    overview:
      "Object-oriented programming organises code around objects. The quiz covers classes and objects, encapsulation, inheritance, polymorphism, abstraction and constructors.",
    topics: ["Classes and objects", "Encapsulation and abstraction", "Inheritance", "Polymorphism"],
    tip: "Learn the four pillars with one everyday example each, such as vehicles or bank accounts.",
  },
  "database-systems": {
    title: "Database Systems",
    group: "programming",
    icon: "🗄️",
    overview:
      "Database systems store and manage data reliably. Questions cover the relational model, keys, normalisation, SQL, transactions and the role of a database management system.",
    topics: ["Relational model and keys", "Normalisation", "SQL basics", "Transactions and ACID"],
    tip: "Draw a small entity-relationship diagram for a school or shop; it connects keys, tables and normalisation.",
  },

  // ---------- Artificial Intelligence ----------
  "ai-basics": {
    title: "AI Basics",
    group: "ai",
    icon: "🧠",
    overview:
      "Artificial intelligence is the field of making machines perform tasks that normally need human intelligence. This quiz covers definitions, types of AI, common applications and the relationship between AI, machine learning and deep learning.",
    topics: ["What AI is and is not", "Types and applications of AI", "AI, ML and deep learning", "Ethics and limits"],
    tip: "Learn how AI, machine learning and deep learning nest inside each other; the relationship is a classic question.",
  },
  "machine-learning": {
    title: "Machine Learning Basics",
    group: "ai",
    icon: "🤖",
    overview:
      "Machine learning lets computers learn patterns from data instead of following fixed rules. This quiz covers supervised, unsupervised and reinforcement learning, common algorithms, libraries and typical use cases.",
    topics: ["Supervised, unsupervised, reinforcement learning", "Regression and clustering", "Popular libraries and frameworks", "Training vs testing data"],
    tip: "Match each learning type with one example: spam detection, customer groups and a game-playing agent.",
  },
  "deep-learning": {
    title: "Deep Learning",
    group: "ai",
    icon: "🕸️",
    overview:
      "Deep learning uses multi-layer neural networks to learn complex patterns. The quiz covers neurons, layers, activation functions, training, common architectures and why deep learning needs data and computing power.",
    topics: ["Neurons, layers and activations", "Training and backpropagation", "CNNs, RNNs and other architectures", "Frameworks and hardware"],
    tip: "Sketch a small network with an input, hidden and output layer and follow one example through it.",
  },
  nlp: {
    title: "Natural Language Processing",
    group: "ai",
    icon: "💬",
    overview:
      "Natural language processing helps computers understand and generate human language. Questions cover tokenisation, stemming, sentiment analysis, translation, chatbots and common NLP tasks.",
    topics: ["Tokenisation and text cleaning", "Sentiment analysis", "Translation and chatbots", "Common NLP tasks"],
    tip: "Try tokenising a sentence by hand; it shows why language is harder for computers than numbers.",
  },
  "computer-vision": {
    title: "Computer Vision",
    group: "ai",
    icon: "👁️",
    overview:
      "Computer vision teaches machines to interpret images and video. The quiz covers image classification, object detection, face recognition, image processing basics and real-world applications.",
    topics: ["Image classification", "Object detection", "Face recognition", "Image processing basics"],
    tip: "Notice vision features in everyday tools, such as photo tagging or number-plate readers, and name the task each one performs.",
  },

  // ---------- English ----------
  "english-grammar": {
    title: "English Grammar",
    group: "english",
    icon: "✍️",
    overview:
      "Good grammar makes writing clear and exams easier. This quiz covers parts of speech, subject–verb agreement, articles, prepositions, sentence structure and common error patterns.",
    topics: ["Parts of speech", "Subject–verb agreement", "Articles and prepositions", "Sentence structure"],
    tip: "Keep a list of the grammar mistakes you make in quizzes and review it before your next attempt.",
  },
  tenses: {
    title: "English Tenses",
    group: "english",
    icon: "⏳",
    overview:
      "Tenses tell us when something happens. The quiz covers present, past and future forms in their simple, continuous and perfect versions, with questions that test choosing the correct form in context.",
    topics: ["Simple tenses", "Continuous tenses", "Perfect tenses", "Choosing the right tense in context"],
    tip: "Write one sentence in each tense about your own day; personal examples are easier to remember than rules.",
  },
  vocabulary: {
    title: "English Vocabulary",
    group: "english",
    icon: "📚",
    overview:
      "A strong vocabulary helps you read faster and write more precisely. This quiz checks word meanings, usage in sentences and commonly confused words, which also appear in many competitive exams.",
    topics: ["Word meanings", "Words in context", "Commonly confused words", "Word formation"],
    tip: "Learn new words in short sentences rather than isolated lists, and revisit them after a few days.",
  },
  "synonyms-antonyms": {
    title: "Synonyms & Antonyms",
    group: "english",
    icon: "🔁",
    overview:
      "Synonyms are words with similar meanings and antonyms are opposites. The quiz helps you recognise pairs quickly, which is useful in exams and for writing with more variety.",
    topics: ["Synonyms of common words", "Antonyms and opposites", "Shades of meaning", "Choosing the best word"],
    tip: "Remember that synonyms are rarely identical; notice how tone changes when you swap one word for another.",
  },
  idioms: {
    title: "Idioms & Phrases",
    group: "english",
    icon: "💡",
    overview:
      "Idioms are fixed expressions whose meaning is different from their individual words. This quiz tests common English idioms and phrases and their correct meanings.",
    topics: ["Everyday idioms", "Meanings versus literal words", "Idioms in sentences", "Exam-style phrases"],
    tip: "Group idioms by theme, such as time, money or effort, so related expressions are learned together.",
  },

  // ---------- Mathematics ----------
  algebra: {
    title: "Algebra",
    group: "mathematics",
    icon: "🔢",
    overview:
      "Algebra uses symbols to describe relationships and solve problems. The quiz covers expressions, linear and quadratic equations, factorisation, exponents and simple word problems.",
    topics: ["Expressions and equations", "Factorisation", "Quadratics", "Exponents"],
    tip: "Show every step on paper and substitute your answer back into the equation to check it.",
  },
  geometry: {
    title: "Geometry",
    group: "mathematics",
    icon: "📐",
    overview:
      "Geometry studies shapes, sizes and the properties of space. This quiz covers angles, triangles, circles, area, perimeter and volume with exam-style questions.",
    topics: ["Angles and lines", "Triangles and circles", "Area and perimeter", "Volume"],
    tip: "Draw a quick diagram for every question; many wrong answers come from imagining the figure incorrectly.",
  },
  trigonometry: {
    title: "Trigonometry",
    group: "mathematics",
    icon: "📏",
    overview:
      "Trigonometry connects angles with side lengths in triangles. The quiz covers sine, cosine and tangent, standard angle values, identities and simple applications.",
    topics: ["Sine, cosine and tangent", "Standard angle values", "Trigonometric identities", "Heights and distances"],
    tip: "Memorise the values for 0°, 30°, 45°, 60° and 90° once; they appear in a large share of questions.",
  },
  calculus: {
    title: "Calculus",
    group: "mathematics",
    icon: "∫",
    overview:
      "Calculus studies change and accumulation. The quiz covers limits, derivatives, basic differentiation rules, integrals and simple applications.",
    topics: ["Limits", "Derivatives and rules", "Integrals", "Applications"],
    tip: "Think of a derivative as a rate of change and an integral as a total; that idea ties most questions together.",
  },
  statistics: {
    title: "Statistics",
    group: "mathematics",
    icon: "📈",
    overview:
      "Statistics helps us collect, summarise and interpret data. This quiz covers mean, median, mode, range, variance, standard deviation and basic probability.",
    topics: ["Mean, median and mode", "Range and spread", "Standard deviation", "Basic probability"],
    tip: "Compute a few measures by hand on a tiny data set before relying on a calculator.",
  },

  // ---------- Science ----------
  physics: {
    title: "Physics",
    group: "science",
    icon: "⚛️",
    overview:
      "Physics explains how matter, energy and forces behave. The quiz covers motion, force, energy, electricity, light and units with questions that test concepts and simple calculations.",
    topics: ["Motion and forces", "Work and energy", "Electricity", "Light and waves"],
    tip: "Always write the units next to your numbers; many mistakes are caught by checking units.",
  },
  chemistry: {
    title: "Chemistry",
    group: "science",
    icon: "🧪",
    overview:
      "Chemistry studies matter and the changes it undergoes. This quiz covers atoms, the periodic table, bonding, acids and bases, reactions and common compounds.",
    topics: ["Atoms and the periodic table", "Chemical bonding", "Acids, bases and salts", "Reactions"],
    tip: "Use the periodic table as a reference while you study; trends across periods and groups explain many answers.",
  },
  biology: {
    title: "Biology",
    group: "science",
    icon: "🧬",
    overview:
      "Biology is the study of living things. The quiz covers cells, human body systems, plants, genetics and the basics of ecology and evolution.",
    topics: ["Cells", "Human body systems", "Plants and photosynthesis", "Genetics and ecology"],
    tip: "Link each organ or structure to its function in one sentence; function-based questions become straightforward.",
  },
  "general-science": {
    title: "General Science",
    group: "science",
    icon: "🔭",
    overview:
      "General science mixes physics, chemistry, biology and earth science at an everyday level. It is useful for school exams and competitive tests that include a general science section.",
    topics: ["Everyday physics and chemistry", "Human health and nutrition", "Earth and environment", "Inventions and discoveries"],
    tip: "Read explanations for questions you got right as well; they often contain related facts that appear in other questions.",
  },
  "space-science": {
    title: "Space Science",
    group: "science",
    icon: "🚀",
    overview:
      "Space science covers the Solar System, stars, galaxies and space exploration. The quiz tests planets, the Sun and Moon, telescopes, satellites and well-known missions.",
    topics: ["The Solar System", "Stars and galaxies", "Moon and Sun", "Space missions and satellites"],
    tip: "Order the planets by distance from the Sun and note one fact about each; it covers many questions.",
  },

  // ---------- General Knowledge ----------
  "pakistan-gk": {
    title: "Pakistan General Knowledge",
    group: "gk",
    icon: "🇵🇰",
    overview:
      "This quiz covers the history, geography, culture and national facts of Pakistan, which are commonly tested in school exams and competitive tests.",
    topics: ["History and independence", "Provinces and geography", "National symbols", "Culture and personalities"],
    tip: "Use a map while you study; locating rivers, cities and provinces makes geography questions easier.",
  },
  "world-gk": {
    title: "World General Knowledge",
    group: "gk",
    icon: "🌍",
    overview:
      "World general knowledge covers countries, capitals, landmarks, organisations and notable discoveries. The quiz is designed for exam preparation and broad everyday knowledge.",
    topics: ["Countries and capitals", "Landmarks and geography", "International organisations", "Discoveries and inventions"],
    tip: "Learn facts in groups, for example by continent, rather than as one long list.",
  },
  "islamic-studies": {
    title: "Islamic Studies",
    group: "gk",
    icon: "☪️",
    overview:
      "This quiz covers basic knowledge from Islamic studies, including the pillars of Islam, important events in Islamic history, the Quran and the life of the Prophet Muhammad (peace be upon him), at a general educational level.",
    topics: ["Pillars of Islam", "The Quran", "Seerah of the Prophet", "Islamic history"],
    tip: "Read the explanation after each answer; they give short context that helps you remember the fact.",
  },
  sports: {
    title: "Sports",
    group: "gk",
    icon: "⚽",
    overview:
      "The sports quiz tests knowledge of popular games, famous tournaments, rules, records and well-known athletes, including sports that are popular in Pakistan.",
    topics: ["Cricket, football and hockey", "Tournaments and trophies", "Rules and equipment", "Records and athletes"],
    tip: "Follow the results of a major tournament as it happens; real events are easier to remember than lists.",
  },
  "current-affairs": {
    title: "Current Affairs",
    group: "gk",
    icon: "📰",
    overview:
      "The current affairs quiz covers recent regional and international news. Because news changes quickly, check the date of each question against reliable sources.",
    topics: ["Regional news", "International relations", "Natural events", "Geography behind the news"],
    tip: "Read a reputable news source daily for ten minutes; steady reading beats cramming before an exam.",
  },
};
