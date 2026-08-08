const htmlBasics = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Markup Language"
    ],
    answer: "Hyper Text Markup Language",
    explanation:
      "HTML stands for Hyper Text Markup Language. It is the standard markup language used to create web pages."
  },
  {
    id: 2,
    question: "Who is known as the inventor of HTML?",
    options: [
      "Brendan Eich",
      "Tim Berners-Lee",
      "James Gosling",
      "Dennis Ritchie"
    ],
    answer: "Tim Berners-Lee",
    explanation:
      "Tim Berners-Lee invented HTML while creating the World Wide Web in 1991."
  },
  {
    id: 3,
    question: "Which HTML tag defines the largest heading?",
    options: [
      "<h6>",
      "<heading>",
      "<head>",
      "<h1>"
    ],
    answer: "<h1>",
    explanation:
      "The <h1> tag represents the most important and largest heading."
  },
  {
    id: 4,
    question: "Which HTML element is used to create a paragraph?",
    options: [
      "<paragraph>",
      "<text>",
      "<p>",
      "<para>"
    ],
    answer: "<p>",
    explanation:
      "The <p> element defines a paragraph in HTML."
  },
  {
    id: 5,
    question: "What is the correct HTML5 DOCTYPE declaration?",
    options: [
      "<!DOCTYPE html>",
      "<DOCTYPE html>",
      "<!DOCTYPE HTML5>",
      "<html>"
    ],
    answer: "<!DOCTYPE html>",
    explanation:
      "Every HTML5 document should begin with <!DOCTYPE html>."
  },
  
  {
    id: 6,
    question: "Which HTML element contains metadata about the document?",
    options: [
      "<body>",
      "<head>",
      "<meta>",
      "<title>"
    ],
    answer: "<head>",
    explanation: "The <head> element contains metadata such as title, styles, scripts, and meta tags."
  },
  {
    id: 7,
    question: "Which HTML element contains the visible content of a webpage?",
    options: [
      "<head>",
      "<meta>",
      "<body>",
      "<footer>"
    ],
    answer: "<body>",
    explanation: "Everything displayed in the browser is placed inside the <body> element."
  },
  {
    id: 8,
    question: "Which HTML tag is used to insert a line break?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<hr>"
    ],
    answer: "<br>",
    explanation: "The <br> element inserts a single line break."
  },
  {
    id: 9,
    question: "Which HTML tag is used to display an image?",
    options: [
      "<picture>",
      "<img>",
      "<image>",
      "<src>"
    ],
    answer: "<img>",
    explanation: "The <img> element is used to embed images in HTML."
  },
  {
    id: 10,
    question: "Which attribute specifies the image path in the <img> tag?",
    options: [
      "href",
      "link",
      "src",
      "path"
    ],
    answer: "src",
    explanation: "The src attribute specifies the location of the image."
  },
  {
    id: 11,
    question: "Which attribute provides alternative text for an image?",
    options: [
      "title",
      "alt",
      "name",
      "description"
    ],
    answer: "alt",
    explanation: "The alt attribute provides alternative text if an image cannot be displayed."
  },
  {
    id: 12,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    answer: "<a>",
    explanation: "The <a> (anchor) tag creates hyperlinks."
  },
  {
    id: 13,
    question: "Which attribute of the <a> tag specifies the destination URL?",
    options: [
      "src",
      "href",
      "link",
      "url"
    ],
    answer: "href",
    explanation: "The href attribute specifies the destination address of a hyperlink."
  },
  {
    id: 14,
    question: "Which HTML element is used to create a horizontal line?",
    options: [
      "<line>",
      "<hr>",
      "<br>",
      "<border>"
    ],
    answer: "<hr>",
    explanation: "The <hr> element creates a thematic horizontal rule."
  },
  {
    id: 15,
    question: "Which HTML element is used to highlight text?",
    options: [
      "<highlight>",
      "<strong>",
      "<mark>",
      "<b>"
    ],
    answer: "<mark>",
    explanation: "The <mark> element highlights text with a background color."
  },
  
  {
    id: 16,
    question: "Which HTML element is used to display preformatted text?",
    options: [
      "<code>",
      "<pre>",
      "<format>",
      "<text>"
    ],
    answer: "<pre>",
    explanation: "The <pre> element displays text exactly as written, preserving spaces and line breaks."
  },
  {
    id: 17,
    question: "Which HTML tag is used to make text bold with semantic importance?",
    options: [
      "<b>",
      "<strong>",
      "<bold>",
      "<em>"
    ],
    answer: "<strong>",
    explanation: "The <strong> element indicates important text and is usually displayed in bold."
  },
  {
    id: 18,
    question: "Which HTML tag is used to emphasize text?",
    options: [
      "<italic>",
      "<i>",
      "<em>",
      "<mark>"
    ],
    answer: "<em>",
    explanation: "The <em> element represents emphasized text and is typically displayed in italics."
  },
  {
    id: 19,
    question: "Which of the following is a valid HTML file extension?",
    options: [
      ".htm",
      ".html",
      "Both .htm and .html",
      ".web"
    ],
    answer: "Both .htm and .html",
    explanation: "Both .htm and .html are valid extensions for HTML files."
  },
  {
    id: 20,
    question: "Which HTML element is used to specify the title of a webpage shown in the browser tab?",
    options: [
      "<meta>",
      "<head>",
      "<title>",
      "<caption>"
    ],
    answer: "<title>",
    explanation: "The <title> element defines the page title displayed in the browser tab and search engine results."
  }
];

export default htmlBasics;
