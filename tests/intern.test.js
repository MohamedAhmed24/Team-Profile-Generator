const Intern = require("../lib/intern");

test("set school using constructor function", () => {
    const school = "Harvard University";
    const employee = new Intern("Mohamed", 1, "mohamed.ahmed1357@yahoo.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Mohamed", 1, "mohamed.ahmed1357@yahoo.com", "MohamedAhmed24");
    expect(employee.getRole()).toBe(role);
  });