class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
     }

    honk(){
            console.log('Beep');
        }
    toString(){
            console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
        }
        
    }
    
class Car extends Vehicle {
   numWheels(){
    console.log (4);
   }
    
}

class Motorcycle extends Vehicle {
    numWheels(){
        console.log (2);
}}

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed';
        }

    }
    }
}

let vehicle1 = new Vehicle('Honda', 'Civic', 2009);
console.log (vehicle1);

let myCar = new Car ('Toyota', 'Camry', 1995);
console.log (myCar);

let myMotorcycle = new Motorcycle ('Honda', 'Nighthawk', 2000);
console.log(myMotorcycle);

let garage = new Garage(2);
console.log(garage);

