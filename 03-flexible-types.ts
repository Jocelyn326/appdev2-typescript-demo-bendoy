let age: any = 26
console.log(`Initial value: ${age}, type: ${typeof age}`)   // number

// ...

age = '26'
console.log(`After string: ${age}, type: ${typeof age}`)    // string

age = true
console.log(`After boolean: ${age}, type: ${typeof age}`)   // boolean

age = { name: 'Bendoy' }
console.log(`After object:`, age, `, type: ${typeof age}`)  // object

age = ['sleeping', 'Coding']
console.log(`After array:`, age, `, type: ${typeof age}`)   // object (arrays are objects in JS)
