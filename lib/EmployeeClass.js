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
    


    // method which prints all of the stats for a character
    getId() {
  
      return this.id;
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
  