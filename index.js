#!/usr/bin/env node
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
const toPause = () => {
    return new Promise((res) => {
        setTimeout((res), 2000);
    });
};
async function welcome() {
    let calcTiltle = chalkAnimation.rainbow("Welcome to Calculator");
    await toPause();
    calcTiltle.stop();
}
await welcome();
async function performOperation() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operation",
            message: "Please select operation to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "number1",
            message: "Please selecct first number"
        },
        {
            type: "number",
            name: "number2",
            message: "Please selecct second number"
        }
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.operation == "Addition") {
            console.log(`${answers.number1} + ${answers.number2} = ${answers.number1 + answers.number2}`);
        }
        else if (answers.operation == "Subtraction") {
            console.log(`${answers.number1} - ${answers.number2} = ${answers.number1 - answers.number2}`);
        }
        else if (answers.operation == "Multiplication") {
            console.log(`${answers.number1} * ${answers.number2} = ${answers.number1 * answers.number2}`);
        }
        else if (answers.operation == "Division") {
            console.log(`${answers.number1} / ${answers.number2} = ${answers.number1 / answers.number2}`);
        }
    });
}
// performOperation();
async function doAgain() {
    do {
        await performOperation();
        var again = await inquirer
            .prompt(
        /* Pass your questions in here */
        {
            type: "input",
            name: "restart",
            message: "Again want to perform operation",
        });
    } while (again.restart == "y");
}
doAgain();
