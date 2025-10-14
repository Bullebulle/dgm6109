"use strict"

let choice, amount;

document.getElementById("submit").addEventListener("click", processFormValues);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});

/* IC: Process your form values here */

function processFormValues() {
/* Get values from index.html */
    let cardType = document.getElementById("CardType").value;
    let cardNumber = document.getElementById("CardNumber").value;
    let zipCode = document.getElementById("ZipCode").value;
    let validationCode = document.getElementById("ValidationCode").value;

    let cCardSum = 0
    let gCardSum = 0
    let zipCodeSum = 0
    
/* Confirm whether the cards' number meets the requirements and calculate the sum of each card*/
    if (cardType === "C") {
        if (cardNumber.length === 6) {
        /* Get each digit of the Charicard number. Refenence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String*/
            let cCardDigit1 = Number(cardNumber [0]); 
            let cCardDigit2 = Number(cardNumber [1]);
            let cCardDigit3 = Number(cardNumber [2]);
            let cCardDigit4 = Number(cardNumber [3]);
            let cCardDigit5 = Number(cardNumber [4]);
            let cCardDigit6 = Number(cardNumber [5]);
            /*Calculate sum of the card number*/
            cCardSum = cCardDigit1 + cCardDigit2 + cCardDigit3 + cCardDigit4 + cCardDigit5 + cCardDigit6;
        } else {
            output ("The card number must be exactly 6 digits.")
            return false;
        }      
    } else if (cardType === "G") {
        if (cardNumber.length === 8) {
            /* Get each digit of the Gengcard number */
            let gCardDigit1 = Number(cardNumber [0]); 
            let gCardDigit2 = Number(cardNumber [1]); 
            let gCardDigit3 = Number(cardNumber [2]);
            let gCardDigit4 = Number(cardNumber [3]);
            let gCardDigit5 = Number(cardNumber [4]);
            let gCardDigit6 = Number(cardNumber [5]);
            let gCardDigit7 = Number(cardNumber [6]);
            let gCardDigit8 = Number(cardNumber [7]);
            /*Calculate sum of the card number*/
            gCardSum = gCardDigit1 + gCardDigit2 + gCardDigit3 + gCardDigit4 + gCardDigit5 + gCardDigit6 + gCardDigit7 + gCardDigit8;/*Calculate sum of the card number*/
        } else {
                output("The card number must be exactly 8 digits.") /*Error messager*/
        return false;
    }
    }

    /* Confirm whether the ZIP code meets the requirement and calculate the sum*/
    if (zipCode.length === 5) {
        /* Get each digit of the ZIP code */
        let zipCodeDigit1 = Number(zipCode [0]);
        let zipCodeDigit2 = Number(zipCode [1]);
        let zipCodeDigit3 = Number(zipCode [2]);
        let zipCodeDigit4 = Number(zipCode [3]);
        let zipCodeDigit5 = Number(zipCode [4]);
        zipCodeSum = zipCodeDigit1 + zipCodeDigit2 + zipCodeDigit3 + zipCodeDigit4 + zipCodeDigit5; /*Calculate sum of the ZIP code*/
    } else {
        output("The ZIP Code must be 5 digits.") /*Error message*/
        return;
    }

/* Confirm whether the validation code meets the requirement*/
let first2ValiCode, last2ValiCode;
    if (validationCode.length === 4) {
        /* Get each digit of the validation code */
        let validCodeDigit1 = validationCode [0];
        let validCodeDigit2 = validationCode [1];
        let validCodeDigit3 = validationCode [2];
        let validCodeDigit4 = validationCode [3];
    /* use concat for strings, reference: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat*/
        let first2ValiCodeStr = validCodeDigit1.concat(validCodeDigit2);
        let last2ValiCodeStr = validCodeDigit3.concat(validCodeDigit4);
    /* convert to Number*/
        first2ValiCode = Number(first2ValiCodeStr);
        last2ValiCode = Number(last2ValiCodeStr);
    } else {
        output("The validation code must be 4 digits."); /*Error message*/
        return false;
    }
/* Confirm whether the validation code meets both of the two requirements.
The validation must meets both of the conditions: 
1.The first 2 digits of validation code must be equal the sum of the individual numbers in the Charicard. 
2.The last 2 digits of validation code coule not be the sum of the individual digits in the ZIP code*/
    if ((cardType === "C" && first2ValiCode === cCardSum && last2ValiCode != zipCodeSum) || (cardType === "G" && first2ValiCode === gCardSum && last2ValiCode != zipCodeSum) ) {
        output("Your credit card information has been saved successfully. Happy Shopping!");
    } else {
        /*When validation code doesn't meet the requirements*/
        if ((cardType === "C" && first2ValiCode != cCardSum) || (cardType === "G" && first2ValiCode != gCardSum)) {
            output("Your validation code does not match this credit card number."); /*Error message*/
        } else if (last2ValiCode === zipCodeSum)
            output("Your validation code does not match your address."); /*Error message*/
        }

/* IC: You do not need to modify or flowchart this function. It just passes things on to the functions that you should modify! */

function processData() {

    let evaluationCompleted = false;

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    } else {
        rule();
    }
}

/* IC: Use this function to check that all form values (that are not limited by HTML) are within accepable ranges. Output an error and return false if not. If you want to divide your validate function into smaller functions, then call the additional functions from this one. */ 

function validateData() {
    let valid = true;

    if (amount < 1 || isNaN(amount)) {
        output("Please enter a positive number!")
        valid = false;
    }

    return valid;
}

/* IC: Use this function to check that all combinations of submitted data meet your project requirements.  Output an error and return false if not. If you want to divide your evaluate function into smaller functions, then call the additional functions from this one. */ 

function evaluateAnswers() {

    if (amount % choice != 0) {
        output(`Sorry, your quantity ${amount} must be evenly divisible by the option you chose (you chose ${choice}!`);
        return false;
    }

    output("Sure, you can have " + amount + " of " + choice + ".")
    return true;
}
}
