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
        this.numberOfWheels = 4;
        this.fuel = 2;


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



    typeOfVehicle() {
        if (this.numberOfWheels == 8) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4) {
            console.log(this.model + " " + this.make + " is a Car");
        } else if (this.numberOfWheels == 2) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

module.exports = Vehicle;

//You can use the same instance "v" of the Vehicle class above for the base class.
let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v)


v.start()
v.typeOfVehicle()










