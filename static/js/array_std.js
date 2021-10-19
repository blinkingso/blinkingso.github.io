import { log, mLog } from './log.js';

{
    // Array; indexOf, lastIndexOf();
    let a = [1, 2, 4, 5, 10, 8, -1, 1];
    mLog(a.indexOf(1),
        a.lastIndexOf(1),
        a.indexOf(3));


    function findAll(arr, element) {
        let result = [];
        let pos = 0;
        while (pos < arr.length) {
            let idx = arr.indexOf(element, pos);
            // find completed
            if (idx === -1) break;
            result.push(idx);
            pos = idx + 1;
        }

        return result;
    }

    log(findAll(a, 1));
}

{
    // includes();
    let a = [1, true, "3", NaN]
    log(a.includes(true))
    mLog(a.includes(2), a.includes(NaN), a.indexOf(NaN));
}

{
    // sort(); sorts the elements of an array in place and returns the sorted array;
    let a = [1, 2, "hello", "-1", "-2", undefined, NaN];
    log(a.sort());
    let b = [11, 4, -108, 222];
    // asc
    b = b.sort((x, y) => x - y);
    log(b);
    // desc
    b = b.sort((x, y) => y - x);
    log(b);
}

{
    // reverse();
    let a = [11, 4, -108, 222];
    log(a.reverse());

    function reverse(arr) {
        for (let i = 0, j = arr.length - 1;
            i < j; i++, j--) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    reverse(b);
    log(b);
}

{
    //Array to String Conversion;
    // JSON.stringify(arr)
    // join();
    let a = [1, 2, 3, 4, 5, 6, 7, 8, "hello", NaN];
    log(a.join());
    log(a.join('=>'));
    let b = new Array(10);
    log(b.join('='));
    // toString();
    log(b.toString());
    log(a.toString())
    // toLocaleString();
    log(a.toLocaleString());
    log(b.toLocaleString());
    let c = [1, [2, 4], ["hello", ["world", "off", {
        x: "this",
        y: 1.0123,
    }]]];
    log(c.toString());
    log(c.toLocaleString());
    log(c.join('=>'))
}

{
    //static Array Functions;
    log(Array.isArray([]));
    log(Array.isArray({}));
}

{
    // String as Arrays;
    log(Array.prototype.join.call("JavaScript", " "));
}