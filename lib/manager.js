const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        const newOfficeNum = this.officeNumber;
        console.log(`Your office number is ${this.officeNumber}`);
        return newOfficeNum;
    }

    getRole(){
        return "Manager";
    }

}

// const manager = new Manager("Hannah", 34752347, "hannah.joy1143@gmail.com", 45567);
// console.log(manager);

// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getOfficeNumber();
// manager.getRole();

module.exports = Manager;