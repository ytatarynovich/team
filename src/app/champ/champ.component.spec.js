var testing_1 = require('angular2/testing');
// Load the implementations that should be tested
var teas_component_1 = require('./teas.component');
testing_1.describe('Teas', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        teas_component_1.TeasComponent
    ]; });
});
//# sourceMappingURL=champ.component.spec.js.map