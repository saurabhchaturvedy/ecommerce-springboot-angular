class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string,lastName: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let customer: Customer = new Customer("Ram","Khilawan");

//customer.firstName = "saurabh";

//customer.lastName = "chaturvedi";

console.log(customer.firstName);

console.log(customer.lastName);