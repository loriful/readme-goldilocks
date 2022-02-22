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
    validate: titleInput => {       // required field
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project title.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project. (Required)',
    validate: describeInput => {      // required field
      if (describeInput) {
        return true;
      } else {
        console.log('Please enter a project description.');
        return false;
      }
    }   
  },
  {
    type: 'input',
    name: 'install',
    message: 'Enter the installation instructions.'
  },
  { type: 'input',
    name: 'usage',
    message: 'Enter the usage information.'
  },
  {
    type: 'input',
    name: 'guide',
    message: 'Enter the contribution guidelines.'
  },
  { 
    type: 'input',
    name: 'test',
    message: 'Enter the test instructions.'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose the license type for the application. (One selection is required.)',
    choices: ['Apache-2.0','BSD-2-Clause','BSD-3-Clause','Creative Commons','Eclipse','GNU','MIT','Mozilla']
  },
  {
    type: 'input',
    name: 'gitname',
    message: 'Provide your github user name. (Required)',
    validate: githubInput => {        // required field
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your github user name.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your e-mail address. (Required)',
    validate: mailInput => {
      if (mailInput.includes("@")) {        // check validity
        return true;
      } else {
        console.log('Please enter a valid e-mail address.');
        return false;
      }
    }
  }  
  ]);  
};  // questions


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,           // tell the user where the file is
                message: '\n \n ======================================== \n Your README was successfully created at this location: ' + fileName + '\n \n ========================================'
            });
        });
    });
}; // end function writeToFile


// TODO: Create a function to initialize app
function init () {
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
init();                  // prompt the user with directions
questions()             // get the README information from user
    .then (makeFile => {
    return generatePage(makeFile);      // create the markdown
    })
    .then(fileContent => {              // generate the readme
        return writeToFile('./dist/README.md', fileContent);
    })
    .then(writeFileResponse => {        // inform user where the file is
        console.log(writeFileResponse.message);
    })
    .catch(err => {                     // display error, if any
        console.log(err);
    });