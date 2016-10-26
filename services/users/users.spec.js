describe('Users factory', function () {
    let Users;

    var userList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];

    const jane =  {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        };

    //Jasmine runs this before each test
    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function (_Users_) {
        Users = _Users_;
    }));

    it('should exist', function () {
        expect(Users).toBeDefined();
    });

    describe('.all()', function () {
        it('should exist', function () {
            expect(Users.all).toBeDefined();
        });
    });

    it('should return a hardcoded list of users', function () {
        expect(Users.all()).toEqual(userList)
    });

    describe('.findUserById()', function () {
        it("should exist", function() {
            expect(Users.findUserById).toBeDefined();
        });

        it('should given the id return the user for that id', function() {
            expect(Users.findUserById('1')).toEqual(jane)
        });

        it('should return underfined if the user cannot be found', function() {
            expect(Users.findUserById('ABC')).not.toBeDefined();
        });

    });


});