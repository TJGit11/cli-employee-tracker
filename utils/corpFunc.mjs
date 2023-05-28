// import pool from "./pool.mjs";
import inquirer from "inquirer";
import { promisePool } from "./pool.mjs";

// Function to start the program //
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

// Function to view all the employees//
export async function viewAllEmployees() {
  const [rows] = await promisePool.query(
    'SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary as salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id'
  );
  console.table(rows);
  begin();
}

// Function to add a new employee //
export async function addEmployee() {
  const [newEmployee] = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the name of the new employee?",
    },
  ]);
  const [rows] = await promisePool.query(
    "INSERT INTO employee (employee.first_name) VALUES (?)",
    [newEmployee]
  );
  console.log("Added", newEmployee, "to the database");
  console.table(rows);
  begin();
}

// Function to update the role of an employee //
export async function updateEmployeeRole() {}

// Function to see all the roles //
export async function viewAllRoles() {
  const [rows] = await promisePool.query(
    "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles JOIN department on roles.department_id = department.id"
  );
  console.table(rows);
  begin();
}
// Function to add a new role //
export async function addRole() {
  const [getDepartments] = await promisePool.query(
    "SELECT id, name, FROM department"
  );
  const departments = getDepartments.map((row) => ({
    name: row.name,
    value: row.id,
  }));
  const { newRole, newRoleDepartment, newRoleSalary } = await inquirer.prompt([
    {
      type: "input",
      name: "newRole",
      message: "What is the name of the new role?",
    },
    {
      type: "input",
      name: "newRoleDepartment",
      message: "What department does the new role belong in?",
    },
    {
      type: "input",
      name: "newRoleSalary",
      message: "What is the salary for this role?",
    },
  ]);

  const [rows] = await promisePool.query(
    "INSERT INTO roles (title, department_id, salary)  VALUES (?, ?, ?)"[
      (newRole, newRoleDepartment, newRoleSalary)
    ]
  );
  console.log("Added a new role to the database");
  console.table(rows);
  begin();
}

// Function to view all departments //
export async function viewAllDepartments() {
  const [rows] = await promisePool.query("SELECT * FROM department");
  console.table(rows);
  begin();
}
// Function to add a new department //
export async function addDepartment() {
  const newDepartment = await inquirer.prompt([
    {
      type: "input",
      name: "department",
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
        // console.table(rows);
      }
    }
  );
  console.log("Added", newDepartment, "to the database");
  // console.table(rows);
  begin();
}
// Function to quit the program //
export async function quitEmployeeTracker() {
  console.log("Goodbye!");
}
