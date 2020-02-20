class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        const newName = this.name;
        console.log(`${this.name} is regiesterd.`);
        return newName;
    }

    getId(){
        const newId = this.id;
        console.log(`Your id number ${this.id} is registered.`);
        return newId;
    }

    getEmail(){
        const newEmail = this.email;
        console.log(`${this.email} is usuable.`);
        return newEmail;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;