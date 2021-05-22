const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<nav class="navbar navbar-dark bg-primary">
    My Team
  </nav>

  <div class="container">
  <div class="row">
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.name}</h5>
      <h6 class="card-title">Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${answers.id}</li>
      <li><a href="mailto:" class="card-link">Email:${answers.email}</a></li>
      <li><a href="https://github.com/sgc1992" class="card-link">Github Username:${answers.github}</a></li>
    </ul>
  </div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.name2}</h5>
      <h6 class="card-title">${answers.title2}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${answers.id2}</li>
      <li><a href="mailto:" class="card-link">Email:${answers.email2}</a></li>
      <li><a href="https://github.com/sgc1992" class="card-link">Github Username:${answers.github2}</a></li>
    </ul>
  </div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.name3}</h5>
      <h6 class="card-title">${answers.title3}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${answers.id3}</li>
      <li><a href="mailto:" class="card-link">Email:${answers.email3}</a></li>
      <li><a href="https://github.com/sgc1992" class="card-link">Github Username:${answers.github3}</a></li>
    </ul>
  </div>
    </div>
  </div>
</div>
</body>
</html>`;
function getUserChoice(){
  inquirer
  .prompt([
    
    {
      type: "list",
      name: "prompt",
      message: "Would you like to POST AN ITEM or BID ON AN ITEM?",
      choices: [
        "POST",
        "BID",
      ]
    },
    
    // {
    //   type: "list",
    //   name: "Itemlist",
    //   message: "Item List?",
    //   choices: [
    //     "Laptop",
    //     "Speaker",
    //     "Keyboard",
    //     "Mouse",
    //   ]
    // },

  ])
  .then((answers) => {
    console.log(answers.prompt)
    // const htmlPageContent = generateHTML(answers);

    // fs.writeFile('index.html', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
  });
};
getUserChoice();

function getUserChoice(){

}

function getUserChoice(){

}
