// Importing the required modules
const fs = require("fs");
const inquirer = require("inquirer");
const createMarkdown = require("./utils/createMarkdown");

// Questions for the user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the name of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project",
  },
  {
    type: "input",
    name: "install",
    message: "Please explain the installation process",
  },
  {
    type: "input",
    name: "how_to_use",
    message: "Please explain how to use the app",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to the project?",
  },
  {
    type: "input",
    name: "testing",
    message: "How to test your project?",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email for contact info",
  },
  {
    type: "list",
    name: "license",
    message: "Is your app licensed? Please select one from the list",
    choices: [
      "Apache 2.0",
      "BSD-3 Clause",
      "GNU GPL v3",
      "IBM Public License 1.0",
      "MIT",
      "no license",
    ],
    validate(answer) {
      if (answer === "no license" || answer.length > 0) {
        return true;
      }
      return "Please select a license. If no license is required, choose 'no license'.";
    },
  },
  {
    type: "input",
    name: "url",
    message: "Please provide the deployed application URL",
  },
];

// Function to save README file
function writeReadme(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README file created.")
  );
}

// Function to start the application
function starting() {
  inquirer.prompt(questions).then((data) => {
    const content = createMarkdown(data);
    writeReadme("README.md", content);
  });
}

// Function call to start the application
starting();
