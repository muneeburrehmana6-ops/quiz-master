const cssQuestions = [
  {
    id: 1,
    question: "What is CSS?",
    options: [
      "CSS is a style sheet language",
      "CSS separates presentation from content",
      "CSS is used to style HTML documents",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
    explanation: "CSS is a stylesheet language used to style and layout HTML pages."
  },
  {
    id: 2,
    question: "Which HTML tag is used to embed CSS in an HTML page?",
    options: [
      "<css>",
      "<!DOCTYPE html>",
      "<script>",
      "<style>"
    ],
    answer: "<style>",
    explanation: "The <style> tag is used for internal CSS."
  },
  {
    id: 3,
    question: "Which CSS selector is used to specify a group of elements?",
    options: [
      "tag",
      "id",
      "class",
      "both class and tag"
    ],
    answer: "class",
    explanation: "The class selector can be applied to multiple elements."
  },
  {
    id: 4,
    question: "Which technology introduced text, list, box, margin, border, color, and background properties?",
    options: [
      "HTML",
      "PHP",
      "CSS",
      "Ajax"
    ],
    answer: "CSS",
    explanation: "CSS provides styling properties such as margin, border, color, and background."
  },
  {
    id: 5,
    question: "Which CSS framework is commonly used to create responsive websites?",
    options: [
      "Django",
      "Rails",
      "Laravel",
      "Bootstrap"
    ],
    answer: "Bootstrap",
    explanation: "Bootstrap is a popular CSS framework for responsive web design."
  },
  {
    id: 6,
    question: "Which CSS selector is used to target a unique element?",
    options: [
      "tag",
      "id",
      "class",
      "both class and tag"
    ],
    answer: "id",
    explanation: "The id selector should uniquely identify a single element."
  },
  {
    id: 7,
    question: "Which HTML tag defines an internal style sheet?",
    options: [
      "<script>",
      "<link>",
      "<class>",
      "<style>"
    ],
    answer: "<style>",
    explanation: "The <style> element contains internal CSS rules."
  },
  {
    id: 8,
    question: "Which CSS property makes text bold?",
    options: [
      "text-decoration: bold",
      "font-weight: bold",
      "font-style: bold",
      "text-align: bold"
    ],
    answer: "font-weight: bold",
    explanation: "Use font-weight: bold to make text bold."
  },
  {
    id: 9,
    question: "What happens with the CSS code h1 { color: \"green\"; }?",
    options: [
      "Nothing happens",
      "An error occurs",
      "Heading becomes dark green",
      "Heading becomes green"
    ],
    answer: "Nothing happens",
    explanation: "The color value should not be enclosed in quotes."
  },
  {
    id: 10,
    question: "Which CSS property is used to make text italic?",
    options: [
      "style",
      "font",
      "font-style",
      "@font-face"
    ],
    answer: "font-style",
    explanation: "font-style: italic makes text italic."
  },
  {
    id: 11,
    question: "What happens if a semicolon is missing between CSS properties?",
    options: [
      "Color and underline work",
      "Only italic works",
      "All properties work",
      "Underline and italic work"
    ],
    answer: "Only italic works",
    explanation: "Missing a semicolon can prevent previous declarations from being parsed correctly."
  },
  {
    id: 12,
    question: "Which vendor prefix is used for WebKit browsers?",
    options: [
      "-chrome",
      "-web",
      "-o-",
      "-webkit-"
    ],
    answer: "-webkit-",
    explanation: "The correct vendor prefix is -webkit-."
  },
  {
    id: 13,
    question: "Which is the correct syntax to link an external CSS file?",
    options: [
      '<link rel="stylesheet" href="style.css">',
      '<link rel="stylesheet" src="style.css">',
      '<style rel="stylesheet" src="style.css">',
      '<style rel="stylesheet" link="style.css">'
    ],
    answer: '<link rel="stylesheet" href="style.css">',
    explanation: "The href attribute specifies the stylesheet location."
  },
  {
    id: 14,
    question: "Which was the first official W3C CSS Recommendation?",
    options: [
      "CSS Level 2",
      "(X)HTML CSS",
      "CSS Level 1",
      "CSS Level 2.1"
    ],
    answer: "CSS Level 1",
    explanation: "CSS Level 1 became the first official W3C recommendation."
  },
  {
    id: 15,
    question: "Which function creates a linear gradient?",
    options: [
      "gradient()",
      "linear-gradient()",
      "grayscale()",
      "image()"
    ],
    answer: "linear-gradient()",
    explanation: "linear-gradient() creates smooth color transitions."
  },
  {
    id: 16,
    question: "Which property sets an image as the border?",
    options: [
      "background-image-source",
      "background-image",
      "border-image-source",
      "border-image"
    ],
    answer: "border-image-source",
    explanation: "border-image-source specifies the image used for the border."
  },
  {
    id: 17,
    question: "Which property defines all border properties in one declaration?",
    options: [
      "border-collapse",
      "border-width",
      "padding",
      "border"
    ],
    answer: "border",
    explanation: "The border shorthand sets width, style, and color together."
  },
  {
    id: 18,
    question: "What are the valid ways to apply CSS?",
    options: [
      "External CSS file",
      "Inline CSS",
      "Internal CSS in the head",
      "All of the mentioned"
    ],
    answer: "All of the mentioned",
    explanation: "CSS can be applied externally, internally, or inline."
  },
  {
    id: 19,
    question: "Which property sets the font size?",
    options: [
      "font-size",
      "text-size",
      "text",
      "size"
    ],
    answer: "font-size",
    explanation: "font-size controls the size of text."
  },
  {
    id: 20,
    question: "Which of the following is NOT a property of the CSS box model?",
    options: [
      "margin",
      "color",
      "width",
      "height"
    ],
    answer: "color",
    explanation: "The CSS box model includes content, padding, border, and margin. Color is not part of the box model."
  }
];

export default cssQuestions;