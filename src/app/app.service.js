var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var angular2_hmr_1 = require('angular2-hmr');
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_hmr_1.WebpackState])
    ], AppState);
    return AppState;
})();
exports.AppState = AppState;
//# sourceMappingURL=app.service.js.map