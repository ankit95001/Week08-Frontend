function findRepeatedDigits() {
    let repeatedNumbers = [];
    for (let i = 11; i <= 99; i += 11) {
        repeatedNumbers.push(i);
    }
    return repeatedNumbers;
}

console.log("Repeated Digits:", findRepeatedDigits());
