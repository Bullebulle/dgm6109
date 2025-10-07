"use strict"
/*ask user select card type*/
function processCardSelection() {
    const cardTypeSelect = document.getElementById(cardType)
    const selectedValue = cardTypeSelect.value;
}
if (selectedValue === "Charicard")  {
    /* switch to the Charicard branch */;
    } else {
        /*switch to the Gengcard branch*/;
    }

/* Charicard branch*/

/* Check if Charicard number is exactly 6 digits */
    if (cardNumberChari.length === 6 /*Confirm whether it is a 6-digit number*/) {
        /* Caculate the sum of the individual digits in the credit card number.*/
    } else {
        alert("Card number must be exactly 6 digits");}
    
/* ask user enter ZIP number*/
    
if (zipCode.length === 5 /*Confirm whether it is a 5-digit number*/) {
   /* cacluate the sum of individual digits*/
} else { alert("ZIP code must be exactly 5 digits")}
/* ask user enter 4-digit validation code */

if (validationCode.length === 4 /*Confirm whether it is a 5-digit number*/) {
    /* Caculate the sum of the first 2 digits of validation code */
} else { alert("Validation code must be 4 digits")}

if (validationFirstTwo === /*sum of the card number*/) {
    /*Caculate the sum of the last 2 digits of validation code*/
} else { alert("Your validation code does not match this credit card number.")}

if (validationLastTwo != /* sum of the ZIP code*/) {
    outputMessage("Your credit card information has been saved successfully. Happy Shopping!")
} else { alert("Your validation code does not match your address.")}


/* Gencard branch*/
/* Check if Gengcard number is exactly 8 digits */
    if (cardNumberGeng.length === 8 /*Confirm whether it is a 8-digit number*/) {
        /* Caculate the sum of the individual digits in the credit card number.*/
    } else {
        alert("Card number must be exactly 8 digits");}
    
/* ask user enter ZIP number*/
    
if (zipCode.length === 5 /*Confirm whether it is a 5-digit number*/) {
   /* cacluate the sum of individual digits*/
} else { alert("ZIP code must be exactly 5 digits")}
/* ask user enter 4-digit validation code */

if (validationCode.length === 4 /*Confirm whether it is a 5-digit number*/) {
    /* Caculate the sum of the first 2 digits of validation code */
} else { alert("Validation code must be 4 digits")}

if (validationFirstTwo === /*sum of the card number*/) {
    /*Caculate the sum of the last 2 digits of validation code*/
} else { alert("Your validation code does not match this credit card number.")}

if (validationLastTwo != /* sum of the ZIP code*/) {
    outputMessage("Your credit card information has been saved successfully. Happy Shopping!")
} else { alert("Your validation code does not match your address.")}