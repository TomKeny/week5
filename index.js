import { rockPaperScissors,textInput,wait,yesNo } from "./functions/inquirer.js";

let name
let playerAns,botAns,exitAsk
let playerScore = 0
let botScore = 0
let exit = false
let arr

async function start () {
    name = await textInput("What is your name? ")

    console.log(`hi ${name.result}, do you wanna play rock, paper, scissors? `)
    let response = await yesNo("Play rock, Paper, Scissors? ")
    if (response.result) {
        game()
    }
    else if (!response.result) {
        end()
    }
}

async function game () {
    console.log("Your opponent will be a randomized robot")
    while (!exit) {
        playerAns = await rockPaperScissors()
        botAns = botAnswer()
        console.log("")
        await checkAns(playerAns.result, botAns)
        await displayScore()
        console.log("")
        exitAsk = await yesNo("Do you want to Play another Round?")
        console.log("")
        if (exitAsk.result == false) {
            exit = true
        }
    }
    end()
}
function tie () {
    console.log("It's a Tie!!")
    playerScore += 1
    botScore += 1
}

function botWin () {
    console.log("The Bot Wins!!")
    botScore += 1
}
function playerWin () {
    console.log("You Win!!!")
    playerScore += 1
}

async function displayScore () {
    let playerBar = []
        for (let i = 1; i <= 5; i++) {
            if (playerScore % 5 < i) {
                playerBar.push("_")
            }
            else {
                playerBar.push("I")
            }
        }
        console.log(` Player Points ${Math.floor(playerScore/5)} [${playerBar.join("")}]`)

        let botBar = []
        for (let i = 1; i <= 5; i++) {
            if (botScore % 5 < i) {
                botBar.push("_")
            }
            else {
                botBar.push("I")
            }
        }
        console.log(`    Bot Points ${Math.floor(botScore/5)} [${botBar.join("")}]`)
        await wait()
}

function checkAns(x,y) {
    if (x == "rock") {
        x = 0
    }
    else if (x == "paper") {
        x = 1
    }
    else if (x == "scissors") {
        x = 2
    }
    if (x == y) {
        tie()
        return
    }

    if (x + 1 == y || (x== 2 && y == 0)) {
        botWin()
        return
    }
    else {
        playerWin()
        return
    }
}

function botAnswer () {
    let num = Math.floor(Math.random() * 3)
    return num
}

function end () {
    console.log("Thanks for playing!")
}

start()