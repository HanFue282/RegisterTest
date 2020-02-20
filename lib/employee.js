class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        console.log(`${this.name} is regiesterd.`);
        return this.name;
    }

    getId(){
        console.log(`Your id number ${this.id} is registered.`);
        return this.id;
    }

    getEmail(){
        console.log(`${this.email} is usuable.`);
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;