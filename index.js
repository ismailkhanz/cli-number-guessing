#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please guesse a number"
    }]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulaction you guessed correct number");
}
else {
    console.log("you Guessed a wrong number");
}
