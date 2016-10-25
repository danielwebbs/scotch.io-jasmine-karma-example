(function () {
    'use strict';

    angular.module('api.users', [])
        .factory('Users', function usersService() {
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

            this.all = function () {
                return userList;
            };

            return {
                all: this.all
            };
        });
})();