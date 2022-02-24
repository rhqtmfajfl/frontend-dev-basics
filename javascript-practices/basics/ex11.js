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
console.log(str);  //apple:banana:mango

//reverse

console.log(fruits);  //[ 'apple', 'banana', 'mango' ]
fruits.reverse();
console.log(fruits);  //[ 'mango', 'banana', 'apple' ]

//shift
var numbers = [1000,3000, 2000, 5000,4000,8000];
var number = numbers.shift();  //0번째 위치의 요소를 제거 하고 연이은 나머지 값들의 위치를 한칸 씩 앞으로 당깁니다
console.log(number,numbers);  //1000 [ 3000, 2000, 5000, 4000, 8000 ]

//sort
numbers.sort();
console.log(numbers);  //[ 2000, 3000, 4000, 5000, 8000 ]

//slice
var numvers = numbers.slice(1, 3);

console.log(numbers);  //[ 2000, 3000, 4000, 5000, 8000 ]

//splice
//index 부터 count 개를 삭제한 후, 삭제된 요소를 반환
 console.log(fruits); //[ 'mango', 'banana', 'apple' ]

 var fruits2 = fruits.splice(0/*index*/, 2/*count*/);

 console.log(fruits2, fruits);  //[ 'mango', 'banana' ] [ 'apple' ]


 // index부터 count개를 삭제한 후 , replace로 대체, 삭제된 요소를 반환

 var a1 = [0, 1, 2, 3, 4];
 var a2 = a1.splice(1/*index*/,3/*count*/,10/*replace*/);
 
 var a3 = a1.splice(0, 2, 3);

console.log(a3, a1);  //예상 [0 10] [3,4]  
console.log(a2, a1);  //[ 1, 2, 3 ] [ 0, 10, 4 ]

//a1.removeAt(1)
var a1 = [0,1,2,3,4];   
var a2 = a1.splice(1,1);   // [0,1,2,3,4] 에서 1 만 나온다.
console.log(a2, a1);   //[ 1 ] [ 0, 2, 3, 4 ]

//a1.insertAt(1, 10)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1, 0, 10);
console.log(a2, a1);   //[] [ 0, 10, 1, 2, 3, 4 ]


