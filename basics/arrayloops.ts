let peopleArray: string[] = ["John","Jake","Kevin","Gavin","Hauffman"];

peopleArray.push("jatin");
peopleArray.push("harish");

for(let people of peopleArray)
{
    console.log("Welcome : "+people);
}

let numbers: number[] = [1,2,3,4,5];

for(let i=0; i<numbers.length; i++)
{
    console.log(numbers[i]);
}

let nums: number[] = [10,11,12,13,14,15];

let total = 0;

for(let num of nums)
{
  total = total + num;
}

console.log("total is : "+total);

let average: number = total/nums.length;

console.log("average is : "+average);