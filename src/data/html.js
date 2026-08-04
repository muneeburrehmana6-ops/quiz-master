const htmlQuestions = [
  {
    id: 1,
    question: "What is HTML?",
    options: [
      "HTML describes the structure of a webpage",
      "HTML is the standard markup language mainly used to create web pages",
      "HTML consists of a set of elements that helps the browser how to view the content",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
    explanation: "HTML defines the structure of web pages using markup elements."
  },
  {
    id: 2,
    question: "Who is the father of HTML?",
    options: [
      "Rasmus Lerdorf",
      "Tim Berners-Lee",
      "Brendan Eich",
      "Sergey Brin"
    ],
    answer: "Tim Berners-Lee",
    explanation: "Tim Berners-Lee invented the World Wide Web and created HTML."
  },
  {
    id: 3,
    question: "HTML stands for ________.",
    options: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperText Marking Language",
      "HighText Marking Language"
    ],
    answer: "HyperText Markup Language",
    explanation: "HTML stands for HyperText Markup Language."
  },
  {
    id: 4,
    question: "What is the correct syntax of doctype in HTML5?",
    options: [
      "</doctype html>",
      "<doctype html>",
      "<doctype html!>",
      "<!doctype html>"
    ],
    answer: "<!doctype html>",
    explanation: "HTML5 starts with <!doctype html>."
  },
  {
    id: 5,
    question: "Which of the following is used to read an HTML page and render it?",
    options: [
      "Web server",
      "Web network",
      "Web browser",
      "Web matrix"
    ],
    answer: "Web browser",
    explanation: "Browsers like Chrome and Firefox render HTML pages."
  },
  {
    id: 6,
    question: "Which of the following is NOT a difference between HTML and XHTML?",
    options: [
      "Charset in both HTML and XHTML is text/html",
      "Tags and attributes are case-insensitive in HTML but not in XHTML",
      "Special characters must be escaped in XHTML",
      "HTML uses text/html while XHTML uses application/xhtml+xml"
    ],
    answer: "Charset in both HTML and XHTML is text/html",
    explanation: "The other options describe actual differences."
  },
  {
    id: 7,
    question: "Which tag is used for the largest heading?",
    options: [
      "<head>",
      "<h1>",
      "<h6>",
      "<heading>"
    ],
    answer: "<h1>",
    explanation: "<h1> is the largest heading tag."
  },
  {
    id: 8,
    question: "What is DOM in HTML?",
    options: [
      "Language dependent application programming",
      "Hierarchy of objects in ASP.NET",
      "Application programming interface",
      "Convention for representing and interacting with objects in HTML documents"
    ],
    answer: "Convention for representing and interacting with objects in HTML documents",
    explanation: "DOM stands for Document Object Model."
  },
  {
    id: 9,
    question: "In which part of the HTML document is metadata contained?",
    options: [
      "<head>",
      "<title>",
      "<html>",
      "<body>"
    ],
    answer: "<head>",
    explanation: "Metadata is placed inside the <head> element."
  },
  
      {
    id: 10,
    question: "Which element is used to highlight text in HTML5?",
    options: [
      "<u>",
      "<mark>",
      "<highlight>",
      "<b>"
    ],
    answer: "<mark>",
    explanation: "The <mark> element highlights text."
  },
  {
    id: 11,
    question: "Which of the following is NOT an HTML5 tag?",
    options: [
      "<track>",
      "<video>",
      "<slider>",
      "<source>"
    ],
    answer: "<slider>",
    explanation: "<slider> is not an HTML5 tag."
  },
  {
    id: 12,
    question: "How do we write comments in HTML?",
    options: [
      "<!-- Comment -->",
      "</ Comment >",
      "<! Comment !>",
      "<comment>"
    ],
    answer: "<!-- Comment -->",
    explanation: "HTML comments are written using <!-- Comment -->."
  },
  {
    id: 13,
    question: "Which HTML element is used to display video content?",
    options: [
      "<video>",
      "<movie>",
      "<media>",
      "<audio>"
    ],
    answer: "<video>",
    explanation: "The <video> element is used to embed videos."
  },
  {
    id: 14,
    question: "Which of the following is associated with HTML tables?",
    options: [
      "Alignment",
      "Color",
      "Spanning",
      "Database"
    ],
    answer: "Spanning",
    explanation: "Rowspan and colspan are used to span table rows and columns."
  },
  {
    id: 15,
    question: "Which language is used for styling HTML pages?",
    options: [
      "CSS",
      "JavaScript",
      "PHP",
      "Python"
    ],
    answer: "CSS",
    explanation: "CSS is used to style HTML pages."
  },
  {
    id: 16,
    question: "Which HTML tag makes text bold?",
    options: [
      "<i>",
      "<u>",
      "<b>",
      "<stronger>"
    ],
    answer: "<b>",
    explanation: "The <b> tag displays bold text."
  },
  {
    id: 17,
    question: "Which attribute is used to display an image in HTML?",
    options: [
      "src",
      "href",
      "link",
      "alt"
    ],
    answer: "src",
    explanation: "The src attribute specifies the image path."
  },
  {
    id: 18,
    question: "HTML is a subset of which language?",
    options: [
      "SGML",
      "XML",
      "CSS",
      "Java"
    ],
    answer: "SGML",
    explanation: "HTML was originally based on SGML."
  },
  {
    id: 19,
    question: "Which character is used to close an HTML tag?",
    options: [
      "#",
      "/",
      "\\",
      "!"
    ],
    answer: "/",
    explanation: "Closing tags use the forward slash (/)."
  },
  {
    id: 20,
    question: "How can you make an image clickable in HTML?",
    options: [
      '<img src="logo.png">',
      '<a href="#"><img src="logo.png" /></a>',
      '<image href="logo.png">',
      '<img link="logo.png">'
    ],
    answer: '<a href="#"><img src="logo.png" /></a>',
    explanation: "Wrap the image inside an anchor (<a>) tag to make it clickable."
  }
];

export default htmlQuestions;
  