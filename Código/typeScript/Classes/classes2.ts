class SuperInvestidor extends Investidor {
    private _idforVip: string;
    private _phone: number;

    constructor(idforVip: string, phone: number, id: string, name: string, conta: number) {
        super(id, name, conta);
        this._idforVip = idforVip;
        this._phone = phone;
    };

    static example(): string {
        return "work ok";
    };

    get idSuperInvestidor() {
        return this._idforVip;
    };

};

