"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var AppState = (function () {
    function AppState(webpackState) {
        var _this = this;
        this._state = {}; // you must set the initial value
        this._state = webpackState.select('AppState', function () { return _this._state; });
    }
    AppState.prototype.get = function (prop) {
        return this._state[prop] || this._state;
    };
    AppState.prototype.set = function (prop, value) {
        return this._state[prop] = value;
    };
    AppState = __decorate([
        core_1.Injectable()
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;
//# sourceMappingURL=app.service.js.map