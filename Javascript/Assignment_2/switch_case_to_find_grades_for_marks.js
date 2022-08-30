"use strict"

/*

“S grade” if the marks are between 90 and 100.
“A grade” if the marks are between 80 and 90.
“B grade” if the marks are between 70 and 80.
“C grade” if the marks are between 60 and 70.
“D grade” if the marks are between 50 and 60.
“E grade” if the marks are between 40 and 50.
“Student has failed” if the marks are between 0 and 40.
Else output “Invalid marks”.

We have to write the function which is used to find the grade of a student based on marks obtained using Switch case

*/


let marks="70"

switch(true){

    case 90:
        console.log("The Grade is S")
        break;

    case (90>=marks)&&(marks>=80):
        console.log("The Grade is A")
        break

    case (80>=marks)&&(marks>=70):
        console.log("The Grade is B")
        break

    case (70>=marks)&&(marks>=60):
        console.log("The Grade is C")
        break

    case (60>=marks)&&(marks>=50):
        console.log("The Grade is D")
        break

    case (50>=marks)&&(marks>=40):
        console.log("The Grade is E")
        break

    case (40>=marks)&&(marks>=0):
        console.log("The student got failed")
        break
    default:
        console.log("Invalid marks")
    }
