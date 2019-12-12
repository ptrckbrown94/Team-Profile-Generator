const Employee = require("./EmployeeClass")

class Intern extends Employee {
    // updated character class  
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern