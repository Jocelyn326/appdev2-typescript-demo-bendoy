const inputEl = document.getElementById('user-name')  as HTMLInputElement | null

if (!inputEl) {
    throw new Error('Element not found!');
}

console.log(inputEl.value)

// You can convince TypeScript that you are sure the value will not be null by using the non-null assertion operator `!`
// You can use the optional chaining `?.` operator to safely check if value is not null before the next operation

// const inputEl = document.getElementById('user-name')!
// console.log(inputEl!.value)
// if (!inputEl) {
//     throw new Error('Element not found!');
// }
// console.log(inputEl?.value)


// Type Casting or Assertion
// const inputEl = document.getElementById('user-name') as HTMLInputElement | null