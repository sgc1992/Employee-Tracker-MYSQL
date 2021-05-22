---- Department Seed ----

INSERT INTO department (department_name)
VALUES 
('Sales'),
('Support'),
('Accounts'),
('Engineering'),
('Finance');

---- Role Seed ----

INSERT INTO role (title, salary, department_id)
VALUES 
('Managing Director', 150000, 1),
('Head of Technology', 120000, 2),
('Head of Finace', 100000, 3),
('Customer Care Manager', 90000, 4),
('Human Resource Officer', 85000, 5),


---- Employee Seed ----

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Sandeep', 'GC', 1, null),
('Sofiya', 'Rayamajhi', 2, 1),
('Susma', 'Chhetri', 2, 1),
('Mekh', 'GC', 4, 1),
('SanuNani', 'Khatri', 3, 1),




