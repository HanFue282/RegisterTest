const {Employee, Engineer, Intern, Manager} = require("./lib");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

getData();

async function getData() {
  try {
      const { name }  = await inquirer.prompt({
          message: "What is your name?",
          name: "name"
      });
      const { id } = await inquirer.prompt({
          message: "What is your id number?",
          name: "id"
      });
      const { email } = await inquirer.prompt({
          message: "What is your work email?",
          name: "email"
      });

      console.log(name, id, email);

function htmlContent() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <title>Employee Info Cards</title>
</head>
<body>
    <header>
        <div class="jumbotron">
           <h1 class="display-5">Employee Info Cards</h1>
           <p class="lead">Register information to get started!</p>
         </div>
    </header>
     <br>
     
       
     
    <script src="app.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
     
</body>
</html>`;
}
    await writeFileAsync(
        "generated.html",
        htmlContent(),
        "utf8"
    );
  
  } catch (err) {
    console.log(err);
  }
}
  




