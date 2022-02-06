class Account {
    constructor(name, number, value){
        this.name = name;
        this.number = number;
        this.value = value;
    }

    get balanceLiquid() {
        return this.value *= 0.80 //taxes and tributes; 
    }

    get balanceBrute() {
        return this.value;
    }

    set add(deposit) {
        (deposit >= 0) ? this.value += deposit : console.log("You not deposit with negative values");
    }

    set remove(value) {
        (value <= this.balanceLiquid) ? this.value = this.balanceLiquid - value : console.log("You don't have enough funds");
    }
}

let conta01 = new Account("Joao Pedro", 5732, 10000);
console.log(conta01.balanceBrute);
console.log(conta01.balanceLiquid);
conta01.add = 10000;
conta01.remove = 10000;
console.log(conta01.balanceLiquid);