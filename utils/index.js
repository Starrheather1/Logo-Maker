// TODO: Include packages needed for this application
const fs = require("fs")
var inquirer = require('inquirer');
const generateSvg = require('./utils/generateSvg')

// TODO: Create an array of questions for user input
const questions = [{
  type: "input", message: "what text would you like to print on the logo?",
  name: "text"
}, {
  type: "input", message: "what is the text color?",
  name: "textColor"
}, {
  type: "list", message: "what is the logo shape?",
  choices: ["circle", "triangle", "square"],
  name: "shape"
}, {
  type: "input", message: "what is the shape color?",
  name: "shapeColor"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");

    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)

    .then((answers) => {
      writeToFile("dist/logo.svg", generateSvg(answers))

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();

