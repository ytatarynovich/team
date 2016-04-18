import {Injectable} from 'angular2/core';
import {Team} from '../../team/team';

@Injectable()
export class ChampionsProvider {
  getChampions() {
    var TEAMS: Team[] = [
      { id : 1, name : "TESS" }
    ];

    return TEAMS;
  }

}
