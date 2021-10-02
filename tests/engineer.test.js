const Engineer = require("../lib/engineer");

test("set GitHub username using constructor function", () => {
    const github = "MohamedAhmed24";
    const employee = new Engineer("Mohamed", 1, "Mohamed.ahmed1357@yahoo.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Mohamed", 1, "mohamed.ahmed1357@yahoo.com", "MohamedAhmed24");
    expect(employee.getRole()).toBe(role);
  });