"use strict"

class Person {

 constructor(name){
     this.name=name
 }
 get_value(){
     return `${this.name}`
 }
 static get_post(post){
     let name = post == "ChangpengZhao" ? "He is a CEO" : "He is not a CEO"
     return new Person(name) 
 }
}

let who_is_ceo = Person.get_post("ChangpengZhao")
console.log(who_is_ceo.name)

/*
The output would be
ChangpengZhao is a CEO


*/
