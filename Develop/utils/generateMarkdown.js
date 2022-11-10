// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [description](#Description)
  - [usage](#Usage)
  - [contributing](#Contributing)
  - [installation](#Installation)
  - [questions](#Questions)
  - [tests](#Tests)
  - [license](#License)
  
  ## Description
  ${data.description}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Installation
  ${data.installation}
  ## Questions
  ${data.questions-github}
  ${data.questions-email}
  ## Tests
  ${data.tests}
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
