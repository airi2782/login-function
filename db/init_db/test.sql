DROP DATABASE IF EXISTS login_db;
CREATE DATABASE login_db;

USE login_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
  user_id int NOT NULL primary key,
  password varchar(30) NOT NULL
);

INSERT INTO users (user_id,password) VALUES(1234,'abcd');