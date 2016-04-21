import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

// Load the implementations that should be tested
import {TeasComponent} from './teas.component';

describe('Teas', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    TeasComponent
  ]);

});
