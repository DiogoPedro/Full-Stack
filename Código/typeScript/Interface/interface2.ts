//A inteface pode ser vista como um objeto simplificado em que o usuario, pode criar classes a partir dela
interface game {
    name: string;
    plataform: string[];
    price: number;
}

//Aqui vai um exemplo da criacao de uma classe atraves do molde de uma interface em TypeScript
class blizard_game implements game {
    readonly id: string;
    name: string;
    plataform: string[];
    price: number;

    constructor(id_game: string, name_game: string, plataform: string[], price_unique: number) {
        this.id = id_game;
        this.name = name_game;
        this.plataform = plataform;
        this.price = price_unique;
    }
}

let N152: game = {
    name: "Super Mario World",
    plataform: ["Nintendo"],
    price: 30
};

let callOfDuty2021: game = new blizard_game(
    "2542jndsa#@",
    "Modern Warfare",
    ["Xbox One", "Xbox Series", "PS4", "PS5"],
    60
);

console.log(callOfDuty2021);