const inquirer = require('inquirer');
const reads = require('./connection');

const { Departments, Roles, Employees,CreateDepartment, CreateRole} = reads;
//create

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
          const {name} = res;
          const add = new CreateDepartment(name);
          add.addInfo();
      })
};

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
      ])
      .then((res) => {
          const { name, salary} = res;
                 const add = new CreateRole(name, salary);
                 add.addInfo();
              }
          })
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
        // "Remove Employee",
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
    else if  (answer.title === 'Add Department') {
      addDepartment();
    }
    else if  (answer.title === 'Remove Employee') {
      removeEmployee();
    }
    else if  (answer.title === 'Update Employee Role') {
      updateEmployeeRole();
    }
    else if  (answer.title === 'Update Employee Manager') {
      updateEmployeeManager();
    }
    else {
      connection.end();
    }
  });
