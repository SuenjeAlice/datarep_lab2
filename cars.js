class Verhicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        //Using a German keyboard, can't use slanted quotation marks with it
        console.log('Make: ' + this.make + ', Model: ' + this.model + ', Year: ' + this.year);
    }
}

//let myVehicle = new Verhicle('VW', 'Golf', 2008);
//let info = myVehicle.Information();

class Cars extends Verhicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log('Number of doors: ' + this.doors);
    }
}

let myCar = new Cars( 'VW', 'Golf', 2011, 5)
let info = myCar.Information();
