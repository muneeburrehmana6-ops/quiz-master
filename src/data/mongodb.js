const mongodbQuestions = [
{
id: 1,
question: "What is MongoDB?",
options: [
"A Relational Database",
"A NoSQL Database",
"A Programming Language",
"A CSS Framework"
],
answer: "A NoSQL Database",
explanation: "MongoDB is a popular NoSQL document-oriented database."
},
{
id: 2,
question: "Which company develops MongoDB?",
options: [
"Oracle",
"MongoDB Inc.",
"Microsoft",
"Google"
],
answer: "MongoDB Inc.",
explanation: "MongoDB is developed and maintained by MongoDB Inc."
},
{
id: 3,
question: "MongoDB stores data in the form of?",
options: [
"Tables",
"Documents",
"Rows",
"Arrays"
],
answer: "Documents",
explanation: "MongoDB stores data as BSON documents."
},
{
id: 4,
question: "Which format is used internally by MongoDB?",
options: [
"XML",
"JSON",
"BSON",
"CSV"
],
answer: "BSON",
explanation: "MongoDB stores data internally in BSON (Binary JSON) format."
},
{
id: 5,
question: "What is a collection in MongoDB?",
options: [
"A group of databases",
"A group of documents",
"A group of tables",
"A group of rows"
],
answer: "A group of documents",
explanation: "A collection is similar to a table in relational databases."
},
{
id: 6,
question: "Which command is used to show all databases?",
options: [
"show dbs",
"show databases",
"list db",
"display db"
],
answer: "show dbs",
explanation: "The 'show dbs' command displays all available databases."
},
{
id: 7,
question: "Which command is used to create or switch a database?",
options: [
"use databaseName",
"create databaseName",
"switch databaseName",
"new databaseName"
],
answer: "use databaseName",
explanation: "The 'use' command creates or switches to a database."
},
{
id: 8,
question: "Which method inserts one document into a collection?",
options: [
"insertOne()",
"addOne()",
"insert()",
"createOne()"
],
answer: "insertOne()",
explanation: "insertOne() inserts a single document."
},
{
id: 9,
question: "Which method inserts multiple documents?",
options: [
"insertMany()",
"addMany()",
"createMany()",
"multipleInsert()"
],
answer: "insertMany()",
explanation: "insertMany() inserts multiple documents at once."
},
{
id: 10,
question: "Which method retrieves documents from a collection?",
options: [
"find()",
"select()",
"get()",
"show()"
],
answer: "find()",
explanation: "The find() method retrieves documents from a collection."
},

{
id: 11,
question: "Which method returns only one matching document?",
options: [
"findOne()",
"find()",
"getOne()",
"selectOne()"
],
answer: "findOne()",
explanation: "findOne() returns the first matching document from a collection."
},
{
id: 12,
question: "Which method updates a single document?",
options: [
"updateOne()",
"update()",
"modifyOne()",
"replaceOne()"
],
answer: "updateOne()",
explanation: "updateOne() updates the first document that matches the filter."
},
{
id: 13,
question: "Which method updates multiple documents?",
options: [
"updateMany()",
"updateAll()",
"modifyMany()",
"replaceMany()"
],
answer: "updateMany()",
explanation: "updateMany() updates all documents matching the filter."
},
{
id: 14,
question: "Which method deletes one document?",
options: [
"deleteOne()",
"removeOne()",
"delete()",
"dropOne()"
],
answer: "deleteOne()",
explanation: "deleteOne() removes a single matching document."
},
{
id: 15,
question: "Which method deletes multiple documents?",
options: [
"deleteMany()",
"removeMany()",
"dropMany()",
"deleteAll()"
],
answer: "deleteMany()",
explanation: "deleteMany() removes all matching documents."
},
{
id: 16,
question: "Which command displays all collections in the current database?",
options: [
"show collections",
"show tables",
"list collections",
"display collections"
],
answer: "show collections",
explanation: "The 'show collections' command lists all collections in the selected database."
},
{
id: 17,
question: "Which operator is used for logical AND in MongoDB queries?",
options: [
"$and",
"$&&",
"$all",
"$match"
],
answer: "$and",
explanation: "The $and operator joins multiple query conditions."
},
{
id: 18,
question: "Which operator is used to match values greater than a specified value?",
options: [
"$gt",
"$greater",
"$more",
"$high"
],
answer: "$gt",
explanation: "The $gt operator means 'greater than'."
},
{
id: 19,
question: "Which operator is used to sort query results?",
options: [
"sort()",
"order()",
"arrange()",
"group()"
],
answer: "sort()",
explanation: "The sort() method sorts the returned documents."
},
{
id: 20,
question: "Which of the following is a major advantage of MongoDB?",
options: [
"Flexible Schema",
"High Scalability",
"Fast Performance",
"All of the above"
],
answer: "All of the above",
explanation: "MongoDB offers a flexible schema, horizontal scalability, and excellent performance."
}
];

export default mongodbQuestions;
