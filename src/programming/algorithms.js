const algorithms = [
  {
    question: "Euclid’s algorithm is used for finding ________.",
    options: [
      "GCD of two numbers",
      "GCD of more than three numbers",
      "LCM of two numbers",
      "LCM of more than two numbers",
    ],
    answer: "GCD of two numbers",
  },
  {
    question: "Who invented Euclid’s algorithm?",
    options: ["Sieve", "Euclid", "Euclid-Sieve", "Gabriel Lame"],
    answer: "Euclid",
  },
  {
    question: "If 4 is the GCD of 16 and 12, what is the GCD of 12 and 4?",
    options: ["12", "6", "4", "2"],
    answer: "4",
  },
  {
    question: "Which of the following is NOT an application of Euclid’s algorithm?",
    options: [
      "Simplification of fractions",
      "Performing divisions in modular arithmetic",
      "Solving quadratic equations",
      "Solving Diophantine equations",
    ],
    answer: "Solving quadratic equations",
  },
  {
    question:
      "Euclid’s algorithm runs efficiently by repeatedly dividing until the remainder becomes zero.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "According to Gabriel Lame, Euclid’s algorithm requires how many steps?",
    options: [
      "Less than five times the number of digits",
      "More than five times the number of digits",
      "Less than two times the number of digits",
      "More than two times the number of digits",
    ],
    answer: "Less than five times the number of digits",
  },
  {
    question:
      "Which of the following is a mathematical application of Euclid’s algorithm?",
    options: [
      "Determination of prime numbers",
      "Lagrange’s four square theorem",
      "Cauchy-Euler theorem",
      "Residue theorem",
    ],
    answer: "Lagrange’s four square theorem",
  },
  {
    question: "If the GCD of two numbers is 1, they are called ________.",
    options: [
      "Co-prime numbers",
      "Prime numbers",
      "Composite numbers",
      "Rational numbers",
    ],
    answer: "Co-prime numbers",
  },
  {
    question: "What is the time complexity of Euclid’s algorithm?",
    options: ["O(N)", "O(N log M)", "O(N log N)", "O(log N)"],
    answer: "O(log N)",
  },
  {
    question:
      "Euclid’s algorithm does not require calculation of prime factors.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "What is the formula used in Euclid’s algorithm?",
    options: [
      "GCD(m,n) = GCD(n, m mod n)",
      "LCM(m,n) = LCM(n, m mod n)",
      "GCD(m,n,o,p) = GCD(m, m mod n, o, p mod o)",
      "LCM(m,n,o,p) = LCM(m, m mod n, o, p mod o)",
    ],
    answer: "GCD(m,n) = GCD(n, m mod n)",
  },
  {
    question: "What is the running time of the Binary GCD algorithm?",
    options: ["O(N)", "O(N²)", "O(log N)", "O(N log N)"],
    answer: "O(log N)",
  },
  {
    question: "What is the GCD of 20 and 12 using Euclid’s algorithm?",
    options: ["8", "2", "4", "6"],
    answer: "4",
  },
  {
    question: "Strassen’s algorithm is a ________ algorithm.",
    options: [
      "Non-recursive",
      "Recursive",
      "Approximation",
      "Accurate",
    ],
    answer: "Recursive",
  },
  {
    question: "What is the time complexity of Strassen’s algorithm?",
    options: ["O(n²·⁸¹)", "O(n³)", "O(n¹·⁸)", "O(n²)"],
    answer: "O(n²·⁸¹)",
  },
  {
    question: "What is the running time of the naive matrix multiplication algorithm?",
    options: ["O(n²·⁸¹)", "O(n⁴)", "O(n)", "O(n³)"],
    answer: "O(n³)",
  },
  {
    question:
      "Strassen’s matrix multiplication algorithm uses which technique?",
    options: [
      "Greedy",
      "Dynamic Programming",
      "Divide and Conquer",
      "Backtracking",
    ],
    answer: "Divide and Conquer",
  },
  {
    question:
      "The number of scalar additions and subtractions used in Strassen’s algorithm is ________.",
    options: ["O(n²·⁸¹)", "Θ(n²)", "Θ(n)", "O(n³)"],
    answer: "Θ(n²)",
  },
  {
    question:
      "Running time of Strassen’s algorithm is better than the naive Θ(n³) algorithm.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "In the naive matrix multiplication algorithm, what statement belongs inside the innermost loop?",
    options: [
      "Z[i][j] = Z[i][j] + X[i][k] * Y[k][j]",
      "Z[i][j] = Z[i][j] + X[i][k] + Y[k][j]",
      "Z[i][j] = Z[i][j] * X[i][k] * Y[k][j]",
      "Z[i][j] = Z[i][j] * X[i][k] + Y[k][j]",
    ],
    answer: "Z[i][j] = Z[i][j] + X[i][k] * Y[k][j]",
  },
];

export default algorithms;