import mysql from "mysql2";
import inquirer from "inquirer";
import { promisePool } from "./utils/pool.mjs";
import {
  viewAllEmployees,
  addEmployee,
  updateEmployeeRole,
  viewAllRoles,
  addRole,
  // viewAllDepartments,
  addDepartment,
  viewAllDepartments,
} from "./corpFunc.mjs";

// viewAllEmployees;

// import corpFunc from "./corpFunc.mjs";

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "corp_db",
//   password: "rootroot",
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as 'connectionLimit'
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value is 60000
//   queueLimit: 0,
// });

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "corp_db",
//   password: "rootroot",
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as 'connectionLimit'
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value is 60000
//   queueLimit: 0,
// });
viewAllEmployees();
viewAllRoles();
viewAllDepartments();
// inquirer prompt - check bootcamp for example
// let { firstName } = await inquirer.prompt([
//   {
//     type: "input",
//     name: "firstName",
//   },
// ]);
// const promisePool = pool.promise();
// async function viewAllDepartments() {
//   try {
//     const [rows] = await pool.query("SELECT * FROM department");
//     console.table(rows);
//     return rows;
//   } catch (err) {
//     console.log(err);
//   }
// }

// const promisePool = pool.promise();
// const [rows] = await promisePool.query(
//   "DELETE FROM employee where first_name = ?",
//   firstName
// );
// console.table(rows);
