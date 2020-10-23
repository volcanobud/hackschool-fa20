const random = require ('random');
const p = require ('./Pokemon');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// they can have fun with this function :)
function pokeBattle () {
  console.log("Pikachu attacked with " + p.Pikachu.attack(p.Ivy));
  
  console.log(p.Ivy.health);
  if(p.Ivy.health == 0){
    console.log("Pikachu Wins");
  }
  else if(p.Pikachu.health == 0){
    console.log("Ivy Wins");
  }
  // TODO WINNING CONDITIONS PRINT WHO WINS AND RETURN

  readline.question("Attack to use: ", attack => {
    if(attack.length >= 0) {
      console.log(`Ivy used ${attack}!`)
      p.Ivy.attack(p.Pikachu, attack);
      // TODO IVY ATTACKS (hint above shows pikachu attack)
      console.log(p.Pikachu.health);

      // recursion below 
      pokeBattle();
    }
    else {
      console.log("wow lame");
      readline.close();
    }
  });
}

pokeBattle();

