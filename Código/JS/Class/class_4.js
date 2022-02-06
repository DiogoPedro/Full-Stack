class Feline {
    constructor(nome) {
       this._nome = nome;
    }
 
    falar() {
       console.log(this._nome + ' faça barulho.');
    }
 }
 
 class Lion extends Feline {
    falar() {
       //super.falar();
       console.log(this._nome + ' roars.');
    }
 }
 
 let lion = new Lion('Fuzzy');
 lion.falar();