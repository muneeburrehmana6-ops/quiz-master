const typescriptQuestions = [
{
id: 1,
question: "What is TypeScript?",
options: [
"A JavaScript library",
"A superset of JavaScript",
"A CSS framework",
"A database"
],
answer: "A superset of JavaScript",
explanation: "TypeScript is a strongly typed superset of JavaScript developed by Microsoft."
},
{
id: 2,
question: "Who developed TypeScript?",
options: [
"Google",
"Microsoft",
"Facebook",
"Oracle"
],
answer: "Microsoft",
explanation: "TypeScript was developed and is maintained by Microsoft."
},
{
id: 3,
question: "Which file extension is used for TypeScript files?",
options: [
".ts",
".js",
".tsxx",
".type"
],
answer: ".ts",
explanation: "TypeScript source files use the .ts extension."
},
{
id: 4,
question: "Which command compiles a TypeScript file?",
options: [
"tsc",
"ts",
"compile",
"npm compile"
],
answer: "tsc",
explanation: "The TypeScript compiler is called using the 'tsc' command."
},
{
id: 5,
question: "Which keyword is used to declare a variable in TypeScript?",
options: [
"let",
"var",
"const",
"All of the above"
],
answer: "All of the above",
explanation: "TypeScript supports var, let, and const just like JavaScript."
},
{
id: 6,
question: "Which symbol is used to specify a variable's type?",
options: [
":",
";",
"=",
"#"
],
answer: ":",
explanation: "A colon (:) is used to declare the data type of a variable."
},
{
id: 7,
question: "Which of the following is a valid TypeScript type?",
options: [
"number",
"string",
"boolean",
"All of the above"
],
answer: "All of the above",
explanation: "TypeScript includes built-in types such as number, string, and boolean."
},
{
id: 8,
question: "Which keyword defines an interface in TypeScript?",
options: [
"interface",
"class",
"type",
"struct"
],
answer: "interface",
explanation: "The interface keyword defines the structure of an object."
},
{
id: 9,
question: "Which keyword is used to create a class in TypeScript?",
options: [
"class",
"object",
"struct",
"define"
],
answer: "class",
explanation: "The class keyword creates a class in TypeScript."
},
{
id: 10,
question: "Which TypeScript feature helps detect errors during development?",
options: [
"Static Type Checking",
"DOM",
"Bootstrap",
"CSS Modules"
],
answer: "Static Type Checking",
explanation: "Static typing helps catch errors before the code runs."
},

{
id: 11,
question: "Which keyword is used to create a custom type in TypeScript?",
options: [
"type",
"interface",
"class",
"define"
],
answer: "type",
explanation: "The 'type' keyword creates type aliases in TypeScript."
},
{
id: 12,
question: "Which TypeScript type can hold any kind of value?",
options: [
"any",
"mixed",
"unknown",
"object"
],
answer: "any",
explanation: "The 'any' type disables type checking for a variable."
},
{
id: 13,
question: "Which type is safer than 'any' because it requires type checking before use?",
options: [
"unknown",
"object",
"dynamic",
"void"
],
answer: "unknown",
explanation: "The 'unknown' type requires type narrowing before operations."
},
{
id: 14,
question: "Which keyword is used to inherit a class in TypeScript?",
options: [
"extends",
"inherits",
"implements",
"super"
],
answer: "extends",
explanation: "The 'extends' keyword is used for class inheritance."
},
{
id: 15,
question: "Which keyword is used to implement an interface?",
options: [
"implements",
"extends",
"interface",
"inherit"
],
answer: "implements",
explanation: "Classes use the 'implements' keyword to implement interfaces."
},
{
id: 16,
question: "Which type represents a function that returns no value?",
options: [
"void",
"null",
"undefined",
"never"
],
answer: "void",
explanation: "The 'void' type indicates that a function does not return a value."
},
{
id: 17,
question: "Which symbol is used for optional properties in TypeScript?",
options: [
"?",
"!",
"*",
"&"
],
answer: "?",
explanation: "A question mark (?) marks a property as optional."
},
{
id: 18,
question: "Which TypeScript feature allows one class to reuse another class's properties and methods?",
options: [
"Inheritance",
"Encapsulation",
"Abstraction",
"Polymorphism"
],
answer: "Inheritance",
explanation: "Inheritance enables one class to reuse another class's functionality."
},
{
id: 19,
question: "Which file is commonly used to configure TypeScript projects?",
options: [
"tsconfig.json",
"package.json",
"config.ts",
"typescript.json"
],
answer: "tsconfig.json",
explanation: "The tsconfig.json file contains TypeScript compiler options."
},
{
id: 20,
question: "What is the main advantage of using TypeScript?",
options: [
"Static type checking",
"Faster internet connection",
"Smaller HTML files",
"Automatic CSS generation"
],
answer: "Static type checking",
explanation: "TypeScript catches many errors during development through static type checking."
}
];

export default typescriptQuestions;