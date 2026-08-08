const nodejsQuestions = [
  {
    id: 1,
    question: "What is Node.js?",
    options: [
      "A JavaScript runtime environment",
      "A database",
      "A CSS framework",
      "A web browser"
    ],
    answer: "A JavaScript runtime environment",
    explanation: "Node.js allows JavaScript to run outside the browser."
  },
  {
    id: 2,
    question: "Which JavaScript engine does Node.js use?",
    options: [
      "V8",
      "SpiderMonkey",
      "JavaScriptCore",
      "Chakra"
    ],
    answer: "V8",
    explanation: "Node.js uses Google's V8 JavaScript engine."
  },
  {
    id: 3,
    question: "Which command checks the installed Node.js version?",
    options: [
      "node -v",
      "node version",
      "npm -node",
      "node check"
    ],
    answer: "node -v",
    explanation: "The node -v command displays the installed Node.js version."
  },
  {
    id: 4,
    question: "What does npm stand for?",
    options: [
      "Node Package Manager",
      "New Programming Module",
      "Node Program Manager",
      "Network Package Manager"
    ],
    answer: "Node Package Manager",
    explanation: "npm is the package manager commonly used with Node.js."
  },
  {
    id: 5,
    question: "Which command creates a package.json file?",
    options: [
      "npm init",
      "npm create",
      "node init",
      "npm package"
    ],
    answer: "npm init",
    explanation: "npm init creates a package.json file for a Node.js project."
  },
  {
    id: 6,
    question: "Which module is used to create a web server in Node.js?",
    options: [
      "http",
      "server",
      "web",
      "network"
    ],
    answer: "http",
    explanation: "Node.js provides the built-in http module for creating HTTP servers."
  },
  {
    id: 7,
    question: "Which command installs a package using npm?",
    options: [
      "npm install package-name",
      "node install package-name",
      "npm add-file package-name",
      "node package package-name"
    ],
    answer: "npm install package-name",
    explanation: "npm install downloads and installs packages into a Node.js project."
  },
  {
    id: 8,
    question: "Which file commonly contains Node.js project dependencies?",
    options: [
      "package.json",
      "index.html",
      "style.css",
      "server.txt"
    ],
    answer: "package.json",
    explanation: "package.json stores project information, scripts, and dependencies."
  },
  {
    id: 9,
    question: "Is Node.js single-threaded?",
    options: [
      "Yes, its JavaScript execution is primarily single-threaded",
      "No, it always uses multiple JavaScript threads",
      "Only on Windows",
      "Only when using npm"
    ],
    answer: "Yes, its JavaScript execution is primarily single-threaded",
    explanation: "Node.js uses a single JavaScript thread with an event-driven architecture and can use background threads for certain operations."
  },
  {
    id: 10,
    question: "What architecture is commonly associated with Node.js?",
    options: [
      "Event-driven and non-blocking",
      "Only synchronous",
      "Database-driven only",
      "HTML-driven"
    ],
    answer: "Event-driven and non-blocking",
    explanation: "Node.js is designed around an event-driven, non-blocking I/O model."
  }
,
{
  id: 11,
  question: "Which object provides information about the current Node.js process?",
  options: [
    "process",
    "node",
    "system",
    "runtime"
  ],
  answer: "process",
  explanation: "The built-in process object provides information and control over the current Node.js process."
},
{
  id: 12,
  question: "Which module is used to work with files in Node.js?",
  options: [
    "fs",
    "file",
    "files",
    "storage"
  ],
  answer: "fs",
  explanation: "The built-in fs module provides APIs for working with files and directories."
},
{
  id: 13,
  question: "Which module is used to work with file and directory paths?",
  options: [
    "path",
    "directory",
    "url",
    "location"
  ],
  answer: "path",
  explanation: "The path module provides utilities for working with file and directory paths."
},
{
  id: 14,
  question: "What is Express.js?",
  options: [
    "A web framework for Node.js",
    "A database",
    "A JavaScript engine",
    "An operating system"
  ],
  answer: "A web framework for Node.js",
  explanation: "Express.js is a popular framework for building web applications and APIs with Node.js."
},
{
  id: 15,
  question: "Which method starts a Node.js HTTP server?",
  options: [
    "listen()",
    "start()",
    "run()",
    "open()"
  ],
  answer: "listen()",
  explanation: "The server.listen() method starts an HTTP server and listens for incoming connections."
},
{
  id: 16,
  question: "What is a callback function in Node.js?",
  options: [
    "A function passed to another function to be executed later",
    "A database query",
    "A Node.js package",
    "A type of server"
  ],
  answer: "A function passed to another function to be executed later",
  explanation: "Callbacks are commonly used to handle asynchronous operations in Node.js."
},
{
  id: 17,
  question: "What does asynchronous programming help Node.js handle efficiently?",
  options: [
    "I/O operations",
    "Only CSS styling",
    "HTML formatting",
    "Image editing"
  ],
  answer: "I/O operations",
  explanation: "Node.js uses asynchronous I/O to handle tasks such as file access and network requests efficiently."
},
{
  id: 18,
  question: "Which file is commonly used to ignore files in a Node.js project when using Git?",
  options: [
    ".gitignore",
    ".nodeignore",
    "ignore.txt",
    "package.ignore"
  ],
  answer: ".gitignore",
  explanation: "The .gitignore file tells Git which files and directories should not be tracked."
},
{
  id: 19,
  question: "Which command runs a Node.js JavaScript file?",
  options: [
    "node filename.js",
    "npm run filename.js",
    "run node filename.js",
    "javascript filename.js"
  ],
  answer: "node filename.js",
  explanation: "The node command executes a JavaScript file using the Node.js runtime."
},
{
  id: 20,
  question: "Which feature makes Node.js suitable for applications with many concurrent connections?",
  options: [
    "Non-blocking I/O",
    "Synchronous execution only",
    "HTML rendering",
    "CSS processing"
  ],
  answer: "Non-blocking I/O",
  explanation: "Node.js's non-blocking I/O model allows it to handle many concurrent connections efficiently."
}
];

export default nodejsQuestions;