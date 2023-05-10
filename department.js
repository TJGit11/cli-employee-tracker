import mysql from "mysql2";
import inquirer from "inquirer";
import { addDepartment, viewAllDepartments } from "./corpFunc.mjs";

viewAllDepartments;
addDepartment;

// TODO finish add role prompt
// inquirer.prompt([
//   {
//     name: 'title',
//     type: 'input',
//     message: "What is the role that you want to add to the database?"
//   },
//   {
//     name: 'salary',
//     type: 'number',
//     message: "How much does this role get paid?"
//   },
//   {
//     name: 'department_id',
//     type: 'list',
//     message: "What department would this role be in?",
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
//     message: "What is their last name?"
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

//TODO finish updatempployee prompt
//inquirer.prompt([
//   {
//     name: 'employee_id',
//     type: 'list',
//     message: "What is the name of the updated employee?",
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
