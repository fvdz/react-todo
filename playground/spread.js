// function add(a, b) {
//    return a + b;
// }
//
// console.log(add(2 ,3));
//
// var arr = [3, 4];
//
// console.log(add(...arr));

// var groupA = [1, 4];
// var groupB = [5, 9];
// var final = [3, ...groupA, 'test2', ...groupB];
//
// console.log(...final);


var person = ['Mike', 41];
var personTwo = ['Jen', 44];
var final = [person, personTwo];

function greeting(name, age) {
   console.log('Hi ' + name + ', you are ' + age);
}

final.forEach( (person) => {
   greeting(...person);
});
