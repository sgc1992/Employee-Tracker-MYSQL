const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

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

inquirer
  .prompt([
    {
      name: "title",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",+
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
      ]
    },
  ])
  .then((answer) => {
    // based on their answer, either call the bid or the post functions
    if (answer.title === 'View All Employees') {
      viewEmployees();
    }
    else (answer.title === 'View All Employees By Department') {
      viewEmployeesByDepartment();
    }
    else (answer.title === 'View All Employees By Manager') {
      viewEmployeesByManager();
    }
    else (answer.title === 'Add Employee') {
      addEmployee();
    }
    else (answer.title === 'Remove Employee') {
      removeEmployee();
    }
    else (answer.title === 'Update Employee Role') {
      updateEmployeeRole();
    }
    else (answer.title === 'Update Employee Manager') {
      updateEmployeeManager();
    }
    else {
      connection.end();
    }
  });

const afterConnection = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;

    console.table(res);
  });
  connection.query('SELECT * FROM roles', (err, res) => {
    if (err) throw err;
    console.table(res);
  });

  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  connection.end();
};


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
});
