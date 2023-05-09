DROP DATABASE IF EXISTS corp_db
CREATE DATABASE corp_db
USE corp_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles {
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) -- 30 char max
    salary DECIMAL (10, 2) -- ten digits before the decimal and two after
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)

}

CREATE TABLE employee {
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    FOREIGN KEY (role_id)
    REFERENCES roles(id)

}