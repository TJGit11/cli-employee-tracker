// import pool from "./pool.mjs";
import inquirer from "inquirer";
import { promisePool } from "./pool.mjs";

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
    "INSERT INTO employee (employee.first_name) VALUES (?)",
    newEmployee
  );
  console.log("Added", newEmployee, "to the database");
  console.table(rows);
  begin();
}

export async function updateEmployeeRole() {}

export async function viewAllRoles() {
  const [rows] = await promisePool.query(
    "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles JOIN department on roles.department_id = department.id"
  );
  console.table(rows);
  begin();
}

export async function addRole() {
  const { newRole } = await inquirer.prompt([
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
    "INSERT INTO roles (newRole, newRoleDepartment, newRoleSalary)  VALUES (?, ?, ?)",
    newRole
  );
  console.log("Added", newRole, "to the database");
  console.table(rows);
  begin();
}

export async function viewAllDepartments() {
  const [rows] = await promisePool.query("SELECT * FROM department");
  console.table(rows);
  begin();
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
        // console.table(rows);
      }
    }
  );
  console.log("Added", newDepartment, "to the database");
  // console.table(rows);
  begin();
}

export async function quitEmployeeTracker() {
  console.log("Goodbye!");
}
