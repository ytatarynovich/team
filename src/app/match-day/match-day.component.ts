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
  score: any;
  homeTeam: Team;
  guestTeam: Team;
  matches: Match[];
  match: Match;

  constructor(private provider: TeamsProvider) {
    this.days = [];
    for(let i = 1; i <= 30; i++) {
      this.days.push(i);
    }
    this.score = {};
    this.teams = provider.getTeams();
    this.match = new Match();
    this.matches = [];
  }

  onChange(day) { this.day = day; }
  onHomeChange(team) { this.homeTeam = team; }
  onGuestChange(team) { this.guestTeam = team; }

  saveMatch() {
    this.matches.push(this.match)

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
