function validatePIN(pin) {
    let pinRegex = /[0-9]{6}$/;
    return pinRegex.test(pin);
}

console.log(validatePIN("400088"));