const phpQuestions = [
{
id: 1,
question: "What does PHP stand for?",
options: [
"Personal Home Page",
"PHP: Hypertext Preprocessor",
"Private Home Page",
"Programming Home Page"
],
answer: "PHP: Hypertext Preprocessor",
explanation: "PHP officially stands for PHP: Hypertext Preprocessor."
},
{
id: 2,
question: "PHP is mainly used for?",
options: [
"Web Development",
"Game Development",
"Operating Systems",
"Machine Learning"
],
answer: "Web Development",
explanation: "PHP is a server-side scripting language used for web development."
},
{
id: 3,
question: "Which symbol is used to start a variable in PHP?",
options: [
"$",
"#",
"@",
"&"
],
answer: "$",
explanation: "Every PHP variable starts with the $ symbol."
},
{
id: 4,
question: "Which company created PHP?",
options: [
"Microsoft",
"Google",
"Rasmus Lerdorf",
"Oracle"
],
answer: "Rasmus Lerdorf",
explanation: "PHP was created by Rasmus Lerdorf in 1994."
},
{
id: 5,
question: "PHP code is executed on the?",
options: [
"Browser",
"Server",
"Client",
"Database"
],
answer: "Server",
explanation: "PHP is a server-side scripting language."
},
{
id: 6,
question: "Which tags are used to write PHP code?",
options: [
"<?php ?>",
"<php></php>",
"<script></script>",
"<? ?>"
],
answer: "<?php ?>",
explanation: "PHP code is written inside <?php ?> tags."
},
{
id: 7,
question: "Which function displays output in PHP?",
options: [
"echo",
"print",
"Both echo and print",
"display"
],
answer: "Both echo and print",
explanation: "Both echo and print can be used to display output."
},
{
id: 8,
question: "Which operator is used for string concatenation in PHP?",
options: [
".",
"+",
"&",
"*"
],
answer: ".",
explanation: "The dot (.) operator concatenates strings in PHP."
},
{
id: 9,
question: "Which superglobal stores form data sent using POST?",
options: [
"$_POST",
"$_GET",
"$_FORM",
"$_REQUEST"
],
answer: "$_POST",
explanation: "$_POST contains data sent through HTTP POST."
},
{
id: 10,
question: "Which function is used to determine the length of a string?",
options: [
"strlen()",
"count()",
"length()",
"size()"
],
answer: "strlen()",
explanation: "strlen() returns the length of a string."
}
,
{
id: 11,
question: "Which function is used to count the number of elements in an array?",
options: [
"count()",
"sizeof()",
"Both count() and sizeof()",
"length()"
],
answer: "Both count() and sizeof()",
explanation: "Both count() and sizeof() return the number of elements in an array."
},
{
id: 12,
question: "Which statement is used for decision making in PHP?",
options: [
"if",
"switch",
"Both if and switch",
"loop"
],
answer: "Both if and switch",
explanation: "PHP provides both if and switch statements for decision making."
},
{
id: 13,
question: "Which loop executes at least one time?",
options: [
"while",
"for",
"do...while",
"foreach"
],
answer: "do...while",
explanation: "The do...while loop executes its body at least once."
},
{
id: 14,
question: "Which keyword is used to define a function in PHP?",
options: [
"function",
"define",
"method",
"func"
],
answer: "function",
explanation: "Functions in PHP are declared using the function keyword."
},
{
id: 15,
question: "Which superglobal contains URL parameters?",
options: [
"$_GET",
"$_POST",
"$_SESSION",
"$_COOKIE"
],
answer: "$_GET",
explanation: "$_GET stores data sent through the URL query string."
},
{
id: 16,
question: "Which superglobal is used to store session variables?",
options: [
"$_SESSION",
"$_COOKIE",
"$_SERVER",
"$_FILES"
],
answer: "$_SESSION",
explanation: "$_SESSION stores session data across multiple pages."
},
{
id: 17,
question: "Which function is used to connect to a MySQL database using MySQLi?",
options: [
"mysqli_connect()",
"mysql_connect()",
"connect_db()",
"db_connect()"
],
answer: "mysqli_connect()",
explanation: "mysqli_connect() establishes a connection to a MySQL database."
},
{
id: 18,
question: "Which keyword is used to include another PHP file?",
options: [
"include",
"require",
"Both include and require",
"import"
],
answer: "Both include and require",
explanation: "Both include and require are used to insert one PHP file into another."
},
{
id: 19,
question: "Which function is used to terminate script execution?",
options: [
"exit()",
"die()",
"Both exit() and die()",
"stop()"
],
answer: "Both exit() and die()",
explanation: "Both exit() and die() immediately terminate PHP script execution."
},
{
id: 20,
question: "Which of the following is a major advantage of PHP?",
options: [
"Open Source",
"Cross Platform",
"Easy Database Integration",
"All of the above"
],
answer: "All of the above",
explanation: "PHP is open source, works across platforms, and integrates easily with databases like MySQL."
}
];

export default phpQuestions;