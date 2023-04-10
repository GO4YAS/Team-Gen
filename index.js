const fs = require('fs');
const inquirer = require('inquirer');
const Teamleader = require('./lib/Teamleader');
const Employee = require('./lib/Employee');
const Newcomer = require('./lib/Newcomer');
const generateTeam = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const teamMembers = [];

const startApp = () => {

    // Initial questions for adding a Teamleader
    const addTeamleader = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'TeamleaderName',
                message: 'What is the team Leader\'s name?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team Leader\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team Leader\'s id?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team Leader\'s id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'TeamleaderEmail',
                message: 'What is the team Leader\'s e-mail?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team Leader\'s e-mail!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team Leader\'s office number?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team Leader\'s office number!');
                        return false;
                    }
                }
            },

        ])
            .then(answers => {
                const teamleader = new Teamleader(answers.leaderName, answers.id, answers.leaderEmail, answers.officeNumber);
                teamMembers.push(teamleader);

                createNewTeamMember();
            })
    }

    // Add Employee Questions
    const addEmployee = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the employee\'s name?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee\'s id?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee\'s id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'What is the employee\'s e-mail?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee\'s e-mail!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is the employee\'s GitHub username?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee\'s GitHub username!');
                        return false;
                    }
                }
            },

        ])
            .then(answers => {
                const employee = new Employee(answers.employeeName, answers.id, answers.employeeEmail, answers.gitHub);
                teamMembers.push(employee);

                createNewTeamMember();
            })
    }

    // And Newcomer Questions
    const addNewcomer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'newcomerName',
                message: 'What is the newcomer\'s name?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the newcomer\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the newcomer\'s id?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the newcomer\'s id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'newcomerEmail',
                message: 'What is the newcomer\'s e-mail?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the newcomer\'s e-mail!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the newcomer\'s school?',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the newcomer\'s school!');
                        return false;
                    }
                }
            },

        ])
            .then(answers => {
                const newcomer = new Newcomer(answers.newcomerName, answers.id, answers.newcomerEmail, answers.school);
                teamMembers.push(newcomer);

                createNewTeamMember();
            })
    }

    // Add an Employee or Newcomer or Finish menu options
    const createNewTeamMember = () => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'teamMenu',
                message: 'Which type of team member would you like to add?',
                choices: ['Employee', 'Newcomer', 'Finish building my team']
            }
        ])
            .then(answers => {
                if (answers.teamMenu === 'Employee') {
                    addEmployee();
                }
                else if (answers.teamMenu === 'Newcomer') {
                    addNewcomer();
                }
                else {
                    const pageHTML = generateTeam(teamMembers);
                    writeFile(pageHTML);
                    console.log('File created!');
                    copyFile();
                    console.log('Stylesheet Copied');
                }
            })
    }

    addTeamleader()

}

startApp();
