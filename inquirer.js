const inquirer = require('inquirer');
const reads = require('./connection');

const { Departments, Roles, Employees, CreateDepartment, CreateRole } = reads;

//Adding department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Name this department',
        name: 'name',

      },
    ])
    .then((res) => {
      const { name } = res;
      const add = new CreateDepartment(name);
      add.addInfo();
    })
};

//Adding role
const addRole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What would you like to name this role?',
        name: 'name',
      },
      {
        type: 'list',
        message: 'What salary would you like?',
        name: 'salary',
        choices: [100000, 200000, 300000, 400000, 500000]
      },
      {
        type: 'list',
        message: 'add the department id?',
        name: 'id',
        choices: [7, 8, 9, 10, 11]
      },
    ])
    .then((res) => {
      const { name, salary,id } = res;
      const add = new CreateRole(name, salary,id);
      add.addInfo();


    })
};


inquirer
  .prompt([
    {
      name: "title",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Show Departments",
        "Show Roles",
        "Show Employees",
        "Add Department",
        "Add Role",
        // "Update Employee Role",
        // "Update Employee Manager",
      ]
    },
  ])
  .then((answer) => {
    // based on their answer, either call the bid or the post functions
    if (answer.title === 'Show Departments') {
      Departments();
    }
    else if (answer.title === 'Show Roles') {
      Roles();
    }
    else if (answer.title === 'Show Employees') {
      Employees();
    }
    else if (answer.title === 'Add Department') {
      addDepartment();
    }
    else if (answer.title === 'Add Role') {
      addRole();
    }
   
    else {
      connection.end();
    }
  });
