import {Team} from '../team/team';

export class Match {
    home: number;
    guest: number;
    score: any;

    constructor() {
        this.score = { home : 0, guest : 0 };
    }
}
