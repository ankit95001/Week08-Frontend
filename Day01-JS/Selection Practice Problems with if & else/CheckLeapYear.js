let year = parseInt(process.argv[2]);

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year, "is a Leap Year: true");
        } else {
            console.log(year, "is a Leap Year: false");
        }
    } else {
        console.log(year, "is a Leap Year: true");
    }
} else {
    console.log(year, "is a Leap Year: false");
}

// 4. Simulate a coin flip
let coinFlip = Math.random();
if (coinFlip < 0.5) {
    console.log("Coin Flip Result: Heads");
} else {
    console.log("Coin Flip Result: Tails");
}