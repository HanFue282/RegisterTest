// const {Employee, Engineer, Intern, Manager} = require("./lib");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

getData();

async function getData() {
  try {
      const { name }  = await inquirer.prompt({
          message: "What is your name?",
          type: "input",
          name: "name"
      });
      const { id } = await inquirer.prompt({
          message: "What is your id number?",
          type: "input",
          name: "id"
      });
      const { email } = await inquirer.prompt({
          message: "What is your work email?",
          type: "input",
          name: "email"
      });

      const { role } = await inquirer.prompt({
          message: "What is your position?",
          name: "role",
          type: "checkbox",
          choices: [
              "Manager",
              "Engineer",
              "Intern"
          ]
      });

      console.log(name, id, email, role);

      if(role.choices === "Manager"){
          fs.appendFile("manager.html", function(error) {
              if(error);
              console.log(error);

              console.log("Template has been appended.");
          });
      }


  
  } catch (err) {
    console.log(err);
  }
}



