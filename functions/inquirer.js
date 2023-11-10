import inquirer from "inquirer";

export async function rockPaperScissors() {
    let object = await inquirer.prompt({
        name: "result",
        type: "list",
        message: "rock, paper or scissors? ",
        choices: ["rock", "paper", "scissors"]
    })
    return object
}

export async function textInput(prompt) {
    let object = await inquirer.prompt({
        name: "result",
        type: "input",
        message: prompt,
    })
    return object
}

export async function wait () {
    let object = await inquirer.prompt({
        name: "result",
        type: "confirm",
        message: "press enter to continue",
    })
    return object
}

export async function yesNo (prompt) {
    let object = await inquirer.prompt({
        name: "result",
        type: "confirm",
        message: prompt,
    })
    return object
}



// import inquirer from "inquirer";

// async function yesOrNo() {
//     let object = await inquirer.prompt({
//         name: "result",
//         type: "confirm",
//         message: "yes or no? "
//     })
//     return object
// }

// async function display () {
//     let response = await yesOrNo()
//     console.log(response)
// }
// display()