function validatePIN(pin){
    let pinRegex = /^[0-9][A-Z0-9]{4}[0-9]$/
    return pinRegex.test(pin);
}

console.log(validatePIN("40088B"))
console.log(validatePIN("400888"))
console.log(validatePIN("400B88"))