const {Employee, Engineer, Intern, Manager} = require("./lib");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

getInfo();

async function getInfo() {
  try {
      const { name }  = await inquirer.prompt({
          message: "What is your name?",
          name: "name"
      });

      const { id } = await inquirer.prompt({
        message: "What is your LinkedIn username?",
        name: "id"
      });
      
      const { email } = await inquirer.prompt({
          message: "What is your work email?",
          name: "email"
      });

      console.log(name, id, email);
  
  } catch (err) {
    console.log(err);
  }
}


