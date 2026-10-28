// Blog articles. Body blocks: a string = paragraph, {h: "..."} = heading, {ul: [...]} = bullet list.

export const articles = [
  {
    slug: "how-to-study-with-practice-quizzes",
    title: "How to Study Effectively with Practice Quizzes",
    description:
      "Learn why quizzes work better than rereading, and a simple routine to turn every practice quiz into lasting knowledge.",
    date: "2026-10-27",
    category: "Study Tips",
    body: [
      "Many students prepare for exams by rereading notes or highlighting a textbook. It feels productive, but research on learning consistently shows that trying to recall an answer from memory helps you remember it far better than reading it again. Practice quizzes use exactly this idea, which is called retrieval practice.",
      { h: "Why quizzes work" },
      "When you answer a question, your brain has to search for the information. That effort strengthens the memory. Even a wrong answer is useful, because it shows you what you do not know yet, while there is still time to fix it.",
      { h: "A simple four-step routine" },
      { ul: [
        "Take the quiz without looking anything up. Treat it like a real test, including the timer.",
        "Read every explanation, including those for questions you answered correctly. Sometimes you guessed right for the wrong reason.",
        "Write down each missed idea in one sentence in your own words.",
        "Retake the same quiz two or three days later, then again after a week. Spacing the repetitions is what makes the knowledge last.",
      ] },
      { h: "Mistakes to avoid" },
      "Do not memorise the position of the correct option. Instead, ask why each wrong option is wrong. Also avoid taking ten quizzes in a row without reviewing; one quiz followed by careful review is worth more than five rushed attempts.",
      { h: "Use quizzes to find gaps, not to collect scores" },
      "A high score is encouraging, but the real value of a quiz is the list of topics it exposes. Keep a short notebook of weak areas and study those next. After a few weeks you will see the list getting shorter, which is a much better measure of progress than a single percentage.",
    ],
  },
  {
    slug: "html-css-javascript-explained",
    title: "HTML, CSS and JavaScript: What Each One Does",
    description:
      "A beginner-friendly explanation of the three core web technologies and how they work together to build a web page.",
    date: "2026-10-27",
    category: "Web Development",
    body: [
      "Almost every website you visit is built from three technologies: HTML, CSS and JavaScript. Understanding the job of each one is the first step to learning web development.",
      { h: "HTML: the structure" },
      "HTML stands for HyperText Markup Language. It describes the content of a page: headings, paragraphs, images, links, lists, tables and forms. Think of it as the skeleton of a building. Without HTML there is nothing for a browser to show.",
      { h: "CSS: the appearance" },
      "CSS stands for Cascading Style Sheets. It controls how HTML elements look: colours, fonts, spacing, borders and layout. If HTML is the skeleton, CSS is the paint, furniture and floor plan. The word cascading refers to the rules that decide which style wins when several rules apply to the same element.",
      { h: "JavaScript: the behaviour" },
      "JavaScript is a programming language that makes pages interactive. It can react to clicks, validate a form before it is sent, load new data without refreshing the page and update what the user sees. It is the electricity and plumbing of the building.",
      { h: "How they work together" },
      "A browser downloads the HTML first, then applies the CSS, then runs the JavaScript. A simple button shows the idea: HTML creates the button, CSS gives it a colour and rounded corners, and JavaScript decides what happens when it is clicked.",
      { h: "Where to start" },
      { ul: [
        "Learn HTML first and build a simple personal page.",
        "Add CSS to style that page and make it work on a phone screen.",
        "Learn basic JavaScript: variables, functions and events.",
        "Test yourself regularly with the HTML, CSS and JavaScript quizzes on this site.",
      ] },
    ],
  },
  {
    slug: "big-o-time-complexity-for-beginners",
    title: "Time Complexity and Big-O Notation for Beginners",
    description:
      "What Big-O notation means, why it matters, and how to recognise the most common complexities with simple examples.",
    date: "2026-10-27",
    category: "Computer Science",
    body: [
      "When you write a program, it is not enough that it gives the right answer; it should also stay fast when the input grows. Time complexity describes how the running time of an algorithm increases with the size of the input, and Big-O notation is the standard way to write it.",
      { h: "Common complexities" },
      { ul: [
        "O(1), constant time: the work does not depend on the input size, for example reading one element of an array by its index.",
        "O(log n), logarithmic: the problem is cut down quickly, as in binary search or Euclid’s algorithm for the greatest common divisor.",
        "O(n), linear: you look at every element once, such as finding the largest number in a list.",
        "O(n log n): typical of efficient sorting algorithms such as merge sort.",
        "O(n²), quadratic: usually two nested loops, for example comparing every pair of items.",
        "O(n³), cubic: three nested loops, like the standard method for multiplying two matrices.",
      ] },
      { h: "Why constants are ignored" },
      "Big-O describes growth, not exact time. An algorithm that does 3n steps and one that does 100n steps are both O(n), because doubling the input doubles the work in both cases. What matters is the shape of the curve.",
      { h: "An example: Strassen’s algorithm" },
      "The ordinary method for multiplying two n × n matrices takes about n³ steps. Strassen’s divide and conquer algorithm reduces the number of recursive multiplications from eight to seven, which lowers the complexity to about O(n^2.81). That is a real improvement for very large matrices.",
      { h: "How to practise" },
      "Look at each loop in a program and ask how many times it runs compared with the input size. Then test yourself with the Algorithms and Data Structures quizzes, where every explanation shows the reasoning step by step.",
    ],
  },
  {
    slug: "supervised-unsupervised-reinforcement-learning",
    title: "Supervised, Unsupervised and Reinforcement Learning Explained",
    description:
      "The three main types of machine learning in plain language, with examples and when each one is used.",
    date: "2026-10-27",
    category: "Artificial Intelligence",
    body: [
      "Machine learning is a way of building programs that learn patterns from data instead of following hand-written rules. Most methods fall into three families, depending on the kind of feedback the program receives.",
      { h: "Supervised learning" },
      "In supervised learning the data comes with correct answers, called labels. The model learns the relationship between inputs and labels and then predicts labels for new inputs. Examples include detecting spam email, which is a classification task, and predicting house prices, which is a regression task.",
      { h: "Unsupervised learning" },
      "Here there are no labels. The model looks for structure on its own. Clustering is the best-known example: a shop might group customers with similar buying habits without being told in advance what the groups should be. It is also used to simplify data and to find unusual items.",
      { h: "Reinforcement learning" },
      "In reinforcement learning an agent learns by trying actions and receiving rewards or penalties. Over many attempts it discovers which actions lead to the best long-term result. This approach is used to train game-playing programs and in some robotics tasks.",
      { h: "Choosing between them" },
      { ul: [
        "Do you have labelled examples? Use supervised learning.",
        "Do you only have raw data and want to discover groups or patterns? Use unsupervised learning.",
        "Does a program need to make a sequence of decisions and learn from outcomes? Consider reinforcement learning.",
      ] },
      { h: "Two ideas to remember" },
      "Whatever the type, a model must be tested on data it has not seen before. A model that scores very well on its training data but poorly on new data is overfitting. Try the Machine Learning Basics and Machine Learning Concepts quizzes to check your understanding.",
    ],
  },
  {
    slug: "english-tenses-made-simple",
    title: "English Tenses Made Simple",
    description:
      "A clear overview of the twelve English tenses with one example for each and tips for choosing the right one.",
    date: "2026-10-27",
    category: "English",
    body: [
      "English has three time frames, past, present and future, and four aspects: simple, continuous, perfect and perfect continuous. Combining them gives twelve tenses. You do not need to memorise tables; it is easier to learn what each form is used for.",
      { h: "Present tenses" },
      { ul: [
        "Simple present: habits and facts. She walks to school.",
        "Present continuous: actions happening now. She is walking to school.",
        "Present perfect: past actions connected to now. She has walked to school today.",
        "Present perfect continuous: an action that began earlier and is still going on. She has been walking for ten minutes.",
      ] },
      { h: "Past tenses" },
      { ul: [
        "Simple past: finished actions. She walked to school yesterday.",
        "Past continuous: an action in progress at a past moment. She was walking when it started to rain.",
        "Past perfect: an action before another past action. She had walked before the bus arrived.",
        "Past perfect continuous: a longer action before a past moment. She had been walking for an hour.",
      ] },
      { h: "Future tenses" },
      { ul: [
        "Simple future: decisions and predictions. She will walk tomorrow.",
        "Future continuous: an action in progress at a future time. She will be walking at eight.",
        "Future perfect: completed by a future time. She will have walked by noon.",
        "Future perfect continuous: duration up to a future time. She will have been walking for two hours.",
      ] },
      { h: "Tips for choosing" },
      "Look for time words. Words such as yesterday, ago and last week point to the simple past, while since, for and already often signal perfect forms. Finally, practise with the Tenses quiz and read each explanation to see why one form fits better than another.",
    ],
  },
  {
    slug: "how-to-improve-general-knowledge",
    title: "How to Improve Your General Knowledge: Daily Habits That Work",
    description:
      "Practical, low-effort habits for building general knowledge for exams and everyday life, without cramming.",
    date: "2026-10-27",
    category: "General Knowledge",
    body: [
      "General knowledge is not a talent; it is the result of small habits repeated over time. Whether you are preparing for a competitive exam or simply want to understand the world better, a steady routine works better than a last-minute rush.",
      { h: "1. Read something every day" },
      "Spend ten to fifteen minutes with a reliable newspaper, a news website or an encyclopaedia. Choose different topics each day: one day science, another day geography or history.",
      { h: "2. Use maps and timelines" },
      "Facts stick better when they are connected. Look up a country on a map when you read about it, and place events on a timeline. Seeing where and when something happened gives your memory more hooks.",
      { h: "3. Take short quizzes often" },
      "Five or ten questions a day are more effective than one long session each month. Read the explanation for each answer so that the fact comes with context.",
      { h: "4. Keep a notebook of new facts" },
      "Write down three new things you learned each day. Review the notebook weekly. The act of writing and reviewing is what moves information into long-term memory.",
      { h: "5. Check the date of what you learn" },
      "Some facts change: office holders, records, populations and news. When you study current events, always note the date and confirm important details with a trusted source.",
      { h: "6. Teach someone else" },
      "Explain what you learned to a friend or family member. If you cannot explain it simply, you probably need to review it again.",
      "Pick one or two of these habits and keep them for a month. You will be surprised how much you remember.",
    ],
  },
];

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
