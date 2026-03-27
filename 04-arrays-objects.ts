// Simple array - TypeScript infers type as string[]
let hobbies = ["Reading", "Cooking", "playing Badminton", "Watching Movies"]

// push() adds a new item at the end of the array not number of items in the array, so it does not change the type of the array
hobbies.push("Sleeping")

// Two ways to declare a mixed array type
let userList: (string | number)[];
let anotherUserList: Array<string | number>;

userList = ["Jocelyn", "Jocelyn246", 654321]
anotherUserList = ["Celine", "Celine369", 789101]

console.log(userList)
console.log(anotherUserList)

// Object Type - defines the shape of the object
let user: {
    name: string;
    age: number;
    hobbies: Array<string>;

    role: {
        description: string;
        id: number;
    }
} = {
    name: "Jocelyn",
    age: 26,
    hobbies: ["Reading", "Cooking", "playing Badminton", "Watching Movies"],
    role: {
        description: 'Student',
        id: 1
    }
}
console.log(user)

// {} accepts any non-null value, null and undefined are also allowed here
let val: {} | null | undefined = "Jocelyn Bendoy"
val = 12
val = [1, "12", true]
val = null
val = undefined

console.log(val)

// Flexible Object - Record Type
// Record<key, value> - key is string, value can be number, string, or boolean
let data: Record<string, number | string | boolean>

data = {
    id: 1,
    name: 'Jocelyn Bendoy',
    isPartTimeInstructor: true
}