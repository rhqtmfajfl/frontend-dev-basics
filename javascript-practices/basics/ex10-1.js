console.log("=== 배열 생성1: 내장객체(생성자 함수)를 사용 ===");


var a1 = new Array();

console.log(typeof(a1), a1 )

//object instanceof constructor

//object
// 판별할 객체.
// constructor
// 판별 목표 함수.

console.log("== 배열 생성2: 리터럴 사용 ===========");
var a4 = [10, "JavaScript", true, function(){
    console.log("Hello World");
}, {
    name: '마이콜',
    age: 30
}];

console.log(typeof(a4), a4 instanceof Array, a4.length);

console.log(a4);

console.log("==Array VS Object ===");

a5 = [];

a5[0] = 1;

a5["1"] = 1

a5.name ="둘리";

a5["age"] = 10;

console.log(a5["0"]);  // a5의 0번째를 찾는것과 같다.
console.log(a5[0]);   // 결과 1

console.log(a5.name);