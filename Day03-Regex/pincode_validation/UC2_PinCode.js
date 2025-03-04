function validatePin(pin){
    let pinRegex = /^[0-9]{1}[A-Z0-9]{5}$/
    return pinRegex.test(pin);
}

console.log(validatePin("A400088"))
console.log(validatePin("4A0088"))