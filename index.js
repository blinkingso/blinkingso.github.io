/// first js project.
console.log("js project started");
const place = "World";
const greeting = "Hello";
console.log(`${greeting} ${place}`);
// TODO: ADD connection strings. single line comment here.
/**
 * multiple lines comments here.
 */
/*multiple lines comments here too.*/
const pi = 3.1415926;
var one = 1;
let two = 2;
const three = 3;
one = 1024;
two = 2048;
// three = 8092;
console.log(`${two}, ${three}`);

var hello = "Hello";
console.log(hello);

if (true) {
    console.log(one);
    let world = "Hello world";
}

// world not defined in this scope.
// console.log(world);

/**
 * working with js strings.
 * String concatenation.
 */
let str2 = "hello" + "world";
let str1 = "hello1";
// str2 has already been declared before.
let str3 = "world";
let str4 = str1 + str2;
console.log(`str2 is ${str4}`);
// numbers.
let n1 = 1024;
let str5 = "world" + n1;
console.log(`str5 is ${str5}`);
let n2 = 1024;
let n3 = 2048;
let n4 = n1 + n3;
console.log(`n4 is ${n4}`);
// `${str1}` Template Literals.
console.log(`1 + 1 is ${1 + 1}`);
console.log(`the opposite of true is ${!true}`);
/**
 * js data types.
 * string. number. boolean. function. array. date. object.
 * NaN Undefined.
 * checking type: typeof . instanceof.
 */
let x = 0 == '';
let y = 0 === '';
console.log(`x is ${x}, y is ${y}`);
console.log(`\'\'\'s type is ${typeof ''}, while instanceof is ${'' instanceof String}`);
console.log(`${3 === 3.0}`);

const person = {
    firstName: "yaphets",
    secondName: "Andrew",
}

function sayHello(person) {
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof person);
console.log(typeof x);
console.log(typeof sayHello);
console.log(person instanceof Object);

// Math Object .
console.log(Math.PI);
console.log(Math.round(1024.1023));
console.log(Math.sqrt(1024));
let num = 1024;
console.log(++num);
console.log(--num);
console.log(num--);
console.log(num--);
// convert string to numbers.
let num1 = parseInt("1024");
console.log(`${typeof num1}`);
// return NaN
let num2 = parseFloat("abc");
console.log(num2);
console.log(parseInt('11 + 1'));

// try catch finally with error handlings.
// Exception Error 
function criticalCode() {
    throw "throwing critical exception";
}

function logError(error) {
    console.log(`catch error : ${error}`);
}

console.log("\n============ Try Catch Finally ============\n")

try {
    criticalCode();
} catch (e) {
    logError(e);
} finally {
    // do sth.
    console.log("critical code execution completed");
}

// Date and Time;
let now = Date.now();
console.log(`now is ${now}`);
console.log(`now is ${new Date()}`);
// Apr. for 3. because start with zero.
console.log(`time with: ${new Date(2018, 3, 12, 17, 55, 55)}`);
console.log(`date is : ${new Date(2018, 11, 12)}`);
const time1 = new Date();
time1.setHours(10);
time1.setMinutes(23);
time1.setSeconds(56);
time1.setMonth(0);
time1.setDate(10);
// week start from 0===sunday.
console.log(`time is : ${time1}, day of week is ${time1.getDay()}`);

/// if else
let bigger = 1 >= 2;
console.log("bigger is : %s", bigger);
if (bigger) {
    console.log("a bigger than b");
} else {
    console.log("b bigger than a");
}

if ('42' == 42) {
    console.log("'42' equal to 42 for js automatically convert types.");
}

const stas = 200;
if (stas === 200) {
    console.log("Ok!");
} else if (stas === 400) {
    console.log("Error!");
} else {
    console.log("Unknown status.");
}

const message = (stas === 200) ? 'OK' : "ERROR";
console.log("message is : " + message);

// switch.
const message_type = 256;
switch (message_type) {
    case 256: console.log('hello 256'); break;
    case 1024: console.log('hello 1024'); break;
    case 2048: console.log('hello 2048'); break;
    default:
        console.log("Unknow message type");
        break;
}

const name = '';
if (name) {
    console.log('name : ' + name);
} else {
    console.log('no name provided');
}

// js case-sensitive
const insense = 'error';
if (insense === 'ERROR') {
    console.log("sth went wrong.");
} else {
    console.log('non-case-sensitive lang');
}

//non case insensitive.
// javascript array definition. create arrays.
const list = [1, 2, 3];
const arr2 = Array(5);
arr2.push('2014');
arr2.push('yaphets');
arr2.push('andrew');
arr2.push('3.1415926');
arr2.push('-102#Nam');
arr2.push('strings');
console.log(`arr2 is ${arr2}, length is ${arr2.length}`);
console.log('\n********************Creating an array********************\n')
let arrayLength = 5;
let arr1 = [];
let arr3 = Array(arrayLength);
console.log('\n**********Getting array length********\n');
console.log("arr1 length: " + arr1.length + ", arr3 length is : " + arr3.length);
console.log('\n*****Populating arrays.****\n');
let arr4 = ["A", true, 3];
console.log(arr4);
console.log(arr4[0]);
arr2[0] = 1024;
arr2[1] = '1024';
arr2[2] = 'freedom';
arr2[3] = 'world';
arr2[4] = 'hello';
arr2[4] = '****';
// arr2[1024] undefined.
console.log(`arr2 is ${arr2}, arr2[1024] is ${arr2[1024]}`);

