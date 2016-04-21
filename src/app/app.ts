import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {TeamsComponent} from './teams/teams.component';
import {ChampComponent} from './champ/champ.component';
import {NewTeamComponent} from './new-team/new-team.component';
import {AppState} from './app.service';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  styleUrls: ['./app/app.css']
})

@RouteConfig([
  {
    path: '/',
    name: 'Teams',
    component: TeamsComponent,
    useAsDefault: true
  },
  {
    path: '/champ',
    name: 'Champ',
    component: ChampComponent
  },
  {
    path: '/new-team',
    name: 'NewTeam',
    component: NewTeamComponent
  }
])

export class App {

  constructor() {}

  ngOnInit() {
  }

}
