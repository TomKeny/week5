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
            health: this.health,
            hunger: this.hunger
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
        console.log(`${this.name} enjoyed their food!`)
    }
    Play() {
        this.hunger += 10
        this.xp += 4
        console.log(`${this.name} had fun playing with you!`)
    }
}

class bird extends tamagotchi {
    constructor (name, flightSpeed) {
        super (name)
        this.flightSpeed = flightSpeed
    }
    GetStats() {
        return console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger,
            flightSpeed: this.flightSpeed
        })
    }
    Fly () {
        this.health += 10
        this.hunger += 20
        this.xp += 6
        console.log(`${this.name} flew ${this.flightSpeed * 30}m in 30 seconds, and they had a blast doing it!`)
        console.log(`${this.name} got a bit better at flying! FlightSpeed: ${this.flightSpeed} + 1`)
        this.flightSpeed += 1
    }
}

const prompt = require('prompt-sync')();

let input
let exit = false

let name = prompt("Name Your Tamogotchi ")
let speed = prompt("How fast can your tamagotchi fly! ")

const obj = new bird(name,Number(speed))

while (exit == false) {
    input = prompt("Enter an input (stats, level, feed, play, fly, exit) ")
    switch (input) {
        case "stats":
            obj.GetStats()
            break;
        case "level":
            obj.Level()
            break;
        case "feed":
            obj.Feed()
            break;
        case "play":
            obj.Play()
            break;
        case "fly":
            obj.Fly()
            break;
        case "exit":
            exit = true
            break
    }
    if (obj.health > 100) {
        obj.health = 100;
    }
    if (obj.hunger > 80) {
        console.log(`${obj.name} is hungry`)
        obj.health = obj.health - 10
    }
}