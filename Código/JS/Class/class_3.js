class Car {
    constructor(brand, color, yearModel, model, torque){
        this.brand = brand;
        this.color = color;
        this.yearModel = yearModel;
        this.model = model;
        this.torque = torque;
    }
    toString() {
        console.log(this);
    }
    static Powerful(a, b) {
        
        return (a.torque > b.torque) ? ("First car is more powerful than second.") : (a.torque == b.torque) ? ("Both models have the same power.") : ("Second car is more powerful than first");
    }
}

let Donald = new Car("Ford", "White", 2017, "Fusion", 300);
let Honda = new Car("Toyota", "Blue", 2019, "GT-R", 1200);

console.log(Car.Powerful(Donald, Honda));
console.log(Car.Powerful(Honda, Donald));
console.log(Car.Powerful(Honda, Honda));