const gitGithubQuestions = [
{
id: 1,
question: "What is Git?",
options: [
"A Programming Language",
"A Version Control System",
"A Database",
"A Web Browser"
],
answer: "A Version Control System",
explanation: "Git is a distributed version control system used to track changes in source code."
},
{
id: 2,
question: "Who created Git?",
options: [
"James Gosling",
"Linus Torvalds",
"Guido van Rossum",
"Dennis Ritchie"
],
answer: "Linus Torvalds",
explanation: "Git was created by Linus Torvalds in 2005."
},
{
id: 3,
question: "What is GitHub?",
options: [
"A Database",
"A Cloud Platform for Git Repositories",
"A Programming Language",
"A Web Framework"
],
answer: "A Cloud Platform for Git Repositories",
explanation: "GitHub is an online platform for hosting and collaborating on Git repositories."
},
{
id: 4,
question: "Which command initializes a new Git repository?",
options: [
"git init",
"git start",
"git create",
"git new"
],
answer: "git init",
explanation: "The 'git init' command creates a new Git repository."
},
{
id: 5,
question: "Which command checks the current status of a Git repository?",
options: [
"git status",
"git check",
"git info",
"git state"
],
answer: "git status",
explanation: "git status displays the state of the working directory and staging area."
},
{
id: 6,
question: "Which command adds files to the staging area?",
options: [
"git add",
"git push",
"git stage",
"git commit"
],
answer: "git add",
explanation: "git add stages changes before committing."
},
{
id: 7,
question: "Which command saves changes permanently to the repository?",
options: [
"git commit",
"git push",
"git save",
"git upload"
],
answer: "git commit",
explanation: "git commit records staged changes in the repository."
},
{
id: 8,
question: "Which command uploads local commits to GitHub?",
options: [
"git push",
"git upload",
"git publish",
"git send"
],
answer: "git push",
explanation: "git push uploads local commits to a remote repository."
},
{
id: 9,
question: "Which command downloads a GitHub repository to your computer?",
options: [
"git clone",
"git copy",
"git download",
"git fetch"
],
answer: "git clone",
explanation: "git clone copies a remote repository to your local machine."
},
{
id: 10,
question: "Which command downloads the latest changes without merging them?",
options: [
"git fetch",
"git pull",
"git merge",
"git clone"
],
answer: "git fetch",
explanation: "git fetch downloads updates from the remote repository without merging."
}
,
{
id: 11,
question: "Which command downloads and merges changes from a remote repository?",
options: [
"git pull",
"git fetch",
"git merge",
"git clone"
],
answer: "git pull",
explanation: "git pull fetches changes from the remote repository and merges them into the current branch."
},
{
id: 12,
question: "Which command creates a new branch?",
options: [
"git branch",
"git new",
"git checkout",
"git create"
],
answer: "git branch",
explanation: "The git branch command creates a new branch."
},
{
id: 13,
question: "Which command switches to another branch?",
options: [
"git checkout",
"git branch",
"git switchbranch",
"git move"
],
answer: "git checkout",
explanation: "git checkout <branch-name> switches to another branch."
},
{
id: 14,
question: "Which command merges one branch into another?",
options: [
"git merge",
"git combine",
"git join",
"git push"
],
answer: "git merge",
explanation: "git merge combines changes from one branch into another."
},
{
id: 15,
question: "Which command shows the commit history?",
options: [
"git log",
"git history",
"git commits",
"git show"
],
answer: "git log",
explanation: "git log displays the commit history of the repository."
},
{
id: 16,
question: "Which command removes a file from Git tracking?",
options: [
"git rm",
"git remove",
"git delete",
"git clean"
],
answer: "git rm",
explanation: "git rm removes a file from both the working directory and Git tracking."
},
{
id: 17,
question: "What is a repository (repo) in Git?",
options: [
"A folder containing project files and Git history",
"A programming language",
"A cloud server",
"A database"
],
answer: "A folder containing project files and Git history",
explanation: "A repository stores project files and their version history."
},
{
id: 18,
question: "What is the purpose of branching in Git?",
options: [
"To work on new features without affecting the main code",
"To delete files",
"To upload projects",
"To install Git"
],
answer: "To work on new features without affecting the main code",
explanation: "Branches allow independent development without changing the main branch."
},
{
id: 19,
question: "Which GitHub feature is commonly used to request code review before merging?",
options: [
"Pull Request",
"Fork",
"Issue",
"Release"
],
answer: "Pull Request",
explanation: "A Pull Request allows team members to review code before merging."
},
{
id: 20,
question: "What is one major advantage of Git and GitHub?",
options: [
"Version Control",
"Team Collaboration",
"Backup of Code",
"All of the above"
],
answer: "All of the above",
explanation: "Git and GitHub provide version control, collaboration, and secure code backup."
}
];

export default gitGithubQuestions;