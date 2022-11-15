// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    GPL: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    Mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
    Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

  }
  return badges[license];
}
//renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  const licenseLinks = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    GPL: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    Mozilla:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
    Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

  }
  console.log(licenseLinks[license]);
  return licenseLinks[license];
}
//renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
 {
  if (license) {
return`Licensed under the ${renderLicenseLink(license)}`
  }else{
    return '';
  }
}
//renderLicenseSection();
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
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
  Please contact me at:
  ${data.questions1} 
  or 
  ${data.questions2}
  ## Tests
  ${data.tests}
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
