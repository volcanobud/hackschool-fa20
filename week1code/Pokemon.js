const random = require ('random');
// Pikachu is the "AI"
let Pikachu = {
	name : "pika",
	type : "electric",
	power : 50,
  health : 100,
	attacks :  ["Thunder Shock","Tail Whip","Spark"],
  damage : function(damage) {
    this.health = this.health - damage;
  },
	attack : function (attacker) {
  let index = random.int(0,2);
  let damage = random.int(0,20);
        attacker.damage(damage);
        return this.attacks[index];
      
      
 
	}
};

//TODO: fill in 
let Ivy = {
	name : 'ivy',
	type : 'Poison',
	power : 50,
  health : 100,
	attacks :  ["I am Daniel's Best Friend!","Bad Dad Joke","Boba????", "Let me steal your bit", "Ronak stole my OC"],
  damage : function(damage) {
    this.health = this.health - damage;
  },
  // make a for loop function to search for attack OR use filter
	attack : function (attacker, nameOfAttack) {
    let damage = random.int(0,20);
    var index;
      for(index = 0; index < this.attacks.length; index++){
        if(nameOfAttack == this.attacks[index]) {
        attacker.damage(damage);
        return damage;
      }
      }
      

	}
};

exports.Pikachu = Pikachu;
exports.Ivy = Ivy;