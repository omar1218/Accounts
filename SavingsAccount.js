"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
var Account_1 = require("./Account");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(theaccnum, thename, thebalance, _savingsbal, _annualPercentageYield) {
        var _this = _super.call(this, theaccnum, thename, thebalance) || this;
        _this._savingsbal = _savingsbal;
        _this._annualPercentageYield = _annualPercentageYield;
        return _this;
    }
    Object.defineProperty(SavingsAccount.prototype, "savingsbal", {
        get: function () {
            return this._savingsbal;
        },
        set: function (value) {
            this._savingsbal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SavingsAccount.prototype, "apyield", {
        get: function () {
            return this._annualPercentageYield;
        },
        set: function (value) {
            this._annualPercentageYield = value;
        },
        enumerable: false,
        configurable: true
    });
    SavingsAccount.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", savings account balance: ".concat(this._savingsbal, ", annual percentage yield is: ").concat(this._annualPercentageYield, "% every year");
    };
    return SavingsAccount;
}(Account_1.accounts));
exports.SavingsAccount = SavingsAccount;
