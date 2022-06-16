"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts = void 0;
var accounts = /** @class */ (function () {
    function accounts(acc, aname, abalance) {
        this._accountNumber = acc;
        this._name = aname;
        this._balance = abalance;
    }
    Object.defineProperty(accounts.prototype, "acc", {
        get: function () {
            return this.acc;
        },
        set: function (value) {
            this._accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(accounts.prototype, "abalance", {
        get: function () {
            return this.abalance;
        },
        set: function (value) {
            this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(accounts.prototype, "aname", {
        get: function () {
            return this.aname;
        },
        set: function (value) {
            this._name;
        },
        enumerable: false,
        configurable: true
    });
    accounts.prototype.getInfo = function () {
        return "the account number is: ".concat(this._accountNumber, ", your name is: ").concat(this._name, ", your balance is: ").concat(this._balance);
    };
    return accounts;
}());
exports.accounts = accounts;
