// Function to display the badge
function renderLicenseBadge(license) {
    if (license !== "no license") {
      const licenseType = license.replace(/ /g, "%20");
      return `![GitHub license](https://img.shields.io/badge/license-${licenseType}-blue.svg)`;
    }
    return "";
  }
  
  // Creating a function to generate markdown for README
  function createMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [How to Use This Application](#How-to-use-this-application)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Deployed Application URL](#Deployed-application-url)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.install}
  
  ## How to Use This Application
  ${data.usage}
  
  ## Contributors
  ${data.contributors}
  
  ## Testing
  ${data.testing}
  
  ## Deployed Application URL
  ${data.link}
  

  
  ## Questions
  Any questions contact me [here](mailto:${data.email}) or check [github/${data.github}](https://github.com/${data.github}).
  `;
  }
  
  module.exports = createMarkdown;
  