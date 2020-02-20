class Employee {
    constructor(name, id, email, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    getName(){
        const newName = this.name;

        return newName;
    }

    getId(){
        const newId = this.id;
        
        return newId;
    }

    getEmail(){
        const newEmail = this.email;

        return newEmail;
    }

    getRole(){
        return Employee;
    }
}

module.exports = Employee;