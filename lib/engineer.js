const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        console.log(`Your GitHub username is ${this.github}.`);
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

}

// const engineer = new Engineer("Hannah", 587623, "hannah.joy11@yahoo.com", "Engineer", "HanFue282");
// console.log(engineer);

// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getGithub();
// engineer.getRole();

module.exports = Engineer;