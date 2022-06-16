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
exports.LoanAccount = void 0;
var Account_1 = require("./Account");
var LoanAccount = /** @class */ (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount(theaccnum, thename, thebalance, _loanBalance, _annualPercentageRate) {
        var _this = _super.call(this, theaccnum, thename, thebalance) || this;
        _this._loanBalance = _loanBalance;
        _this._annualPercentageRate = _annualPercentageRate;
        return _this;
    }
    Object.defineProperty(LoanAccount.prototype, "loanBalance", {
        get: function () {
            return this._loanBalance;
        },
        set: function (value) {
            this._loanBalance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoanAccount.prototype, "annualPercentageRate", {
        get: function () {
            return this._annualPercentageRate;
        },
        set: function (value) {
            this._annualPercentageRate = value;
        },
        enumerable: false,
        configurable: true
    });
    LoanAccount.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", loan account balance: ".concat(this._loanBalance, "% every year after the first year");
    };
    return LoanAccount;
}(Account_1.accounts));
exports.LoanAccount = LoanAccount;
