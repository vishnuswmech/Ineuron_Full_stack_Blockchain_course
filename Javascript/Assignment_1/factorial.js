/* 
Fomula:
number=number*i
*/
let number=5
let i = `${number}`-1
let factorial

if (number==0)
 number=1
if (number==1)
 number=1
if (number<0)
 console.log("The Factorial for negative number does not exist")
while (i>=1){

    number=number*i
    --i
    

}
console.log(`The factorial for given number is ${number}`)
