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

            this.findUserById = function findUserById(id) {
                return userList.find((user) => { 
                    return user.id === id
                });
            }

            function createUserIdMatcher(value) {
                return function (user) {
                    let id = value;
                    return id === user.id;
                }
            }

            this.all = function () {
                return userList;
            };

            return {
                all: this.all,
                findUserById: this.findUserById
            };
        });
})();