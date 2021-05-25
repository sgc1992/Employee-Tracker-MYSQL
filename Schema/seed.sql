---- Department Seed ----

INSERT INTO department (department_name)
VALUES 
('Sales'),
('Support'),
('Accounts'),
('Engineering'),
('Finance');

---- Titlerole Seed ----

INSERT INTO roles (title, salary, department_id)
VALUES 
('Managing Director', 150000, 1),
('Head of Technology', 120000, 2),
('Head of Finace', 100000, 3),
('Customer Care Manager', 90000, 4),
('Human Resource Officer', 85000, 5);

---- Employee Seed ----

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Sandeep', 'GC', 1, 001),
('Sofiya', 'Rayamajhi', 2, 002),
('Susma', 'Chhetri', 2, 003),
('Mekh', 'GC', 4, 004),
('SanuNani', 'Khatri', 3, 005);




