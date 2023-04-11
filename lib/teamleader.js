const Employee = require('./Employee');

class Teamleader extends Employee {
    constructor(employeeName, employeeID, employeeEmail, officeNumber) {
        super(employeeName, employeeID, employeeEmail);

        this.officeNumber = officeNumber;
        this.employeeRole = 'Teamleader';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Teamleader;