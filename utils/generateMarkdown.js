// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![GitHub license] (https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return (
      `## License 
      
      Copyright © ${license}. All rights reserved.
      
      Licensed under the ${license} license.`
    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Github URL

[${data.github}](https://github.com/${data.github}/)

## Description

${data.description}

## Table of Contents

* [Installations](#dependencies)

*[usage](#usage)

${renderLicenseLink(data.license)}

*[Contributors](#contributors)

*[Test](*test)

## Installations (Packages)

To install dependencies, please run these commands:

${data.packages}

## Repo Use

${data.use}

${renderLicenseSection(data.license)}

## Contributors

${data.contributors}

Contact me at ${data.email}

## Tests

To run tests, please run the following commands:

${data.test}

## Created by 

${data.name}
`;
}

module.exports = generateMarkdown;
