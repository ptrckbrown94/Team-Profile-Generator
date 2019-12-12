class Employee {
    // updated character class  
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email; 
      }
    
      constructor(name){
        this.name = name;
      }
    
    // method to return employees ID
    getId() {
      return this.id;
    }
  }
  