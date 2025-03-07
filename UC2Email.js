const validateEmailFormat = (email) => /^[^@]+@bridgelabz\.[a-zA-Z]+$/.test(email);

// Test cases
console.log(validateEmailFormat("user@bridgelabz.com")); 
console.log(validateEmailFormat("user@gmail.com")); 
console.log(validateEmailFormat("userbridgelabz.com"));
console.log(validateEmailFormat("user@bridgelabz.org")); 
console.log(validateEmailFormat("@bridgelabz.com")); 

