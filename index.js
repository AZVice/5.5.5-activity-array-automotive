 const VehicleModule = require("./mercurySedan")


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
testCar.typeOfVehicle()




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
testTruck.checkService(30000)
testTruck.typeOfVehicle()





