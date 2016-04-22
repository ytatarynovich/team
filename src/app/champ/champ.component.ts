import {Component} from 'angular2/core';
import {Team} from '../team/team';
import { TeamsProvider } from '../teams/services/teams.provider';

@Component({
  selector: 'champ',
  templateUrl: './app/champ/champ.component.html',
  providers: [TeamsProvider],
  styleUrls: ['./app/champ/champ.component.css']
})

export class ChampComponent {
    teams: Team[] = [];

    constructor(private provider: TeamsProvider) {}

    ngOnInit() {
      this.teams = this.provider.getTeams();
    }

    getTeamLogo(id) {
      return this.provider.getTeamLogo(id);
    }
}
