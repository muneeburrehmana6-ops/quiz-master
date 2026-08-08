const restApiQuestions = [
{
id: 1,
question: "What does REST stand for?",
options: [
"Representational State Transfer",
"Remote State Transfer",
"Represent State Technology",
"Remote Service Transfer"
],
answer: "Representational State Transfer",
explanation: "REST stands for Representational State Transfer."
},
{
id: 2,
question: "REST APIs commonly use which protocol?",
options: [
"HTTP",
"FTP",
"SMTP",
"SSH"
],
answer: "HTTP",
explanation: "REST APIs are built on the HTTP protocol."
},
{
id: 3,
question: "Which HTTP method is used to retrieve data?",
options: [
"GET",
"POST",
"PUT",
"DELETE"
],
answer: "GET",
explanation: "GET requests retrieve resources from the server."
},
{
id: 4,
question: "Which HTTP method is used to create a new resource?",
options: [
"POST",
"GET",
"PUT",
"DELETE"
],
answer: "POST",
explanation: "POST is used to create new resources."
},
{
id: 5,
question: "Which HTTP method updates an existing resource?",
options: [
"PUT",
"GET",
"POST",
"DELETE"
],
answer: "PUT",
explanation: "PUT replaces or updates an existing resource."
},
{
id: 6,
question: "Which HTTP method removes a resource?",
options: [
"DELETE",
"GET",
"POST",
"PUT"
],
answer: "DELETE",
explanation: "DELETE removes a resource from the server."
},
{
id: 7,
question: "Which data format is most commonly used in REST APIs?",
options: [
"JSON",
"HTML",
"XML",
"CSV"
],
answer: "JSON",
explanation: "JSON is lightweight and commonly used for REST API communication."
},
{
id: 8,
question: "What does API stand for?",
options: [
"Application Programming Interface",
"Application Program Internet",
"Advanced Programming Interface",
"Application Process Integration"
],
answer: "Application Programming Interface",
explanation: "API stands for Application Programming Interface."
},
{
id: 9,
question: "Which status code means 'OK'?",
options: [
"200",
"404",
"500",
"201"
],
answer: "200",
explanation: "HTTP status code 200 means the request was successful."
},
{
id: 10,
question: "Which status code means 'Not Found'?",
options: [
"404",
"200",
"500",
"401"
],
answer: "404",
explanation: "404 indicates that the requested resource could not be found."
}
,
{
id: 11,
question: "Which HTTP status code means 'Created'?",
options: [
"201",
"200",
"400",
"404"
],
answer: "201",
explanation: "201 Created indicates a resource has been successfully created."
},
{
id: 12,
question: "Which HTTP status code means 'Unauthorized'?",
options: [
"401",
"403",
"404",
"500"
],
answer: "401",
explanation: "401 Unauthorized means authentication is required."
},
{
id: 13,
question: "Which HTTP status code means 'Forbidden'?",
options: [
"403",
"401",
"404",
"200"
],
answer: "403",
explanation: "403 Forbidden means the server understood the request but refuses to authorize it."
},
{
id: 14,
question: "Which HTTP status code indicates an Internal Server Error?",
options: [
"500",
"404",
"200",
"201"
],
answer: "500",
explanation: "500 indicates an unexpected server-side error."
},
{
id: 15,
question: "Which HTTP method is used to partially update a resource?",
options: [
"PATCH",
"PUT",
"POST",
"GET"
],
answer: "PATCH",
explanation: "PATCH updates only specific fields of an existing resource."
},
{
id: 16,
question: "Which header is commonly used to send an authentication token?",
options: [
"Authorization",
"Content-Type",
"Accept",
"Host"
],
answer: "Authorization",
explanation: "The Authorization header usually carries JWT or Bearer tokens."
},
{
id: 17,
question: "Which Content-Type is commonly used for REST APIs?",
options: [
"application/json",
"text/html",
"image/png",
"text/plain"
],
answer: "application/json",
explanation: "REST APIs commonly exchange data using JSON."
},
{
id: 18,
question: "What is an endpoint in a REST API?",
options: [
"A specific URL for accessing a resource",
"A database table",
"A programming language",
"A web browser"
],
answer: "A specific URL for accessing a resource",
explanation: "An endpoint is the URL where an API resource can be accessed."
},
{
id: 19,
question: "REST APIs are generally ______.",
options: [
"Stateless",
"Stateful",
"Offline",
"Compiled"
],
answer: "Stateless",
explanation: "REST is stateless, meaning each request contains all the information needed."
},
{
id: 20,
question: "Which of the following is a major advantage of REST APIs?",
options: [
"Scalable",
"Simple to use",
"Platform Independent",
"All of the above"
],
answer: "All of the above",
explanation: "REST APIs are scalable, easy to use, and work across different platforms."
}
];

export default restApiQuestions;