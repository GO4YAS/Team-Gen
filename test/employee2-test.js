const Employee2 = require('../lib/Employee2');

test('Creates an Employee object', () => {
    const employee2 = new Employee2('Employee2 Name', '15', 'employee2@noemail.com', 'GitHubUsername')

    expect(employee2.employeeName).toEqual(expect.any(String));
    expect(employee2.employeeID).toEqual(expect.any(String));
    expect(employee2.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(employee2.gitHubUsername).toEqual(expect.any(String));
});

test("Gets Employee2's GitHub username", () => {
    const employee2 = new Engineer('Employee2 Name', '15', 'employee2@noemail.com', 'GitHubUsername')

    expect(employee2.getGitHub()).toEqual(expect.any(String));
});

test("Gets Employee2's role", () => {
    const employee2 = new Employee2('Employee2 Name', '15', 'employee2@noemail.com', 'GitHubUsername')

    expect(employee2.getRole()).toEqual(expect.stringContaining('Employee2'));

    console.log(employee2);
});