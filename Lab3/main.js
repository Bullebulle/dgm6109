"use strict"
document.getElementById("submit").addEventListener("click", function() {
/* Get user input from "inputF" field and convert to float */
let fahrenheit = parseFloat(document.getElementById("inputF").value); 
/*Get the conversion type selected by the user */
let conversionType = document.getElementById("conversionChoice").value;
/* Calculate Celsius*/
let celsius = (fahrenheit -32) * 5 / 9
/*Calculate Kelvin */
let kelvin = (fahrenheit + 459.67) * 5 / 9 /* I don't understand point 8, I aksed AI for help, it told me that I've already solved it with parseFloat() */ 
let outputText = "User-entered temperature in Fahrenheit" + fahrenheit + "°F\n";
/*
 Plan A
    if (conversionType === "c") {
        outputText += "Convert to Celsius is: " + celsius.toFixed(2) + "°C";
    }
    if (conversionType === "k") {
        outputText += "Convert to Kelvin is: " + kelvin.toFixed(2) + "K";
    }
    */
/*Plan B*/
if (conversionType === "c") {
        outputText += "Convert to Celsius is" + celsius.toFixed(2) + "°C";
    } else if (conversionType === "k") {
        outputText += "Convert to Kelvin is" + kelvin.toFixed(2) + "K";
    }
/* Call output function to display text on webpage */
    output(outputText);
});
/*Since I was self-studying in this class, I wasn't very clear about how to edit the code for the content displayed after the conditions. 
Every time, I had to use AI for help. 
For example, under what conditions can I directly tell the computer that I want to display text? In what form should I tell it? 
Under what conditions must I write down all the relevant codes? 
For example, in the slides of week 3, the question asked me to display different colors according to the number of ellipses. 
After self-studying, I tried many times to use commands such as "showRedellipse", but of course they all failed. 
Later, I asked AI for help and learned that I needed to write down all the commands for drawing ellipses (however, I still failed because I tried some variables, but the picture didn't seem to change at all). */

