const mysql = require('mysql');

const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Username and password for MySQL
  user: 'root',
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

//create a function insert department
class CreateDepartment {
  constructor(name) {
    this.name = name;
  }

  addInfo() {
    return new Promise(resolve => {
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

//create a function insert role

class CreateRole {
  constructor(title, salary, department_id) {
    this.title = title;
    this.salary = salary;
    this.id = department_id;
  }

  addInfo() {
    return new Promise(resolve => {
      connection.query(
        'INSERT INTO roles SET ?',
        {
          title: this.title,
          salary: this.salary,
          department_id:this.id,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${this.title} Role added to the database...`)
          resolve();
        })
    })
  }
};

class CreateEmployee {
  constructor(first_name, last_name, role_id,manager_id) {
    this.firstname = first_name;
    this.lastname = last_name;
    this.roleid = role_id;
    this.managerid = manager_id;
  }

  addInfo() {
    return new Promise(resolve => {
      connection.query(
        'INSERT INTO roles SET ?',
        {
          first_name: this.firstname,
          last_name: this.lastname,
          role_id:this.roleid,
          manager_id:this.managerid,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${this.firstname} Employee added to the database...`)
          resolve();
        })
    })
  }
};


//exporting modules
module.exports = {
  Departments,
  Roles,
  Employees,
  CreateDepartment,
  CreateRole,
  CreateEmployee
}