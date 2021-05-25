const mysql = require('mysql');

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

const Departments = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;

    console.table(res);
  });
}
  
const Roles = () => {
  connection.query('SELECT * FROM roles', (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

const Employees = () => {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

//create a function insert department take argument
class CreateDepartment {
  constructor(name) {
      this.name = name;
  }

  addInfo() {
      return new Promise (resolve => {
          connection.query(
              'INSERT INTO department SET ?',
              {
                department_name: this.name,
              },
              (err, res) => {
              if (err) throw err;
              console.log(`${this.name} Department added to the database...`)
              resolve();
          })
      })
  }
};

// class CreateRole {
//   constructor(title, salary, id) {
//       this.title = title;
//       this.salary = salary;
//   }

//   addInfo() {
//       return new Promise (resolve => {
//           connection.query(
//               'INSERT INTO role SET ?',
//               {
//                   title: this.title,
//                   salary:  this.salary,
//               },
//               (err, res) => {
//               if (err) throw err;
//               console.log(`${this.title} Role added to the database...`)
//               resolve();
//           })
//       })
//   }
// };

//of the department name
//add the function to the export
//add function to import inquier.js file


  module.exports = {
    Departments,
    Roles,
    Employees,
    CreateDepartment,
    // CreateRole
  }
  




