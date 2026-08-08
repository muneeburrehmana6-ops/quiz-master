const objectOrientedProgramming = [
  {
    id: 1,
    question: "What is the main purpose of Object-Oriented Programming (OOP)?",
    options: [
      "To write programs without functions",
      "To organize code using objects and classes",
      "To replace variables with constants",
      "To avoid using loops"
    ],
    answer: "To organize code using objects and classes",
    explanation: "OOP organizes software into objects created from classes, making code reusable and easier to maintain."
  },
  {
    id: 2,
    question: "Which of the following is NOT a pillar of Object-Oriented Programming?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Compilation",
      "Polymorphism"
    ],
    answer: "Compilation",
    explanation: "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction."
  },
  {
    id: 3,
    question: "A class is best described as:",
    options: [
      "An instance of an object",
      "A blueprint for creating objects",
      "A function",
      "A variable"
    ],
    answer: "A blueprint for creating objects",
    explanation: "A class defines the properties and methods that its objects will have."
  },
  {
    id: 4,
    question: "An object is:",
    options: [
      "A blueprint",
      "An instance of a class",
      "A programming language",
      "A compiler"
    ],
    answer: "An instance of a class",
    explanation: "An object is a real instance created from a class."
  },
  {
    id: 5,
    question: "Which OOP principle hides internal implementation details from the user?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Compilation",
      "Recursion"
    ],
    answer: "Encapsulation",
    explanation: "Encapsulation hides data and implementation details while exposing only the required functionality."
  },
    {
    id: 6,
    question: "Which OOP principle allows one class to acquire the properties and methods of another class?",
    options: [
      "Polymorphism",
      "Abstraction",
      "Inheritance",
      "Encapsulation"
    ],
    answer: "Inheritance",
    explanation: "Inheritance allows a child class to reuse the properties and methods of a parent class."
  },
  {
    id: 7,
    question: "Which OOP concept allows the same method to behave differently for different objects?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
    ],
    answer: "Polymorphism",
    explanation: "Polymorphism allows one interface to have multiple implementations."
  },
  {
    id: 8,
    question: "What is a constructor?",
    options: [
      "A loop",
      "A special method used to initialize objects",
      "A variable",
      "A compiler"
    ],
    answer: "A special method used to initialize objects",
    explanation: "A constructor is automatically called when an object is created to initialize its data."
  },
  {
    id: 9,
    question: "Which keyword is commonly used to create an object in Java, C++, and C#?",
    options: [
      "class",
      "object",
      "new",
      "create"
    ],
    answer: "new",
    explanation: "The 'new' keyword is commonly used to instantiate an object."
  },
  {
    id: 10,
    question: "Which OOP principle focuses on showing only essential information while hiding unnecessary details?",
    options: [
      "Inheritance",
      "Abstraction",
      "Polymorphism",
      "Encapsulation"
    ],
    answer: "Abstraction",
    explanation: "Abstraction hides implementation details and exposes only the necessary features."
  },
    {
    id: 11,
    question: "Which access modifier allows a class member to be accessed only within the same class?",
    options: [
      "public",
      "protected",
      "private",
      "default"
    ],
    answer: "private",
    explanation: "The private access modifier restricts access to members within the same class only."
  },
  {
    id: 12,
    question: "What is method overriding?",
    options: [
      "Creating multiple methods with the same name in the same class",
      "Redefining a parent class method in the child class",
      "Calling a constructor twice",
      "Hiding variables"
    ],
    answer: "Redefining a parent class method in the child class",
    explanation: "Method overriding allows a child class to provide its own implementation of an inherited method."
  },
  {
    id: 13,
    question: "What is method overloading?",
    options: [
      "Using multiple classes",
      "Defining multiple methods with the same name but different parameters",
      "Replacing a constructor",
      "Creating multiple objects"
    ],
    answer: "Defining multiple methods with the same name but different parameters",
    explanation: "Method overloading allows methods with the same name but different parameter lists."
  },
  {
    id: 14,
    question: "Which keyword refers to the current object in many OOP languages?",
    options: [
      "super",
      "self",
      "this",
      "current"
    ],
    answer: "this",
    explanation: "The 'this' keyword refers to the current object instance."
  },
  {
    id: 15,
    question: "Which type of inheritance is NOT supported directly in Java using classes?",
    options: [
      "Single Inheritance",
      "Multilevel Inheritance",
      "Hierarchical Inheritance",
      "Multiple Inheritance"
    ],
    answer: "Multiple Inheritance",
    explanation: "Java does not support multiple inheritance with classes to avoid ambiguity, though it supports it through interfaces."
  },
    {
    id: 16,
    question: "Which keyword is used to call the constructor of the parent class in Java?",
    options: [
      "parent",
      "base",
      "super",
      "this"
    ],
    answer: "super",
    explanation: "The 'super' keyword is used to access the parent class constructor and members."
  },
  {
    id: 17,
    question: "What is an interface in Object-Oriented Programming?",
    options: [
      "A special type of variable",
      "A collection of method declarations without implementation",
      "A database table",
      "A loop structure"
    ],
    answer: "A collection of method declarations without implementation",
    explanation: "An interface defines a contract that implementing classes must follow."
  },
  {
    id: 18,
    question: "Which feature of OOP improves code reusability the most?",
    options: [
      "Inheritance",
      "Compilation",
      "Recursion",
      "Iteration"
    ],
    answer: "Inheritance",
    explanation: "Inheritance allows new classes to reuse the properties and methods of existing classes."
  },
  {
    id: 19,
    question: "Which of the following best describes polymorphism?",
    options: [
      "One class having many constructors",
      "One interface, many implementations",
      "One object having many variables",
      "One function calling itself"
    ],
    answer: "One interface, many implementations",
    explanation: "Polymorphism allows the same interface or method to perform different actions depending on the object."
  },
  {
    id: 20,
    question: "Which OOP principle combines data and methods into a single unit?",
    options: [
      "Abstraction",
      "Inheritance",
      "Encapsulation",
      "Polymorphism"
    ],
    answer: "Encapsulation",
    explanation: "Encapsulation binds data and the methods that operate on it into a single unit (class) while protecting the data."
  }
];

export default objectOrientedProgramming;