class Car {
    constructor(brand, color, yearModel, model){
        this.brand = brand;
        this.color = color;
        this.yearModel = yearModel;
        this.model = model;
    }
    
    toString() {
        console.log(this);
    }

}

let Donald = new Car("Ford", "White", 2017, "Fusion");
Donald.toString();