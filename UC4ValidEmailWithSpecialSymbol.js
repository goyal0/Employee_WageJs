let isValidEmail=(email)=> {
    const regex = /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)?@[\w-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

// Example Usage
console.log(isValidEmail("abc@bridgelabz.co.in"));       
console.log(isValidEmail("abc.xyz@bridgelabz.co.in"));   
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));  
console.log(isValidEmail("abc+xyz@bridgelabz.co.in"));   
console.log(isValidEmail("abc_xyz@bridgelabz.co.in"));   

// Invalid Cases
console.log(isValidEmail("abc!xyz@bridgelabz.co.in"));   
console.log(isValidEmail("abc@bridgelabz"));            
console.log(isValidEmail("abc..xyz@bridgelabz.co.in")); 
console.log(isValidEmail("abcxyz@bridgelabz..in"));     
console.log(isValidEmail("@bridgelabz.co.in"));         
