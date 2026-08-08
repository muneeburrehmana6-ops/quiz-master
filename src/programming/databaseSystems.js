const databaseSystems = [
  {
    id: 1,
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Database Memory System",
      "Data Management Service"
    ],
    answer: "Database Management System",
    explanation: "A DBMS is software used to create, manage, and organize databases."
  },
  {
    id: 2,
    question: "Which of the following is an example of a DBMS?",
    options: [
      "MySQL",
      "Google Chrome",
      "Windows",
      "MS Word"
    ],
    answer: "MySQL",
    explanation: "MySQL is a popular relational database management system."
  },
  {
    id: 3,
    question: "What is a database?",
    options: [
      "A programming language",
      "A collection of related data",
      "A compiler",
      "A web browser"
    ],
    answer: "A collection of related data",
    explanation: "A database stores related information in an organized manner."
  },
  {
    id: 4,
    question: "Which type of database stores data in tables consisting of rows and columns?",
    options: [
      "Relational Database",
      "Hierarchical Database",
      "Network Database",
      "Object Database"
    ],
    answer: "Relational Database",
    explanation: "A relational database stores data in tables with rows and columns."
  },
  {
    id: 5,
    question: "Which language is primarily used to interact with relational databases?",
    options: [
      "HTML",
      "Java",
      "SQL",
      "CSS"
    ],
    answer: "SQL",
    explanation: "SQL (Structured Query Language) is used to create, retrieve, update, and delete data in relational databases."
  },
    {
    id: 6,
    question: "What is the primary purpose of a Primary Key?",
    options: [
      "To store duplicate values",
      "To uniquely identify each record in a table",
      "To connect two databases",
      "To sort records automatically"
    ],
    answer: "To uniquely identify each record in a table",
    explanation: "A Primary Key uniquely identifies every record in a table and cannot contain NULL values."
  },
  {
    id: 7,
    question: "A Foreign Key is used to:",
    options: [
      "Delete records",
      "Create indexes",
      "Establish a relationship between two tables",
      "Store duplicate data"
    ],
    answer: "Establish a relationship between two tables",
    explanation: "A Foreign Key links one table to another by referencing the Primary Key of another table."
  },
  {
    id: 8,
    question: "Which key can uniquely identify a record and is selected as the Primary Key?",
    options: [
      "Foreign Key",
      "Candidate Key",
      "Composite Key",
      "Alternate Key"
    ],
    answer: "Candidate Key",
    explanation: "A Candidate Key is a column (or set of columns) that can uniquely identify each row in a table."
  },
  {
    id: 9,
    question: "What is a Composite Key?",
    options: [
      "A key made from multiple tables",
      "A key consisting of two or more columns",
      "A duplicate key",
      "A temporary key"
    ],
    answer: "A key consisting of two or more columns",
    explanation: "A Composite Key combines two or more columns to uniquely identify a record."
  },
  {
    id: 10,
    question: "Which key contains one or more Candidate Keys?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Super Key",
      "Composite Key"
    ],
    answer: "Super Key",
    explanation: "A Super Key is a set of one or more attributes that can uniquely identify a record."
  },
    {
    id: 11,
    question: "What is the main purpose of database normalization?",
    options: [
      "To increase data redundancy",
      "To reduce data redundancy and improve data integrity",
      "To create more tables unnecessarily",
      "To speed up internet connections"
    ],
    answer: "To reduce data redundancy and improve data integrity",
    explanation: "Normalization organizes data to minimize redundancy and maintain consistency."
  },
  {
    id: 12,
    question: "In which Normal Form (NF) are all attributes atomic (indivisible)?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    answer: "First Normal Form (1NF)",
    explanation: "1NF requires that each column contains only atomic (single) values."
  },
  {
    id: 13,
    question: "Which SQL command is used to create a new table?",
    options: [
      "INSERT",
      "CREATE TABLE",
      "UPDATE",
      "ALTER"
    ],
    answer: "CREATE TABLE",
    explanation: "The CREATE TABLE statement is used to create a new table in a database."
  },
  {
    id: 14,
    question: "Which SQL command is used to insert new records into a table?",
    options: [
      "SELECT",
      "UPDATE",
      "INSERT INTO",
      "DELETE"
    ],
    answer: "INSERT INTO",
    explanation: "The INSERT INTO statement adds new rows to a table."
  },
  {
    id: 15,
    question: "Which SQL statement is used to retrieve data from a database?",
    options: [
      "GET",
      "FETCH",
      "SELECT",
      "SHOW"
    ],
    answer: "SELECT",
    explanation: "The SELECT statement is used to retrieve data from one or more tables."
  },
    {
    id: 16,
    question: "Which SQL clause is used to filter records based on a condition?",
    options: [
      "ORDER BY",
      "WHERE",
      "GROUP BY",
      "HAVING"
    ],
    answer: "WHERE",
    explanation: "The WHERE clause filters rows that satisfy a specified condition."
  },
  {
    id: 17,
    question: "Which SQL clause is used to sort query results?",
    options: [
      "GROUP BY",
      "ORDER BY",
      "WHERE",
      "SORT"
    ],
    answer: "ORDER BY",
    explanation: "ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order."
  },
  {
    id: 18,
    question: "Which SQL clause is used to group rows that have the same values?",
    options: [
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "JOIN"
    ],
    answer: "GROUP BY",
    explanation: "GROUP BY groups rows with the same values, often used with aggregate functions."
  },
  {
    id: 19,
    question: "Which SQL operation combines rows from two or more tables based on a related column?",
    options: [
      "MERGE",
      "JOIN",
      "UNION",
      "CONNECT"
    ],
    answer: "JOIN",
    explanation: "JOIN is used to retrieve related data from multiple tables."
  },
  {
    id: 20,
    question: "Which SQL function returns the total number of rows in a result set?",
    options: [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MAX()"
    ],
    answer: "COUNT()",
    explanation: "COUNT() returns the number of rows or non-NULL values in a column."
  }
];

export default databaseSystems;
