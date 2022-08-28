 "use strict"
class car {

    constructor(name,brand,com,total_sales){

        this.name=name
        this.brand=brand
        this.com=com
        this.total_sales=total_sales
    }
print_car(){
    console.log(this.name,this.brand,this.com,this.total_sales)
}
}

//let maruthi= new car("maruthi","goodbrand","India",2000)
//maruthi.print_car()

class child extends car {

    constructor(name,brand,com,total_sales,engine,transmission,suspension,seating_capacity,price,yol){
      super(name,brand,com,total_sales)
     // this.name=name
        this.engine=engine
       // this.brand=brand
        this.transmission=transmission
        this.suspension=suspension
        this.seating_capacity=seating_capacity
        this.price=price
        this.yol=yol
    }
    print_child(){
        console.log(this.name,this.brand,this.com,this.total_sales,this.engine,this.transmission,this.suspension,this.seating_capacity,this.price,this.yol)
    }
}

let maruthi_child = new child("maruthi","maruthi_brand","suzuki",25000,"v8","trans","sus",4,25000,2000)
maruthi_child.print_child()
