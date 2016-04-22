import {
  it,
  inject,
  beforeEachProviders,
} from 'angular2/testing';


import {TeamsProvider} from './teams.provider';

describe('Teams provider', () => {
  beforeEachProviders(() => [
    TeamsProvider
  ]);


  it('should have data', inject([ TeamsProvider ], (provider) => {
    expect(provider).toBeDefined();
  }));

  it('should have size more than 0', inject([ TeamsProvider ], (provider) => {
    expect(provider.getTeams().length).toEqual(5);
  }));

  it('should find by id 1', inject([ TeamsProvider ], (provider) => {
    var team = provider.findById(1);
    expect(team).toBeDefined();
    expect(team.name).toEqual("BATE");
  }));

  it('should find by id -1 and return null', inject([ TeamsProvider ], (provider) => {
    expect(provider.findById(-1)).toBeNull();
  }));

});
