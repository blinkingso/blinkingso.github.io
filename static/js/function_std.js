/**
 * Functions;
 * 
 */
import { log, mLog } from './log.js';

{
    // Function Declarations;
    function printprops(o) {
        for (let p in o) {
            console.log(`${p}: ${o[p]}`);
        }
    }

    let o = {
        x: 1024,
        name: "yaphets",
    };
    printprops(o);

    /**
     * 
     * @param {x1} x1 x of point a;
     * @param {y1} y1 y of point a; 
     * @param {x2} x2 x of point b;
     * @param {y2} y2 y of point b;
     * @returns dis
     */
    function distance(x1, y1, x2, y2) {
        let dx = x2 - x1;
        let dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * jiecheng
     * @param {jiecheng} x value
     * @returns bigint `5! ==> 5*4*3*2*1`
     */
    function factorial(x) {
        if (x <= 1) return 1;
        return x * factorial(x - 1);
    }

    // Function Expressions;
    const square = function (x) { return x * x; };
    const f = function fact(x) { if (x <= 1) return 1; else return x * fact(x - 1); };
    log(f(5));
    log([3, 2, 1].sort((a, b) => a - b));
    let tensquared = (function (x) { return x * x; }(10))
    log(tensquared);

    // Arrow Functions;
    const sum = (x, y) => { return x + y; };
    const sum1 = (x, y) => x + y;
    const polynomial = x => x * x + 2 * x + 3;
    const constantFunc = () => 42;
}
{
    /**
     * if the body of your arrow function is a single `return`
     * statement but the expression to be returned is an object literal,
     * then you have to put the object literal inside parentheses(which means `()`) to avoid 
     * syntactic ambiguity
     */
    // arrow function, avoid syntactic ambiguity
    // Good: f() returns an object;
    const f = x => { return { value: x }; };
    // Good: g() returns and object
    const g = x => ({ value: x });
    // Bad: h() returns nothing; here h() is truly ambiguous
    const h = x => { value: x };
    // Bad: Syntax error
    // const i = x => { v: x, w: x };
    mLog(f(10), g(20), h(10));

    // array methods;
    let filterd = [1, null, NaN, 2, 3, "hello"]
        .filter(x => x != null && x);
    log(filterd);
    let squares = [1, 2, 3, 4, 5].map(x => x * x);
    log(squares);
}

{
    // 8.1.4 Nested Functions;
    function hypotenuse(a, b) {
        function square(x) { return x * x };
        return Math.sqrt(square(a) + square(b));
    }

    log(hypotenuse(3, 4));
    // 8.2 Invoking Functions;
    // Conditional Invocation;

    // Define and invoke a function to determine if we're in strict mode;
    const strict = (function () { return !this; }());
    log(`mode : ${strict}`)
}

{
    let arr = [(x, y) => x + y, (x) => -x];
    log(arr[0](3, 4));
}

// Indirect Invocation;
{
    // call() apply()
    function getPropertyNames(o, arr) {
        arr = arr || [];
        for (let property in o) arr.push(property);
        return arr;
    }

    let o = { x: 10, y: 20.1 }, z = { name: "yaphets", age: 18 };
    let arr = getPropertyNames(o);
    log(arr);
    arr = getPropertyNames(z, arr);
    log(arr);

    // if arr is omitted, create and return a new array;
    function getPropertyNames2(o, arr = []) {
        return getPropertyNames(o);
    }

    // function default value
    const rectangle = (width, height = width * 2) => ({ width, height });
    log(rectangle(1, 3));
    log(rectangle(2));
}

// Rest Parameters and Variable-Length Argument Lists;
{
    function max(first = -Infinity, ...rest) {
        let maxValue = first;
        for (let val of rest) {
            if (val > maxValue) {
                maxValue = val;
            }
        }

        return maxValue;
    }

    log(max(-1, 3, 4, 5,));

    // before es6, varargs functions.
    function max_(x) {
        let maxValue = -Infinity;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > maxValue) {
                maxValue = arguments[i];
            }
        }

        return maxValue;
    }
    log(max_(10, 3, 4, 5, 20))
}

{
    // 8.3.4 The Spread Operator for Function Calls;
    let numbers = [5, -1, 2, 10, 99, 100, -1];
    log(Math.min(...numbers));

    function timed(f) {
        return function (...args) {
            log(`Entering function ${f.name}`);
            let startTime = Date.now();
            try {
                return f(...args);
            } finally {
                log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
            }
        };
    }

    function benchmark(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) sum += i;
        return sum;
    }

    function febonaci(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return n + febonaci(n - 1);
    }

    log(timed(benchmark)(100000000));
    log(timed(febonaci)(102));
}

