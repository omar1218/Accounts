import { accounts } from "./Account";

export class TravelAccount extends accounts{
    constructor(theaccnum: number,thename: string , thebalance: number, private _travelBalance: number, private _travelDiscount){
        super(theaccnum, thename , thebalance);
    }
    public get travelBalance(): number{
        return this._travelBalance;
    }
    public set travelBalance(value: number){
        this._travelBalance = value;
    }
    public get travelDiscount(): number{
        return this._travelDiscount;
    }
    public set travelDiscount(value: number){
        this._travelDiscount = value;
    }

    getInfo(): string{
        return super.getInfo() + `, Travel account balance: ${this._travelBalance}, travel discount: ${this._travelDiscount}% off your flights`;
    }
}