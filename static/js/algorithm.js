/// javascript algorithms
const arr = [3, 4, 5, 10, 100, -10, 5, 8, 1, 2, -3];
function bubble(arr) {
    if (arr.length === 0) { return; }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubble(arr);
console.log(arr);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.round(Math.sqrt(this.x * this.x + this.y * this.y));
    }
}

let point = new Point(-10, 23);
console.log(point.distance());

const π = Math.PI;
console.log(π);
console.log("\u{1F601}")
console.log("\u{1F603}")
console.log("\u{1F622}")
let x = 2, y = 3
const a = "str", b = "ing"
let z = x + y;
(a + b).toString()
    ;[x, x + 1, x + 3].forEach((value, idx, self) => {
        console.log(`index = ${idx}, value = ${value}, all is ${self}`);
    })

    ;
console.log(Math.pow(3, 1 / 3));
console.log(Math.exp(3));
// 勾股定理 sqrt(x^2 + y^2)
console.log(Math.hypot(9, 12));
// 是否大于0
console.log(Math.sign(3));
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(isNaN(Number.MAX_VALUE * 3));
console.log(isFinite(Number.MAX_VALUE * 3));
console.log(isFinite(Number.MAX_VALUE));
console.log(isFinite(Number.MIN_VALUE * 2));
console.log(Number.isSafeInteger(Math.pow(2, 54)));
const positive_zero = 0;
const negative_zero = -0;
console.log(positive_zero === negative_zero);
console.log(1 / positive_zero === 1 / negative_zero);

let x_ = 0.3 - 0.2;
let y_ = 0.2 - 0.1;
console.log(`x_ is ${x_}, y_ is ${y_}, comp: ${x_ === y_}, ${x_ === 0.1}, ${y_ === 0.1}`);

console.log(`${0.6 - 0.2}, ${0.5 - 0.1}, ${0.8 - 0.4}, equal: ${0.6 - 0.2 === 0.5 - 0.1}`)

console.log(1.0 - 0.1)
console.log(1.2 - 0.1)
console.log(0.55 - 0.1)
console.log((0.55 - 0.1))
// bigint
console.log(typeof 1n)
// number
console.log(typeof 1)
let max_more = BigInt(Math.pow(2, 80))
console.log(max_more)
console.log(typeof max_more)
// date 
const now = Date.now();
console.log(typeof now);
console.log(new Date().getTime())
console.log(new Date().toISOString())

/// String iterable
const hello = "hello world";
for (ch of hello) {
    console.log(ch);
}
const one_line = "hello world \
hello world";
const two_line = `two line 
name the world....?`;
console.log(`${one_line}\n${two_line}`);
console.log('I can\'t do anything to resolve the problem.');

// escape characters;
console.log('name a  \bhello\tworld, what is : \\0 meaning? => \0, \v meaning???, \f');

console.log('\xEF');
const str = "ლ(′◉❥◉｀ლ)中国";
console.log(str.charAt(0));
console.log(str.charAt(str.length - 1));
console.log(str[0] + str[3])
const len = String.raw`\n`.length
console.log(len);
console.log(String.raw`'\n\n'`)
const num_pattern = /[1-9][0-9]*/
console.log(num_pattern.test(0));
console.log(num_pattern.test(1002391023912030123n));
let start_with_html = /^HTML/
console.log(start_with_html.test('hello'))
console.log(start_with_html.test('HTML is good,'))
function log(message) {
    console.log(message)
}

log(a)
log(a === undefined)
log(a === null)
let aa = NaN;
if (aa) {
    log("aa = " + aa + " is true")
} else {
    log("aa = " + aa + " is false")
}
// Symbol() function never returns the same value twice.
// even when called with the same argument.
// Such as: Symbol("username") !== Symbol("username")
let symbol_name = Symbol("username");
log(typeof symbol_name);
let o = {};
o[symbol_name] = 1;
o["hello"] = 2;
log(typeof o);
log(o[symbol_name])
let upgrade = Symbol.for("upgrade");
let os = {};
os["kernel"] = "unix"
os["version"] = 4.6
os[upgrade] = "false";
log(os);
log(typeof os);
log(os[Symbol.for("upgrade")]);

/// when to use const;
const rgb = { r: 255, g: 255, b_: 255, a: 0.8 };
let { r, g, b_ } = rgb;
log(`${r}, ${g}, ${b_}`);

