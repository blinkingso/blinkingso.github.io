/**
 * JavaScript Classes;
 */
function range(from, to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
    includes(x) { return this.from <= x && x <= this.to; },
    toString() { return `(${this.from}...${this.to})` },
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
}

let r = range(1, 5);
console.log(r.includes(2));
console.log(r.toString());
console.log(...r);

{
    // constructor function instead of factory function;
    function Range(from, to) {
        this.from = from;
        this.to = to;
    }

    Range.prototype = {
        includes: function (x) { return this.from <= x && x <= this.to; },
        [Symbol.iterator]: function* () {
            for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
        },
        toString: function () { return `(${this.from}...${this.to})` }
    }

    let r = new Range(1, 5);
    console.log(r.includes(3));
    console.log(r);
    console.log(...r);

    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    Person.prototype = {
        toString: function () {
            return `{
            name: ${this.name},
            age: ${this.age},
            sex: ${this.sex},
        }`}
    }

    console.log(new Person("yaphets", 18, "male"));
    console.log(Range.prototype);
    console.log(r.constructor.name);
}

{
    // class keyword;
    class Range {
        constructor(from, to) {
            this.from = from;
            this.to = to;
        }

        includes(x) { return this.from <= x && x <= this.to; }

        *[Symbol.iterator]() {
            for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
        }

        toString() { return `(${this.from}...${this.to})` }
    }

    const r = new Range(5, 10);
    console.log(r);

    class Span extends Range {
        constructor(start, length) {
            if (length >= 0) {
                super(start, start + length);
            } else {
                super(start + length, start);
            }
        }

        // static methods;
        static parse(s) {
            let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
            if (!matches) {
                throw new TypeError(`Cannot parse Range from "${s}"`)
            }
            return new Span(parseInt(matches[2]), parseInt(matches[1]));
        }

        get start() {
            return this.from;
        }

        set start(v) {
            this.from = v;
        }

        get end() { return this.to; }

        set end(v) { this.to = v; }
    }

    let s = Span.parse('(10...3)');
    console.log(s.toString());
    s.start = 1;
    s.end = 101;
    console.log(s.toString());
}

{
    class Buffer {
        // define a private field;
        #size = 0;
        #capacity = 4096;
        buffer = new Uint8Array(this.capacity);

        get size() { return this.#size; }
        set capacity(v) {
            if (typeof v !== 'number') {
                throw new TypeError('v must be a number');
            }
            this.#capacity = v;
        }

        get capacity() {
            return this.#capacity;
        }

        static #integerRangePattern = /^\((\d+)\.\.\.(\d+)\)&/;
        static matches(s) {
            let matches = s.match(Buffer.#integerRangePattern);
            if (!matches) {
                throw new TypeError(`Cannot parse Range from ${s}`);
            }

            return matches;
        }
    }

    console.log(new Buffer().capacity);
}

class Complex {
    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }

    plus(that) { return new Complex(this.r + that.r, this.i + that.i); }

    times(that) {
        return new Complex(this.r * that.r - this.i * that.i,
            this.r * that.i + this.i * that.r);
    }

    static sum(c, d) { return c.plus(d); }
    static product(c, d) { return c.times(d); }

    get real() { return this.r; }
    get imaginary() { return this.i; }
    get magnitude() { return Math.hypot(this.r, this.i); }
    toString() { return `{${this.r}, ${this.i}}`; }
    equals(that) {
        return that instanceof Complex &&
            this.r === that.r &&
            this.i === that.i;
    }
}
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

{
    let a = Complex.I.plus(Complex.ONE);
    console.log(a, a.magnitude);

    const map = new Map();
    map.set("java", 1024);
    map.set("java", "hello world");
    map.set("javascript", { x: 1, y: 1, z: 1 });
    console.log(map);
}

{
    // delegating rather than inheritance.
    // holds a property Map in Histogram class;
    class Histogram {
        constructor() { this.map = new Map(); }

        count(key) { return this.map.get(key) || 0; }

        has(key) { return this.count(key) > 0; }

        get size() { return this.map.size; }

        add(key) { this.map.set(key, this.count(key) + 1); }

        delete(key) {
            let count = this.count(key);
            if (count === 1) {
                this.map.delete(key);
            } else if (count > 1) {
                this.map.set(key, count - 1);
            }
        }

        [Symbol.iterator]() { return this.map.keys(); }

        keys() { return this.map.keys(); }
        values() { return this.map.values(); }
        entries() { return this.map.entries(); }
    }
}

{
    // abstract class;
    class AbstractSet {
        has(x) { throw new Error("AbstractSet is not implemented") }
    }

    class RangeSet extends AbstractSet {
        constructor(from, to) {
            super();
            this.from = from;
            this.to = to;
        }

        has(x) { return x >= this.from && x <= this.to; }

        toString() { return `{ x| ${this.from} ≤ x ≤ ${this.to} }`; }
    }

    let rs = new RangeSet(1, 5);
    console.log(rs.has(3));
    console.log(rs.toString());

    class AbstractEnumerableSet extends AbstractSet {
        get size() { throw new Error("no implementation!") }
        [Symbol.iterator]() { throw new Error("no implementation!") }

        isEmpty() { return this.size === 0 }
        toString() { return `{${Array.from(this).join(", ")}}` }
        equals(set) {
            if (!(set instanceof AbstractEnumerableSet)) return false;
            if (this.size !== set.size) return false;
            for (let ele of this) {
                if (!set.has(ele)) return false;
            }

            return true;
        }
    }

    class SingletonSet extends AbstractEnumerableSet {
        constructor(member) {
            super();
            this.member = member;
        }

        has(x) { return x === this.member }
        get size() { return 1; }
        *[Symbol.iterator]() { yield this.member; }
    }

    let ss = new SingletonSet(10);
    console.log(ss.toString());
    console.log(ss.has(10));

    class AbstractWritableSet extends AbstractEnumerableSet {
        insert(x) { throw new Error("not implemented"); }
        remove(x) { throw new Error("not implemented"); }

        add(set) {
            for (let element of set) {
                this.insert(element);
            }
        }

        subtract(set) {
            for (let element of set) {
                this.remove(element);
            }
        }

        intersect(set) {
            for (let element of this) {
                if (!set.has(element)) {
                    // remove not in;
                    this.remove(element);
                }
            }
        }
    }

    class BitSet extends AbstractWritableSet {
        constructor(max) {
            super();
            this.max = max;
            this.n = 0;
            this.numBytes = Math.floor(max / 8) + 1;
            this.data = new Uint8Array(this.numBytes);
        }

        _valid(x) { return Number.isInteger(x) && x >= 0 && x <= this.max; }

        _has(byte, bit) { return (this.data[byte] & BitSet.bits[bit]) !== 0; }

        has(x) {
            if (this._valid(x)) {
                let byte = Math.floor(x / 8);
                let bit = x % 8;
                return this._has(byte, bit);
            } else {
                return false;
            }
        }

        insert(x) {
            if (this._valid(x)) {
                let byte = Math.floor(x / 8);
                let bit = x % 8;
                if (!this._has(byte, bit)) {
                    this.data[byte] |= BitSet.bits[bit];
                    this.n++;
                }
            } else {
                throw new TypeError("Invalid set element: " + x);
            }
        }

        remove(x) {
            if (this._valid(x)) {
                let byte = Math.floor(x / 8);
                let bit = x % 8;
                if (!this._has(byte, bit)) {
                    this.data[byte] &= BitSet.bits[bit];
                    this.n--;
                }
            } else {
                throw new TypeError("Invalid set element: " + x);
            }
        }
    }
}