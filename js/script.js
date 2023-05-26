// optional ?
var user = {
    fName: "Abdul",
    lName: "Manan"
};
// user.city = "Faisalabad"
console.log(user);
var a = true;
a = "string";
console.log(a);
var b = [];
b.push("Hy");
b.push("hlo");
// b.push(21)
console.log(b);
var c = ["this is 3rd number"];
//  c.push("this is push function")
console.log(c);
var d = [21, 20, 19, 18, 17];
d.push(16);
//  d.push("hy")
console.log(d);
//  inference
var e = d[1];
console.log(e);
//  typed arrays
var tuple;
tuple = [21, "Abdul Manan", true];
tuple.push(17);
console.log(tuple);
var ourTuple;
ourTuple = [21, "Abdul Manan", true];
//  ourTuple.push(17)
console.log(ourTuple);
var graph = [55.6, 43.9];
console.log(graph[1]);
//  destructure
var graph1 = [55.6, 43.9];
var ab = graph1[0], bc = graph1[1];
console.log(bc);
console.log(graph1[0]);
var nums = [1, 2, 3];
var num1 = nums[0], num2 = nums[1], num3 = nums[2];
console.log(num2);
var nums1 = [1, 2, 3];
var _num1 = nums1[0], _num3 = nums1[2];
console.log(_num3);
var calculate = function (a, b) {
    var add = a + b;
    var subtract = a - b;
    var multiply = a * b;
    var divide = a / b;
    return [add, subtract, multiply, divide];
};
// console.log(calculate(21, 7))
var _a = calculate(21, 7), add = _a[0], subtract = _a[1], multiply = _a[2], divide = _a[3];
console.log(multiply);
// old way
var mySelf = {
    fName: "Abdul",
    lName: "Manan",
    age: 21,
    city: "Shahkot",
    blood: "O+"
};
var myStatement = function (messages) {
    var message = "My name is ".concat(mySelf.fName, " ").concat(mySelf.lName, " and my age is ").concat(mySelf.age, " years old. I belong to ").concat(mySelf.city, ". My blood group is ").concat(mySelf.blood, ".");
    console.log(message);
};
myStatement(mySelf);
// with destructure new way
var mySelf1 = {
    fName: "Ali",
    lName: "Haider",
    age: 19,
    city: "Shk",
    blood: "Unknown"
};
var myStatement1 = function (_a) {
    var fName = _a[0], lName = _a[1], age = _a[2], city = _a[3], blood = _a[4];
    var message = "My name is ".concat(mySelf1.fName, " ").concat(mySelf1.lName, " and my age is ").concat(mySelf1.age, " years old. I belong to ").concat(mySelf1.city, ". My blood group is ").concat(mySelf1.blood, ".");
    console.log(message);
};
myStatement1(mySelf1);
