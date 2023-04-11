const Teamleader = require('../lib/Teamleader');

test('Creates a Teamleader object', () => {
    const teamleader = new Teamleader('Teamleader', '10', 'teamleader@noemail.com', 'Room300')

    expect(teamleader.employeeName).toEqual(expect.any(String));
    expect(teamleader.employeeID).toEqual(expect.any(String));
    expect(teamleader.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(teamleader.officeNumber).toEqual(expect.any(String));
});

test("Gets Teamleader's office number", () => {
    const teamleader = new Teamleader('Teamleader', '10', 'teamleader@noemail.com', 'Room300')

    expect(teamleader.getOfficeNumber()).toEqual(expect.any(String));
});

test("Gets Teamleader's role", () => {
    const teamleader = new Teamleader('Teamleader', '10', 'teamleader@noemail.com', 'Room300')

    expect(teamleader.getRole()).toEqual(expect.stringContaining('Teamleader'));

    console.log(teamleader);
});


// test("Gets Teamleader's name", () => {
//     const teamleader = new Teamleader('Yasmein', '222', 'email@noemail.com', '234')

//     expect(teamleader.getName()).toEqual(expect.any(String));
// });

// test("Gets Teamleader's id", () => {
//     const teamleader = new Teamleader('Yasmein', '222', 'email@noemail.com', '234')

//     expect(teamleader.getID()).toEqual(expect.any(String));
// });

// test("Gets Teamleader's email", () => {
//     const teamleaeder = new Teamleader('Yasmein', '222', 'email@noemail.com', '234')

//     expect(teamleader.getEmail()).toEqual(expect.stringContaining('@'));
// });