{
    // 8.3.5 Destructuring Function Arguments into Parameters;
    function vectorAdd(v1, v2) {
        return [v1[0] + v2[0], v1[1] + v2[1]];
    }

    function vectorAdd2([x1, y1], [x2, y2]) {
        return [x1 + x2, y1 + y2];
    }

    const a = [1, 3], b = [5, -1];
    log(vectorAdd(a, b));
    log(vectorAdd2(a, b));

    function vectorMultiply({ x, y }, scalar) {
        return {
            x: x * scalar,
            y: y * scalar
        };
    }

    log(vectorMultiply({ x: 1, y: 2 }, 0.3));

    function vectorMultiply2({ x, y, z = 0 }, scalar) {
        return {
            x: x * scalar,
            y: y * scalar,
            z: z * scalar,
        }
    }
    log(vectorMultiply2({ x: 1, y: 3 }, 0.34));

    {
        // Array Copy
        function arrayCopy({ from, to = from, n = from.length, fromIndex = 0, toIndex = 0 }) {
            let valuesToCopy = from.slice(fromIndex, fromIndex + n);
            // copy data from 'from array' to 'to array' at index of `toIndex` 
            to.splice(toIndex, 0, ...valuesToCopy);
            return to;
        }

        let from = [..."hello javascript world"];
        let to = [..."!, good job"];
        arrayCopy({ from: from, to: to });
        log(to.join() === [..."hello javascript world!, good job"].join());
        log(to);
        log([..."hello javascript world!, good job"]);
    }
}

{
    let aa = [1, 2, 3, 4, 5, 8, 10, -1, -2, -8];
    log(aa.splice(2, 3, "hello , world", 1024, -99));
    log(aa);
    log(aa.slice(2, 100));
}

{
    function f([x, y, ...coords], ...rest) {
        return [x + y, ...rest, ...coords];
    }

    log(f([1, 2, 8, 0, -1, 10], 8, 9, 10, 's', 'e'));

    // rest parameter destructure.
    function vectorMultiply({ x, y, z = 0, ...props }, scalar) {
        return {
            x: x * scalar,
            y: y * scalar,
            z: z * scalar,
            ...props
        }
    }

    log(vectorMultiply({ x: 1, y: -2, z: 1.35, w: -1, h: -1 }, 0.5));
}

{
    log((Math.random() * 10 >= 5) ? 1 : 0);

    // fail faster with an error message.
    function sum(a) {
        let total = 0;
        for (let e of a) {
            if (typeof e !== "number") {
                throw new TypeError("sum(): elements must be numbers");
            }

            total += e;
        }

        return total;
    }
    try {
        sum([1, 2, "3"])
    } catch (e) {
        // todo log;
        log("xia gao.");
    }
}

/**Functions as Values */
{
    function square(x) { return x * x; };
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;

    function operator(operator, o1, o2) {
        return operator(o1, o2);
    }

    log(operator(square, 21));
    log(operator(add, 1, 2));
    log(operator(subtract, 1, 2));
    log(operator(multiply, 1, 2));
    log(operator(divide, 1, 2));
}

{
    // Defining Your Own Function Properties;
    function factorial(n) {
        if (Number.isInteger(n) && n > 0) {
            if (!(n in factorial)) {
                // compute and cache
                factorial[n] = n * factorial(n - 1);
            }

            return factorial[n];
        } else {
            return NaN;
        }
    }

    // set 1
    factorial[1] = 1;
    log(factorial(5));
}

{
    // Functions as Namespaces;
    // Closures;
    const scope = "global scope";
    function gloablScope() {
        let scope = "local scope";
        function getScope() { return scope };
        return getScope;
    }

    log(gloablScope()());

}

{
    // return counter ++ function;
    let uniqueInteger = (function () {
        let counter = 0;
        return function () { return counter++ };
    }());
    log(uniqueInteger());

    function counter() {
        let n = 0;
        return {
            count: function () { return ++n; },
            reset: function () { n = 0; },
        }
    }

    let c = counter(), d = counter();
    log(c == d);
    mLog(typeof c, typeof d);
    mLog(c.count(), d.count());
    c.reset();
    mLog(c.count(), d.count());
}

{
    function counter(n) {
        return {
            get count() { return ++n; },
            set count(m) {
                if (m > n) { n = m } else {
                    throw new Error("no more large than n");
                }
            }
        }
    }

    let c = counter(1000);
    mLog(c.count, c.count);
    c.count = 2000;
    log(c.count);
    try {
        c.count = 2000;
    } catch (e) {
        log(e);
    }
}

{
    // private obj property;
    function addPrivatePropery(obj, name, predicate) {
        // to store data;
        let value;

        // get method;
        obj[`get${name}`] = function () { return this.value };
        obj[`set${name}`] = function (v) {
            if (predicate && !predicate(v)) {
                throw new TypeError(`set${name}: invalid value : ${v}`);
            } else {
                this.value = v;
            }
        }
    }

    let o = {};
    log(o);
    addPrivatePropery(o, "Name", v => typeof v == "string");
    addPrivatePropery(o, "Age", (v) => typeof v === "number");
    o.setName("yaphets");
    log(o);
    o.setAge(16);
    log(o);

}

