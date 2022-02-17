// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `
    [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
    `;
  };

    // return "[![License](https://img."+ license +".io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/"+ license +")";
  
  return ``;

} // end function renderLicenseBadge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ``;
  }

  return `placeholder for license link`;

}; // end function renderLicenseLink

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  }

  return `
  ## **License**
  Licensed under the [${license}] license.
  ${renderLicenseLink(license)}
  `;
  
}; // end function renderLicenseSection

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # **${data.title}**
  ${renderLicenseBadge(data.license)}
 
  ## **Description**
  ${data.description}
 
  ## **Table of Contents**
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## **Installation**
  -  ${data.install}
  ## **Usage**
  - ${data.usage}
  ## **Contributing**
  - ${data.guide}
  ## **Tests**
  - ${data.test}
  ## **Questions**
  ### Github Profile:  https://github.com/${data.gitname}
  
  ### E-mail:  ${data.email}
  Please send e-mail to the above address with any questions.
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;


