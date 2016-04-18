import {Injectable} from 'angular2/core';
import {Team} from '../../team/team';

@Injectable()
export class TeamsProvider {
  getTeams() {
    var TEAMS: Team[] = [
      { id : 1, name : "BATE" },
      { id : 2, name : "Dinamo Minsk" },
      { id : 3, name : "FC Minsk" },
      { id : 4, name : "Shakhter" },
      { id : 5, name : "Neman" }
    ];

    return TEAMS;
  }

}
