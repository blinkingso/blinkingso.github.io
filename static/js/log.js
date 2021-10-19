export function log(msg) {
    console.log("*".repeat(60));
    console.log(msg);
}

export function mLog(...msgs) {
    console.log("*".repeat(60));
    for (let msg of msgs) {
        console.log(msg);
    }
}