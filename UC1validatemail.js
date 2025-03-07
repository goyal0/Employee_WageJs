let validateEmail=(email)=> {
    const regex = /^abc([_\+\-.][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return regex.test(email);
}

// Test Cases
console.log(validateEmail("abc@bridgelabz.co"));     
console.log(validateEmail("abc.xyz@bridgelabz.co"));    
console.log(validateEmail("abc_xyz@bridgelabz.co"));    
console.log(validateEmail("abc-xyz@bridgelabz.co"));    
console.log(validateEmail("abc+xyz@bridgelabz.co.in")); 

console.log(validateEmail("abc@bridgelabz.co.in"));     
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc-xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc+xyz@bridgelabz.co.in"));

console.log(validateEmail("abc!xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc@xyz.co.in"));           
console.log(validateEmail("abc@bridgelabz.com"));     
console.log(validateEmail("xyz@bridgelabz.co.in"));    
