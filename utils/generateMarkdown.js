// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (!license.toString()) {
    return ``;      // no license was passed in
  };

  // build license badge for markup and return
  
  return `[![License](https://img.shields.io/badge/License-${convertChars(license)}-orange.svg)]${renderLicenseLink(license)}`;
 
} // end function renderLicenseBadge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license.toString()) {
    case "Apache-2.0":
    case "BSD-2-Clause":
    case "BSD-3-Clause":
    case "Eclipse":
    case "MIT":
      return `(https://opensource.org/licenses/${license})`;
    case "Mozilla":
      return `(https://opensource.org/licenses/MPL-2.0)`;
    case "Creative Commons":
      return `(https://creativecommons.org/licenses/by/4.0/)`;
    case "GNU":
      return `(https://www.gnu.org/licenses/)`;
    default:        // no license provided or matched   
    return ``;
  } // switch
    
}; // end function renderLicenseLink

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license.toString()) {
    return ``;
  }

  return `
  ## **License**
  
  ### Licensed under the [${license}]${renderLicenseLink(license)} license.
  
  `;
  
}; // end function renderLicenseSection

// function to format strings for badge build
function convertChars(license) {
  
  license = license.toString();
  license = license.replace("-", "%20");      // replace the first hyphen
  license = license.replace(" ", "%20");      // replace any spaces
  return license.replace("-", "--");          // double the hyphens

}; // end function convertChars

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
  - ${data.install}
  ## **Usage**
  - ${data.usage}
  ## **Contributing**
  - ${data.guide}
  ## **Tests**
  - ${data.test}
  ## **Questions**
  ### Github Profile:  https://github.com/${data.gitname}
  
  ### You may contact ${data.email} with any questions related to this repository.
  
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;


