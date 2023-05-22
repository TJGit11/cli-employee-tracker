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
} from "./corpFunc.mjs";

async function begin() {
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
    ],
  });

  if (answers.options === "View all employees") {
    viewAllEmployees();
  }
  // begin();
}
begin();
// viewAllEmployees();
// viewAllRoles();
// viewAllDepartments();

// const promisePool = pool.promise();
// const [rows] = await promisePool.query(
//   "DELETE FROM employee where first_name = ?",
//   firstName
// );
// console.table(rows);
