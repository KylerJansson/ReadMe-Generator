// created a function that returns a license badge depending on selection. if none, returns an empty string.
function renderLicenseBadge(license) {
  const badges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Apache_2_0: "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    GPL_3_0: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    BSD_3_Clause: "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  };
  return badges[license] || '';
}

// function that returns the license link. if none, returns an empty string.
function renderLicenseLink(license) {
  const links = {
    MIT: "(https://opensource.org/licenses/MIT)",
    Apache_2_0: "(https://opensource.org/licenses/Apache-2.0)",
    GPL_3_0: "(https://www.gnu.org/licenses/gpl-3.0)",
    BSD_3_Clause: "(https://opensource.org/licenses/BSD-3-Clause)"
  };
  return links[license] || '';
}

// Function that returns the license section of README. if none, returns an empty string.
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
  
  This project is licensed under the ${license} license. For more info, please see [license]${renderLicenseLink(license)}.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions, please contact me at [${data.email}](mailto:${data.email}). You can also look at more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
