import inquirer from "inquirer";
import { promisePool } from "./pool.mjs";
import { begin } from "../index.mjs";

// Function to view all departments //
export async function viewAllDepartments() {
  const [rows] = await promisePool.query("SELECT * FROM department");
  console.table(rows);
  begin();
}

//test

// Function to add a new department //
export async function addDepartment() {
  const { newDepartment } = await inquirer.prompt([
    {
      type: "input",
      name: "newDepartment",
      message: "What is the name of the new department?",
    },
  ]);
  const [rows] = await promisePool.query(
    "INSERT INTO department (name) VALUES (?)",
    [newDepartment]
  );
  console.log("Added a new department to the database");
  // console.table(rows);
  begin();
}
