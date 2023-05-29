import inquirer from "inquirer";
import { viewAllDepartments, addDepartment } from "./utils/departments.mjs";
import { viewAllEmployees, addEmployee } from "./utils/employee.mjs";
import { viewAllRoles, addRole, updateEmployeeRole } from "./utils/roles.mjs";

export async function begin() {
  const answers = await inquirer.prompt({
    message: "What would you like to do?",
    type: "list",
    name: "options",
    choices: [
      "View all employees",
      "Add an employee",
      "View all employee roles",
      "Add a new employee role",
      "Update an employee role",
      "View all departments",
      "Add a new department",
      "Quit",
    ],
  });

  switch (answers["options"]) {
    case "View all employees":
      viewAllEmployees();
      break;
    case "View all employee roles":
      viewAllRoles();
      break;
    case "View all departments":
      viewAllDepartments();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Add a new employee role":
      addRole();
      break;
    case "Add a new department":
      addDepartment();
      break;
    case "Update an employee role":
      updateEmployeeRole();
      break;
    case "Quit":
      quitEmployeeTracker();
      break;
  }
}
// Function to quit the program //
async function quitEmployeeTracker() {
  console.log("Goodbye!");
}

begin();
