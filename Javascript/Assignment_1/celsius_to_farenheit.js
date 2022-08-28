/*
Formula:
Farenheit = (celsius * 1.8) + 32

Output would be 
30°C is 86°F
*/

let celsius=30
celsius=parseInt(`${celsius}`)
let degree_notation="\u00B0"
let result = (`${celsius}`*1.8) + 32


console.log(`${celsius}${degree_notation}C is ${result}${degree_notation}F`)
