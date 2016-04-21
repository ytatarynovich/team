import {Component} from 'angular2/core';
import {Team} from '../team/team';
import { TeamsProvider } from './services/teams.provider';

@Component({
  selector: 'teams',
  templateUrl: './app/teams/teams.component.html',
  providers: [TeamsProvider]
})

export class TeamsComponent {
  teams: Team[] = [];

  constructor(private provider: TeamsProvider) {}

  ngOnInit() {
    this.teams = this.provider.getTeams();
  }

}
