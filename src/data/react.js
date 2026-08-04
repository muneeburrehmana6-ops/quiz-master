const reactQuestions = [
  {
    id: 1,
    question: "What is React.js?",
    options: [
      "Open-source JavaScript back-end library",
      "JavaScript front-end library to create a database",
      "Free and open-source JavaScript front-end library",
      "None of the mentioned"
    ],
    answer: "Free and open-source JavaScript front-end library",
    explanation: "React is a free and open-source JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is JSX in React?",
    options: [
      "JavaScript Execution",
      "JavaScript XML",
      "JavaScript Extra",
      "None of the mentioned"
    ],
    answer: "JavaScript XML",
    explanation: "JSX stands for JavaScript XML and lets you write HTML-like syntax inside JavaScript."
  },
  {
    id: 3,
    question: "React.js is primarily used for which of the following?",
    options: [
      "Backend Development",
      "Database Management",
      "Frontend Development",
      "Mobile App Development"
    ],
    answer: "Frontend Development",
    explanation: "React is mainly used for building interactive user interfaces."
  },
  {
    id: 4,
    question: "Which of the following acts as the input of a class-based component?",
    options: [
      "Class",
      "Props",
      "Factory",
      "None of the mentioned"
    ],
    answer: "Props",
    explanation: "Props are used to pass data into React components."
  },
  {
    id: 5,
    question: "What is the main purpose of JSX in React?",
    options: [
      "Database Query Language",
      "JavaScript Function",
      "CSS Styling",
      "HTML-like syntax"
    ],
    answer: "HTML-like syntax",
    explanation: "JSX allows developers to write HTML-like code inside JavaScript."
  },
  {
    id: 6,
    question: "React.js is written in which language?",
    options: [
      "C",
      "C++",
      "JavaScript",
      "Java"
    ],
    answer: "JavaScript",
    explanation: "React is built using JavaScript."
  },
  {
    id: 7,
    question: "How many elements can a valid React component return?",
    options: [
      "React doesn't return elements",
      "1 Element",
      "More than 1 element",
      "None of the mentioned"
    ],
    answer: "1 Element",
    explanation: "A component must return one parent element. Multiple elements can be wrapped in a Fragment."
  },
  {
    id: 8,
    question: "In which directory are React components commonly stored?",
    options: [
      "js/components/",
      "components/js/",
      "vendor/js/components/",
      "vendor/components/"
    ],
    answer: "js/components/",
    explanation: "Many React projects store components inside a components folder."
  },
  {
    id: 9,
    question: "Which command installs Create React App globally?",
    options: [
      "npm install create-react-app",
      "npm install -f create-react-app",
      "npm install -g create-react-app",
      "install -g create-react-app"
    ],
    answer: "npm install -g create-react-app",
    explanation: "Historically, Create React App could be installed globally. Today, using 'npx create-react-app' is recommended."
  },
  {
    id: 10,
    question: "Which hook is used to manage state in functional components?",
    options: [
      "useState",
      "useReducer",
      "useEffect",
      "useRef"
    ],
    answer: "useState",
    explanation: "useState is the basic React Hook for managing state."
  },
  {
    id: 11,
    question: "Which of the following is NOT part of ReactDOM?",
    options: [
      "ReactDOM.hydrate()",
      "ReactDOM.destroy()",
      "ReactDOM.createPortal()",
      "All of the mentioned"
    ],
    answer: "ReactDOM.destroy()",
    explanation: "ReactDOM has methods like render, hydrate, and createPortal, but not destroy()."
  },
  {
    id: 12,
    question: "Which statement is correct about props in React?",
    options: [
      "Can be changed inside another component",
      "Can be changed inside the component",
      "Cannot be changed in the component",
      "All of the mentioned"
    ],
    answer: "Cannot be changed in the component",
    explanation: "Props are read-only (immutable) inside the receiving component."
  },
  {
    id: 13,
    question: "What is the Virtual DOM in React?",
    options: [
      "A DOM management system",
      "A method to update the real DOM directly",
      "A server-side DOM",
      "A virtual version of the actual DOM"
    ],
    answer: "A virtual version of the actual DOM",
    explanation: "React compares the Virtual DOM with the real DOM to update only the necessary parts."
  },
  {
    id: 14,
    question: "How do you pass data to a React component?",
    options: [
      "props",
      "render with arguments",
      "setState",
      "PropTypes"
    ],
    answer: "props",
    explanation: "Props are used to pass data from a parent component to a child component."
  },
  {
    id: 15,
    question: "What is the purpose of React.StrictMode?",
    options: [
      "To add animations",
      "To improve performance",
      "To enhance UI",
      "To add additional validation checks"
    ],
    answer: "To add additional validation checks",
    explanation: "StrictMode helps identify potential problems during development."
  },
  {
    id: 16,
    question: "Which of the following is NOT a valid React Hook?",
    options: [
      "useContext",
      "useState",
      "useReturn",
      "useEffect"
    ],
    answer: "useReturn",
    explanation: "There is no Hook named useReturn."
  },
  {
    id: 17,
    question: "How do you create a React application?",
    options: [
      "Using Node.js",
      "Writing plain JavaScript",
      "Using the 'npx create-react-app' command",
      "Using HTML"
    ],
    answer: "Using the 'npx create-react-app' command",
    explanation: "Traditionally, React apps are created with Create React App. Modern projects often use Vite."
  },
  {
    id: 18,
    question: "Which statement about React components is true?",
    options: [
      "A component must return only a single parent element",
      "A component cannot accept props",
      "A component must be a function",
      "A component cannot have state"
    ],
    answer: "A component must return only a single parent element",
    explanation: "Components return one parent element, or a React Fragment."
  },
  {
    id: 19,
    question: "In React, what is a component?",
    options: [
      "A method used for side effects",
      "A function that takes props and returns UI",
      "A class used to manage state",
      "A system for routing"
    ],
    answer: "A function that takes props and returns UI",
    explanation: "Components are reusable building blocks that return UI."
  },
  {
    id: 20,
    question: "Which statement about React Hooks is true?",
    options: [
      "Hooks can be used in class components",
      "Hooks can only be used in functional components",
      "Hooks are used to manage props",
      "Hooks are not supported in React"
    ],
    answer: "Hooks can only be used in functional components",
    explanation: "Hooks are designed for functional components."
  }
];

export default reactQuestions;