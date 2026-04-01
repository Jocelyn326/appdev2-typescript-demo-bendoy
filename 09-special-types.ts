// Special Type - null
let a: null;

a = null
console.log('a:', a)
// @ts-expect-error
a = "Hi"

let b: null | string

b = null
console.log('b:', b)
b = "Hi"
console.log('b:', b)
// @ts-expect-error
b = 10

// Special Type - undefined
let c: undefined;

c = undefined
console.log('c:', c)
// @ts-expect-error
c = null
// @ts-expect-error
c = "Hi"

let d: undefined | string

d = undefined
console.log('d:', d)
d = "Hi"
console.log('d:', d)
// @ts-expect-error
d = null
// @ts-expect-error
d = 10
