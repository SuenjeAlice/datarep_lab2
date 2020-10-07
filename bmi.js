//Data Representation and Querying - Lab 2 - Exercise 2 - Sünje Ursa Alice Winteler - G00363332 

//Create BMI class
class BMI{

    //create constructor and add parameters height and weight
    constructor(height, weight){
        //create local instances of variables
        this.height = height;
        this.weight = weight;
    }

    //create calculateBMI method
    calculateBMI(){
        //create bmi variable 
        let bmi = this.weight / (this.height ** 2); //add in the formular to calculate bmi
        return bmi; //return the result calculated in this method
    }
}

//create instance of BMI class and add in values for parameters
let MyBmi = new BMI(2, 90);
//use MyBMI object and call calculateBMI method
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI); //use console.log to print the result to the console