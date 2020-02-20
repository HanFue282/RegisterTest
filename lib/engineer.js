const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, title, email, github){
        super(name, id, email, title);
        this.github = github;
    }

    getGithub(){
        const newGithub = this.github;

        return newGithub;
    }

    getRole(){
        return Engineer;
    }

}

const engineer = new Engineer();

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();