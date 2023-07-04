const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'user',
        message: 'What is the name you would like to be referred to as?'
    },
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

        const data = {
            user: answers.user,
            title: answers.title,
            description: answers.description,
            installation: answers.installation,
            usage: answers.usage,
            license: { name: answers.license, badge: '', link: '', blurb: '' },
            contributors: answers.contributors,
            test: answers.test
        };

        data.license.badge = generateMarkdown.renderLicenseBadge(data.license.name);
        data.license.link = generateMarkdown.renderLicenseLink(data.license.name);
        data.license.blurb = generateMarkdown.renderLicenseSection(data.user, data.license.name);

        const markdownString = generateMarkdown.generateMarkdown(data);

        writeToFile(markdownString);

    } catch (error) {
        console.error('Error:', error);
    }
}

function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.log('Error while writing file:', err);
        } else {
            console.log('README.md successfully generated!');
        }
    });
}

function init() {
    getInput();
}

init();
