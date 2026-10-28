const dataStructure = [
  {
    "id": 1,
    "question": "What is a data structure?",
    "options": [
      "A programming language",
      "A collection of algorithms",
      "A way to store and organize data",
      "A type of computer hardware"
    ],
    "answer": "A way to store and organize data",
    "explanation": "A data structure is a way of storing and organizing data in memory so that it can be accessed and modified efficiently. Arrays, stacks, queues and trees are common examples."
  },
  {
    "id": 2,
    "question": "What are the disadvantages of arrays?",
    "options": [
      "Index value of an array can be negative",
      "Elements are sequentially accessed",
      "Data structures like queue or stack cannot be implemented",
      "There are chances of memory wastage if allocated size is larger than inserted elements"
    ],
    "answer": "There are chances of memory wastage if allocated size is larger than inserted elements",
    "explanation": "A fixed-size array reserves memory in advance; if fewer elements are stored than the allocated size, the unused space is wasted."
  },
  {
    "id": 3,
    "question": "Which data structure is used for implementing recursion?",
    "options": [
      "Stack",
      "Queue",
      "List",
      "Array"
    ],
    "answer": "Stack",
    "explanation": "Each recursive call is pushed onto the call stack, and calls return in last-in, first-out order, so recursion relies on a stack."
  },
  {
    "id": 4,
    "question": "The data structure required to check whether an expression contains balanced parentheses is?",
    "options": [
      "Queue",
      "Stack",
      "Tree",
      "Array"
    ],
    "answer": "Stack",
    "explanation": "Opening brackets are pushed onto a stack and popped when a matching closing bracket appears; the expression is balanced if the stack ends up empty."
  },
  {
    "id": 5,
    "question": "Which of the following is NOT an application of Stack?",
    "options": [
      "Data transfer between asynchronous processes",
      "Compiler syntax analyzer",
      "Tracking local variables at runtime",
      "Parentheses balancing"
    ],
    "answer": "Data transfer between asynchronous processes",
    "explanation": "Stacks are used for syntax analysis in compilers, local variable tracking and parenthesis matching. Data transfer between asynchronous processes uses queues (buffers), not stacks."
  },
  {
    "id": 6,
    "question": "Which data structure is needed to convert infix notation to postfix notation?",
    "options": [
      "Tree",
      "Branch",
      "Stack",
      "Queue"
    ],
    "answer": "Stack",
    "explanation": "Converting infix to postfix uses a stack to hold operators until their precedence says they can be output."
  },
  {
    "id": 7,
    "question": "What is the value of the postfix expression 6 3 2 4 + - * ?",
    "options": [
      "74",
      "-18",
      "22",
      "40"
    ],
    "answer": "-18",
    "explanation": "Evaluate with a stack: 2 + 4 = 6; 3 − 6 = −3; 6 × (−3) = −18. The expression result is −18."
  },
  {
    "id": 8,
    "question": "Which data structure is mostly used in a non-recursive implementation of recursion?",
    "options": [
      "Stack",
      "Linked List",
      "Tree",
      "Queue"
    ],
    "answer": "Stack",
    "explanation": "A recursive function can be turned into a loop by managing an explicit stack that stores the same information the call stack would hold."
  },
  {
    "id": 9,
    "question": "Which statement about Stack is NOT correct?",
    "options": [
      "Top of the stack always contains the newest node",
      "Stack is a FIFO data structure",
      "Null link is present in the bottom node",
      "Linked Lists can implement stacks"
    ],
    "answer": "Stack is a FIFO data structure",
    "explanation": "A stack is LIFO (last in, first out), not FIFO. FIFO describes a queue."
  },
  {
    "id": 10,
    "question": "Which data structure is required for Breadth First Search (BFS)?",
    "options": [
      "Array",
      "Stack",
      "Tree",
      "Queue"
    ],
    "answer": "Queue",
    "explanation": "BFS visits nodes level by level, so it keeps the next nodes to visit in a queue (first in, first out)."
  },
  {
    "id": 11,
    "question": "The prefix form of A-B/(C*D^E) is?",
    "options": [
      "-A/B*C^DE",
      "-A/BC*^DE",
      "-ABCD*^DE",
      "-/*^ACBDE"
    ],
    "answer": "-A/B*C^DE",
    "explanation": "Reading the infix form with precedence ^ > * > / > −: C*D^E becomes *C^DE, then B/(…) becomes /B*C^DE, and finally A−… gives -A/B*C^DE."
  },
  {
    "id": 12,
    "question": "Which statement is NOT true about Linked Lists compared to Arrays?",
    "options": [
      "Random access is not allowed",
      "Access is faster than arrays",
      "Arrays have better cache locality",
      "Insertion and deletion are easier"
    ],
    "answer": "Access is faster than arrays",
    "explanation": "Linked lists do not support random access, so reaching the n-th element takes O(n); arrays give constant-time access, which is why the statement about faster access is false."
  },
  {
    "id": 13,
    "question": "Which data structure follows the LIFO principle?",
    "options": [
      "Tree",
      "Linked List",
      "Stack",
      "Queue"
    ],
    "answer": "Stack",
    "explanation": "A stack follows the Last-In-First-Out (LIFO) principle: the most recently added element is removed first."
  },
  {
    "id": 14,
    "question": "Which application makes use of a Circular Linked List?",
    "options": [
      "Recursive function calls",
      "Undo operation",
      "Hash Tables",
      "CPU Scheduling"
    ],
    "answer": "CPU Scheduling",
    "explanation": "A circular linked list has no end, which suits round-robin CPU scheduling where processes are visited repeatedly in a cycle."
  },
  {
    "id": 15,
    "question": "What is a Bit Array?",
    "options": [
      "A data structure that compactly stores bits",
      "Stores arrays of records",
      "Array with non-continuous elements",
      "Array where most elements have same value"
    ],
    "answer": "A data structure that compactly stores bits",
    "explanation": "A bit array stores bits compactly, packing many boolean values into machine words to save memory."
  },
  {
    "id": 16,
    "question": "Which of the following tree data structures is NOT a balanced binary tree?",
    "options": [
      "Splay Tree",
      "B-Tree",
      "AVL Tree",
      "Red Black Tree"
    ],
    "answer": "B-Tree",
    "explanation": "A B-Tree is a multi-way (not binary) balanced search tree used in databases and file systems, so it is not a balanced binary tree. AVL, Red-Black and Splay trees are binary trees."
  },
  {
    "id": 17,
    "question": "Which of the following is NOT a type of queue?",
    "options": [
      "Priority Queue",
      "Circular Queue",
      "Single Ended Queue",
      "Ordinary Queue"
    ],
    "answer": "Single Ended Queue",
    "explanation": "Queue types include ordinary, circular, priority and double-ended queues. A “single ended queue” is not a standard separate type."
  },
  {
    "id": 18,
    "question": "Which data structure is used for parentheses matching?",
    "options": [
      "N-ary Tree",
      "Queue",
      "Priority Queue",
      "Stack"
    ],
    "answer": "Stack",
    "explanation": "Parentheses matching pushes each opening symbol on a stack and pops it when the closing symbol arrives, so a stack is used."
  },
  {
    "id": 19,
    "question": "Which algorithm is used in the Top Tree data structure?",
    "options": [
      "Backtracking",
      "Divide and Conquer",
      "Branch",
      "Greedy"
    ],
    "answer": "Divide and Conquer",
    "explanation": "Top trees are built and maintained with divide and conquer on a dynamic tree, merging clusters of vertices."
  },
  {
    "id": 20,
    "question": "Why is a Circular Queue needed?",
    "options": [
      "Easier computations",
      "To implement LIFO",
      "Effective usage of memory",
      "Delete elements based on priority"
    ],
    "answer": "Effective usage of memory",
    "explanation": "In a linear queue, freed space at the front cannot be reused; a circular queue wraps around, so memory is used effectively."
  }
];

export default dataStructure;
