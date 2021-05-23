const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Sand_6632013',
  database: 'employeeTracker_DB',
});

const afterConnection = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.log(res);
  });
    connection.query('SELECT * FROM titleRole', (err, res) => {
          if (err) throw err;
          console.log(res);
  });

  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    console.log(res);
  });
  connection.end();
};


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
});