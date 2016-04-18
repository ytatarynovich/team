import {Component, Input} from 'angular2/core';
import {Tea} from '../tea';

@Component({
  selector: 'tea-item',
  templateUrl: './app/teas/directives/tea-item.html'
})

export class TeaItemComponent {
  @Input() tea: Tea;
    
  constructor() {

  }
}
