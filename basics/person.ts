export class Person
{

    constructor(private firstName: string,private lastName: string)
    {

    }

    public getPersonName(): string{
        return this.firstName;
    }

    public setLastName(firstName: string): void{
       this.firstName = firstName;
    } 
}