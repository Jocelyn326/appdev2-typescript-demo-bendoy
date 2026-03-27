// console.log("Hello World!")
console.log("Hello World!")

let userName: string = "Bendoy";
let userAge: number = 26;

// ...
userAge = 26

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

console.log(add(10))
// add('10')
console.log(add(10, 6))
// add(10, '6')

const myAdd = (a: number, b: number) => a + b
console.log(myAdd(10, 5))
// myAdd(10, '5')
