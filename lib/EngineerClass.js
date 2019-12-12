class Engineer extends Employee{
    // updated character class  
     constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        
      }
    
      constructor(name){
        super(name);
      }
    
      

    // method which prints all of the stats for a character
    printStats() {
      console.log(`Stats for ${name} are as following:`);
      console.log(`Each attack will do ${strength} damage.`);
      console.log(`${name} has ${strength} hit points remaining!`);
      console.log("------------");
    }
    // method which determines whether or not a character's "hitPoints" are less then zero
    // and returns true or false depending upon the outcome
    isAlive() {}
  
    // method which takes in a second object and decreases their "hitPoints" by this character's strength
    attack(opponent) {
      // console.log which character was attacked and how much damage was dealt
      // Then, change the opponent's hitPoints to reflect this
    }
  }
  
