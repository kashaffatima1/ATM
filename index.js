import inquirer from "inquirer";
let mybalance = 200000;
const mypin = 1468;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    }
]);
//console.log(pinAnswer.pin)
if (pinAnswer.pin === mypin) {
    console.log("Correct pin code!");
    //ATM QUESTION
    let answer = await inquirer.prompt([
        {
            name: "account_type",
            type: "list",
            message: "Select your account type:",
            choices: [
                "Saving account",
                "Current account"
            ]
        },
        {
            name: "TransactionMethod",
            type: "list",
            message: "Select your transaction method:",
            choices: [
                "Cash_with_draw",
                "Balance_check",
                "Deposit"
            ],
        },
    ]);
    console.log(answer.account_type);
    console.log(answer.TransactionMethod);
    //.................................Deposit..............................
    if (answer.TransactionMethod === "Deposit") {
        let answer = await inquirer.prompt({
            type: "number",
            name: "Deposit_number",
            message: "Please enter your amount:"
        });
        mybalance += answer.Deposit_number;
        console.log("Your balance is: " + mybalance);
    }
    //...........................cash_with_-draw.............................................    
    if (answer.TransactionMethod === "Cash_with_draw") {
        let answer = await inquirer.prompt({
            name: "with_draw_amount",
            type: "number",
            message: "Enter the amount you want to withdraw:",
        });
        mybalance -= answer.with_draw_amount;
        console.log(`Your Total Balance is: ${mybalance}`);
    }
    //..................................Balance_check............................................
    if (answer.TransactionMethod === "Balance_check") {
        console.log(`Your balance is: ${mybalance}`);
    }
}
;
//..................................Incorrect pin...........................................
if (pinAnswer.pin !== mypin) {
    console.log("Incorrect pin!");
}
