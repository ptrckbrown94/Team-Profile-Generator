class Engineer extends Employee {
  // updated character class  
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  constructor(name) {
    super(name);
  }

}

