const Employee = require('./Employee');

class Employee2 extends Employee {
    constructor(employeeName, employeeID, employeeEmail, gitHubUsername) {
        super(employeeName, employeeID, employeeEmail);

        this.gitHubUsername = gitHubUsername;
        this.employeeRole = 'Employee';
    }
    getGitHub() {
        return this.gitHubUsername;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Employee2;