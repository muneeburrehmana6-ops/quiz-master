const flutterQuestions = [
{
id: 1,
question: "What is Flutter?",
options: [
"A Programming Language",
"A UI Toolkit",
"A Database",
"A Web Browser"
],
answer: "A UI Toolkit",
explanation: "Flutter is Google's open-source UI toolkit for building cross-platform applications."
},
{
id: 2,
question: "Who developed Flutter?",
options: [
"Microsoft",
"Facebook",
"Google",
"Oracle"
],
answer: "Google",
explanation: "Flutter is developed and maintained by Google."
},
{
id: 3,
question: "Which programming language is used by Flutter?",
options: [
"Java",
"Dart",
"Kotlin",
"Swift"
],
answer: "Dart",
explanation: "Flutter applications are written using the Dart programming language."
},
{
id: 4,
question: "Which widget is the root widget of most Flutter apps?",
options: [
"MaterialApp",
"Scaffold",
"Container",
"Column"
],
answer: "MaterialApp",
explanation: "MaterialApp is commonly used as the root widget in Flutter applications."
},
{
id: 5,
question: "Which command creates a new Flutter project?",
options: [
"flutter create",
"flutter new",
"flutter init",
"create flutter"
],
answer: "flutter create",
explanation: "The 'flutter create' command creates a new Flutter project."
},
{
id: 6,
question: "Which widget is used to arrange children vertically?",
options: [
"Column",
"Row",
"Stack",
"Container"
],
answer: "Column",
explanation: "The Column widget arranges its children vertically."
},
{
id: 7,
question: "Which widget is used to arrange children horizontally?",
options: [
"Row",
"Column",
"Stack",
"Expanded"
],
answer: "Row",
explanation: "The Row widget arranges its children horizontally."
},
{
id: 8,
question: "Which widget provides the basic Material Design visual layout structure?",
options: [
"Scaffold",
"Container",
"Card",
"AppBar"
],
answer: "Scaffold",
explanation: "Scaffold provides the basic visual layout structure for Material apps."
},
{
id: 9,
question: "Which command runs a Flutter application?",
options: [
"flutter run",
"flutter start",
"flutter launch",
"flutter execute"
],
answer: "flutter run",
explanation: "The 'flutter run' command builds and runs a Flutter application."
},
{
id: 10,
question: "Flutter is mainly used for developing?",
options: [
"Cross-platform Apps",
"Operating Systems",
"Databases",
"Games Only"
],
answer: "Cross-platform Apps",
explanation: "Flutter allows developers to build Android, iOS, Web, Windows, macOS, and Linux apps from one codebase."
}
,
{
id: 11,
question: "Which widget is used to display text in Flutter?",
options: [
"Text",
"Label",
"Paragraph",
"Typography"
],
answer: "Text",
explanation: "The Text widget is used to display text on the screen."
},
{
id: 12,
question: "Which widget is used to display an image?",
options: [
"Image",
"Picture",
"Photo",
"Icon"
],
answer: "Image",
explanation: "The Image widget displays images from assets, files, or the network."
},
{
id: 13,
question: "Which widget is used to create a clickable button?",
options: [
"ElevatedButton",
"ButtonView",
"ClickButton",
"PressButton"
],
answer: "ElevatedButton",
explanation: "ElevatedButton is the standard Material button in Flutter."
},
{
id: 14,
question: "Which widget allows scrolling when content exceeds the screen size?",
options: [
"ListView",
"Column",
"Container",
"Expanded"
],
answer: "ListView",
explanation: "ListView provides a scrollable list of widgets."
},
{
id: 15,
question: "Which method is called when a StatefulWidget is first created?",
options: [
"initState()",
"build()",
"dispose()",
"start()"
],
answer: "initState()",
explanation: "initState() is called once when the State object is created."
},
{
id: 16,
question: "Which method rebuilds the UI after state changes?",
options: [
"setState()",
"updateState()",
"refresh()",
"rebuild()"
],
answer: "setState()",
explanation: "Calling setState() tells Flutter to rebuild the widget."
},
{
id: 17,
question: "Which widget is used to add padding around another widget?",
options: [
"Padding",
"Margin",
"Space",
"Container"
],
answer: "Padding",
explanation: "The Padding widget adds empty space around its child."
},
{
id: 18,
question: "Which widget stacks children on top of each other?",
options: [
"Stack",
"Column",
"Row",
"ListView"
],
answer: "Stack",
explanation: "The Stack widget overlays its children."
},
{
id: 19,
question: "Which file contains the dependencies of a Flutter project?",
options: [
"pubspec.yaml",
"flutter.json",
"package.json",
"config.yaml"
],
answer: "pubspec.yaml",
explanation: "The pubspec.yaml file manages packages and project settings."
},
{
id: 20,
question: "What is one major advantage of Flutter?",
options: [
"Single Codebase for Multiple Platforms",
"Fast UI Rendering",
"Hot Reload",
"All of the above"
],
answer: "All of the above",
explanation: "Flutter provides Hot Reload, fast rendering, and one codebase for Android, iOS, Web, Windows, macOS, and Linux."
}
];

export default flutterQuestions;