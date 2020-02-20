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

    //   function htmlContent() {
    //       return `<!DOCTYPE html>
    //       <html lang="en">
    //       <head>
    //           <meta charset="UTF-8">
    //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //           <title></title>
    //           <link rel="stylesheet" href="style.css">
    //       </head>
    //       <body>
    //           <header>Name: ${name}</header>
    //           <h1>Location: ${location}</h1>
    //           <section>
    //               <p>LinkedIn: ${linkedIn}</p>
    //               <p>GitHub: ${gitHub}</p>
    //           </section>
    //       </body>
    //       </html>`
    //   }
    //     await writeFileAsync(
    //       "generated.html",
    //       htmlContent(),
    //       "utf8"
    //       );

      
  
  } catch (err) {
    console.log(err);
  }
}


