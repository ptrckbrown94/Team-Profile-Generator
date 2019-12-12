const Employee = require("./EmployeeClass")

class Engineer extends Employee {
  // updated character class  
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub(){
    return this.github;
  }
  
  getRole() {
    return "Engineer";
  }

}

module.exports = Engineer 
