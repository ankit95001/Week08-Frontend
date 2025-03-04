function validateEmail(email) {
    let emailRegex = /^[a-z]{3,}@[a-z]{3,}$/;
    return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz"));
console.log(validateEmail("abc@xyz.co.in"));
console.log(validateEmail("abc@bridgelabz123.co"));
