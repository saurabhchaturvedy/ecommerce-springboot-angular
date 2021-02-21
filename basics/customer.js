var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var customer = new Customer("Ram", "Khilawan");
//customer.firstName = "saurabh";
//customer.lastName = "chaturvedi";
console.log(customer.firstName);
console.log(customer.lastName);
