var testing_1 = require('angular2/testing');
var teams_provider_1 = require('./teams.provider');
describe('Teams provider', function () {
    testing_1.beforeEachProviders(function () { return [
        teams_provider_1.TeamsProvider
    ]; });
    testing_1.it('should have data', testing_1.inject([teams_provider_1.TeamsProvider], function (provider) {
        expect(provider).toBeDefined();
    }));
    testing_1.it('should have size more than 0', testing_1.inject([teams_provider_1.TeamsProvider], function (provider) {
        expect(provider.getTeams().length).toEqual(5);
    }));
    testing_1.it('should find by id 1', testing_1.inject([teams_provider_1.TeamsProvider], function (provider) {
        expect(provider.findById(1)).toBeDefined();
    }));
    testing_1.it('should find by id -1 and return null', testing_1.inject([teams_provider_1.TeamsProvider], function (provider) {
        expect(provider.findById(-1)).toBeNull();
    }));
});
//# sourceMappingURL=teams.provider.spec.js.map