let points = [{ x: 10.1, y: 10.2 }, { x: 8.88, y: 9.99 }];
let [{ x: x1, y: y1 }] = points;
log(`${x1}, ${y1}`);
let points2 = {
    x: x1, y: y1
};
log(points2.valueOf())

const aes = {
    key: "key message",
    algorithm: {
        name: "aes",
        salt: "*sdfjo$#+"
    },
    message: null,
}

log(aes.algorithm.name)
log(aes.message?.name)

// ? operator
let aaa;
let index = 0;
try {
    let mess = aaa[++index];
    log(mess)
} catch (e) {
    // log(e);
    index;
}

log(aaa?.[index])
index
// log(aaa[index++])

function express(x, logger) {
    logger?.(`logger: ${x}`)
    return x * x;
}

express(10, log)

let f = null, xxx = 0;
try {
    f(x);
} catch (e) {
    log(e);
    xxx
}

let ffff = null;
log(ffff?.[1])

log(2 in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

//2 ^ 16
log(2 ** 4 ** 2)
// 00001001
// 10010000
log(~9)
const user = {
    name: "yaphets",
    age: 20,
    sex: "male",
}

delete user.sex
log(user)
log(0xFFFFFFF0)
log(~0x0F)
log(2 >> 5);
log(2 >>> 5);
log(-1 >> 2);
log(-1 >>> 2);
// compare from left to right one char by one.
log('12' > '3')
log('32' > '123')
log('abc' > 'adc')
log('b' > 'abcd')

let aaaa = 10;
aaaa >>>= 2
log(aaaa)

eval("function hello2() {log(`hello eval function`)}")

hello2()

eval("let mmmm = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10; log(mmmm);")

console.log(1, 2, "hello world");

const global_eval = eval;
const gx = "global x", gy = "global y";
function g_f() {
    let x = "hello";
    eval("x += 'world'");
    return x;
}
function g_f_y() {
    let yf = "hello y";
    eval("yf += ' world!!!'");
    return yf;
}
console.log(g_f(), gx);
console.log(g_f_y(), gy);

let options = { timeout: 0, title: undefined, verbose: false, n: null };
console.log(
    options.timeout ?? 1000, // => 0: as defined in the object
    options.title ?? "Untitled", // => "": as defined in the object
    options.verbose ?? true, // => false: as defined in the object
    options.quiet ?? "hello", // => false: property is not defined
    options.n ?? 10);
if (options.title) { log("hello") } else { log("world") };

const maxWidth = NaN, preferences = null;
let max = maxWidth || preferences?.maxWidth || 500;
log(max);
let maxWidth2 = NaN, preferences22 = undefined;
// get first valid value;
let max_ = maxWidth2 ?? preferences22?.maxWidth ?? 500;
log(max_);

const value = "hello";
log((typeof value === "string") ? "'" + value + "'" : value.toString())

const datas = [1, 2, 3, 4, 5, ['hello', 'name'], 9, 10, 100];
let sum = 0;
for (let e of datas) {
    if (typeof e === "number") {
        sum += e;
    }
}
log("sum is : " + sum);

{
    let o = { x: 1, y: 2, z: 3 };
    let keys = "";
    for (let k of Object.keys(o)) {
        keys += k;
    }

    log(keys);
}

{
    let o = { x: 1, y: 2, z: 3 };
    let sum = 0;
    for (let v of Object.values(o)) {
        sum += v;
    }
    log(sum);
}

{
    let o = { x: 1, y: 2, z: 3 };
    let pairs = "";
    for (let [k, v] of Object.entries(o)) {
        pairs += `${k}=${v}&`
    }
    pairs = pairs.substring(0, pairs.length - 1);
    log(pairs);
}

{
    // for/of with strings.
    let frequency = {};
    for (let letter of "mississippi“I❤🌹") {
        if (frequency[letter]) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }
    log(frequency);
}

{
    // for/of with Set and Map
    let text = "Na nan na na na na Batman nam";
    let wordSet = new Set(text.split(' '));
    let unique = [];
    for (let word of wordSet) {
        unique.push(word);
    }
    log(unique);

    // Map
    let m = new Map([[1, "one"], ["hello", 2]]);
    for (let [k, v] of m) {
        console.log(k, v);
    }

    // asynchronous iteration with for/await;
    async function printStream(stream) {
        for await (let chunk of stream) {
            console.log(chunk);
        }
    }
}

{
    //javascript learning;
    const hello = "helloworld";
    for (let idx in hello) {
        console.log(hello[idx]);
    }

    for (let name of "helloworld") {
        log(name)
    }

    log("****************************************************************");

    let map = new Map([[1, "name"], [12, "hello"], [3, "wsd"]]);

    for (let entry of map.entries()) {
        console.log(entry[0], entry[1])
    }

    log("****************************************************************");

    let x = {
        name: "andrew",
        dir: "/",
        command: "ls",
        path: "/",
        os: {
            kernel: "unix",
            version: "4.6",
            upgrade: true,
        }
    }

    let values = Object.values(x);
    for (let o in values) {
        log(values[o]);
    }

    log("****************************************************************")

    x.os.createTime = new Date();
    for (let o of Object.values(x)) {
        log(o);
    }

    log("****************************************************************")
}

{
    function condition_x() {
        return true;
    }

    function condition_y(x) {
        if (x === 50) {
            x = 80;
        }
        return x;
    }
    //jumps;
    // labeled statesments.
    // break; continue; throws; try/catch/finally.
    let x = 0;
    debug_level: while (x < 100) {
        if (condition_x() && x <= 50) {
            x++;
            continue;
        }

        x++;

        log("x is : " + x);
        if (condition_y(x) === 80) {
            let y = 0;
            while (y <= 3) {
                log("yyyyyyyy: " + x);
                y++;
                if (y === 3) {
                    log("break to debug_level label.")
                    break debug_level;
                }
            }
        }
    }

    log("debug_level label statements over!");
}

{
    // Check
    function* range(from, to) {
        for (let i = from; i <= to; i++) {
            yield i;
        }
    }

    // throw statement;
    const a = "string numbers.";
    try {
        if (!a) {
            throw new Error("a not exits");
        }
    } catch (e) {
        console.log("error happens");
    }

    // 5 * 4 * 3 * 2 * 1;
    function factorial(x) {
        if (x < 0) throw new Error("x must not be negative");
        let f;
        for (f = 1; x > 1; f *= x, x--) /* empty body*/;
        return f;
    }
    log(factorial(5));

    try {
        let n = Number(prompt("positive integer:", ""));
        let f = factorial(n);
        log(n + "! = " + f);
    } catch (e) {
        // log(e);
    }
}

{
    // miscellaneous statements;
    // "use strict"
    // "use strict";
    // with;
    const a = "str";
    with (a) {
        log(a.length);
    }

    // debugger statement;
    function f(o) {
        // if (o === undefined) debugger;
        if (o) {
            o += "_suffix";
        }

        return o;
    }

    log(f("hello: "));

    log(f(undefined))
    log(f())
    const x = new Object({ a: 1 });
    x.y = 1024;
    log(x)

    // eval('let zd = 1025; console.log(zd)');
    // let m = zd;
    // log(m);
}

{
    // Declarations
    /*******
     * keyword: const, let, var, function, class, import, export
     */
    class Circle {
        constructor(radius) {
            this.r = radius;
        }
        area() {
            return Math.PI * this.r * this.r;
        }

        circumference() {
            return 2 * Math.PI * this.r;
        }
    }

    const c = new Circle(2);
    log(c.area());
    log(c.circumference());

    // import export;

}

// import global_pi from './index.js';

/* export const TAU = 2 * Math.PI;
export function magnitude(x, y) {
    return Math.sqrt(x * x + y * y);
}
*/

{
    let obj = new Object({ x: 2 });
    obj.writeable = false;
    obj.enumerable = false;
    obj.y = 2 * Math.PI;
    log(obj);
}

{
    // objects ;
    // create a new null object here;
    let empty = Object.create(null);
    let book = {
        for: "all audiences",
        main_title: "js",
        sub_title: "definitive guide",
        author: {
            firstname: "D",
            surname: "Flan"
        }
    }
    log(book)

    // let o = new Object();
    let a = new Array();
    let d = new Date();
    let r = new Map();
    let s = new Set();

    log(Object.prototype)

    let o = Object.create({ x: "don't change this value" });
    // let obj = library.function(Object.create(o));
    log(o);
    // obj.y = "hello obj";
    // log(obj);
}

{
    log("*******oop***********")
    // obj inheritable;
    let o = {};
    o.x = 1;
    let p = Object.create(o);
    p.y = 2;
    let q = Object.create(p);
    q.z = 3;
    let f = q.toString();
    log(o);
    log(p);
    log(q.valueOf());
}

function test_global_method() {
    log("test_global_method");
}
delete global.test_global_method;
test_global_method();

{
    let o = { x: 1 };
    Object.assign(o, { x: 2, y: 1 }, { x: 3, y: 4, z: 5 });
    log(o);
    function merge(target, ...sources) {
        for (let s of sources) {
            for (let key of Object.keys(s)) {
                if (!(key in target)) {
                    target[key] = s[key];
                }
            }
        }
    }

    let o1 = { x: 1 };
    merge(o1, { x: 2, y: 3 }, { x: 3, y: 5, z: 10 });
    log(o1);
}

{
    // serialize objects.
    let json = JSON.stringify({ name: "yaphets", type: "human", sex: "male" });
    log(json)
    let p = JSON.parse(json);
    log(p)
    log(p.hasOwnProperty('name'));
    log(p.propertyIsEnumerable('name'));
    log(p.toLocaleString())
    let point = {
        x: 1000,
        y: 2000,
        toString: function () {
            return `(${x}, ${y})`;
        },
        toLocaleString: function () {
            return `(${x}, ${y})`;
        },
        getX: function () {
            return this.x;
        },
        getY: function () {
            return this.y;
        }
    }

    log(point.getX());
    log(point.getY());
    log(point.toLocaleString());
}

{
    // compute dynanic property
    const PROPERTY_NAME = "p1";
    function computeDynanicProperty() {
        return "p" + Math.round(Math.random() * 100);
    }

    let p = {
        [PROPERTY_NAME]: 1,
        [computeDynanicProperty()]: 100,
    };

    log(p);
}

{
    // spread operator;
    let x = { x: 1, y: 1 };
    let y = { a: "str", b: "strsss" };
    let z = { ...x, ...y };
    log(z);

    const F_N = "fn";

    let point = {
        x: 1, y: 1, area() {
            return this.x * this.y;
        },
        f_name() {
            return "f_" + Math.round(Math.random() * 100);
        },
        f_n: 'f_name',
        [F_N](x) {
            return x + 100;
        }
    };

    log(point.area());
    log(point[F_N](20));
}

{
    //objects getter and setter;
    let o = {
        data: 1024,
        set dataProp(data) {
            this.data = data;
        },
        get dataProp() {
            return this.data;
        }
    };

    o.dataProp = 2048;
    log(o.dataProp);
}

{
    class Person {
        _name;
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        _sex;
        _age;

        constructor(name, sex, age) {
            this._name = name;
            this._sex = sex;
            this._age = age;
        }

        toString() {
            // return JSON.stringify(this);
            return this.valueOf();
        }
    }

    let p = new Person("yaphets", "male", 20);
    log(p);
    p.name = "andrew";
    log(p);
    p._name = "andrew2";
    log(p);
}

{
    // magical getter method;
    const random = {
        get octet() {
            return Math.floor(Math.random() * 256);
        },

        get uint16() {
            return Math.floor(Math.random() * 65536);
        },

        get int16() {
            return Math.floor(Math.random() * 65535 - 32768);
        }
    }
}

{
    /// Array.

    let count = [1, , 3]; // Elements at indexes 0 and 2. No element at index 1;
    log(count);
    let undefs = [, ,]; // An Array with no elemnets but a length of 2;
    log(undefs);
    undefs[0] = "hello";
    undefs[1] = "world";
    log(undefs);

    let arr = Array();
    let empty = [];
    let primes = [2, 3, 5, 7, 11];
    let misc = [1.1, true, "hello world", 'a'];
    let base = 1024;
    let table = [base, base + 1, base + 2, base + 3];
    console.log(arr, empty, primes, misc, table);
    log(base);

    // spread operator;
    let a = [1, 2, 3, 4];
    let b = [0, ...a, 5, 6, 8];
    console.log(a, `\r\n${"===".repeat(8)}\r\n`, b);
    let str = "ABCsdijou412038204";
    let digits = [...str];
    mLog(digits);

    let letters = [..."hello world!"];
    mLog(letters, new Set(letters), "====".repeat(8), ...new Set(letters));
    mLog(Array.of(), Array.of(10), Array.of(1, 2, 4, 5, "hello"));

    let obj = { x: "x" };
    let objs = [obj, { y: "y" }];
    let copy = Array.from(objs);
    copy[0].x = "xxxx";
    mLog(objs, copy);
    // like mapping function in stream etc...
    let cpy = Array.from(objs, (obj, num) => {
        obj.msg = "init";
        log(`index now : ${num}`);
        return obj;
    });
    log(cpy);

    delete objs[1];
    copy[0].x = "now new x here";
    mLog(objs, copy, cpy);
}

function mLog(...sources) {
    console.log("=".repeat(20));
    for (let s of sources) {
        console.log(s, "\r\n");
    }
}

{
    // Array next part;
    let a = Array();
    // create a property named "-1.23"
    a[-1.23] = true;
    a["1000"] = 0;
    // equality to a[1000] create a 1000 length Array;
    a['hello'] = "world";
    a[1.000] = 1;
    log(a);
    a[0] = 1000;
    // create a property named "-1"
    a[-1] = 200;
    log(a);

    // sparse Arrays;
    // create a new array with lenght of 5, but no elements;
    let sa = new Array(5);
    sa = [];
    sa[100] = 0;
    log(sa);
    delete sa[100];
    // 101 length but no elements;
    log(sa.length)
}

{
    // iterator an array;
    let arr = new Array();
    arr.push('name12');
    arr.push('name2');
    arr.push('name3');
    arr.push('namesdf');
    arr.forEach((e) => {
        console.log(e);
    });
    arr.map((x) => {
        return "e_" + x;
    }).forEach((x) => {
        log(x);
    });

    let letters = [..."hello world"];
    let every_other = "";
    for (let [index, letter] of letters.entries()) {
        if (index % 2 == 0) { every_other += letter; }
    }

    log(every_other);

    let vowels = "";
    for (let letter of letters) {
        if (/[aeiou]/.test(letter)) { vowels += letter; }
    }
    log(vowels);
}

{
    // Array methods;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = arr.reduce((x, y) => x + y, 0);
    let f = arr.reduce((x, y) => x * y, 1);
    let max = arr.reduce((x, y) => x > y ? x : y);
    mLog(sum, f, max);
    let rightSum = arr.reduceRight((acct, val) => acct += val);
    log(rightSum);
    let a = arr.reduceRight((acct, val) => Math.max(acct, val));
    log(a);

    // flat mapping;
    let ff = [1, [2, [3, 4]]];
    log(ff.flat());
    log(ff.flat(100))

    let phrases = ["hello world", "the definitive guide"];
    let words = phrases.flatMap(phrase => phrase.split(' '));
    log(words);

    let w = [-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x));
    log(w)

    // concat array; does not modify the array
    // on which it is invoked;
    let new_arr = arr.concat(8, 100);
    // flat 1 level;
    let new_arr2 = arr.concat(8, 88, [1024, [78, -88]]);
    mLog(arr, new_arr, new_arr2);

}

