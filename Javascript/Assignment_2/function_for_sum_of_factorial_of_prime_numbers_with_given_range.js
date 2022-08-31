let i=2
let j=2
let k=3
let l=5
let m=7
let o=11
let sum=0

function prime(start,end) {
 while ((i<=end)){
     if ((i===j) || (i===k) || (i===l) || (i===m) || (i===o)){
        sum = sum +i
     }
     else if (i>=start){
        if (((i%j!=0)&&(i%k!=0)&&(i%l!=0)&&(i%m!=0)&&(i%o!=0))){
            sum = sum +i
          
        }
       
     } 
     
     
     ++i
     
 
  
}
console.log(`the sum is ${sum}`)
let x = `${sum}`-1
if (x==0)
 x =1
if (x==1)
 x=1
if (x<0)
 console.log("The Factorial for negative number does not exist")
while (x>=1){

    sum=sum*x
    
    --x
    

}
console.log(`The factorial of sum are ${sum}`)
}

prime(1,5)


/*
The output will be

the sum is 10
The factorial of sum are 3628800

*/
