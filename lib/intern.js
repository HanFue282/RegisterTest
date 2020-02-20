const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, title, email, school){
        super(name, id, email, title);
        this.school = school;
    }

    getSchool(){
        const newSchool = this.school;

        return newSchool;
    }

    getRole(){
        return Intern;
    }

}

const intern = new Intern();

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();