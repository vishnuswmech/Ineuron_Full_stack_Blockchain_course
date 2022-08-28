/*
Logic:
1. If the given number is divisible by 4, but not divisible by 100, then it should be a leap year
2. If the given number is divisible by both 100 and 400, then it should be a leap year
3. If it satisfies any of the above two conditions, it can be a leap year, else it cant be a leap year.


*/

let year=Number(2025)

if ((year%4===0 && year%100!=0) || (year%100===0 && year%400===0)) { 
    console.log(`The given year ${year} is a leap year`) 
}


else {
    console.log(`The given year ${year} is not a leap year`)
}
