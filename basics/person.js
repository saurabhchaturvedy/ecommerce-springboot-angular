"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getPersonName = function () {
        return this.firstName;
    };
    Person.prototype.setLastName = function (firstName) {
        this.firstName = firstName;
    };
    return Person;
}());
exports.Person = Person;
