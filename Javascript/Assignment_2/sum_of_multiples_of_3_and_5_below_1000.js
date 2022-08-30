"use strict"


/*
Description:
The sum of multiples of 3 and 5 below 1000 = Multiples of 3 + Multiples of 5
*/


let i=0 // initialize increment as 0
let sum=0 // initialize sum as 0
while(i<1000) { // range below 1000
   
    if ((i%3===0 || i%5===0)){ // multiples of 3 or multiples of 5
             
        sum=sum+i   // Increment value stored in sum

    }
    ++i   // Pre-increment
    
}
console.log(`The sum of multiples of 3 and 5 are ${sum}`)

/*
Output:
The sum of multiples of 3 and 5 are 233168
*/
