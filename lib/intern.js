const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, title, email, school){
        super(name, id, email, title);
        this.school = school;
    }

    getSchool(){

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