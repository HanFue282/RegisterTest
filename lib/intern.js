const Employee = require("./employee");

class Intern extends Employee {
    constructor(school){
        this.school = school;
    }

    getSchool(){

    }

    getRole(){
        return Intern;
    }

}

const intern = new Intern(name, id, email, getSchool, getRole);

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();