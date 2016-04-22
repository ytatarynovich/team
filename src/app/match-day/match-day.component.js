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
var teams_provider_1 = require('../teams/services/teams.provider');
var match_1 = require('../match-day/match');
var MatchDayComponent = (function () {
    function MatchDayComponent(provider) {
        this.provider = provider;
        this.days = [];
        for (var i = 1; i <= 30; i++) {
            this.days.push(i);
        }
        this.score = {};
        this.teams = provider.getTeams();
        this.match = new match_1.Match();
        this.matches = [];
    }
    MatchDayComponent.prototype.onChange = function (day) { this.day = day; };
    MatchDayComponent.prototype.onHomeChange = function (team) { this.homeTeam = team; };
    MatchDayComponent.prototype.onGuestChange = function (team) { this.guestTeam = team; };
    MatchDayComponent.prototype.saveMatch = function () {
        this.matches.push(this.match);
        this.match = new match_1.Match();
    };
    MatchDayComponent.prototype.getTeamLogo = function (id) {
        return "./assets/icon/" + id + ".jpg";
    };
    MatchDayComponent = __decorate([
        core_1.Component({
            selector: 'new-team',
            templateUrl: './app/match-day/match-day.component.html',
            styleUrls: ['./app/match-day/match-day.component.css'],
            providers: [teams_provider_1.TeamsProvider]
        }), 
        __metadata('design:paramtypes', [teams_provider_1.TeamsProvider])
    ], MatchDayComponent);
    return MatchDayComponent;
})();
exports.MatchDayComponent = MatchDayComponent;
//# sourceMappingURL=match-day.component.js.map