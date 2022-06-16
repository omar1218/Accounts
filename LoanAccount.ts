import { accounts } from "./Account";

export class LoanAccount extends accounts{
    constructor(theaccnum: number,thename: string , thebalance: number, private _loanBalance: number, private _annualPercentageRate){
        super(theaccnum, thename , thebalance);
    }
    public get loanBalance(): number{
        return this._loanBalance;
    }
    public set loanBalance(value: number){
        this._loanBalance = value;
    }
    public get annualPercentageRate(): number{
        return this._annualPercentageRate;
    }
    public set annualPercentageRate(value: number){
        this._annualPercentageRate = value;
    }

    getInfo(): string{
        return super.getInfo() + `, loan account balance: ${this._loanBalance}% every year after the first year`;
    }

}