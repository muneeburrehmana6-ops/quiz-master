const javaQuestions = [
{
id: 1,
question: "Who developed Java?",
options: [
"Dennis Ritchie",
"James Gosling",
"Guido van Rossum",
"Bjarne Stroustrup"
],
answer: "James Gosling",
explanation: "Java was developed by James Gosling at Sun Microsystems in 1995."
},
{
id: 2,
question: "Java is a ____ programming language.",
options: [
"Compiled and Interpreted",
"Machine Language",
"Assembly Language",
"Scripting Language"
],
answer: "Compiled and Interpreted",
explanation: "Java source code is compiled into bytecode and then interpreted by the JVM."
},
{
id: 3,
question: "Which company currently owns Java?",
options: [
"Microsoft",
"Google",
"Oracle",
"IBM"
],
answer: "Oracle",
explanation: "Oracle Corporation acquired Java when it purchased Sun Microsystems."
},
{
id: 4,
question: "Which keyword is used to define a class in Java?",
options: [
"class",
"Class",
"define",
"object"
],
answer: "class",
explanation: "The class keyword is used to create classes in Java."
},
{
id: 5,
question: "Which method is the entry point of every Java program?",
options: [
"start()",
"main()",
"run()",
"execute()"
],
answer: "main()",
explanation: "Execution begins from the public static void main(String[] args) method."
},
{
id: 6,
question: "Which symbol is used to end a statement in Java?",
options: [
".",
":",
";",
","
],
answer: ";",
explanation: "Every Java statement ends with a semicolon."
},
{
id: 7,
question: "Which keyword is used to create an object?",
options: [
"new",
"create",
"object",
"make"
],
answer: "new",
explanation: "The new keyword creates an object from a class."
},
{
id: 8,
question: "Which package is automatically imported in every Java program?",
options: [
"java.util",
"java.lang",
"java.io",
"java.net"
],
answer: "java.lang",
explanation: "The java.lang package is automatically imported."
},
{
id: 9,
question: "Which data type stores whole numbers?",
options: [
"int",
"float",
"double",
"boolean"
],
answer: "int",
explanation: "The int data type stores integer values."
},
{
id: 10,
question: "Which loop is best when the number of iterations is known?",
options: [
"for",
"while",
"do...while",
"foreach only"
],
answer: "for",
explanation: "The for loop is commonly used when the number of iterations is known."
}
,
{
id: 11,
question: "Which keyword is used for inheritance in Java?",
options: [
"extends",
"implements",
"inherits",
"super"
],
answer: "extends",
explanation: "The extends keyword is used to inherit a class."
},
{
id: 12,
question: "Which keyword is used to implement an interface?",
options: [
"implements",
"extends",
"interface",
"inherit"
],
answer: "implements",
explanation: "A class uses the implements keyword to implement an interface."
},
{
id: 13,
question: "Which access modifier makes a member accessible from anywhere?",
options: [
"public",
"private",
"protected",
"default"
],
answer: "public",
explanation: "Public members can be accessed from any class."
},
{
id: 14,
question: "Which keyword is used to prevent method overriding?",
options: [
"final",
"static",
"const",
"sealed"
],
answer: "final",
explanation: "A final method cannot be overridden."
},
{
id: 15,
question: "Which keyword refers to the current object?",
options: [
"this",
"self",
"current",
"super"
],
answer: "this",
explanation: "The this keyword refers to the current object."
},
{
id: 16,
question: "Which keyword refers to the parent class?",
options: [
"super",
"parent",
"base",
"this"
],
answer: "super",
explanation: "The super keyword is used to access parent class members."
},
{
id: 17,
question: "Which exception occurs when dividing by zero?",
options: [
"ArithmeticException",
"IOException",
"NullPointerException",
"RuntimeException"
],
answer: "ArithmeticException",
explanation: "Division by zero throws an ArithmeticException."
},
{
id: 18,
question: "Which collection stores unique elements only?",
options: [
"Set",
"List",
"Array",
"Vector"
],
answer: "Set",
explanation: "A Set does not allow duplicate values."
},
{
id: 19,
question: "Which package contains the ArrayList class?",
options: [
"java.util",
"java.lang",
"java.io",
"java.net"
],
answer: "java.util",
explanation: "ArrayList belongs to the java.util package."
},
{
id: 20,
question: "Which of the following is a major advantage of Java?",
options: [
"Platform Independent",
"Object-Oriented",
"Secure",
"All of the above"
],
answer: "All of the above",
explanation: "Java is platform-independent, object-oriented, secure, and robust."
}
];

export default javaQuestions;