var peopleArray = ["John", "Jake", "Kevin", "Gavin", "Hauffman"];
peopleArray.push("jatin");
peopleArray.push("harish");
for (var _i = 0, peopleArray_1 = peopleArray; _i < peopleArray_1.length; _i++) {
    var people = peopleArray_1[_i];
    console.log("Welcome : " + people);
}
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
var nums = [10, 11, 12, 13, 14, 15];
var total = 0;
for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
    var num = nums_1[_a];
    total = total + num;
}
console.log("total is : " + total);
var average = total / nums.length;
console.log("average is : " + average);
