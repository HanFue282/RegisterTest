const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){

    }

    getRole(){
        return Manager;
    }

}

const manager = new Manager(name, id, email, getOfficeNumber, getRole);

manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();

