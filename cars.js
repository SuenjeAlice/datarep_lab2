//Data Representation and Querying - Lab 2 - Exercise 3 - Sünje Ursa Alice Winteler - G00363332 

//create Vehicle class
class Vehicle{

    //create constructor and add parameters make, model and year
    constructor(make, model, year){
        //create local instances of variables
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //create Information method
    Information(){
        /*Using a German keyboard, can't use slanted quotation marks with it, 
        so using single quotation marks with plus sign instead of using 
        slanted quotation marks and ${this.variable}*/
        console.log('Make: ' + this.make + ', Model: ' + this.model + ', Year: ' + this.year);//use console.log to print result to console
    }
}

//test Vehicle class by creating an instance of Vehicle class and using that to call Information method
//let myVehicle = new Vehicle('VW', 'Golf', 2008);
//let info = myVehicle.Information();

//create Cars class which inherits from the Vehicle class using extends keyword
class Cars extends Vehicle{

    //create constructor and add parameters make, model, year and doors
    constructor(make, model, year, doors){
         //create local instances of variables
        super(make, model, year);//use super keyword to use variables from parent class
        this.doors = doors;
    }

    //create Information method
    Information(){
        super.Information();//use super keyword to use method from parent class
        console.log('Number of doors: ' + this.doors);//use console.log to print result to console
    }
}

//create instance of Cars class and add values for parameters
let myCar = new Cars( 'VW', 'Golf', 2011, 5)
let info = myCar.Information();//call Information method which prints results to console
