const cProgramming = [
  {
    id: 1,
    question: "Who is the father of C language?",
    options: [
      "Steve Jobs",
      "James Gosling",
      "Dennis Ritchie",
      "Rasmus Lerdorf"
    ],
    answer: "Dennis Ritchie",
    explanation: "Dennis Ritchie developed the C programming language at Bell Labs."
  },
  {
    id: 2,
    question: "Which of the following is not a valid C variable name?",
    options: [
      "int number;",
      "float rate;",
      "int variable_count;",
      "int $main;"
    ],
    answer: "int $main;",
    explanation: "The '$' symbol is not allowed in standard C variable names."
  },
  {
    id: 3,
    question: "All keywords in C are in ____________.",
    options: [
      "LowerCase letters",
      "UpperCase letters",
      "CamelCase letters",
      "None of the mentioned"
    ],
    answer: "LowerCase letters",
    explanation: "All C language keywords are written in lowercase."
  },
  {
    id: 4,
    question: "Which of the following is true for variable names in C?",
    options: [
      "They can contain alphanumeric characters as well as special characters",
      "It is not an error to declare a variable to be one of the keywords",
      "Variable names cannot start with a digit",
      "Variable can be of any length"
    ],
    answer: "Variable names cannot start with a digit",
    explanation: "A C variable name must begin with a letter or underscore."
  },
  {
    id: 5,
    question: "Which is a valid C expression?",
    options: [
      "int my_num = 100,000;",
      "int my_num = 100000;",
      "int my num = 1000;",
      "int $my_num = 10000;"
    ],
    answer: "int my_num = 100000;",
    explanation: "Variable names cannot contain spaces or '$', and commas are not allowed in numbers."
  },
  {
    id: 6,
    question: "Which of the following cannot be a variable name in C?",
    options: [
      "volatile",
      "true",
      "friend",
      "export"
    ],
    answer: "volatile",
    explanation: "'volatile' is a reserved keyword in C."
  },
  {
    id: 7,
    question: "What is short int in C programming?",
    options: [
      "The basic data type of C",
      "Qualifier",
      "Short is the qualifier and int is the basic data type",
      "All of the mentioned"
    ],
    answer: "Short is the qualifier and int is the basic data type",
    explanation: "'short' modifies the size of the int data type."
  },
  {
    id: 8,
    question: "Which declaration is not supported by C language?",
    options: [
      "String str;",
      "char *str;",
      "float str = 3e2;",
      "Both String str; and float str = 3e2;"
    ],
    answer: "String str;",
    explanation: "C has no built-in String data type."
  },
  {
    id: 9,
    question: "Which keyword prevents changes to a variable in C?",
    options: [
      "immutable",
      "mutable",
      "const",
      "volatile"
    ],
    answer: "const",
    explanation: "The const keyword makes a variable read-only."
  },
  {
    id: 10,
    question: "What is the result of a logical or relational expression in C?",
    options: [
      "True or False",
      "0 or 1",
      "0 if false and any positive number if true",
      "None of the mentioned"
    ],
    answer: "0 or 1",
    explanation: "Relational and logical expressions return either 0 (false) or 1 (true)."
  },
  {
    id: 11,
    question: "Which typecasting is accepted in C?",
    options: [
      "Widening conversions",
      "Narrowing conversions",
      "Widening & Narrowing conversions",
      "None of the mentioned"
    ],
    answer: "Widening & Narrowing conversions",
    explanation: "C supports both widening and narrowing type conversions."
  },
  {
    id: 12,
    question: "Where in C does operator precedence not exist?",
    options: [
      "Within conditional statements",
      "Within while and do-while",
      "Within a macro definition",
      "None of the mentioned"
    ],
    answer: "Within a macro definition",
    explanation: "Macros are expanded by the preprocessor before compilation."
  },
  {
    id: 13,
    question: "Which of the following is NOT possible with any two operators in C?",
    options: [
      "Different precedence, same associativity",
      "Different precedence, different associativity",
      "Same precedence, different associativity",
      "All of the mentioned"
    ],
    answer: "Same precedence, different associativity",
    explanation: "Operators with the same precedence always share the same associativity."
  },
  {
    id: 14,
    question: "What is an example of iteration in C?",
    options: [
      "for",
      "while",
      "do-while",
      "all of the mentioned"
    ],
    answer: "all of the mentioned",
    explanation: "All three are looping (iteration) statements."
  },
  {
    id: 15,
    question: "Functions can return enumeration constants in C?",
    options: [
      "true",
      "false",
      "depends on the compiler",
      "depends on the standard"
    ],
    answer: "true",
    explanation: "Functions can return values of enum types."
  },
  {
    id: 16,
    question: "Functions in C language are always _________.",
    options: [
      "Internal",
      "External",
      "Both Internal and External",
      "External and Internal are not valid terms for functions"
    ],
    answer: "External",
    explanation: "Functions in C have external linkage by default."
  },
  {
    id: 17,
    question: "Which of the following is not accepted in C?",
    options: [
      "static a = 10;",
      "static int func(int);",
      "static static int a;",
      "all of the mentioned"
    ],
    answer: "static static int a;",
    explanation: "The 'static' keyword cannot be repeated."
  },
  {
    id: 18,
    question: "The property that allows different executables for different platforms is called?",
    options: [
      "File inclusion",
      "Selective inclusion",
      "Conditional compilation",
      "Recursive macros"
    ],
    answer: "Conditional compilation",
    explanation: "Conditional compilation allows platform-specific code."
  },
  {
    id: 19,
    question: "What is #include <stdio.h>?",
    options: [
      "Preprocessor directive",
      "Inclusion directive",
      "File inclusion directive",
      "None of the mentioned"
    ],
    answer: "Preprocessor directive",
    explanation: "#include is handled by the C preprocessor before compilation."
  },
  {
    id: 20,
    question: "C preprocessors can have compiler-specific features.",
    options: [
      "True",
      "False",
      "Depends on the standard",
      "Depends on the platform"
    ],
    answer: "True",
    explanation: "Many C compilers provide their own preprocessor extensions."
  }
];

export default cProgramming;