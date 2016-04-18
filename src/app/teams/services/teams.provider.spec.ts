import {
  it,
  inject,
  beforeEachProviders,
} from 'angular2/testing';

import {TeamsProvider} from './teams.provider';

describe('Champions provider', () => {
  beforeEachProviders(() => [
    TeamsProvider
  ]);


  it('should have data', inject([ TeamsProvider ], (provider) => {
    expect(provider).toBeDefined();
  }));

  it('should have size more than 0', inject([ TeamsProvider ], (provider) => {
    expect(provider.getData().length).toEqual(1);
  }));

});
