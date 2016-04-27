import {Pipe, PipeTransform} from 'angular2/core';
import {Team} from '../team';

@Pipe({name: 'teamPipe'})
export class TeamPipe implements PipeTransform {
  transform(teams: Team[], teamId: string): number {
    var teamId = parseInt(teamId);
    var result = _.filter(teams, function(team) {
      return team.id !== teamId;
    });

    return result;
  }
}
