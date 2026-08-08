const firebaseQuestions = [
{
id: 1,
question: "What is Firebase?",
options: [
"A CSS Framework",
"A Backend-as-a-Service (BaaS)",
"A Programming Language",
"A Database Driver"
],
answer: "A Backend-as-a-Service (BaaS)",
explanation: "Firebase is Google's Backend-as-a-Service platform for building web and mobile applications."
},
{
id: 2,
question: "Who developed Firebase?",
options: [
"Microsoft",
"Google",
"Facebook",
"Amazon"
],
answer: "Google",
explanation: "Firebase is owned and maintained by Google."
},
{
id: 3,
question: "Which Firebase service is used for user authentication?",
options: [
"Firebase Auth",
"Firestore",
"Firebase Hosting",
"Cloud Functions"
],
answer: "Firebase Auth",
explanation: "Firebase Authentication allows users to sign in securely."
},
{
id: 4,
question: "Which Firebase database stores data as documents and collections?",
options: [
"Cloud Firestore",
"MySQL",
"MongoDB",
"SQLite"
],
answer: "Cloud Firestore",
explanation: "Cloud Firestore is a NoSQL document database."
},
{
id: 5,
question: "Which Firebase service hosts web applications?",
options: [
"Firebase Hosting",
"Cloud Storage",
"Analytics",
"Realtime Database"
],
answer: "Firebase Hosting",
explanation: "Firebase Hosting is used to deploy and host web applications."
},
{
id: 6,
question: "Which Firebase service stores files such as images and videos?",
options: [
"Cloud Storage",
"Firestore",
"Hosting",
"Analytics"
],
answer: "Cloud Storage",
explanation: "Cloud Storage securely stores user-generated files."
},
{
id: 7,
question: "Which Firebase database updates data instantly across connected clients?",
options: [
"Realtime Database",
"MySQL",
"Oracle",
"SQLite"
],
answer: "Realtime Database",
explanation: "Realtime Database synchronizes data instantly."
},
{
id: 8,
question: "Which language is commonly used with Firebase in web development?",
options: [
"JavaScript",
"C",
"Swift Only",
"PHP Only"
],
answer: "JavaScript",
explanation: "Firebase is widely used with JavaScript frameworks like React."
},
{
id: 9,
question: "Which Firebase service tracks user activity?",
options: [
"Analytics",
"Hosting",
"Storage",
"Authentication"
],
answer: "Analytics",
explanation: "Firebase Analytics provides insights into user behavior."
},
{
id: 10,
question: "Which command installs Firebase in a JavaScript project?",
options: [
"npm install firebase",
"npm install firestore",
"npm install google",
"npm install backend"
],
answer: "npm install firebase",
explanation: "The Firebase SDK is installed using npm install firebase."
},

{
id: 11,
question: "Which Firebase service allows developers to run backend code without managing servers?",
options: [
"Cloud Functions",
"Firestore",
"Hosting",
"Analytics"
],
answer: "Cloud Functions",
explanation: "Cloud Functions lets developers execute backend code in response to events."
},
{
id: 12,
question: "Which Firebase feature allows users to sign in using Google accounts?",
options: [
"Google Authentication",
"Google Storage",
"Google Database",
"Google Analytics"
],
answer: "Google Authentication",
explanation: "Firebase Authentication supports Google Sign-In."
},
{
id: 13,
question: "Which Firebase database is recommended for new projects?",
options: [
"Cloud Firestore",
"Realtime Database",
"MySQL",
"SQLite"
],
answer: "Cloud Firestore",
explanation: "Cloud Firestore is the recommended database for most modern Firebase projects."
},
{
id: 14,
question: "Which Firebase service sends push notifications?",
options: [
"Firebase Cloud Messaging (FCM)",
"Cloud Storage",
"Hosting",
"Firestore"
],
answer: "Firebase Cloud Messaging (FCM)",
explanation: "FCM allows developers to send notifications to web and mobile devices."
},
{
id: 15,
question: "Which Firebase feature stores application configuration values remotely?",
options: [
"Remote Config",
"Firestore",
"Analytics",
"Hosting"
],
answer: "Remote Config",
explanation: "Remote Config allows changing app behavior without updating the app."
},
{
id: 16,
question: "Which Firebase feature records application crashes?",
options: [
"Crashlytics",
"Firestore",
"Storage",
"Hosting"
],
answer: "Crashlytics",
explanation: "Firebase Crashlytics helps developers monitor and fix app crashes."
},
{
id: 17,
question: "Which Firebase service allows file uploads such as images and videos?",
options: [
"Cloud Storage",
"Realtime Database",
"Cloud Functions",
"Hosting"
],
answer: "Cloud Storage",
explanation: "Cloud Storage is used to securely store user files."
},
{
id: 18,
question: "Which company owns Firebase?",
options: [
"Google",
"Microsoft",
"Amazon",
"Meta"
],
answer: "Google",
explanation: "Firebase has been owned by Google since 2014."
},
{
id: 19,
question: "Firebase mainly follows which database model?",
options: [
"NoSQL",
"Relational",
"Hierarchical",
"Network"
],
answer: "NoSQL",
explanation: "Firebase databases are NoSQL databases."
},
{
id: 20,
question: "Which Firebase service helps monitor user engagement and app usage?",
options: [
"Analytics",
"Hosting",
"Cloud Storage",
"Authentication"
],
answer: "Analytics",
explanation: "Firebase Analytics provides reports about user engagement and app performance."
}
];

export default firebaseQuestions;
