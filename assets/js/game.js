//Game States
// "WIN" - player robot has defeated all enemy robots
//      * fight all enemy robots
//      * defeat each enemy robot
// "LOSE" - player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trouble"];
var enemyHealth = 50;
var enemyAttack = 12;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);
// console.log("Our robot's name is " + playerName);
// console.log(enemyNames);
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
//   }

//fight function
var fight = function (enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0) {
    
      // Alert players that they are starting the round

      var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose."
      );

      //If player choses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
      //remove enemy's health by subtracking the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ", " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );

      //check enemy health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      //remove player's heatlh by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      //log a resulting message to the console so we know that it worked
      console.log(
        enemyName +
          " attacked " +
        playerName +
          ", " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );

        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        //if player chooses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }
      //if no (false), ask question again by running fight() again
      else {
        fight();
      }
      //if player did not choose 1 or 2 in prompt
      } else {
        window.alert("You need to choose a valid option. Try again!");
      }
    }  
};

for (var i = 0; 1 < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
