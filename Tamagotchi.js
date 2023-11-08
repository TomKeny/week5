// class Person {
//     constructor (name, age, job) {
//         this.name = name
//         this.age = age;
//         this.job = job
//     }

//     talks() {
//         console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.job}`)
//     }
// }

// const Jack = new Person ("Jack", 21, "Psyciatrist")

// Jack.talks()

// class Car {
//     constructor (name,year,price) {
//         this.name = name
//         this.year = year
//         this.price = price
//     }
//     Age (x) {
//         return x - this.year;
//     }
//     CurrentPrice(x) {
//         return Math.round((this.price - (this.price * (0.9 ** this.Age(x))) + Number.EPSILON) * 100) / 100
//     }
// }

// const date = new Date();
// let year = date.getFullYear();

// const myCar = new Car("Ford", 2014,6000);

// console.log(`The ${myCar.name} is ${myCar.Age(year)} years old`)
// console.log(`The current price of the car is ${myCar.CurrentPrice(year)}`)

// class Animal {
//     constructor (name, health, hunger) {
//         this.name = name
//         this.health = health
//         this.hunger = hunger
//     }
//     drinks() {
//         this.health += 5
//         return this
//     }
//     Eats() {
//         this.hunger -= 20
//         this.health += 10
//         console.log(`${this.name}'s health is ${this.health}`)
//         return this
//     }
//     Stats() {
//         return console.table({
//             name: this.name,
//             health: this.health,
//             hunger: this.hunger
//         })
//     }
// }

// class Dog extends Animal {
//     constructor (name, health, hunger, happy) {
//         super (name, health, hunger, happy)
//         this.happy = happy
//     }
//     playBall() {
//         this.health += 10
//         this.hunger += 10
//         console.log(`${this.name} is happy`)
//         return this
//     }
//     walks() {
//         console.log(`Taking ${this.name} for a walk, they are ${this.happy}`)
//         this.health += 10
//         return this
//     }
// }

// const pepito = new Animal("Pepito", 100, 0)
// const pepita = new Dog("Pepita", 100, 0, "happy")

// pepita.walks()

class tamagotchi {
    constructor (name) {
        this.name = name
        this.health = 100
        this.hunger = 0
        this.xp = 0
    }
    GetStats() {
        return console.table({
            name: this.name,
            health: this.health + "%",
            hunger: this.hunger + "%"
        })
    }
    Level() {
        let levelBar = []
        for (let i = 1; i <= 20; i++) {
            if (this.xp % 20 < i) {
                levelBar.push("_")
            }
            else {
                levelBar.push("I")
            }
        }
        console.log(`Lvl ${Math.floor(this.xp/20)} [${levelBar.join("")}]`)
    }
    Feed() {
        this.health += 10
        this.hunger -= 30
        this.xp += 2
        console.log(`${this.name} enjoyed their food! \n +2xp`)
    }
    Play() {
        this.hunger += 10
        this.xp += 4
        console.log(`${this.name} had fun playing with you! \n +4xp`)
    }
}

class bird extends tamagotchi {
    constructor (name, flightSpeed) {
        super (name)
        this.flightSpeed = flightSpeed
        this.flightTime = 30
        this.species = "bird"
    }
    GetStats() {
        return console.table({
            name: this.name,
            health: this.health + "%",
            hunger: this.hunger + "%",
            flightSpeed: this.flightSpeed + "m/s",
            flightTime: this.flightTime + "s"
        })
    }
    Fly () {
        this.health += 10
        this.hunger += 20
        this.xp += 6
        console.log(`${this.name} flew ${this.flightSpeed * this.flightTime}m in ${this.flightTime} seconds, and they had a blast doing it!`)
        console.log(`${this.name} got a bit better at flying! \n FlightSpeed: ${this.flightSpeed}m/s + 1m/s \n FlightTime: ${this.flightTime}s + 3s \n +6xp`)
        this.flightSpeed += 1
        this.flightTime += 3
    }
}

class fish extends tamagotchi {
    constructor (name, swimSpeed) {
        super (name)
        this.swimSpeed = swimSpeed
        this.species = "fish"
    }
    GetStats() {
        return console.table({
            name: this.name,
            health: this.health + "%",
            hunger: this.hunger + "%", 
            swimSpeed: this.swimSpeed + "m/s"
        })
    }
    Swim () {
        this.health += 10
        this.hunger += 20
        this.xp += 6
        console.log(`${this.name} swam ${this.swimSpeed * 30}m, and they had a great time doing it!`)
        console.log(`${this.name} improved at swimming! \n swimSpeed: ${this.swimSpeed} + 1 \n +6xp`)
        this.swimSpeed += 1
    }
}

const prompt = require('prompt-sync')();

let input,species,name,speed,obj
let exit = false

name = prompt("Name Your Tamogotchi ")
while (species != "fish" && species != "bird") {
    species = prompt(`Is ${name} a bird or a fish `)
    if (species == "bird") {
        speed = prompt(`How fast can ${name} fly (m/s)! `)
        obj = new bird(name,Number(speed))
    }
    else if (species == "fish") {
        speed = prompt(`How fast can ${name} swim (m/s)! `)
        obj = new fish(name,Number(speed))
    }
    else {
        console.log("please select one of the options (case sensitive)")
    }
}

while (exit == false) {
    if (obj.species == "bird") {
        console.log(`Pleases select an option \n  Stats - Check up on ${obj.name} \n  Level - see ${obj.name}'s level and progress \n  Feed - give ${obj.name} food \n  Play - play with ${obj.name} \n  Fly - let ${obj.name} fly about \n  Exit - exit the application \n `)
    }
    else if (obj.species == "fish") {
        console.log(`Pleases select an option \n  Stats - Check up on ${obj.name} \n  Level - see ${obj.name}'s level and progress \n  Feed - give ${obj.name} food \n  Play - play with ${obj.name} \n  Swim - let ${obj.name} Swim around \n  Exit - exit the application \n `)
    }
    input = prompt("Option: ")
    console.log("\n")
    switch (input) {
        case "Stats":
            obj.GetStats()
            break;
        case "Level":
            obj.Level()
            break;
        case "Feed":
            obj.Feed()
            break;
        case "Play":
            obj.Play()
            break;
        case "Fly","Swim":
            if (obj.species == "bird") {
                obj.Fly()
            }
            else if (obj.species == "fish") {
                obj.Swim()
            }
            break;
        case "Exit":
            exit = true
            break
        default:
            console.log(`${input} is not a valid option, options are case-sensitive`)
    }

    if (obj.health > 100) {
        obj.health = 100;
    }
    if (obj.hunger >= 100) {
        console.log(` ${obj.name} is VERY hungry`)
        obj.health = obj.health - 20
        obj.hunger = 100
    }
    else if (obj.hunger > 80) {
        console.log(` ${obj.name} is hungry`)
        obj.health = obj.health - 10
    }
    if (input != "Exit") {
        prompt("press Enter to continue")
    }
}