let arr5 = Array(arrayLength);
for (let i = 0; i < arr5.length; i++) {
    arr5[i] = Math.round(Math.random() * 10000);
}
console.log(`arr5 is ${arr5}`);
// array methods.
let last = arr5.pop();
console.log(`last is : ${last}, and the new length is ${arr5.length}`);
let first = arr5.shift();
console.log(`the first element is ${first}, and the new length is ${arr5.length}`);
// pop last , shift the first. concat the other array.
arr5.concat(['1024', "hello world"]);
console.log(arr5);
// weak type language javascript.
while (arr5.length > 0) {
    console.log(`pop element: ${arr5.pop()}`);
}
console.log('arr5 has been removed to empty.');
const names = ["yaphets", "john", "james", 1024];
for (let name of names) {
    console.log("itering : " + name);
}

function println(message) {
    console.log(`${message}`);
}

for (let name of names) {
    println(`${name} typeof ${typeof name}`);
}

function getName(name) {
    return name.toLowerCase();
}

let l_name = getName('YAPHETS');
println(`lower name is : ${l_name}`);

// arrow and anoymous functions.
/**
 * => functions
 * Arrow functions.
 * fat arrow function.
 * support implicit return values.
 * changes to the `this` context.
 */

const add = (a, b) => a + b;
println(add(1, 2));
const subtract = (a, b) => {
    // fat arrow function.
    return a - b;
}
println(subtract(1, 2));
// this context. inherited from parent scope. cannot be changed.
// maintained when function is passed as a reference.

/**
 * JavaScript Object Notation (JSON)
 */
const stu = {
    "name": "jazz",
    "age": 18,
    "sex": "male",
    "address": "shanghai",
}

const book = {
    title: "1984",
    author: "George",
    isAvailable: false,
}
// parse json obj to json string.
const bookString = JSON.stringify(book);
println(bookString);
println(book.author);
// parse json string to json obj.
const bookJson = JSON.parse(bookString);
println(bookJson.title);
const books = [book, {
    title: "1990s",
    name: "effective java",
}];

println(JSON.stringify(books));
println(books[1].name);
println(typeof books);
println(typeof book);
println(typeof bookJson);
println(`is array : ${Array.isArray(books)}, length is : ${books.length}`);

// Objects in javascript.
const bk = new Object();
bk.title = "python learning";
bk.author = "yap";
bk.isAvailable = false;
bk.checkIn = function (checkIn) {
    this.isAvailable = checkIn ? true : false;
}
bk.checkOut = function () {
    this.isavailable = false;
}

bk.self = function () {
    return this;
}

bk.setTitle = function (title) {
    if (title) {
        this.title = title;
    }
}

println(typeof bk.checkOut);
bk.checkIn('');
println(bk.isAvailable);
println(JSON.stringify(bk.self()));
bk.setTitle("javascript language");
println(JSON.stringify(bk));

class Book {
    title;
    author;
    isAvaliable = false;

    // new way to instance an object. notation
    constructor(title, author, isAvaliable) {
        this.title = title;
        this.author = author;
        this.isAvaliable = isAvaliable;
    }

    setTitle = function (title) {
        if (title) {
            this.title = title;
        }
    }
}

const k = new Book();
k.setTitle("java");
k.author = "yap";
k.isAvaliable = true;
println(JSON.stringify(k));
const k1 = new Book("tit java", "andrew", false);
println(JSON.stringify(k1));

// promises for long running operations;

function callback() {
    println('timeout completed.')
}

// wait 3 seconds.
// setTimeout(callback, 3000);

function promiseTimeout(ms) {
    // resolve: Promise object.
    return new Promise((resolve, reject) => {
        // throw "manufacturing error!";
        setTimeout(resolve, ms);
    });
}

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

promiseTimeout(500)
    // called on success
    .then(() => {
        println('done');
        const request = new XMLHttpRequest();
        request.open('GET', 'http://www.baidu.com', false);
        request.send('');
        let response = request.responseText;
        return Promise.resolve(response);
    })
    .then((response) => {
        // println(response);
    })
    .catch(err => {
        println('cool error handling: ' + err);
    });

/// async/await for promises;
function asyncRequest() {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://www.baidu.com', false);
        request.send('');
        let response = request.responseText;
        resolve(response);
    })
}

async function run() {
    let response = await asyncRequest().then((resp) => {
        // println(resp);
    });
    return response;
}

let resp = run();
println(resp);

const express = require('express');
const path = require('path');
const app = express();
app.get('/', (req, resp) => {
    // resp.send('index.html');
    resp.json({
        name: "yaphets"
    });
    // println("starting????");
    // let responseText = resp.responseText;
    // println(responseText);
});

app.use(express.static(path.join(__dirname, './')));
app.use(express.static(path.join(__dirname, './static/**')));
app.use(express.static(path.join(__dirname, './html')));

app.listen(3000, () => {
    println("server start");
});