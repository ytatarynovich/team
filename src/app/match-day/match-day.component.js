"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var teams_provider_1 = require('../teams/services/teams.provider');
var match_1 = require('../match-day/match');
var MatchDayComponent = (function () {
    function MatchDayComponent(provider) {
        this.provider = provider;
        this.days = [];
        for (var i = 1; i <= 30; i++) {
            this.days.push(i);
        }
        this.teams = provider.getTeams();
        this.match = new match_1.Match();
        this.match.home = this.teams[0].id;
        this.match.guest = this.teams[1].id;
        this.matches = [];
    }
    MatchDayComponent.prototype.onChange = function (day) { this.day = day; };
    MatchDayComponent.prototype.saveMatch = function () {
        this.matches.push(this.match);
        var homeTeam = this.provider.findById(parseInt(this.match.home));
        var guestTeam = this.provider.findById(parseInt(this.match.guest));
        this.teams = _.without(this.teams, homeTeam);
        this.teams = _.without(this.teams, guestTeam);
        this.match = new match_1.Match();
    };
    MatchDayComponent.prototype.getTeamLogo = function (id) {
        return this.provider.getTeamLogo(id);
    };
    MatchDayComponent.prototype.getTeamName = function (id) {
        var team = this.provider.findById(parseInt(id));
        return team.name;
    };
    MatchDayComponent = __decorate([
        core_1.Component({
            selector: 'new-team',
            templateUrl: './app/match-day/match-day.component.html',
            styleUrls: ['./app/match-day/match-day.component.css'],
            providers: [teams_provider_1.TeamsProvider]
        })
    ], MatchDayComponent);
    return MatchDayComponent;
}());
exports.MatchDayComponent = MatchDayComponent;
//# sourceMappingURL=match-day.component.js.map