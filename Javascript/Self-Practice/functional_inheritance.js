"use strict"

function laptop (value){   // Parent function , the value which is given in line no: 18 is passed
    var hp = {} // created a new object hp
    hp.model=value.model // created an attribute called model inside the object hp
    hp.year_of_manufacturing=value.year_of_manufacturing // created an attribute called year_of manufacturing inside the object hp

    return hp // this function will return whole object along with its attributes
}

function HP (value){ // child function 

    var hp = laptop(value) // The values were inherited from parent function to child function
    hp.greet = function(){ // The method called greet was created inside the object and it can able to use object and attributes which are inherited from parent function
        return `The laptop model is ${hp.model} and year of manufacturing is ${hp.year_of_manufacturing}`

    }
    return hp // the object hp will be the output of the child function
}
let HP_pavilion = new HP({model:"pavilion-X50",year_of_manufacturing:2020}) // the object called HP_pavilion is declared and initialized to HP function with its attributes 
console.log(HP_pavilion.greet()) // now the object can able to use the function greet and able to return its objects and attributes.


/* the output would be
The laptop model is pavilion-X50 and year of manufacturing is 2020
*/
