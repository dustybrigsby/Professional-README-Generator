// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge;

    if (license === 'Apache License 2.0') {
        licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
        return licenseBadge;
    } else if (license === 'GNU General Public License v3.0') {
        licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
        return licenseBadge;
    } else if (license === 'MIT License') {
        licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
        return licenseBadge;
    } else if (license === 'BSD 2-Clause "Simplified" License') {
        licenseBadge = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
        return licenseBadge;
    } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
        licenseBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
        return licenseBadge;
    } else if (license === 'Boost Software License 1.0') {
        licenseBadge = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
        return licenseBadge;
    } else if (license === 'Creative Commons Zero v1.0 Universal') {
        licenseBadge = 'https://licensebuttons.net/l/zero/1.0/80x15.png';
        return licenseBadge;
    } else if (license === 'Eclipse Public License 2.0') {
        licenseBadge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg';
        return licenseBadge;
    } else if (license === 'GNU Affero General Public License v3.0') {
        licenseBadge = 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';
        return licenseBadge;
    } else if (license === 'GNU General Public License v2.0') {
        licenseBadge = 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
        return licenseBadge;
    } else if (license === 'GNU Lesser General Public License v2.1') {
        licenseBadge = 'https://img.shields.io/badge/License-Lesser_GPL_v2.1-blue.svg';
        return licenseBadge;
    } else if (license === 'Mozilla Public License 2.0') {
        licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
        return licenseBadge;
    } else if (license === 'The Unlicense') {
        licenseBadge = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
        return licenseBadge;
    } else {
        licenseLink = '';
        return licenseLink;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;

    if (license === 'Apache License 2.0') {
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        return licenseLink;
    } else if (license === 'GNU General Public License v3.0') {
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        return licenseLink;
    } else if (license === 'MIT License') {
        licenseLink = 'https://opensource.org/licenses/MIT';
        return licenseLink;
    } else if (license === 'BSD 2-Clause "Simplified" License') {
        licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
        return licenseLink;
    } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
        return licenseLink;
    } else if (license === 'Boost Software License 1.0') {
        licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
        return licenseLink;
    } else if (license === 'Creative Commons Zero v1.0 Universal') {
        licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
        return licenseLink;
    } else if (license === 'Eclipse Public License 2.0') {
        licenseLink = 'https://opensource.org/licenses/EPL-1.0';
        return licenseLink;
    } else if (license === 'GNU Affero General Public License v3.0') {
        licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
        return licenseLink;
    } else if (license === 'GNU General Public License v2.0') {
        licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
        return licenseLink;
    } else if (license === 'GNU Lesser General Public License v2.1') {
        licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0.html';
        return licenseLink;
    } else if (license === 'Mozilla Public License 2.0') {
        licenseLink = 'https://opensource.org/licenses/MPL-2.0';
        return licenseLink;
    } else if (license === 'The Unlicense') {
        licenseLink = 'http://unlicense.org/';
        return licenseLink;
    } else {
        licenseLink = '';
        return licenseLink;
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${ data.title }`;
}

module.exports = generateMarkdown;
