import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {ChampionsComponent} from './champions/champions.component';
import {EuropaComponent} from './europa/europa.component';
import {NewTeamComponent} from './new-team/new-team.component';
import {AppState} from './app.service';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/',
    name: 'champions',
    component: ChampionsComponent,
    useAsDefault: true
  },
  {
    path: '/europa',
    name: 'europa',
    component: EuropaComponent
  },
  {
    path: '/new-team',
    name: 'new-team',
    component: NewTeamComponent
  }
])

export class App {

  constructor() {}

  ngOnInit() {
  }

}
