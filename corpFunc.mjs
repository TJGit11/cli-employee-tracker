// import pool from "./pool.mjs";

import { promisePool } from "./pool.mjs";

// export function start() {
//     inquirer.prompt([
//         type: 'list',
//         name: 'action',
//         message: 'What would you like to do?",
//         chocies: [
//             "View All Departments"
//         ])

export async function viewAllEmployees() {
  const [rows] = await promisePool.query("SELECT * FROM employees");
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
