const Newcomer= require('../lib/Newcomer');

test('Creates an Newcomer object', () => {
    const newcomer = new Newcomer('Newcomer Name', '20', 'newcomer@noemail.com', 'newcomerSchool')

    expect(newcomer.employeeName).toEqual(expect.any(String));
    expect(newcomer.employeeID).toEqual(expect.any(String));
    expect(newcomer.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(newcomer.newcomerSchool).toEqual(expect.any(String));
});

test("Gets Newcomer's school", () => {
    const newcomer = new Newcomer('Newcomer Name', '20', 'newcomer@noemail.com', 'newcomerSchool')

    expect(newcomer.getSchool()).toEqual(expect.any(String));
});

test("Gets Newcomer's role", () => {
    const newcomer = new Newcomer('Newcoemr Name', '20', 'newcomer@noemail.com', 'newcomerSchool')

    expect(newcomer.getRole()).toEqual(expect.stringContaining('Newcomer'));

    console.log(newcomer);
});