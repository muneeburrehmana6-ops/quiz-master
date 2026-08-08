const jqueryQuestions = [
{
id: 1,
question: "What is jQuery?",
options: [
"A JavaScript library",
"A CSS framework",
"A programming language",
"A database"
],
answer: "A JavaScript library",
explanation: "jQuery is a fast, lightweight JavaScript library that simplifies HTML DOM manipulation, event handling, animations, and AJAX."
},
{
id: 2,
question: "Who developed jQuery?",
options: [
"Brendan Eich",
"John Resig",
"Evan You",
"Mark Otto"
],
answer: "John Resig",
explanation: "jQuery was created by John Resig in 2006."
},
{
id: 3,
question: "Which symbol is used as a shortcut for jQuery?",
options: [
"#",
"$",
"@",
"&"
],
answer: "$",
explanation: "The dollar sign ($) is the shortcut symbol used to access jQuery."
},
{
id: 4,
question: "Which method is used to execute code after the document is fully loaded?",
options: [
"$(document).ready()",
"window.load()",
"document.start()",
"ready()"
],
answer: "$(document).ready()",
explanation: "The ready() method ensures the DOM is fully loaded before running JavaScript."
},
{
id: 5,
question: "Which method is used to hide an HTML element?",
options: [
"hide()",
"remove()",
"display()",
"invisible()"
],
answer: "hide()",
explanation: "The hide() method hides selected HTML elements."
},
{
id: 6,
question: "Which method is used to show hidden elements?",
options: [
"show()",
"display()",
"visible()",
"open()"
],
answer: "show()",
explanation: "The show() method displays hidden HTML elements."
},
{
id: 7,
question: "Which jQuery method is used to hide or show elements automatically?",
options: [
"toggle()",
"switch()",
"flip()",
"change()"
],
answer: "toggle()",
explanation: "The toggle() method alternates between hiding and showing elements."
},
{
id: 8,
question: "Which method changes the text content of an element?",
options: [
"text()",
"html()",
"value()",
"content()"
],
answer: "text()",
explanation: "The text() method gets or sets the text of selected elements."
},
{
id: 9,
question: "Which method changes the HTML content of an element?",
options: [
"html()",
"text()",
"innerHTML()",
"content()"
],
answer: "html()",
explanation: "The html() method gets or sets the HTML content."
},
{
id: 10,
question: "Which method gets or sets the value of form elements?",
options: [
"val()",
"text()",
"value()",
"input()"
],
answer: "val()",
explanation: "The val() method gets or sets the value of form elements."
},

{
id: 11,
question: "Which jQuery method adds a CSS class to an element?",
options: [
"addClass()",
"appendClass()",
"setClass()",
"classAdd()"
],
answer: "addClass()",
explanation: "The addClass() method adds one or more CSS classes to selected elements."
},
{
id: 12,
question: "Which method removes a CSS class from an element?",
options: [
"removeClass()",
"deleteClass()",
"removeCSS()",
"classRemove()"
],
answer: "removeClass()",
explanation: "The removeClass() method removes one or more classes from selected elements."
},
{
id: 13,
question: "Which method toggles a CSS class?",
options: [
"toggleClass()",
"switchClass()",
"changeClass()",
"flipClass()"
],
answer: "toggleClass()",
explanation: "The toggleClass() method adds or removes a class depending on its current state."
},
{
id: 14,
question: "Which jQuery method is used to attach a click event?",
options: [
"click()",
"onclick()",
"mouseClick()",
"eventClick()"
],
answer: "click()",
explanation: "The click() method attaches or triggers a click event."
},
{
id: 15,
question: "Which method appends content to the end of selected elements?",
options: [
"append()",
"prepend()",
"after()",
"insert()"
],
answer: "append()",
explanation: "The append() method inserts content at the end of selected elements."
},
{
id: 16,
question: "Which method inserts content at the beginning of selected elements?",
options: [
"prepend()",
"append()",
"before()",
"insertFirst()"
],
answer: "prepend()",
explanation: "The prepend() method inserts content at the beginning of selected elements."
},
{
id: 17,
question: "Which jQuery method removes selected elements from the DOM?",
options: [
"remove()",
"delete()",
"erase()",
"destroy()"
],
answer: "remove()",
explanation: "The remove() method completely removes selected elements from the DOM."
},
{
id: 18,
question: "Which method hides an element with a sliding animation?",
options: [
"slideUp()",
"fadeOut()",
"hide()",
"slideHide()"
],
answer: "slideUp()",
explanation: "The slideUp() method hides elements using a sliding animation."
},
{
id: 19,
question: "Which method displays an element with a sliding animation?",
options: [
"slideDown()",
"show()",
"fadeIn()",
"slideShow()"
],
answer: "slideDown()",
explanation: "The slideDown() method displays hidden elements with a sliding effect."
},
{
id: 20,
question: "Which jQuery feature allows data to be loaded from a server without refreshing the page?",
options: [
"AJAX",
"JSON",
"XML",
"DOM"
],
answer: "AJAX",
explanation: "AJAX enables asynchronous communication with the server without reloading the webpage."
}
];

export default jqueryQuestions;
