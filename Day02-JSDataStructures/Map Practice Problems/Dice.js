function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function diceSimulation() {
    let diceCount = new Map();
    for (let i = 1; i <= 6; i++) {
        diceCount.set(i, 0);
    }

    let maxRoll = 10, reachedMax = false;
    
    while (!reachedMax) {
        let roll = rollDice();
        diceCount.set(roll, diceCount.get(roll) + 1);
        
        if (diceCount.get(roll) === maxRoll) {
            reachedMax = true;
        }
    }

    let maxNum = [...diceCount.entries()].reduce((a, b) => a[1] > b[1] ? a : b);
    let minNum = [...diceCount.entries()].reduce((a, b) => a[1] < b[1] ? a : b);

    console.log("Dice Rolls Count:", Object.fromEntries(diceCount));
    console.log("Most Frequent:", maxNum[0], "with", maxNum[1], "times");
    console.log("Least Frequent:", minNum[0], "with", minNum[1], "times");
}

diceSimulation();
