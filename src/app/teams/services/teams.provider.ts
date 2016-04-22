import {Injectable} from 'angular2/core';
import {Team} from '../../team/team';

@Injectable()
export class TeamsProvider {
  teams: Team[];

  constructor() {
    this.teams = [];
    this.teams.push(new Team(1, "BATE"));
    this.teams.push(new Team(2, "Belshina"));
    this.teams.push(new Team(3, "Vitebsk"));
    this.teams.push(new Team(4, "Granit"));
    this.teams.push(new Team(5, "Shakhter"));
    this.teams.push(new Team(6, "Dinamo Minsk"));
    this.teams.push(new Team(7, "Dinamo Brest"));
    this.teams.push(new Team(8, "FC Minsk"));
    this.teams.push(new Team(9, "Naftan"));
    this.teams.push(new Team(10, "Neman"));
    this.teams.push(new Team(11, "Slavia"));
    this.teams.push(new Team(12, "Slutsk"));
    this.teams.push(new Team(13, "Torpedo-BELAZ"));
    this.teams.push(new Team(14, "Krumkachy"));
    this.teams.push(new Team(15, "Isloch"));
    this.teams.push(new Team(16, "Gorodeya"));
  }

  getTeams() {
    return this.teams;
  }

  findById(id) {
    var found = this.teams.map(function(team) {return team.id; })
                          .indexOf(id);

    var team = found > -1 ? this.teams[found] : null;

    return team;
  }

  getTeamLogo(id) {
    return "./assets/icon/" + id + ".jpg";
  }
}
