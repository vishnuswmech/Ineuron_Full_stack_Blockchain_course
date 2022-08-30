/*
Equilateral triangle => side1===side2===side3
Isosceles triangle => either side1===side2 or side2===side3 or side1===side3
Scalene => side1!=side2!=side3!=side1


*/


"use strict"
let side1=2
let side2=3
let side3=4

console.log(side1)
console.log(side2)
console.log(side3)



if ((side1===side2) && (side1===side3) && (side2===side3)) {
    console.log("The given triangle is an Equilateral triangle")
}

else if ((side1===side2) || (side1===side3) || (side2===side3)) {
    console.log("The given triangle is an Isosceles triangle")
}

// else (((side1!=side2)) && ((side2!=side3)) && ((side3!=side1))) {
//     console.log("The given triangle is an equilateral triangle")
// }

else {
    console.log("The given triangle is an scalene triangle")
}
