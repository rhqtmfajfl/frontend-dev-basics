/*
    자바스크립트 객체3: 확장
*/

var o = {
    name: "name",
    age: 10
};

var f = function(){
    console.log('Hello world');
}

console.log(o);
f();   //블락에서의 Hello World 
//확장

console.log("===============확장====================");

o.another = {
    name : '마이콜',
    age : 30
};

console.log(o);

f.another = {
    name : '마이콜',
    age : 30
};

console.log(f);   // 예상 hello world name: '마이콜', age:30
//  -> [Function: f]{another:{name:'마이콜', age:30}}



console.log("========기본 타입(primitive type)은 확장 되지 않는다.====================");
var i1= 10;
var i2 = new Number(10);

i2.another = {
    name : '마이콜',
    age : 30
};


console.log(i2);  //예상

i1.another ={};  //new Number(i1).another = {}   -> 이게 잠시 생성됬다가 사라진다.
console.log(i1.another);  // 결과 undefined
