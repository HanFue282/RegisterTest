const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        const newSchool = this.school;
        console.log(`${this.school} has been found and registered.`);
        return newSchool;
    }

    getRole(){
        return "Intern";
    }

}

// const intern = new Intern("Hannah", 223577828, "joy1173@yahoo.com", "Highschool");
// console.log(intern);

// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getSchool();
// intern.getRole();

module.exports = Intern;