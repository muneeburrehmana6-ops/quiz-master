// Central registry: joins editorial info with question data.
// Imports use explicit .js extensions so the same file also runs in Node (prerender script).

import { categoryInfo, groups } from "./categoryInfo.js";

import q0 from "../data/html.js";
import q1 from "../data/css.js";
import q2 from "../data/javascript.js";
import q3 from "../data/react.js";
import q4 from "../data/nodejs.js";
import q5 from "../data/bootstrap.js";
import q6 from "../data/tailwind.js";
import q7 from "../data/jquery.js";
import q8 from "../data/typescript.js";
import q9 from "../data/firebase.js";
import q10 from "../data/mongodb.js";
import q11 from "../data/mysql.js";
import q12 from "../data/php.js";
import q13 from "../data/python.js";
import q14 from "../data/java.js";
import q15 from "../data/cpp.js";
import q16 from "../data/flutter.js";
import q17 from "../data/gitGithub.js";
import q18 from "../data/webDevelopment.js";
import q19 from "../data/cyberSecurity.js";
import q20 from "../data/linux.js";
import q21 from "../data/restApi.js";
import q22 from "../data/dataScience.js";
import q23 from "../data/mach-learn.js";
import q24 from "../data/devops.js";
import q25 from "../programming/cProgramming.js";
import q26 from "../programming/dataStructure.js";
import q27 from "../programming/algorithms.js";
import q28 from "../programming/objectOrientedProgramming.js";
import q29 from "../programming/databaseSystems.js";
import q30 from "../data/aiBasics.js";
import q31 from "../data/machineLearning.js";
import q32 from "../data/deepLearning.js";
import q33 from "../data/nlp.js";
import q34 from "../data/computerVision.js";
import q35 from "../data/englishGrammar.js";
import q36 from "../data/tenses.js";
import q37 from "../data/vocabulary.js";
import q38 from "../data/synonymsAntonyms.js";
import q39 from "../data/idioms.js";
import q40 from "../data/algebra.js";
import q41 from "../data/geometry.js";
import q42 from "../data/trigonometry.js";
import q43 from "../data/calculus.js";
import q44 from "../data/statistics.js";
import q45 from "../data/physics.js";
import q46 from "../data/chemistry.js";
import q47 from "../data/biology.js";
import q48 from "../data/generalScience.js";
import q49 from "../data/spaceScience.js";
import q50 from "../data/pakistanGK.js";
import q51 from "../data/worldGK.js";
import q52 from "../data/islamicStudies.js";
import q53 from "../data/sports.js";
import q54 from "../data/currentAffairs.js";

const questionMap = {
  "html": q0,
  "css": q1,
  "javascript": q2,
  "react": q3,
  "nodejs": q4,
  "bootstrap": q5,
  "tailwind": q6,
  "jquery": q7,
  "typescript": q8,
  "firebase": q9,
  "mongodb": q10,
  "mysql": q11,
  "php": q12,
  "python": q13,
  "java": q14,
  "cpp": q15,
  "flutter": q16,
  "gitgithub": q17,
  "webdevelopment": q18,
  "cybersecurity": q19,
  "linux": q20,
  "restapi": q21,
  "datascience": q22,
  "mach-learn": q23,
  "devops": q24,
  "c-programming": q25,
  "data-structure": q26,
  "algorithms": q27,
  "object-oriented-programming": q28,
  "database-systems": q29,
  "ai-basics": q30,
  "machine-learning": q31,
  "deep-learning": q32,
  "nlp": q33,
  "computer-vision": q34,
  "english-grammar": q35,
  "tenses": q36,
  "vocabulary": q37,
  "synonyms-antonyms": q38,
  "idioms": q39,
  "algebra": q40,
  "geometry": q41,
  "trigonometry": q42,
  "calculus": q43,
  "statistics": q44,
  "physics": q45,
  "chemistry": q46,
  "biology": q47,
  "general-science": q48,
  "space-science": q49,
  "pakistan-gk": q50,
  "world-gk": q51,
  "islamic-studies": q52,
  "sports": q53,
  "current-affairs": q54,
};

// Old / alternative URLs that should still work.
export const aliases = {
  cprogramming: "c-programming",
  datastructure: "data-structure",
  oop: "object-oriented-programming",
  "synonyms-antonym": "synonyms-antonyms",
  "islamic-studie": "islamic-studies",
};

// Pages that stay available to visitors but are kept out of search results
// until their content is reviewed (time-sensitive or repetitive content).
const noindexSlugs = new Set(["current-affairs"]);

export { groups };

export const categories = Object.keys(questionMap).map((slug) => ({
  slug,
  ...categoryInfo[slug],
  questions: questionMap[slug],
  noindex: noindexSlugs.has(slug),
}));

export function resolveSlug(slug) {
  return aliases[slug] || slug;
}

export function getCategory(slug) {
  const key = resolveSlug(slug);
  return categories.find((c) => c.slug === key) || null;
}

export function getQuestions(slug) {
  const c = getCategory(slug);
  return c ? c.questions : [];
}

export function categoriesByGroup(groupKey) {
  return categories.filter((c) => c.group === groupKey);
}
