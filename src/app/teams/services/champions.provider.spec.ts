import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

import {ChampionsProvider} from './champions.provider';

describe('Champions provider', () => {
  beforeEachProviders(() => [
    ChampionsProvider
  ]);


  it('should have data', inject([ ChampionsProvider ], (provider) => {
    expect(provider).toBeDefined();
  }));

  it('should have size more than 0', inject([ ChampionsProvider ], (provider) => {
    expect(provider.getData().length).toEqual(1);
  }));

});
