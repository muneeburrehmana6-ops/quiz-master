// Articles shown at /articles. Newest first.
// To add an article, copy one object, give it a new unique slug,
// write your sections, and add its URL to public/sitemap.xml.
// Each section can have "paragraphs" and an optional "list".

const articles = [
  {
    slug: "how-to-prepare-for-mcq-tests",
    title: "How to Prepare for MCQ-Based Tests Without Cramming",
    description:
      "Practical study methods for NTS, FPSC, PPSC, entry tests and university MCQ exams: active recall, spaced practice and learning from wrong answers.",
    date: "2026-09-20",
    related: ["pakistan-gk", "general-science", "english-grammar"],
    sections: [
      {
        paragraphs: [
          "Multiple choice tests look easy because the answer is always on the page. In practice they are hard for a different reason: the wrong options are written to look right. If you only half-remember a fact, a well-written distractor will pull you towards it. Good preparation for MCQ tests is therefore less about reading more and more about remembering precisely.",
          "The methods below work for job tests such as FPSC, PPSC and NTS, university entry tests, and semester exams alike.",
        ],
      },
      {
        heading: "Test yourself before you feel ready",
        paragraphs: [
          "Most students read a chapter several times and only then try questions. Research on learning points the other way. Trying to recall information, even when you get it wrong, strengthens memory far more than re-reading. This is called active recall or the testing effect.",
          "In practice this means taking a short quiz early, noting which questions you missed, and then reading the explanation for those questions. You spend your reading time on the gaps instead of on what you already know.",
        ],
      },
      {
        heading: "Spread practice over days, not hours",
        paragraphs: [
          "Twenty minutes a day for a week beats three hours the night before. When you return to a topic after a gap, your brain has to work to retrieve it, and that effort is what makes the memory last. A simple routine is to revisit a topic one day, three days and seven days after you first study it.",
        ],
        list: [
          "Day 1: read the study guide and take the quiz.",
          "Day 3: retake the quiz without reading first. Mark the questions you still miss.",
          "Day 7: retake it again and review only the marked questions.",
        ],
      },
      {
        heading: "Learn why the wrong options are wrong",
        paragraphs: [
          "When you check an answer, do not stop at the correct option. Ask why each of the other three is wrong. Often a distractor is a real fact that belongs to a different question: the capital of a neighbouring country, the year of a different event, or a similar-sounding term. Knowing where the distractor comes from makes you much harder to trick.",
          "This is also why explanations matter more than scores. A score tells you how you did today; an explanation helps you do better next time.",
        ],
      },
      {
        heading: "Practise under the same conditions as the exam",
        paragraphs: [
          "Most MCQ tests are timed, and many candidates lose marks simply by running out of time. Once you know a topic reasonably well, practise with a timer. On QuizMaster each question has a 30 second limit, which is close to the pace of many Pakistani competitive tests.",
          "If your test has negative marking, practise the habit of skipping questions you genuinely cannot narrow down. If it does not, never leave a question blank.",
        ],
      },
      {
        heading: "Keep a mistakes notebook",
        paragraphs: [
          "Write down every question you get wrong, the correct answer, and one line explaining why. Before the exam, read this notebook instead of your whole syllabus. It will be short, it will be personal to you, and it will cover exactly the points you are most likely to miss.",
        ],
      },
    ],
  },
  {
    slug: "html-css-javascript-explained",
    title: "HTML, CSS and JavaScript: How the Three Fit Together",
    description:
      "A beginner-friendly explanation of what HTML, CSS and JavaScript each do on a web page, with a simple example and a suggested learning order.",
    date: "2026-09-18",
    related: ["html", "css", "javascript"],
    sections: [
      {
        paragraphs: [
          "Every website you visit, from a simple blog to a large online store, is built on three languages that work together in the browser: HTML, CSS and JavaScript. Beginners often try to learn all three at once and get confused about which one does what. The easiest way to understand them is to think of a house.",
        ],
      },
      {
        heading: "HTML is the structure",
        paragraphs: [
          "HTML is like the walls, doors and rooms of the house. It decides what is on the page and in what order: this is a heading, this is a paragraph, this is an image, this is a button. HTML does not care what things look like. A page with only HTML is plain, but it is complete and readable.",
          "For example, a heading is written as <h1>Welcome</h1> and a link as <a href=\"/about\">About us</a>. The tags describe the meaning of the content, which also helps search engines and screen readers understand the page.",
        ],
      },
      {
        heading: "CSS is the design",
        paragraphs: [
          "CSS is the paint, furniture and lighting. It takes the structure that HTML created and decides colours, fonts, spacing and layout. CSS also makes a page responsive, so the same content rearranges itself neatly on a phone and on a wide desktop screen.",
          "A CSS rule picks some elements and describes how they should look, for example making every h1 blue and centred. Because the design is kept separate from the content, you can restyle an entire website by changing one stylesheet.",
        ],
      },
      {
        heading: "JavaScript is the behaviour",
        paragraphs: [
          "JavaScript is the electricity and plumbing: it makes things happen. When you click a button and a menu opens, when a form tells you your email is invalid, or when new posts load as you scroll, JavaScript is doing the work.",
          "JavaScript can read and change the HTML and CSS of a page while it is open. The quizzes on this website are an example: JavaScript keeps track of your score, runs the timer and shows the explanation after you answer.",
        ],
      },
      {
        heading: "What order should you learn them in?",
        paragraphs: [
          "Learn them in the same order the browser uses them. Spend a week or two on HTML until you can build a simple page from memory. Then learn CSS until you can make that page look good on both phone and desktop. Only then start JavaScript, because most beginner JavaScript exercises involve changing HTML and CSS.",
        ],
        list: [
          "Weeks 1–2: HTML elements, links, images, lists, tables and forms.",
          "Weeks 3–5: CSS selectors, the box model, Flexbox, Grid and media queries.",
          "Weeks 6 onward: JavaScript variables, functions, events and the DOM.",
        ],
      },
      {
        heading: "Check your understanding",
        paragraphs: [
          "Once you have studied each language, take the matching quiz. If you score below 70 percent, read the study guide for that topic and retry a few days later. Moving on with weak HTML and CSS is the most common reason beginners find JavaScript frustrating.",
        ],
      },
    ],
  },
  {
    slug: "learn-programming-roadmap-for-beginners",
    title: "A Realistic Roadmap for Learning Programming as a Beginner",
    description:
      "How to choose a first language, what to learn in your first six months, and how to avoid the most common beginner mistakes.",
    date: "2026-09-15",
    related: ["python", "c-programming", "data-structure"],
    sections: [
      {
        paragraphs: [
          "Many people start learning programming full of energy, watch hours of tutorials, and give up a month later feeling they have learned nothing. The problem is rarely ability. It is usually the lack of a clear plan and too little hands-on practice. This roadmap is written for complete beginners, including students who are learning alongside college or university.",
        ],
      },
      {
        heading: "Pick one language and stay with it",
        paragraphs: [
          "The first language matters less than people think, because the core ideas are the same everywhere. What matters is not switching every few weeks. Python is a good choice if you are learning on your own because its syntax is simple and readable. C or C++ is a sensible choice if your university course uses it, since you will need it for exams anyway. JavaScript is the right choice if your main goal is building websites.",
        ],
      },
      {
        heading: "Months 1–2: the fundamentals",
        paragraphs: [
          "Focus on the building blocks that appear in every language: variables, data types, conditions, loops, functions, and working with lists or arrays. Type every example yourself rather than copying it, and change it to see what breaks.",
          "By the end of this stage you should be able to write small programs such as a calculator, a grade calculator or a number guessing game without following a tutorial.",
        ],
      },
      {
        heading: "Months 3–4: problem solving and data structures",
        paragraphs: [
          "Now start solving small problems every day. Beginner problem sites and exercises from your textbook are enough. Alongside this, learn the basic data structures: arrays, strings, stacks, queues and dictionaries or hash maps. Understanding when to use each one is what separates people who can write code from people who can solve problems with code.",
        ],
      },
      {
        heading: "Months 5–6: build something real",
        paragraphs: [
          "Choose one small project you actually care about and finish it. It might be a to-do list, an expense tracker, a quiz app or a personal website. Real projects force you to search for answers, read documentation and fix bugs, which are the skills you will use every day as a developer.",
          "Put your project on GitHub. Learning basic Git early saves a lot of pain later, and a public profile with real projects is more convincing to employers than a list of certificates.",
        ],
      },
      {
        heading: "Mistakes to avoid",
        list: [
          "Watching tutorials without writing code. If you are not typing, you are not learning.",
          "Jumping between languages and frameworks before the basics are solid.",
          "Copying solutions without understanding them. Close the answer and rewrite it yourself.",
          "Comparing your progress with others online. Consistency over months matters more than speed.",
        ],
      },
      {
        heading: "Use quizzes to find your gaps",
        paragraphs: [
          "Short quizzes are a quick way to discover what you have missed. After each stage, take the quizzes for your language and for data structures. Questions you get wrong show exactly which concepts to revisit before moving on.",
        ],
      },
    ],
  },
  {
    slug: "common-english-grammar-mistakes",
    title: "Common English Grammar Mistakes and How to Fix Them",
    description:
      "Ten grammar mistakes that regularly cost marks in exams and job tests, with clear examples of the correct form.",
    date: "2026-09-12",
    related: ["english-grammar", "tenses", "vocabulary"],
    sections: [
      {
        paragraphs: [
          "Most grammar mistakes are not random. The same few errors appear again and again in student essays, job applications and test answers, often because they are direct translations from Urdu or another first language. Learning to spot these patterns is one of the quickest ways to improve your English score.",
        ],
      },
      {
        heading: "1. Subject and verb that do not agree",
        paragraphs: [
          "A singular subject needs a singular verb. Wrong: \"He don't like tea.\" Right: \"He doesn't like tea.\" Be careful with words like everyone, each and nobody, which are singular: \"Everyone is ready,\" not \"Everyone are ready.\"",
        ],
      },
      {
        heading: "2. Using the continuous tense for states",
        paragraphs: [
          "Verbs that describe states rather than actions, such as know, understand, want, like and believe, are usually not used in the continuous form. Wrong: \"I am knowing the answer.\" Right: \"I know the answer.\"",
        ],
      },
      {
        heading: "3. Present perfect with a finished time",
        paragraphs: [
          "The present perfect (have done) cannot be used with a specific finished time such as yesterday or last year. Wrong: \"I have seen him yesterday.\" Right: \"I saw him yesterday.\" Use the present perfect when the time is not stated or is still continuing: \"I have seen that film.\"",
        ],
      },
      {
        heading: "4. Missing or extra articles",
        paragraphs: [
          "Use a or an with singular countable nouns mentioned for the first time, and the when both people know which one you mean. Wrong: \"She is doctor.\" Right: \"She is a doctor.\" Do not add the before general uncountable nouns: \"Honesty is important,\" not \"The honesty is important.\"",
        ],
      },
      {
        heading: "5. Wrong prepositions",
        list: [
          "Married to, not married with.",
          "Discuss something, not discuss about something.",
          "On Monday, in June, at 5 o'clock.",
          "Good at maths, interested in science, afraid of dogs.",
        ],
      },
      {
        heading: "6. Double negatives",
        paragraphs: [
          "In standard English two negatives cancel out. Wrong: \"I didn't do nothing.\" Right: \"I didn't do anything\" or \"I did nothing.\"",
        ],
      },
      {
        heading: "7. Confusing similar words",
        list: [
          "Its (belonging to it) and it's (it is).",
          "Their (belonging to them), there (a place) and they're (they are).",
          "Affect (usually a verb) and effect (usually a noun).",
          "Advice (noun) and advise (verb).",
        ],
      },
      {
        heading: "8. Using since and for incorrectly",
        paragraphs: [
          "Since is used with a starting point, for with a length of time. \"I have lived here since 2020\" and \"I have lived here for six years.\"",
        ],
      },
      {
        heading: "9. Repeating the subject",
        paragraphs: [
          "Wrong: \"My brother he works in Lahore.\" Right: \"My brother works in Lahore.\" The pronoun is not needed when the subject has already been named.",
        ],
      },
      {
        heading: "10. Comparatives formed twice",
        paragraphs: [
          "Wrong: \"more better\" or \"most easiest.\" Right: \"better\" and \"easiest.\" Short adjectives take -er and -est; longer ones take more and most, but never both.",
        ],
      },
      {
        heading: "Practise with real questions",
        paragraphs: [
          "Reading rules is only the first step. Take the grammar and tenses quizzes and pay attention to the explanations for any question you miss. Most people find that two or three of the mistakes above account for most of their lost marks.",
        ],
      },
    ],
  },
  {
    slug: "what-is-machine-learning",
    title: "What Is Machine Learning? A Plain-Language Introduction",
    description:
      "A simple explanation of machine learning, how it differs from normal programming, the main types of learning and where you already use it every day.",
    date: "2026-09-08",
    related: ["ai-basics", "machine-learning", "deep-learning"],
    sections: [
      {
        paragraphs: [
          "Machine learning is behind your phone's keyboard suggestions, your email spam folder and the videos recommended to you online. Despite being everywhere, it is often explained with heavy mathematics. The core idea is actually simple.",
        ],
      },
      {
        heading: "Rules versus examples",
        paragraphs: [
          "In normal programming, a person writes rules and the computer follows them. To detect spam you might write: if the email contains \"free money\", mark it as spam. This breaks quickly, because spammers change their wording.",
          "In machine learning, you give the computer thousands of examples of emails already labelled as spam or not spam, and it finds the patterns itself. The result is called a model. When a new email arrives, the model uses what it learned to make a prediction.",
        ],
      },
      {
        heading: "The three main types of machine learning",
        paragraphs: [
          "Supervised learning uses labelled examples, like the spam emails above or house prices paired with house features. It is the most common type and is used for classification (which category?) and regression (what number?).",
          "Unsupervised learning uses data without labels and looks for structure on its own, such as grouping customers with similar shopping habits.",
          "Reinforcement learning trains an agent by trial and error, rewarding good actions and penalising bad ones. It has been used to teach computers to play games and control robots.",
        ],
      },
      {
        heading: "Training and testing",
        paragraphs: [
          "A model is only useful if it works on data it has never seen. So the data is split: most is used to train the model and the rest is kept aside to test it. If a model scores very well on training data but badly on test data, it has memorised the examples instead of learning general patterns. This problem is called overfitting.",
        ],
      },
      {
        heading: "Where deep learning fits",
        paragraphs: [
          "Deep learning is a type of machine learning that uses neural networks with many layers. It is especially good at messy, unstructured data such as images, audio and text, which is why it powers face recognition, speech-to-text and modern AI chat assistants.",
        ],
      },
      {
        heading: "How to start learning",
        list: [
          "Get comfortable with Python and basic statistics first.",
          "Learn to load and explore data with a library such as pandas.",
          "Train a simple model on a small public dataset and measure its accuracy.",
          "Only then move on to neural networks and deep learning.",
        ],
      },
    ],
  },
  {
    slug: "git-github-commands-for-beginners",
    title: "Git and GitHub for Beginners: The Commands You Will Actually Use",
    description:
      "What Git and GitHub are, why every developer uses them, and the small set of commands that covers most daily work.",
    date: "2026-09-04",
    related: ["gitgithub", "webdevelopment", "linux"],
    sections: [
      {
        paragraphs: [
          "Almost every software team uses Git, and almost every developer has a GitHub profile. For beginners, though, Git can feel intimidating because it has hundreds of commands. The good news is that daily work uses fewer than ten of them.",
        ],
      },
      {
        heading: "Git and GitHub are not the same thing",
        paragraphs: [
          "Git is a program on your computer that tracks changes to your files. Every time you save a snapshot, called a commit, Git remembers exactly what changed. You can go back to any earlier version, compare versions and experiment without fear of losing work.",
          "GitHub is a website that stores copies of Git projects online. It lets you back up your work, share it and collaborate with others through features like pull requests.",
        ],
      },
      {
        heading: "The everyday workflow",
        list: [
          "git init — start tracking a new project folder.",
          "git status — see which files have changed.",
          "git add . — prepare all changed files for the next snapshot.",
          "git commit -m \"message\" — save the snapshot with a short description.",
          "git push — send your commits to GitHub.",
          "git pull — download the latest changes from GitHub.",
        ],
      },
      {
        heading: "Branches let you experiment safely",
        paragraphs: [
          "A branch is a separate line of work. You might create a branch called new-login-page, make changes there, and only merge it into the main branch once it works. Use git branch name to create a branch, git checkout name or git switch name to move to it, and git merge name to bring its changes back.",
        ],
      },
      {
        heading: "Write useful commit messages",
        paragraphs: [
          "A good commit message says what changed and why in a few words, such as \"Fix quiz timer resetting on refresh\". Messages like \"update\" or \"changes\" are useless when you look back months later to find when a bug was introduced.",
        ],
      },
      {
        heading: "Common beginner problems",
        list: [
          "Forgetting to commit before switching branches. Run git status first.",
          "Committing passwords or API keys. Use a .gitignore file for secrets and never push them.",
          "Case-only file renames on Windows. Git may not notice that privacy.css became Privacy.css; use git mv to rename files.",
          "Merge conflicts. They look scary but simply mean two changes touched the same lines. Open the file, keep the correct version and commit again.",
        ],
      },
    ],
  },
];

export default articles;

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

export function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
