
describe("Users factory", function() {
    let users;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(_userFactory_) {
        users = _userFactory_;
    }));

    it('should be created', function() {
        expect(users).toBeDefined();
    });

});