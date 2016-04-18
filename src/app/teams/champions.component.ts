import {Component} from 'angular2/core';
import {Team} from '../team/team';
import { ChampionsProvider } from './services/champions.provider';

@Component({
  selector: 'champions',
  templateUrl: './app/champions/champions.component.html',
  providers: [ChampionsProvider]
})

export class ChampionsComponent {
  teams: Team[] = [];

  constructor(private provider: ChampionsProvider) {}

  ngOnInit() {
    this.teams = this.provider.getChampions();
  }

}
