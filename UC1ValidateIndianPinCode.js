var isValidPinCode=(pin)=> {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pin);
}


console.log(isValidPinCode("400088")); 
console.log(isValidPinCode("110001")); 
console.log(isValidPinCode("000000")); 
console.log(isValidPinCode("1234"));   
console.log(isValidPinCode("1234567"));
console.log(isValidPinCode("12A456")); 
