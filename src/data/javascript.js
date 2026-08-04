const javascriptQuestions = [
  {
    id: 1,
    question: "What is JavaScript?",
    options: [
      "JavaScript is a scripting language used to make websites interactive",
      "JavaScript is an assembly language",
      "JavaScript is a compiled language",
      "None of the mentioned"
    ],
    answer: "JavaScript is a scripting language used to make websites interactive",
    explanation: "JavaScript is a scripting language that adds interactivity to web pages."
  },
  {
    id: 2,
    question: "Which of the following is correct about JavaScript?",
    options: [
      "JavaScript is an Object-Based language",
      "JavaScript is an Assembly language",
      "JavaScript is an Object-Oriented language",
      "JavaScript is a High-level language"
    ],
    answer: "JavaScript is a High-level language",
    explanation: "JavaScript is a high-level, interpreted programming language."
  },
  {
    id: 3,
    question: "What defines a closure in JavaScript?",
    options: [
      "A function enclosed with references to its inner function scope",
      "A function enclosed with references to its lexical environment",
      "A function enclosed with an object",
      "None of the mentioned"
    ],
    answer: "A function enclosed with references to its lexical environment",
    explanation: "A closure allows a function to access variables from its lexical scope even after the outer function has returned."
  },
  {
    id: 4,
    question: "What is the output of txt1 + txt2 if txt1='Sanfoundry_' and txt2='Javascriptmcq'?",
    options: [
      "Error",
      "Sanfoundry_ Javascriptmcq",
      "Undefined",
      "Sanfoundry_Javascriptmcq"
    ],
    answer: "Sanfoundry_Javascriptmcq",
    explanation: "The + operator concatenates strings without adding extra spaces."
  },
  {
    id: 5,
    question: "What is the output?\nvar js = 10; js *= 5;",
    options: [
      "10",
      "50",
      "5",
      "Error"
    ],
    answer: "50",
    explanation: "The *= operator multiplies the variable by the given value."
  },
  {
    id: 6,
    question: "Arrays in JavaScript are:",
    options: [
      "An ordered list of values",
      "An ordered list of objects",
      "An ordered list of strings",
      "An ordered list of functions"
    ],
    answer: "An ordered list of values",
    explanation: "JavaScript arrays can store multiple values of different data types."
  },
  {
    id: 7,
    question: "What is the result of 2 == 2.0 ?",
    options: [
      "false",
      "true",
      "Compilation Error",
      "Runtime Error"
    ],
    answer: "true",
    explanation: "The == operator compares values after type conversion."
  },
  {
    id: 8,
    question: "What is the result of 10 === '10' ?",
    options: [
      "false",
      "true",
      "Compilation Error",
      "Runtime Error"
    ],
    answer: "false",
    explanation: "The === operator compares both value and data type."
  },
  {
    id: 9,
    question: "Will this code work?\nvar js = (function(x){ return x*x; }(10));",
    options: [
      "Exception will be thrown",
      "Memory leak",
      "Error",
      "Yes, perfectly"
    ],
    answer: "Yes, perfectly",
    explanation: "This is an Immediately Invoked Function Expression (IIFE)."
  },
  {
    id: 10,
    question: "Which of the following is NOT a JavaScript data type?",
    options: [
      "Null",
      "Undefined",
      "Number",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
    explanation: "Null, Undefined, and Number are all valid JavaScript data types."
  }
  ,
{
  id: 11,
  question: "Where is client-side JavaScript embedded in HTML?",
  options: [
    "A URL using the javascript: protocol",
    "A URL using the javascript: code",
    "A URL using the javascript: stack",
    "A URL using the javascript: encoding"
  ],
  answer: "A URL using the javascript: protocol",
  explanation: "The javascript: protocol allows JavaScript code to run from a URL."
},
{
  id: 12,
  question: "What is the result if a variable is not null?",
  options: [
    "0",
    "1",
    "Compiler Error",
    "Runtime Error"
  ],
  answer: "1",
  explanation: "If the variable is not null, the condition is true."
},
{
  id: 13,
  question: "Which object is the main entry point to all client-side JavaScript features?",
  options: [
    "Position",
    "Window",
    "Location",
    "Standard"
  ],
  answer: "Window",
  explanation: "The Window object is the global object in browsers."
},
{
  id: 14,
  question: "What will the function return if the value is true?",
  options: [
    "Compilation Error",
    "Runtime Error",
    "Yes",
    "No"
  ],
  answer: "Yes",
  explanation: "The ternary operator returns 'Yes' when the condition is true."
},
{
  id: 15,
  question: "What is the output?\nvar height = 123.56; height >= 190 ? 'tall' : 'short';",
  options: [
    "short",
    "123.56",
    "tall",
    "190"
  ],
  answer: "short",
  explanation: "123.56 is less than 190, so the result is 'short'."
},
{
  id: 16,
  question: "Which of the following is used to call a JavaScript code snippet?",
  options: [
    "Function / Method",
    "Preprocessor",
    "RMI",
    "Compiler"
  ],
  answer: "Function / Method",
  explanation: "Functions or methods execute JavaScript code."
},
{
  id: 17,
  question: "What is the output of Math.abs(-7.25)?",
  options: [
    "-7.25",
    "7.25",
    "-7",
    "7"
  ],
  answer: "7.25",
  explanation: "Math.abs() returns the absolute (positive) value."
},
{
  id: 18,
  question: "What is the value of 'b' in the following code?\nvar b = 1;",
  options: [
    "1",
    "10",
    "5",
    "Error"
  ],
  answer: "1",
  explanation: "The variable b is declared as 1."
},
{
  id: 19,
  question: "A JavaScript program developed on Unix will:",
  options: [
    "Work perfectly on Windows",
    "Only work on Unix",
    "Throw errors",
    "Display JavaScript as text"
  ],
  answer: "Work perfectly on Windows",
  explanation: "JavaScript is platform-independent and works in browsers on different operating systems."
},
{
  id: 20,
  question: "Which loop is correct for counting from 10 down to 1?",
  options: [
    "for(var i=10;i>=1;i--)",
    "while(i<=10)",
    "for(var i=1;i<=10;i++)",
    "do while(i==10)"
  ],
  answer: "for(var i=10;i>=1;i--)",
  explanation: "This loop correctly counts backward from 10 to 1."
}
];

export default javascriptQuestions;