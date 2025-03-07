var isValidEmail=(email)=> {
    const regex = /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

// Example Usage (Valid Cases)
console.log(isValidEmail("abc@bridgelabz.co"));       
console.log(isValidEmail("abc.xyz@bridgelabz.com"));   
console.log(isValidEmail("abc-xyz@bridgelabz.co.in")); 
console.log(isValidEmail("abc+xyz@bridgelabz.net"));
console.log(isValidEmail("abc_xyz@bridgelabz.org"));   
console.log(isValidEmail("abc@bridgelabz.io.in"));     

// Example Usage (Invalid Cases)
console.log(isValidEmail("abc!xyz@bridgelabz.co.in")); 
console.log(isValidEmail("abc@bridgelabz"));          
console.log(isValidEmail("abc..xyz@bridgelabz.com")); 
console.log(isValidEmail("abcxyz@bridgelabz..in"));   
console.log(isValidEmail("@bridgelabz.co.in"));       
