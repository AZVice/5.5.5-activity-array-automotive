//this includes the vehicle class as a module
class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
        this.fuel = 0;


    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started 
            
        } else {
            console.log("engine cannot start...");
            this.started = false;
            
        }
        return this.started;
    }


    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }



    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }



    stop() {
        console.log("Engine off")
        this.started = false;
    }

    drive() {
        accelerate();
    }



    brake() 
    {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }


    typeOfVehicle() {
        if (this.numberOfWheels == 8) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

//module.exports = {Vehicle}
////////////////////////////////////////////////////////////////////////////////////////
// const VehicleModule = require(".vehicle").Vehicle

//this shows how to call from this module...
/*let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)*/


//After you write the derived Car class, you should test it out.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.passengerCount = 0;
    }

    checkService() { 
        if (this.mileage > 30000){
            this.needsService = true;
            
        }
        return this.needsService
    }
        
       
    start(){
       super.start();
    } 



    loadPassenger(num) {
        if(this.passengerCount + num <= this.maximumPassengers){
            this.passengerCount += num;
            console.log(`loaded ${num} passengers. Passanger count ${this.passengerCount}`);
            }else{
                console.log(`${this.make} ${this.model} does not have enough room.`);
    
        }
         
    }

}

//Create at least two new instances of the Car class and test them here:
let testCar = new Car("Mercury", "A28", "1968", "green", 20)
console.log(testCar)

let testCar2 = new Car("Ford", "GT", 2016, "Blue", 3500)
console.log(testCar2)


testCar.start()
testCar.loadPassenger(5)
testCar.stop()
testCar.checkService(30000)







//Note: You can code your derived Car class here or make a file named index.js and do it there.
class Truck extends Car{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 3;
        this.numberOfWheels = 8;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.passengerCount = 1;
        this.carpetStrings = 40000;
        this.cassetteDeck = true;
        this.choke = true;
        this.fuel = 0;
        
    }

}




//TO DO: Creating Instances and Testing Them

let testTruck = new Truck("Toyoda", "T1000", 1925, "Green", 35000)
console.log(testTruck)

testTruck.start()
testTruck.loadPassenger(1)
testTruck.stop()
testTruck.checkService(30000)
testTruck.typeOfVehicle()

//You can use the same instance "v" of the Vehicle class above for the base class.






