class Customer2
{

    

    constructor(private firstName: string,private lastName: string )
    {

    }


    public getFirstName(): string {
      return this.firstName;
    }

    public setFirstName(firstName: string): void{
           this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
      }
  
      public setLastName(lastName: string): void{
             this.lastName = lastName;
      }
}


let customer2: Customer2 = new Customer2("saurabh","chat");

customer2.setFirstName("saurabh");

customer2.setLastName("chaturvedi");

console.log(customer2.getFirstName()+" "+customer2.getLastName());