INSERT INTO department (name)
VALUES
("Accounting"),
("Human Resources"),
("Marketing"),
("Legal"),
("Sales");


INSERT INTO roles (title, salary, department_id)
VALUES 
("Lead Accountant", 123000.00, 1),
("Accounting Assistant", 65000.00, 1),
("HR Director", 110000.00, 2),
("HR Assistant", 45000.00, 2),
("Advertising Manager", 98000.00, 3),
("Marketing Manager", 95000.00, 3),
("Legal Team Lead", 175000.00, 4),
("Lawyer", 140000.00, 4),
("Lead salesperson", 120000.00, 5),
("Salesperson", 75000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Mike", "Jones", 1, NULL),
("John", "Jacob", 2, 1),
("Aletheia", "Gonzales", 3, NULL),
("Athena", "Markel", 4, 3),
("Jet", "Jackson", 5, NULL),
("Zenon", "Gotf", 6, 5),
("Kelly", "Romano", 7, NULL),
("Hulk", "Branson", 8, 7),
("Arwin", "Alchenny", 9, NULL),
("Jester", "Corbin", 10, 9);

