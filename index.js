// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe how to use your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please describe how to contribute to your project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide any tests for your project',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select a license',
        name: 'license',
        choices: [
            'GNU General Public License 3.0',
            'MIT',
            'Apache 2.0 License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            "None"
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // let data = response;
    // let fileName = 'README.md';
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log('README successfully written!')
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        return response
    }).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
