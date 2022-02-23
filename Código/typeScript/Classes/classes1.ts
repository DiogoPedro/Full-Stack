class Investidor {
    private _id: string;
    private _name: string;
    private _conta: number;
    private _saldo: number = 0;
    private _block: boolean;

    constructor(id: string, name: string, conta: number) {
        this._id = id;
        this._name = name;
        this._conta = conta;
    };

    inserirValor(valor: number, conta: number): string {
        if (conta == this._conta && !this._block) {
            this._saldo += valor;
            return "Congratulations";
        } else {
            return "Account not compatible";
        }
    };
    get saldoClient() {
        return this._saldo;
    };
    get nameClient() {
        return this._name;
    };
    set blockClient(value: boolean) {
        this._block = value;
    }
};

let Pedro = new Investidor("dsae2321a", "Diogo Pedro", 32421);
Pedro.inserirValor(150, 32421);
Pedro.inserirValor(3000, 321321);
console.log(Pedro.saldoClient);