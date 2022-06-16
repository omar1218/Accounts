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
exports.TravelAccount = void 0;
var Account_1 = require("./Account");
var TravelAccount = /** @class */ (function (_super) {
    __extends(TravelAccount, _super);
    function TravelAccount(theaccnum, thename, thebalance, _travelBalance, _travelDiscount) {
        var _this = _super.call(this, theaccnum, thename, thebalance) || this;
        _this._travelBalance = _travelBalance;
        _this._travelDiscount = _travelDiscount;
        return _this;
    }
    Object.defineProperty(TravelAccount.prototype, "travelBalance", {
        get: function () {
            return this._travelBalance;
        },
        set: function (value) {
            this._travelBalance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelAccount.prototype, "travelDiscount", {
        get: function () {
            return this._travelDiscount;
        },
        set: function (value) {
            this._travelDiscount = value;
        },
        enumerable: false,
        configurable: true
    });
    TravelAccount.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", Travel account balance: ".concat(this._travelBalance, ", travel discount: ").concat(this._travelDiscount, "% off your flights");
    };
    return TravelAccount;
}(Account_1.accounts));
exports.TravelAccount = TravelAccount;