{
    // shift() pop() push(), unshift()
    // --<    -->   --<    -->
    let a = [];
    a.push([1, 2, 3]);
    a.push(-1);
    a.unshift(99);
    a.unshift(-3);
    log(a);
    a.shift();
    log(a);
    a.pop();
    log(a);

    a = [1, 2, 4, 5, 6, 78];
    log(a.slice(0, 3));
    log(a.slice(4, Number.MAX_VALUE));
    log(a.slice(1, -2));
    log(a);
    a.splice(4);
    log(a);
    // specify which array elements are to be deleted;
    a.splice(1, 2);
    // splice changes a;
    log(a);

    // insert elements
    a.splice(2, 0, "abc", "ddd", "mm", "dz", "h");
    a.splice(2, 3, "333", "444", "555");
    log(a);

    // fill method;
    let b = [];
    b[50] = 1;
    b.fill("hello", 0, 50);
    log(b);

    // copyWithin() method;
    // 第一个参数: 表示要复制的数据到位置的目标索引
    // 第二个参数: 复制的数据的起始位置: 省略时默认为0
    // 第三个参数: 复制的数据的结束位置: 省略时默认为数组的长度
    let c = [1, 2, 4, 5, 65536];
    log(c.copyWithin(4));
    log(c.copyWithin(2, 3, 5));
    log(c.copyWithin(-1, 2));
}

{
    // Array Searching and Sorting Methods;
    // indexOf, lastIndexOf;
    let a = [1, 2, 4, 5, 10, 8, -1, 1];
    mLog(a.indexOf(1),
        a.lastIndexOf(1),
        a.indexOf(3));
}