// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkDown 


// TODO: Create an array of questions for user input
const questions = [
    // Name 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: userInput => {
            if (userInput) {
                return true;          
            } else {
                console.log('Input error:t');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Project Description',
        validate: userDesc => {
            if (userDesc) {
                return true;          
            } else {
                console.log('Input error:description');
                return false;
            }
        },
    },
    // Installation 

    {
        type: 'input',
        name: 'installation',
        message: 'installation instructions?',
        validate: userInstallation => {
            if (userInstallation) {
                return true;          
            } else {
                console.log('Input error:Installation message');
                return false;
            }
        },
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage',
        validate: userUsage => {
            if (userUsage) {
                return true;          
            } else {
                console.log('Input error:Usage');
                return false;
            }
        },
    },

    {
        type: 'input',
        name: 'license',
        message: 'Choose a suitable license for project',
        validate: userDesc => {
            if (userDesc) {
                return true;          
            } else {
                console.log('Input error:description');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'contributor information',
        validate: userDesc => {
            if (userDesc) {
                return true;          
            } else {
                console.log('Input error:contributors');
                return false;
            }
        },
    },

    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this project?',
        validate: userDesc => {
            if (userDesc) {
                return true;          
            } else {
                console.log('Input error:description');
                return false;
            }
        },
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
