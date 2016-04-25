import {Component} from 'angular2/core';
import { TeamsProvider } from '../teams/services/teams.provider';
import {Team} from '../team/team';
import {Match} from '../match-day/match';

@Component({
  selector: 'new-team',
  templateUrl: './app/match-day/match-day.component.html',
  styleUrls: ['./app/match-day/match-day.component.css'],
  providers: [TeamsProvider]
})

export class MatchDayComponent {
  days: number[];
  day: number;
  teams: Team[];
  homeTeam: Team;
  guestTeam: Team;
  matches: Match[];
  match: Match;

  constructor(private provider: TeamsProvider) {
    this.days = [];
    for(let i = 1; i <= 30; i++) {
      this.days.push(i);
    }
    this.teams = provider.getTeams();
    this.match = new Match();
    this.match.home = this.teams[0].id;
    this.match.guest = this.teams[1].id;
    this.matches = [];
  }

  onChange(day) { this.day = day; }

  saveMatch() {
    this.matches.push(this.match)

    var homeTeam = this.provider.findById(parseInt(this.match.home));
    var guestTeam = this.provider.findById(parseInt(this.match.guest));
    this.teams = _.without(this.teams, homeTeam);
    this.teams = _.without(this.teams, guestTeam);
    this.match = new Match();
  }

  getTeamLogo(id) {
   return this.provider.getTeamLogo(id);
  }

  getTeamName(id) {
    var team = this.provider.findById(parseInt(id));
    return team.name;
  }
}
