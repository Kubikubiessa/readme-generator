// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

    },
    {
        type: 'input',
        name: 'contents',
        message: 'Create a list of contents', //create internal links in .md
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', //title goes in title position of readme.
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project', //paragraph added to readme under ##Description
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a detailed instruction for installing this project.', //paragraph added to readme under ##Installation.
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your application used for?', //paragraph added to readme under ##Usage
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide a detailed instruction for how to contribute this project.', //paragraph added to readme under ##Contributing.
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide a detailed instruction for running tests on this project.', //paragraph added to readme under ##Tests.
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'Please provide a full link to your Github account.', //github link added to readme link tag
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'Please provide your email.',//email link added to readme link tag
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: [
             'Apache', 'GPL', 'MIT', 'Mozilla', 'The Unlicense'
        ]
    }

];

// TODO: Create a function to write README file
/*function writeToFile(fileName, JSON.stringify(data) => {
    const markdown = generateMarkdown(data);
    fs.writeFile('sampleREADME.md', markdown, err => err ? console.error(err) : console.log('README generated'));

}*/

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
    const markdown = generateMarkdown(data);
    fs.writeFile('sampleREADME.md', markdown, err => err ? console.error(err) : console.log('README generated'));

    });
 
}

// Function call to initialize app
init();
