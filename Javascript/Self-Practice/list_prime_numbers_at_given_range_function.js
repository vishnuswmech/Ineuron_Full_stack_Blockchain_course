"use strict"

let i=2
let j=2
let k=3
let l=5
let m=7
let o=11
function prime(start,end) {
 while ((i<=end)){
     if ((i===j) || (i===k) || (i===l) || (i===m) || (i===o)){
         console.log(i)
     }
     if (i>=start){
        if (((i%j!=0)&&(i%k!=0)&&(i%l!=0)&&(i%m!=0)&&(i%o!=0))){
           console.log(i)
        }
       
     } 
     ++i
     
    
  
}
}
 

prime(1,100)
