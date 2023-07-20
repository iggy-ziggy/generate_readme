// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = '';
  let currentLicense = data.license;
  switch(currentLicense) {
    case 'GNU General Public License 3.0':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache 2.0 License':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Boost Software License 1.0':
      badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    default:
      badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  currentLicense = data.license;
  switch(currentLicense) {
    case `GNU General Public License 3.0`:
      link = `## License
[Link to GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'MIT':
      link = `## License
[Link to MIT License](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache 2.0 License':
      link = `## License
[Link to Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      link = `## License
[Link to BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Boost Software License 1.0':
      link = `## License
[Link to Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    default:
      link = '';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license === "None") {
    return ``;
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data)}

# Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseSection(data)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description

${data.description}

## Installation Instructions

${data.installation}

## Usage

${data.usage}

${renderLicenseLink(data)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub Profile: (https://github.com/${data.github})

If you have any questions, feel free to contact me at:
${data.email}

`;
}

module.exports = generateMarkdown;
