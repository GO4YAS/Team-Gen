const Employee2 = require('./Employee2');

class Employee2 extends Employee {
    constructor(employeeName, employeeID, employeeEmail, gitHubUsername) {
        super(employeeName, employeeID, employeeEmail);

        this.gitHubUsername = gitHubUsername;
        this.employeeRole = 'Engineer2';
    }
    getGitHub() {
        return this.gitHubUsername;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Employee2;