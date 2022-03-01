class Car {
    constructor(brand, color, yearModel, model) {
        this.brand = brand;
        this.color = color;
        this.yearModel = yearModel;
        this.model = model;
    }
}

class MiniCar {
    constructor(brand, color, yearModel, model) {
        this.brand = brand;
        this.color = color;
    }
}

let carro1 = new Car("Ford", "red", 2015, "Ford K");
let miniCarro = new MiniCar ("Ford", "red", 2015, "Ford K");

console.log(carro1);
console.log(miniCarro);