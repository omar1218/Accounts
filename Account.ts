export class accounts {
    private _accountNumber: number;
    private _name: string;
    private _balance: number;

    constructor(acc: number, aname: string, abalance: number){
        this._accountNumber = acc;
        this._name = aname;
        this._balance = abalance;
    }

    public get acc(): number{
        return this.acc;
    }
    public set acc (value: number){
        this._accountNumber;
    }
    public get abalance(): number{
        return this.abalance;
    }
    public set abalance (value: number){
        this._balance;
    }
    public get aname(): string{
        return this.aname;
    }
    public set aname (value: string){
        this._name;
    }

    getInfo(): string{
        return `the account number is: ${this._accountNumber}, your name is: ${this._name}, your balance is: ${this._balance}`
    }
}

