const Manager = require("../lib/manager");

test("set office number using constructor function", () => {
    const officeNumber = "651";
    const employee = new Manager("Ahmed", 1, "mohamed.ahmed1357@yahoo.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Mallory", 1, "mohamed.ahmed1357@yahoo.com", "MohamedAhmed24");
    expect(employee.getRole()).toBe(role);
  });
