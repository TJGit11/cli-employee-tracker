import mysql from "mysql2";
import inquirer from "inquirer";
import { promisePool } from "./utils/pool.mjs";
import {
  viewAllEmployees,
  addEmployee,
  viewAllRoles,
  addRole,
  updateEmployeeRole,
  viewAllDepartments,
  addDepartment,
  quitEmployeeTracker,
} from "./corpFunc.mjs";

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
begin();
