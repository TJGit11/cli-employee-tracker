// import pool from "./pool.mjs";

import { promisePool } from "./utils/pool.mjs";

// export function start() {
//     inquirer.prompt([
//         type: 'list',
//         name: 'action',
//         message: 'What would you like to do?",
//         chocies: [
//             "View All Departments"
//         ])

export async function viewAllEmployees() {
  const [rows] = await promisePool.query(
    'SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id'
  );
  console.table(rows);
}

export async function addEmployee() {}

export async function updateEmployeeRole() {}

export async function viewAllRoles() {
  const [rows] = await promisePool.query("SELECT * FROM roles");
  console.table(rows);
}

export async function addRole() {}

export async function viewAllDepartments() {
  const [rows] = await promisePool.query("SELECT * FROM department");
  console.table(rows);
}

export async function addDepartment() {}
