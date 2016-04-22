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
var router_1 = require('angular2/router');
var teams_component_1 = require('./teams/teams.component');
var champ_component_1 = require('./champ/champ.component');
var match_day_component_1 = require('./match-day/match-day.component');
var App = (function () {
    function App() {
    }
    App.prototype.ngOnInit = function () {
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app/app.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS],
            styleUrls: ['./app/app.css']
        }),
        router_1.RouteConfig([
            {
                path: '/',
                name: 'Teams',
                component: teams_component_1.TeamsComponent,
                useAsDefault: true
            },
            {
                path: '/champ',
                name: 'Champ',
                component: champ_component_1.ChampComponent
            },
            {
                path: '/match-day',
                name: 'MatchDay',
                component: match_day_component_1.MatchDayComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map