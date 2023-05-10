import pool from "./pool.mjs";

// export function start() {
//     inquirer.prompt([
//         type: 'list',
//         name: 'action',
//         message: 'What would you like to do?",
//         chocies: [
//             "View All Departments"
//         ])

export async function viewAllEmployees() {}

export async function addEmployee() {}

export async function updateEmployeeRole() {}

export async function viewAllRoles() {
  const [rows] = await pool.query(
    "SELECT roles.id, roles.title, roles.salary, role.department_id"
  );
  console.table(rows);
}

export async function addRole() {}

export async function viewAllDepartments() {
  try {
    const [rows] = await pool.query("SELECT * FROM department");
    console.table(rows);
    return rows; // Return the result of the query
  } catch (err) {
    console.error(err);
  }
}

export async function addDepartment() {}
