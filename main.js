#! /usr/bin/env node
// Import The Inquirer Model Which is a CLI for Node.js
import inquirer from "inquirer";
//Declare a constant "answers" ans assign to the result of inquirer.prompt Functions
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The World: "
    }
]);
const words = answer.Sentence.trim().split(" ");
//Print The array od Words to the Console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your Sentence Word count is ${words.length}`);
