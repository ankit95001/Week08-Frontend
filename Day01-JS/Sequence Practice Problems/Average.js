let total = 0;
for (let i = 0; i < 5; i++) {
    total += Math.floor(Math.random() * 90) + 10;
}
let average = total / 5;
console.log("Sum:", total, "Average:", average);