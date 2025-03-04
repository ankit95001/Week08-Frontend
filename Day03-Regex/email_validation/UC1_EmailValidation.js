function validateEmail(email) {
    let emailRegex = /^[a-z]{3,}@/;
    return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co.in"));
console.log(validateEmail("xyz@bridgelabz.co.in"));
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));
