"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var team_1 = require('../../team/team');
var TeamsProvider = (function () {
    function TeamsProvider() {
        this.teams = [];
        this.teams.push(new team_1.Team(1, "BATE"));
        this.teams.push(new team_1.Team(2, "Belshina"));
        this.teams.push(new team_1.Team(3, "Vitebsk"));
        this.teams.push(new team_1.Team(4, "Granit"));
        this.teams.push(new team_1.Team(5, "Shakhter"));
        this.teams.push(new team_1.Team(6, "Dinamo Minsk"));
        this.teams.push(new team_1.Team(7, "Dinamo Brest"));
        this.teams.push(new team_1.Team(8, "FC Minsk"));
        this.teams.push(new team_1.Team(9, "Naftan"));
        this.teams.push(new team_1.Team(10, "Neman"));
        this.teams.push(new team_1.Team(11, "Slavia"));
        this.teams.push(new team_1.Team(12, "Slutsk"));
        this.teams.push(new team_1.Team(13, "Torpedo-BELAZ"));
        this.teams.push(new team_1.Team(14, "Krumkachy"));
        this.teams.push(new team_1.Team(15, "Isloch"));
        this.teams.push(new team_1.Team(16, "Gorodeya"));
    }
    TeamsProvider.prototype.getTeams = function () {
        return this.teams;
    };
    TeamsProvider.prototype.findById = function (id) {
        var found = this.teams.map(function (team) { return team.id; })
            .indexOf(id);
        var team = found > -1 ? this.teams[found] : null;
        return team;
    };
    TeamsProvider.prototype.getTeamLogo = function (id) {
        return "./assets/icon/" + id + ".jpg";
    };
    TeamsProvider = __decorate([
        core_1.Injectable()
    ], TeamsProvider);
    return TeamsProvider;
}());
exports.TeamsProvider = TeamsProvider;
//# sourceMappingURL=teams.provider.js.map