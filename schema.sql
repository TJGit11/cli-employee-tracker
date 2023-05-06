DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

USE test;

CREATE TABLE example (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO example (name)
VALUES ("John"), ("Jacob"), ("Mary");