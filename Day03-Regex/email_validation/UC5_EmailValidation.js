function validateEmail(email) {
    let emailRegex = /[a-zA-Z0-9._+-]+@[a-z]{3,}\.[a-z]{2,}(\.[a-z]{2})?$/;
    return emailRegex.test(email);
}

console.log(validateEmail("abc@bridgelabz.co.in"));
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));
console.log(validateEmail("abc-xyz@bridgelabz.co"));
console.log(validateEmail("abc_xyz@bridgelabz.co.in"));
console.log(validateEmail("abc$xyz@bridgelabz.co"));
console.log(validateEmail("abc.xyz@bridgelabz.com1"));
