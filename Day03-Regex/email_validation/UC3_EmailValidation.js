function validateEmail(email) {
    let emailRegex = /^[a-z]{3,}@[a-z]{3,}\.[a-z]{2,}$/;
    return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co.in"));
console.log(validateEmail("abc@bridgelabz.com"));
console.log(validateEmail("abc@bridgelabz.co"));
