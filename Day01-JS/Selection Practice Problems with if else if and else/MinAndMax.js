let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

let max = result1;
let min = result1;

if (result2 > max) max = result2;
if (result3 > max) max = result3;
if (result4 > max) max = result4;

if (result2 < min) min = result2;
if (result3 < min) min = result3;
if (result4 < min) min = result4;

console.log("Results:", result1, result2, result3, result4);
console.log("Maximum:", max);
console.log("Minimum:", min);
