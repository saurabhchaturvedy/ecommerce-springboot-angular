"use strict";
var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer2.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer2.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer2.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer2.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Customer2;
}());
var customer2 = new Customer2("saurabh", "chat");
customer2.setFirstName("saurabh");
customer2.setLastName("chaturvedi");
console.log(customer2.getFirstName() + " " + customer2.getLastName());
