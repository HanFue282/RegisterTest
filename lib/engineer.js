const Employee = require("./employee");

class Engineer extends Employee {
    constructor(github){
        this.github = github;
    }

    getGithub(){

    }

    getRole(){
        return Engineer;
    }

}

const engineer = new Engineer(name, id, email, getGithub, getRole);

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();