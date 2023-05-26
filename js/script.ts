// optional ?
let user: {fName:string, lName:string, age?: number} = {
    fName: "Abdul",
    lName: "Manan",
    // age: 22
}

// user.city = "Faisalabad"
console.log(user)

var a:unknown = true
a = "string"
console.log(a)
 
var b: string[] = []
b.push("Hy")
b.push("hlo")
// b.push(21)
 console.log(b)

 var c: readonly string[] = ["this is 3rd number"]
//  c.push("this is push function")
 console.log(c)

 let d = [21, 20, 19, 18, 17]
 d.push(16)
//  d.push("hy")
 console.log(d)


//  inference
 let e:number = d[1]
 console.log(e)


//  typed arrays
 let tuple: [number, string, boolean]
 tuple = [21, "Abdul Manan", true]
 tuple.push(17)
 console.log(tuple)

 let ourTuple: readonly [number, string, boolean]
 ourTuple = [21, "Abdul Manan", true]
//  ourTuple.push(17)
 console.log(ourTuple)

 let graph: [x:number, y:number] = [55.6, 43.9]
 console.log(graph[1])


//  destructure
 let graph1: [number, number] = [55.6, 43.9]
 let[ab, bc] = graph1
 console.log(bc)
 console.log(graph1[0])

let nums = [1, 2, 3]
let [num1, num2, num3] = nums
console.log(num2)

let nums1 = [1, 2, 3]
let [_num1, , _num3] = nums1
console.log(_num3)

const calculate = (a:number, b:number) => {

    let add = a + b
    let subtract = a - b;
    let multiply = a*b;
    let divide = a/b

    return [add, subtract, multiply, divide]

}

// console.log(calculate(21, 7))

const [add, subtract, multiply, divide] = calculate(21, 7)
console.log(multiply)

// old way
let mySelf = {
    fName: "Abdul",
    lName: "Manan",
    age: 21,
    city: "Shahkot",
    blood: "O+"
}

const myStatement = (messages:any) => {
    let message = `My name is ${mySelf.fName} ${mySelf.lName} and my age is ${mySelf.age} years old. I belong to ${mySelf.city}. My blood group is ${mySelf.blood}.`
    console.log(message)
}

myStatement(mySelf)

// with destructure new way
let mySelf1: any = {
    fName: "Ali",
    lName: "Haider",
    age: 19,
    city: "Shk",
    blood: "Unknown"
}

const myStatement1 = ([fName, lName, age, city, blood]) => {
    let message = `My name is ${mySelf1.fName} ${mySelf1.lName} and my age is ${mySelf1.age} years old. I belong to ${mySelf1.city}. My blood group is ${mySelf1.blood}.`
    console.log(message)
}

myStatement1(mySelf1)

