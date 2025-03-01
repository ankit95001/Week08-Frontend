function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        return "Temperature out of range";
    }
    return (degC * 9 / 5) + 32;
}

function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        return "Temperature out of range";
    }
    return (degF - 32) * 5 / 9;
}

let choice = parseInt(process.argv[2]);
let temp = parseFloat(process.argv[3]);

switch (choice) {
    case 1: console.log(temp + "°C =", celsiusToFahrenheit(temp) + "°F"); break;
    case 2: console.log(temp + "°F =", fahrenheitToCelsius(temp) + "°C"); break;
    default: console.log("Invalid Choice");
}
