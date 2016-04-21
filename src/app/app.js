"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var teams_component_1 = require('./teams/teams.component');
var champ_component_1 = require('./champ/champ.component');
var new_team_component_1 = require('./new-team/new-team.component');
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
                path: '/new-team',
                name: 'NewTeam',
                component: new_team_component_1.NewTeamComponent
            }
        ])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map