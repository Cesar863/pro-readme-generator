// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'name',
        message: 'Who created this repo? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the creators first and last name!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'contact',
        message: 'Where can you be contacted?'
    },
    {
        type:'input',
        name:'github',
        message:'What is your Github username? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your project is about. (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a quick description about your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license is used in your project?',
        choices: ['none','afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear','cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3c','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa', 'zlib',
        ]
    },
    {
        type:'input',
        name:'packages',
        message:'What packages need to be installed? If any what command should be used to install these packages?',
        default: 'none',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command is entered to run tests?',
        default: 'node test',
    },
    {
        type: 'input',
        name: 'use',
        message: 'What is this repo used for? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the purpose of your repo.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name:'contributors',
        message:'Who contributed to this repo?',
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFile(path.join(process.cwd(), fileName), data);
// }
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve ({
                okay: true,
                message: 'File Created'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then ((inquirerAnswers) => {
            console.log("Please wait while your README is being generated")
            writeToFile(generateMarkdown({ ...inquirerAnswers }));
            console.log("File created!")
        });
}

// Function call to initialize app
init();
