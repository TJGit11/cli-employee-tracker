// import pool from "./pool.mjs";
import inquirer from "inquirer";
import { promisePool } from "./utils/pool.mjs";
import { begin } from "./index.mjs";

export async function viewAllEmployees() {
  const [rows] = await promisePool.query(
    'SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary as salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id'
  );
  console.table(rows);
  begin();
}

export async function addEmployee() {
  const { newEmployee } = await inquirer.prompt([
    {
      type: "input",
      name: "newEmployee",
      message: "What is the name of the new employee?",
    },
  ]);
  const [rows] = await promisePool.query(
    "INSERT INTO employee (employee.name) VALUES (?)",
    newEmployee
  );
  console.log("Added", newEmployee, "to the database");
  console.table(rows);
}

export async function updateEmployeeRole() {}

export async function viewAllRoles() {
  const [rows] = await promisePool.query(
    "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles JOIN department on roles.department_id = department.id"
  );
  console.table(rows);
}

export async function addRole() {
  const { newRole } = await inquirer.prompt([
    {
      type: "input",
      name: "newRole",
      message: "What is the name of the new role?",
    },
  ]);
  const [rows] = await promisePool.query(
    "INSERT INTO roles (role.title) VALUES (?)",
    newRole
  );
  console.log("Added", newRole, "to the database");
  console.table(rows);
}

export async function viewAllDepartments() {
  const [rows] = await promisePool.query("SELECT * FROM department");
  console.table(rows);
}

export async function addDepartment() {
  const { newDepartment } = await inquirer.prompt([
    {
      type: "input",
      name: "newDepartment",
      message: "What is the name of the new department?",
    },
  ]);
  const [rows] = await promisePool.query(
    "INSERT INTO department (department.name) VALUES (?)",
    newDepartment,
    function (err, results) {
      if (rows.length === 0) {
        console.log("Can't enter in that department");
      } else {
        console.table(rows);
      }
    }
  );
  console.log("Added", newDepartment, "to the database");
  console.table(rows);
}

export async function quitEmployeeTracker() {
  console.log("Goodbye!");
}
