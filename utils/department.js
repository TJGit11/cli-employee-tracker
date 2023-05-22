import mysql from "mysql2";
import inquirer from "inquirer";
import { addDepartment, viewAllDepartments } from "../corpFunc.mjs";

viewAllDepartments;
addDepartment;

//TODO initial prompt
// inquirer.prompt([
// {
//     name: 'title',
//     type: 'list',
//     message: 'What would you like to do?"
// ])
// }
// TODO finish add role prompt
// inquirer.prompt([
//   {
//     name: 'title',
//     type: 'input',
//     message: "What is the name of the role that you want to add?"
//   },
//   {
//     name: 'salary',
//     type: 'number',
//     message: "What is the salary of the role?"
//   },
//   {
//     name: 'department_id',
//     type: 'list',
//     message: "Which department does the role belong to?",
//     choices: []
//   }
// ])

// //TODO finish add employee prompt
// inquirer.prompt([
//   {
//     name: 'first_name',
//     type: 'input',
//     message: "What is the employee's first name?",
//   },
//   {
//     name: 'last_name',
//     type: 'input',
//     message: "What is employee's last name?"
//   },
//   {
//     name: 'role_id',
//     type: 'list',
//     message: "What is the new employee's role?",
//     choices: []
//   },
//   {
//     name: 'manager_id',
//     type: 'list',
//     message: "Who is the employee's manager?",
//     choices: []
//   }

//TODO finish update employee prompt
//inquirer.prompt([
//   {
//     name: 'employee_id',
//     type: 'list',
//     message: "Which employee's role do you want to update?",
//     choices: []
//   },
//   {
//     name: 'role_id',
//     type: 'input',
//     message: "What is their new role??"
//     choices: []
//   },

// //TODO finish add department prompt
// inquirer.prompt([
//   {
//     name: "department",
//     type: "input",
//     message: "What is the name of the department you want to add?",
//   },
// ]);
