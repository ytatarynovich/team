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
var tea_1 = require('../tea');
var TeaItemComponent = (function () {
    function TeaItemComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof tea_1.Tea !== 'undefined' && tea_1.Tea) === 'function' && _a) || Object)
    ], TeaItemComponent.prototype, "tea");
    TeaItemComponent = __decorate([
        core_1.Component({
            selector: 'tea-item',
            templateUrl: './app/teas/directives/tea-item.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TeaItemComponent);
    return TeaItemComponent;
    var _a;
})();
exports.TeaItemComponent = TeaItemComponent;
//# sourceMappingURL=tea-item.js.map