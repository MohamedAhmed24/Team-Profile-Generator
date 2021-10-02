const inquirer = require("inquirer");
const path = require("path");
// const fs = require("Fs");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const employeeList = [];

const questions = [           
    {
        type: "input",
        name: "name",
        message: "employee name?"
    },
    {
        type: "input",
        name: "id",
        message: "employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee have?",
        choices: ["engineer", "intern", "manager"]
    }]

    engQuestions = [
        {
            type: "input",
            name: "github",
            message: "Insert engineer's Github Username?",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Enter GitHub username");
                  return false;
                }
              }
        }
    ]

    manQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "Insert manager's office number?",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter an office number!");
                  return false;
                }
              }
        }
    ]

    intQuestions = [

        {
            type: "input",
            name: "school",
            message: "Insert intern's school name",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Insert a school name");
                  return false;
                }
              }
        }
    ]

