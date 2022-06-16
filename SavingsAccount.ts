import { accounts } from "./Account";

export class SavingsAccount extends accounts{
    constructor(theaccnum: number,thename: string , thebalance: number, private _savingsbal: number, private _annualPercentageYield){
        super(theaccnum, thename , thebalance);
    }
    public get savingsbal(): number{
        return this._savingsbal;
    }
    public set savingsbal(value: number){
        this._savingsbal = value;
    }
    public get apyield(): number{
        return this._annualPercentageYield;
    }
    public set apyield(value: number){
        this._annualPercentageYield = value;
    }

    getInfo(): string{
        return super.getInfo() + `, savings account balance: ${this._savingsbal}, annual percentage yield is: ${this._annualPercentageYield}% every year`;
    }
}