{
    // function properties, name, prototype, constructor;
    function a(a, b, c) {
        return c;
    }

    const c = a;

    mLog(a.length, a.name, c.name, c.prototype)

    let o = {
        a: 12,
        f: function () {
            return 123;
        }
    }

    log(o.f.call());

    let obj = {
        // to replace a function;
        add: function (x, y) {
            return x + y;
        }
    }



    function trace(o, m, ...args) {
        let original = o[m];
        o[m] = function (...args) {
            log(`start at ${Date.now()}`);
            let result = original.apply(o, args);
            console.log(`result is ${result}`);
            console.log(`end at ${Date.now()}`);
            log('')
            return result;
        }

        o[m].apply(o, args);
    }

    trace(obj, "add", 1, 4);
    // log(obj.add(1, 3));
}

{
    // bind;
    function f(y) {
        return this.x + y;
    }

    let obj = { x: 101 };
    // bind function f to object obj;
    // use g to invoke the original function f;
    // dynamiclly add new function to an object;
    let g = f.bind(obj);
    log(g(12));

    // bind() 
    let sum = (x, y) => x + y;
    let succ = sum.bind(null, 10); // bind the first argument to 10; x = 10;
    log(succ(2));
}

{
    // toString method;
    function function_to_string() {
        log("hello toString");
        return "this name";
    }

    log(function_to_string.toString());
    log(Math.round.toString());
}

{
    // Function Constructor;
    const trace = new Function("m", "console.log(`${m}`); return m * m;");
    log(trace(100));
}

{
    // processing Arrays with Functions;
    // Suppose we have an array of numbers and we want to compute the mean and standard deviation of those values.
    // We might do that in nonfunctional style like this:
    let data = [1, 1, 3, 5, 5, 10, 8, -10.01];

    // nonfunctional style;
    let total = 0;
    for (let i = 0; i < data.length; i++) total += data[i];
    let mean = total / data.length;
    log(mean);

    // compute the standard deviation;
    total = 0;
    for (let i = 0; i < data.length; i++) {
        let deviation = data[i] - mean;
        total += deviation * deviation;
    }
    let stddev = Math.sqrt(total / (data.length - 1));
    log(stddev);

    //functional style using map() and reduce()
    const sum = (x, y) => x + y;
    const square = x => x * x;

    mean = data.reduce(sum) / data.length;
    let deviations = data.map(x => x - mean);
    stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));
    mLog(mean, stddev);
}

{
    // Higher-Order Functions;
    /** A higher-order function is a function that operates on functions,
     * taking one or more functions as arguments and returning a new function.
     */
    function not(f) {
        return function (...args) {
            let result = f.apply(this, args);
            return !result;
        };
    }

    const even = x => x % 2 === 0;
    const odd = not(even);
    log([1, 1, 3, 4, 5, 5].every(odd));
    log([1, 1, 3, 4, 5, 5].some(odd))

    const map = function (a, ...args) { return a.map(...args); };
    function mapper(f) {
        return a => map(a, f);
    }

    const increment = x => x + 1;
    const incrementAll = mapper(increment);
    log(incrementAll([1, 2, 3, 4, 5]));

    // Return a new function that computes f(g(...))
    function compose(f, g) {
        return function (...args) {
            // get g() return as an argument of function f;
            // then return f(g);
            return f.call(this, g.apply(this, args));
        }
    }

    let five = compose(Math.sqrt, (x, y) => x * x + y * y)(3, 4);
    log(`sqrt(3^2 + 4^2) = ${five}`);
}

{
    // Partial Application of Functions;
    function partialLeft(f, ...outerArgs) {
        return function (...innerArgs) {
            let args = [...outerArgs, ...innerArgs];
            return f.apply(this, args);
        };
    }

    function partialRight(f, ...outerArgs) {
        return function (...innerArgs) {
            let args = [...innerArgs, ...outerArgs];
            return f.apply(this, args);
        }
    }

    function partial(f, ...outerArgs) {
        return function (...innerArgs) {
            let args = [...outerArgs];
            let innerIndex = 0;
            for (let i = 0; i < args.length; i++) {
                if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
            }

            // append any remaing inner arguments
            args.push(...innerArgs.slice(innerIndex));
            return f.apply(this, args);
        }
    }

    const f = function (x, y, z) { return x * (y - z) };
    // 2 * (3 - 4)
    const l = partialLeft(f, 2)(3, 4);
    // 3 * (4 - 2)
    const r = partialRight(f, 2)(3, 4);
    // 3 * (2 - 4)
    const p = partial(f, undefined, 2)(3, 4);
    mLog(l, r, p);
}

{
    //memoize;
    function memoize(f) {
        const cache = new Map();

        return function (...args) {
            let key = args.length + args.join("+");
            if (cache.has(key)) {
                log('hit the key: ' + key);
                return cache.get(key);
            } else {
                let result = f.apply(this, args);
                cache.set(key, result);
                log('new key: ' + key);
                return result;
            }
        }
    }

    const add = (x, y) => x + y;
    // new function object;
    const m = memoize(add);
    m(2, 3);
    m(3, 4);
    m(2, 3);
}