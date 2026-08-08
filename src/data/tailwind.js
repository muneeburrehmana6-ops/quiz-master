const tailwindQuestions = [
{
id: 1,
question: "What is Tailwind CSS?",
options: [
"A JavaScript Framework",
"A Utility-First CSS Framework",
"A Database",
"A Programming Language"
],
answer: "A Utility-First CSS Framework",
explanation: "Tailwind CSS is a utility-first CSS framework used to rapidly build custom user interfaces."
},
{
id: 2,
question: "Who developed Tailwind CSS?",
options: [
"Evan You",
"Adam Wathan",
"Brendan Eich",
"Mark Otto"
],
answer: "Adam Wathan",
explanation: "Tailwind CSS was created by Adam Wathan."
},
{
id: 3,
question: "Which command installs Tailwind CSS using npm?",
options: [
"npm install bootstrap",
"npm install tailwindcss",
"npm install css",
"npm install react"
],
answer: "npm install tailwindcss",
explanation: "Tailwind CSS is installed using npm install tailwindcss."
},
{
id: 4,
question: "Which class sets the background color to blue?",
options: [
"bg-blue-500",
"text-blue-500",
"border-blue-500",
"blue-bg"
],
answer: "bg-blue-500",
explanation: "The bg-blue-500 utility applies a blue background."
},
{
id: 5,
question: "Which class changes text color to red?",
options: [
"text-red-500",
"bg-red-500",
"font-red",
"red-text"
],
answer: "text-red-500",
explanation: "The text-red-500 utility changes text color to red."
},
{
id: 6,
question: "Which class makes text bold?",
options: [
"font-bold",
"text-bold",
"bold",
"fw-bold"
],
answer: "font-bold",
explanation: "The font-bold utility applies bold font weight."
},
{
id: 7,
question: "Which class centers text?",
options: [
"text-center",
"center",
"align-center",
"text-middle"
],
answer: "text-center",
explanation: "The text-center utility aligns text to the center."
},
{
id: 8,
question: "Which class adds padding on all sides?",
options: [
"p-4",
"m-4",
"padding-4",
"space-4"
],
answer: "p-4",
explanation: "The p-* utilities add padding."
},
{
id: 9,
question: "Which class adds margin on all sides?",
options: [
"m-4",
"p-4",
"margin-4",
"space-4"
],
answer: "m-4",
explanation: "The m-* utilities add margin."
},
{
id: 10,
question: "Which class creates rounded corners?",
options: [
"rounded",
"radius",
"border-round",
"curve"
],
answer: "rounded",
explanation: "The rounded utility applies rounded corners."
},

{
id: 11,
question: "Which Tailwind CSS class sets display to flex?",
options: [
"flex",
"display-flex",
"d-flex",
"flexbox"
],
answer: "flex",
explanation: "The flex utility applies display: flex."
},
{
id: 12,
question: "Which class aligns items vertically in the center?",
options: [
"items-center",
"align-center",
"justify-center",
"center-items"
],
answer: "items-center",
explanation: "The items-center utility aligns flex items along the cross axis."
},
{
id: 13,
question: "Which class horizontally centers flex items?",
options: [
"justify-center",
"items-center",
"align-center",
"content-center"
],
answer: "justify-center",
explanation: "The justify-center utility centers items along the main axis."
},
{
id: 14,
question: "Which class makes an element take the full screen height?",
options: [
"h-screen",
"h-full",
"screen-height",
"full-height"
],
answer: "h-screen",
explanation: "The h-screen utility sets height to 100vh."
},
{
id: 15,
question: "Which class sets the width to 100%?",
options: [
"w-full",
"full-width",
"width-full",
"w-screen"
],
answer: "w-full",
explanation: "The w-full utility sets width to 100%."
},
{
id: 16,
question: "Which class applies a shadow to an element?",
options: [
"shadow",
"box-shadow",
"shadow-md",
"Both shadow and shadow-md"
],
answer: "Both shadow and shadow-md",
explanation: "Tailwind provides multiple shadow utilities like shadow, shadow-md, shadow-lg, etc."
},
{
id: 17,
question: "Which class changes the font size to extra large?",
options: [
"text-xl",
"font-xl",
"xl-text",
"text-large"
],
answer: "text-xl",
explanation: "The text-xl utility sets the font size to extra large."
},
{
id: 18,
question: "Which class rounds an element into a full circle?",
options: [
"rounded-full",
"rounded-circle",
"circle",
"full-rounded"
],
answer: "rounded-full",
explanation: "The rounded-full utility creates fully rounded elements."
},
{
id: 19,
question: "Which class adds a hover background color?",
options: [
"hover:bg-blue-500",
"bg-hover-blue",
"hover-blue",
"bg-blue-hover"
],
answer: "hover:bg-blue-500",
explanation: "The hover: variant applies styles when the user hovers over the element."
},
{
id: 20,
question: "Which Tailwind CSS feature removes unused CSS in production builds?",
options: [
"Purge",
"Minify",
"Optimize",
"Bundle"
],
answer: "Purge",
explanation: "Tailwind removes unused CSS during production using its content scanning (formerly called PurgeCSS)."
}
];

export default tailwindQuestions;
