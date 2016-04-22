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
var TeamsProvider = (function () {
    function TeamsProvider() {
        this.teams = [
            { id: 1, name: "BATE" },
            { id: 2, name: "Dinamo Minsk" },
            { id: 3, name: "FC Minsk" },
            { id: 4, name: "Shakhter" },
            { id: 5, name: "Neman" }
        ];
    }
    TeamsProvider.prototype.getTeams = function () {
        return this.teams;
    };
    TeamsProvider.prototype.findTeamById = function (id) {
        var found = this.teams.map(function (team) { return team.id; })
            .indexOf(id);
        var team = found > -1 ? this.teams[found] : null;
        return team;
    };
    TeamsProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TeamsProvider);
    return TeamsProvider;
})();
exports.TeamsProvider = TeamsProvider;
//# sourceMappingURL=teams.provider.js.map