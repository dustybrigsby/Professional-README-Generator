// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does one use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is used?',
        choices: [ 'None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Are there any other contributors?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
    }
];


async function getInput() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log('answers:', answers);
        // Handle answers

    } catch (error) {
        console.error('Error:', error);
    }
}


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.log('Error while writing file:', err);
        } else {
            console.log('README.md successfully generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    getInput();
}

// Function call to initialize app
init();
