"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var teams_provider_1 = require('./services/teams.provider');
var TeamsComponent = (function () {
    function TeamsComponent(provider) {
        this.provider = provider;
        this.teams = [];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.teams = this.provider.getTeams();
    };
    TeamsComponent = __decorate([
        core_1.Component({
            selector: 'teams',
            templateUrl: './app/teams/teams.component.html',
            providers: [teams_provider_1.TeamsProvider]
        })
    ], TeamsComponent);
    return TeamsComponent;
}());
exports.TeamsComponent = TeamsComponent;
//# sourceMappingURL=teams.component.js.map