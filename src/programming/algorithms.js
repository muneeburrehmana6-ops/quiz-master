const algorithms = [
  {
    "id": 1,
    "question": "Euclid’s algorithm is used for finding ________.",
    "options": [
      "GCD of two numbers",
      "GCD of more than three numbers",
      "LCM of two numbers",
      "LCM of more than two numbers"
    ],
    "answer": "GCD of two numbers",
    "explanation": "Euclid’s algorithm finds the greatest common divisor (GCD) of two integers by repeatedly replacing the larger number with the remainder of the division."
  },
  {
    "id": 2,
    "question": "Who invented Euclid’s algorithm?",
    "options": [
      "Sieve",
      "Euclid",
      "Euclid-Sieve",
      "Gabriel Lame"
    ],
    "answer": "Euclid",
    "explanation": "The algorithm is named after the Greek mathematician Euclid, who described it around 300 BC in his work Elements."
  },
  {
    "id": 3,
    "question": "If 4 is the GCD of 16 and 12, what is the GCD of 12 and 4?",
    "options": [
      "12",
      "6",
      "4",
      "2"
    ],
    "answer": "4",
    "explanation": "GCD(12, 4): 12 divided by 4 leaves remainder 0, so the GCD is 4. This also confirms that GCD(16, 12) = GCD(12, 4) = 4."
  },
  {
    "id": 4,
    "question": "Which of the following is NOT an application of Euclid’s algorithm?",
    "options": [
      "Simplification of fractions",
      "Performing divisions in modular arithmetic",
      "Solving quadratic equations",
      "Solving Diophantine equations"
    ],
    "answer": "Solving quadratic equations",
    "explanation": "Euclid’s algorithm works on integers to find a GCD; it is used for fractions, modular arithmetic and Diophantine equations, but not for solving quadratic equations."
  },
  {
    "id": 5,
    "question": "Euclid’s algorithm runs efficiently by repeatedly dividing until the remainder becomes zero.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True",
    "explanation": "The algorithm keeps dividing and taking remainders until the remainder becomes zero; the last non-zero remainder is the GCD, which makes it very efficient."
  },
  {
    "id": 6,
    "question": "According to Gabriel Lame, Euclid’s algorithm requires how many steps?",
    "options": [
      "Less than five times the number of digits",
      "More than five times the number of digits",
      "Less than two times the number of digits",
      "More than two times the number of digits"
    ],
    "answer": "Less than five times the number of digits",
    "explanation": "Lamé’s theorem shows the number of division steps is always less than five times the number of digits of the smaller number."
  },
  {
    "id": 7,
    "question": "Which of the following is a mathematical application of Euclid’s algorithm?",
    "options": [
      "Determination of prime numbers",
      "Lagrange’s four square theorem",
      "Cauchy-Euler theorem",
      "Residue theorem"
    ],
    "answer": "Lagrange’s four square theorem",
    "explanation": "Euclid’s algorithm is used in number theory proofs such as Lagrange’s four-square theorem, as well as in cryptography."
  },
  {
    "id": 8,
    "question": "If the GCD of two numbers is 1, they are called ________.",
    "options": [
      "Co-prime numbers",
      "Prime numbers",
      "Composite numbers",
      "Rational numbers"
    ],
    "answer": "Co-prime numbers",
    "explanation": "When the GCD of two numbers is 1 they share no common factor other than 1, and such numbers are called co-prime (relatively prime)."
  },
  {
    "id": 9,
    "question": "What is the time complexity of Euclid’s algorithm?",
    "options": [
      "O(N)",
      "O(N log M)",
      "O(N log N)",
      "O(log N)"
    ],
    "answer": "O(log N)",
    "explanation": "Each step reduces the numbers by at least half every two iterations, so the running time grows logarithmically: O(log N)."
  },
  {
    "id": 10,
    "question": "Euclid’s algorithm does not require calculation of prime factors.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True",
    "explanation": "Euclid’s algorithm only needs division and remainders, so no prime factorization is required, which is why it is much faster than factoring for large numbers."
  },
  {
    "id": 11,
    "question": "What is the formula used in Euclid’s algorithm?",
    "options": [
      "GCD(m,n) = GCD(n, m mod n)",
      "LCM(m,n) = LCM(n, m mod n)",
      "GCD(m,n,o,p) = GCD(m, m mod n, o, p mod o)",
      "LCM(m,n,o,p) = LCM(m, m mod n, o, p mod o)"
    ],
    "answer": "GCD(m,n) = GCD(n, m mod n)",
    "explanation": "The core identity is GCD(m, n) = GCD(n, m mod n). It is applied repeatedly until the second argument becomes 0."
  },
  {
    "id": 12,
    "question": "What is the running time of the Binary GCD algorithm?",
    "options": [
      "O(N)",
      "O(N²)",
      "O(log N)",
      "O(N log N)"
    ],
    "answer": "O(log N)",
    "explanation": "The Binary GCD (Stein’s) algorithm uses shifts and subtraction instead of division, and its running time is logarithmic in the size of the inputs."
  },
  {
    "id": 13,
    "question": "What is the GCD of 20 and 12 using Euclid’s algorithm?",
    "options": [
      "8",
      "2",
      "4",
      "6"
    ],
    "answer": "4",
    "explanation": "20 mod 12 = 8, 12 mod 8 = 4, 8 mod 4 = 0. The last non-zero remainder is 4, so GCD(20, 12) = 4."
  },
  {
    "id": 14,
    "question": "Strassen’s algorithm is a ________ algorithm.",
    "options": [
      "Non-recursive",
      "Recursive",
      "Approximation",
      "Accurate"
    ],
    "answer": "Recursive",
    "explanation": "Strassen’s algorithm multiplies matrices by splitting them into sub-matrices and calling itself on the pieces, so it is a recursive algorithm."
  },
  {
    "id": 15,
    "question": "What is the time complexity of Strassen’s algorithm?",
    "options": [
      "O(n²·⁸¹)",
      "O(n³)",
      "O(n¹·⁸)",
      "O(n²)"
    ],
    "answer": "O(n²·⁸¹)",
    "explanation": "Strassen reduces the number of recursive multiplications from 8 to 7, giving a time complexity of about O(n^2.81) (n to the power log2 7)."
  },
  {
    "id": 16,
    "question": "What is the running time of the naive matrix multiplication algorithm?",
    "options": [
      "O(n²·⁸¹)",
      "O(n⁴)",
      "O(n)",
      "O(n³)"
    ],
    "answer": "O(n³)",
    "explanation": "The standard method uses three nested loops over n elements each, so it performs about n × n × n operations, i.e. O(n³)."
  },
  {
    "id": 17,
    "question": "Strassen’s matrix multiplication algorithm uses which technique?",
    "options": [
      "Greedy",
      "Dynamic Programming",
      "Divide and Conquer",
      "Backtracking"
    ],
    "answer": "Divide and Conquer",
    "explanation": "Strassen’s method is a divide and conquer technique: the problem is divided into smaller matrix products whose results are combined."
  },
  {
    "id": 18,
    "question": "The number of scalar additions and subtractions used in Strassen’s algorithm is ________.",
    "options": [
      "O(n²·⁸¹)",
      "Θ(n²)",
      "Θ(n)",
      "O(n³)"
    ],
    "answer": "Θ(n²)",
    "explanation": "The additions and subtractions of the sub-matrices take quadratic time, Θ(n²), at each level of the recursion."
  },
  {
    "id": 19,
    "question": "Running time of Strassen’s algorithm is better than the naive Θ(n³) algorithm.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True",
    "explanation": "Because O(n^2.81) grows more slowly than Θ(n³), Strassen’s algorithm is asymptotically faster for large matrices, although it has more overhead for small ones."
  },
  {
    "id": 20,
    "question": "In the naive matrix multiplication algorithm, what statement belongs inside the innermost loop?",
    "options": [
      "Z[i][j] = Z[i][j] + X[i][k] * Y[k][j]",
      "Z[i][j] = Z[i][j] + X[i][k] + Y[k][j]",
      "Z[i][j] = Z[i][j] * X[i][k] * Y[k][j]",
      "Z[i][j] = Z[i][j] * X[i][k] + Y[k][j]"
    ],
    "answer": "Z[i][j] = Z[i][j] + X[i][k] * Y[k][j]",
    "explanation": "In the naive method each result cell is built by accumulating products of a row of X and a column of Y: Z[i][j] = Z[i][j] + X[i][k] * Y[k][j]."
  }
];

export default algorithms;
