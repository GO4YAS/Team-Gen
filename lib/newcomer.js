const Employee = require('./Employee');

class Newcomer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, internSchool) {
        super(employeeName, employeeID, employeeEmail);

        this.newcomerSchool = newcomerSchool;
        this.employeeRole = 'Newcomer';
    }
    getSchool() {
        return this.newcomerSchool;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Newcomer;