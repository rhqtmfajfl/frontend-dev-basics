/**
 * Array 메소드(Array.prototype.*)
 */


var colors = ['red', 'white', 'yello'];
var fruits = ['apple','banana','mango'];



//Array메소드에 있는  concat pop push reverse 등이 있다.

//배열 프로토타입

//concat
var a1 = fruits.concat(colors);
console.log(a1);   //[ 'apple', 'banana', 'mango', 'red', 'white', 'yello' ]

//pop, push: stack 지원
var color = colors.pop();
console.log(color, colors);  //yello [ 'red', 'white' ]


colors.push('red');   //apple:banana:mango
console.log(colors);   //[ 'red', 'white', 'red' ]

// join
var str = fruits.join(":")
console.log(str);

//reverse

console.log(fruits);
fruits.reverse();
console.log(fruits);

//shift
var numbers = [1000,3000, 2000, 5000,4000,8000];
var number = numbers.shift();
console.log(number,numbers);

//sort
numbers.sort();
console.log(numbers);

//slice
var numvers = numbers.slice(1, 3);

console.log(numbers);

//splice
//index 부터 count 개를 삭제한 후, 삭제된 요소를 반환
 console.log(fruits);

 var fruits2 = fruits.splice(0/*index*/, 2/*count*/);

 console.log(fruits2, fruits);


 // index부터 count개를 삭제한 후 , replace로 대체, 삭제된 요소를 반환

 var a1 = [0, 1, 2, 3, 4];
 var a2 = a1.splice(1/*index*/,3/*count*/,10)/*replace*/;
 

console.log(a2, a1);

//a1.removeAt(1)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,1);
console.log(a2,a1);

//a1.insertAt(1, 10)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1, 0, 10);
console.log(a2,a1);