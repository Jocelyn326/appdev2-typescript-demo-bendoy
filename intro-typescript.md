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
