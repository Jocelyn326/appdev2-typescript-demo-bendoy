# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

**Summary:** TypeScript can figure out the type of a variable on its own for example, when I wrote `let userName: string = "Bendoy"` and `let userAge: number = 26`, TypeScript already knows `userName` is text and `userAge` is a number. Once a variable has a type, you cannot change it to something else. I also tried writing a function `add(a: number, b = 5)` where `b` has a default value of 5, so calling `add(10)` still works and returns 15. The commented-out lines like `// add('10')` show what would cause a red underline error passing text where a number is expected. If `noEmitOnError` is on, no JavaScript file gets created when there are errors.

## 02-vanilla-js-types.js
Shows how JavaScript's `typeof` operator works to check variable types at runtime.

**Summary:** This is a plain JavaScript file, not TypeScript. When I ran `console.log(typeof userName1)` where `userName1 = "Bendoy"`, it printed `string` in the console. The `typeof` operator only tells you the type while the code is already running. The difference with TypeScript is that TypeScript catches type problems before you even run the code while you are still writing it in the editor.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

**Summary:** I started `age` as a number `26`, then reassigned it to a string, a boolean, an object `{ name: 'Bendoy' }`, and finally an array. TypeScript allowed all of this because the type was set to `any`. I also noticed that when I logged `typeof age` after setting it to an array, it printed `object` not `array` because JavaScript treats arrays as objects behind the scenes. Using `any` removes all type protection, so it should only be used when there is no other option.

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

**Summary:** I created a `hobbies` array typed as `string[]` and used `push()` to add items. I also declared two mixed arrays using `(string | number)[]` and `Array<string | number>`  both work the same way. For objects, I defined a `user` with typed properties including a nested `role` object that has its own `description` and `id`. I also experimented with `val` typed as `{} | null | undefined` and reassigned it to a number, array, null, and undefined all allowed. The `Record` type let me create a flexible object where keys are strings and values can be a number, string, or boolean, which is why `isPartTimeInstructor: true` worked without an error.

## 05-enum.ts
Introduces enums, specifically numeric enums, and shows how to assign and look up `enum` values.

**Summary:** I used a numeric enum where `SuperAdmin = 1`, `Admin = 2`, `Teacher = 3`, and `Student = 4`. I set `userRole = 4` and used `Role[userRole]` to look up the name, which printed `Student` in the console. This is called a reverse lookup and it only works with numeric enums, not string enums. Enums are useful when you have a fixed set of choices like user roles, because they give each option a clear name instead of just using a plain number that is hard to understand.

## 06-alternative-to-enum.ts
Demonstrates **literal types** as a simpler alternative to enums using union types.

**Summary:** Instead of using an enum, I created a `UserRole` type using `'admin' | 'guest' | 'teacher' | 'student'`. This restricts the variable to only those exact string values. I set `userRole = 'admin'` then reassigned it to `'guest'`, both valid. I also wrote an `access()` function that accepts a `UserRole` parameter and prints `'Full access'` for admin and `'Limited access'` for everyone else. Calling `access(userRole)` printed `Limited access` and `access(anotherUserRole)` printed `Full access`. Literal types are cleaner and lighter than enums for simple fixed-value scenarios.

## 07-custom-type-role.ts
Covers **type aliases** and **custom types** using the `type` keyword, including complex object type definitions.

**Summary:** I used the `type` keyword to create a reusable `UserRole` type with values `'superadmin' | 'admin' | 'moderator' | 'user' | 'guest'`. I also defined a `User` object type that uses `UserRole` as the type for its `role` property. Assigning `userRole = 'teacher'` or `userRole = 0` caused errors because those values are not part of `UserRole`. Inside the `access()` function, reassigning `role` to `'superadmin'` or `'admin'` was fine, but assigning `0`, `true`, or `'teacher'` all caused errors. The `@ts-expect-error` comment suppresses the error on the next line, which is useful for intentionally testing invalid assignments.

## 08-functions.ts
Explores **function return types**, `void`, `never`, **function types**, and using functions inside object types.

**Summary:** I typed the `add()` function to return `number`, though TypeScript can infer it automatically. The `log()` function returns `void` meaning it does something but returns nothing meaningful. The `logAndThrow()` function returns `never` because it always throws an error and never finishes normally. I also used a function type `(m: string) => void` as a callback parameter in `performJob()`, which is better practice than using the generic `Function` type. Finally, I defined a `User` type with a `greet` method typed as `() => string`, and the method used `this.name` to return the user's name.

## 09-special-types.ts
Covers the special types `null` and `undefined` and how to use union types to allow both.

**Summary:** I declared `a` as strictly `null`, so assigning `"Hi"` to it caused an error. For `b`, I used `null | string` which allowed both `null` and `"Hi"` but not a number. The same pattern applied to `undefined` — `c` was strictly `undefined`, while `d` accepted `undefined | string`. Assigning `null` to `c` or `d` caused an error because `null` and `undefined` are different types in TypeScript when `strict` mode is on. This file shows how to be precise about what a variable is allowed to hold.

## 10-type-narrowing.ts
Demonstrates **type narrowing**, **non-null assertion**, **optional chaining**, and **type casting**.

**Summary:** I used `document.getElementById('user-name') as HTMLInputElement | null` to cast the result to a specific type. Then I used an `if (!inputEl)` check to throw an error if the element was not found, which narrows the type to `HTMLInputElement` after the check so I could safely access `inputEl.value`. The commented-out code shows two alternatives: the non-null assertion operator `!` which tells TypeScript the value will never be null, and optional chaining `?.` which safely accesses a property only if the value is not null or undefined. Type casting with `as` is useful when TypeScript cannot automatically determine the exact type.

## 11-optional.ts
Covers **optional parameters**, **optional object properties**, and the **nullish coalescing** `??` vs `||` operators.

**Summary:** I wrote a `generateError()` function where `msg` is optional using `msg?: string`, so calling it without an argument is valid. Inside an IIFE, I defined a `User` type where `role` is optional using `role?: 'admin' | 'guess'`, meaning the `user` object does not need to include it. For nullish coalescing, I set `input = ''` and used `input || false` which evaluates to `false` because `||` treats empty string as falsy. If I had used `??` instead, `didProvideInput` would have been `''` because `??` only falls back when the value is `null` or `undefined`, not an empty string. Use `||` when any falsy value should trigger the fallback, and use `??` when only `null` or `undefined` should.
