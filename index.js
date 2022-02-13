// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkDown');

// TODO: Create an array of questions for user input
const questions = () => {  
    return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project. (Required)',
      validate: describeInput => {
        if (describeInput) {
          return true;
        } else {
          console.log('Please enter a project description.');
          return false;
        }
      }   
    }
    ]);   
};  // questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('in function WRITETOFILE');
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your README was successfully created at this location: ' + fileName
            });
        });
    });
}; // end function writeToFile

// TODO: Create a function to initialize app
function init() {
    // instruct the user
    console.log(`
        =========================================================
        This program will automatically generate a new formatted
        file named README.md in the ./dist directory of this 
        project. 
        
        Please answer the following questions to provide the
        data for your README.md.  Required fields are marked.
        =========================================================
    `);
};  // end function init

// Function call to initialize app
init();
questions()
    .then(generatePage)             
    .then(fileContent => {
        return writeToFile('./dist/README.md', fileContent);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });


////////////////////////////
// ORIGINAL
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
//////////////////////////////////////