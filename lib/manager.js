const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, title, officeNumber){
        super(name, id, email, title);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        const newOfficeNum = this.officeNumber;

        return newOfficeNum;
    }

    getRole(){
        return Manager;
    }

}

const manager = new Manager();

manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();

