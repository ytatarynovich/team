"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var TeamsProvider = (function () {
    function TeamsProvider() {
    }
    TeamsProvider.prototype.getTeams = function () {
        var TEAMS = [
            { id: 1, name: "BATE" },
            { id: 2, name: "Dinamo Minsk" },
            { id: 3, name: "FC Minsk" },
            { id: 4, name: "Shakhter" },
            { id: 5, name: "Neman" }
        ];
        return TEAMS;
    };
    TeamsProvider = __decorate([
        core_1.Injectable()
    ], TeamsProvider);
    return TeamsProvider;
}());
exports.TeamsProvider = TeamsProvider;
//# sourceMappingURL=teams.provider.js.map