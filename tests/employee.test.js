const Employee = require("../lib/Employee");

test("set name with constructor function", () => {
    const name = "Michael Scott";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("set the user ID with constructor function", () => {
    const id = "1";
    const employee = new Employee("John Doe", id, "JohnDoe@gotmail.com");
    expect(employee.id).toBe(id);
  });

test("getEmail() should return the email", () => {
    const email = "JohnDoe@gotmail.com";
    const employee = new Employee("John Doe", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("John Doe", 1, "JohnDoe@gotmail.com");
    expect(employee.getRole()).toBe(role);
  });

