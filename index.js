// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a description of your project:"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How does one use your project?"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license is used?",
        choices: 
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Are there any other contributors?"
    },
    {
        type: 'input',
        name: 'test',
        message: "What are the test instructions?"
    }
];


async function getInput() {
    try {
        const answers = await inquirer.prompt(questions);

        // Handle answers

    } catch (error) {
        console.error('Error:', error);
    }
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
