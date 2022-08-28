/*
Formula:
 Celsius = [(Fahrenheit-32)×5]/9
 
 Output would be 
 45°F is 7.222222222222222°C
*/

let fahren=45
fahren=parseInt(`${fahren}`)
let degree_notation="\u00B0"
let result = [(`${fahren}`-32)*5]/9
console.log(`${fahren}${degree_notation}F is ${result}${degree_notation}C`)
