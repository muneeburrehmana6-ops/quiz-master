const devOpsQuestions = [
  {
    id: 1,
    question: "What does DevOps combine?",
    options: [
      "Development and Operations",
      "Design and Programming",
      "Database and Security",
      "Testing and Marketing"
    ],
    answer: "Development and Operations",
    explanation: "DevOps combines software development and IT operations to improve software delivery."
  },
  {
    id: 2,
    question: "What is CI in DevOps?",
    options: [
      "Continuous Integration",
      "Code Installation",
      "Computer Integration",
      "Continuous Installation"
    ],
    answer: "Continuous Integration",
    explanation: "Continuous Integration automatically integrates and tests code changes frequently."
  },
  {
    id: 3,
    question: "What is CD commonly associated with in DevOps?",
    options: [
      "Continuous Delivery",
      "Computer Design",
      "Code Development",
      "Central Database"
    ],
    answer: "Continuous Delivery",
    explanation: "CD commonly refers to Continuous Delivery or Continuous Deployment."
  },
  {
    id: 4,
    question: "Which tool is widely used for CI/CD?",
    options: [
      "Jenkins",
      "Photoshop",
      "Excel",
      "Chrome"
    ],
    answer: "Jenkins",
    explanation: "Jenkins is a popular automation server used for CI/CD pipelines."
  },
  {
    id: 5,
    question: "Which platform is used for containerization?",
    options: [
      "Docker",
      "Git",
      "Jenkins",
      "Linux Mint"
    ],
    answer: "Docker",
    explanation: "Docker packages applications and their dependencies into containers."
  },
  {
    id: 6,
    question: "What is Kubernetes mainly used for?",
    options: [
      "Container orchestration",
      "Image editing",
      "Database design",
      "Code compilation"
    ],
    answer: "Container orchestration",
    explanation: "Kubernetes manages and orchestrates containerized applications."
  },
  {
    id: 7,
    question: "Which tool is commonly used for version control?",
    options: [
      "Git",
      "Docker",
      "Jenkins",
      "Kubernetes"
    ],
    answer: "Git",
    explanation: "Git is a distributed version control system."
  },
  {
    id: 8,
    question: "What is Infrastructure as Code?",
    options: [
      "Managing infrastructure using configuration files and code",
      "Writing HTML pages",
      "Creating database tables",
      "Designing user interfaces"
    ],
    answer: "Managing infrastructure using configuration files and code",
    explanation: "Infrastructure as Code allows infrastructure to be created and managed through code."
  },
  {
    id: 9,
    question: "Which tool is commonly used for Infrastructure as Code?",
    options: [
      "Terraform",
      "React",
      "Bootstrap",
      "jQuery"
    ],
    answer: "Terraform",
    explanation: "Terraform is an Infrastructure as Code tool used to provision cloud and infrastructure resources."
  },
  {
    id: 10,
    question: "What is a DevOps pipeline?",
    options: [
      "An automated process for building, testing, and deploying software",
      "A database",
      "A programming language",
      "A web browser"
    ],
    answer: "An automated process for building, testing, and deploying software",
    explanation: "A DevOps pipeline automates stages such as building, testing, and deploying applications."
  }
,
{
  id: 11,
  question: "Which cloud platform is commonly used in DevOps?",
  options: [
    "AWS",
    "Photoshop",
    "Microsoft Word",
    "Figma"
  ],
  answer: "AWS",
  explanation: "AWS provides many cloud services commonly used for DevOps workflows."
},
{
  id: 12,
  question: "What is Docker Compose used for?",
  options: [
    "Managing multiple Docker containers",
    "Writing JavaScript",
    "Editing images",
    "Managing Git branches"
  ],
  answer: "Managing multiple Docker containers",
  explanation: "Docker Compose defines and runs multi-container applications."
},
{
  id: 13,
  question: "What is a container?",
  options: [
    "A lightweight isolated environment for running an application",
    "A programming language",
    "A database server",
    "A web browser"
  ],
  answer: "A lightweight isolated environment for running an application",
  explanation: "Containers package applications with the dependencies they need to run."
},
{
  id: 14,
  question: "Which command is commonly used to create a Docker image?",
  options: [
    "docker build",
    "docker create-image",
    "docker make",
    "docker compile"
  ],
  answer: "docker build",
  explanation: "docker build creates a Docker image from a Dockerfile and build context."
},
{
  id: 15,
  question: "What is monitoring in DevOps?",
  options: [
    "Tracking system performance and health",
    "Writing HTML",
    "Creating logos",
    "Designing databases"
  ],
  answer: "Tracking system performance and health",
  explanation: "Monitoring helps teams detect performance problems and system failures."
},
{
  id: 16,
  question: "What does YAML commonly provide in DevOps?",
  options: [
    "Configuration files",
    "Image editing",
    "Database storage",
    "Video processing"
  ],
  answer: "Configuration files",
  explanation: "YAML is widely used for configuration, including CI/CD pipelines and Kubernetes manifests."
},
{
  id: 17,
  question: "What is blue-green deployment?",
  options: [
    "Running two production environments to reduce deployment risk",
    "Using two programming languages",
    "Creating two databases",
    "Running two operating systems on one computer"
  ],
  answer: "Running two production environments to reduce deployment risk",
  explanation: "Blue-green deployment uses separate environments so traffic can be switched between versions."
},
{
  id: 18,
  question: "What is rollback in software deployment?",
  options: [
    "Returning to a previous working version",
    "Deleting all source code",
    "Creating a new programming language",
    "Increasing server memory"
  ],
  answer: "Returning to a previous working version",
  explanation: "Rollback restores an earlier version when a new deployment causes problems."
},
{
  id: 19,
  question: "What is the main purpose of automation in DevOps?",
  options: [
    "Reduce manual work and improve consistency",
    "Make software slower",
    "Remove version control",
    "Prevent testing"
  ],
  answer: "Reduce manual work and improve consistency",
  explanation: "Automation makes repetitive processes faster, consistent, and less error-prone."
},
{
  id: 20,
  question: "What is the main goal of DevOps?",
  options: [
    "Deliver software faster and more reliably",
    "Only write source code",
    "Only manage databases",
    "Only design websites"
  ],
  answer: "Deliver software faster and more reliably",
  explanation: "DevOps aims to improve collaboration, automation, reliability, and the speed of software delivery."
}
];

export default devOpsQuestions;