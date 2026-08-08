const cppQuestions = [
{
id: 1,
question: "Who developed C++?",
options: [
"Dennis Ritchie",
"Bjarne Stroustrup",
"James Gosling",
"Guido van Rossum"
],
answer: "Bjarne Stroustrup",
explanation: "C++ was developed by Bjarne Stroustrup in 1979."
},
{
id: 2,
question: "C++ is an extension of which programming language?",
options: [
"C",
"Java",
"Python",
"Pascal"
],
answer: "C",
explanation: "C++ was developed as an extension of the C programming language."
},
{
id: 3,
question: "Which file extension is commonly used for C++ source files?",
options: [
".cpp",
".java",
".py",
".js"
],
answer: ".cpp",
explanation: "The .cpp extension is commonly used for C++ source files."
},
{
id: 4,
question: "Which function is the entry point of every C++ program?",
options: [
"main()",
"start()",
"run()",
"begin()"
],
answer: "main()",
explanation: "Every C++ program begins execution from the main() function."
},
{
id: 5,
question: "Which symbol is used to end a statement in C++?",
options: [
".",
":",
";",
","
],
answer: ";",
explanation: "Every C++ statement ends with a semicolon."
},
{
id: 6,
question: "Which keyword is used to define a class in C++?",
options: [
"class",
"Class",
"struct",
"object"
],
answer: "class",
explanation: "The class keyword is used to define a class."
},
{
id: 7,
question: "Which operator is used to access members of an object?",
options: [
".",
"->",
"::",
"#"
],
answer: ".",
explanation: "The dot operator accesses members of an object."
},
{
id: 8,
question: "Which header file is required for cout and cin?",
options: [
"<iostream>",
"<stdio.h>",
"<string>",
"<math.h>"
],
answer: "<iostream>",
explanation: "The iostream header provides cin and cout."
},
{
id: 9,
question: "Which object is used to display output in C++?",
options: [
"cout",
"cin",
"print",
"echo"
],
answer: "cout",
explanation: "cout is used to display output to the console."
},
{
id: 10,
question: "Which object is used to receive input from the keyboard?",
options: [
"cin",
"cout",
"input",
"scanf"
],
answer: "cin",
explanation: "cin is used to receive input from the user."
}
,
{
id: 11,
question: "Which keyword is used for inheritance in C++?",
options: [
"extends",
"inherits",
":",
"implements"
],
answer: ":",
explanation: "Inheritance in C++ is specified using a colon (:) followed by the access specifier."
},
{
id: 12,
question: "Which access specifier allows members to be accessed from anywhere?",
options: [
"public",
"private",
"protected",
"friend"
],
answer: "public",
explanation: "Public members can be accessed from outside the class."
},
{
id: 13,
question: "Which access specifier allows access only within the class?",
options: [
"private",
"public",
"protected",
"default"
],
answer: "private",
explanation: "Private members are accessible only inside the class."
},
{
id: 14,
question: "Which keyword is used to create an object dynamically?",
options: [
"new",
"malloc",
"create",
"dynamic"
],
answer: "new",
explanation: "The new keyword allocates memory dynamically for objects."
},
{
id: 15,
question: "Which keyword releases dynamically allocated memory?",
options: [
"delete",
"free",
"remove",
"destroy"
],
answer: "delete",
explanation: "The delete keyword deallocates memory allocated with new."
},
{
id: 16,
question: "Which feature allows multiple functions with the same name but different parameters?",
options: [
"Function Overloading",
"Function Overriding",
"Inheritance",
"Encapsulation"
],
answer: "Function Overloading",
explanation: "Function overloading allows multiple functions with the same name but different parameter lists."
},
{
id: 17,
question: "Which concept allows a derived class to provide a specific implementation of a base class function?",
options: [
"Function Overriding",
"Function Overloading",
"Encapsulation",
"Abstraction"
],
answer: "Function Overriding",
explanation: "Function overriding allows a derived class to redefine a virtual function."
},
{
id: 18,
question: "Which keyword is used to define a constant value in C++?",
options: [
"const",
"constant",
"final",
"static"
],
answer: "const",
explanation: "The const keyword declares variables whose values cannot be changed."
},
{
id: 19,
question: "Which Standard Template Library (STL) container stores elements in dynamic arrays?",
options: [
"vector",
"array",
"stack",
"queue"
],
answer: "vector",
explanation: "std::vector is a dynamic array provided by the C++ STL."
},
{
id: 20,
question: "Which of the following is a major advantage of C++?",
options: [
"Object-Oriented Programming",
"High Performance",
"Memory Management",
"All of the above"
],
answer: "All of the above",
explanation: "C++ provides OOP features, high performance, and direct memory management."
}
];

export default cppQuestions;