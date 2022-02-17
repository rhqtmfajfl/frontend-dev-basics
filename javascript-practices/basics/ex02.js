/*
변수와 데이터 타입
[기본타입(primitive, 원시)]
- undefine
- number
- string
- boolean

[객체] 
- object type
    1. new 함수 (이거는 처음에는 클래스라는 개념이 없다. (함수는 어떤 코드를 실행하는 함수 일반적인 함수 new와 같은 object를 만들어 내는 함수를 생성자 함수))  new 생성자함수() 사용해서 생성 객체가 만들어 진다.
    2.
    3.
    4.

    [객체]
- function type

*/


console.log("***[기본타입] [primitive, 원시]********************");

//변수 지정시 var가 좋다.
var u = undefined;  //var u; 와 동일, 선언과 정의의 구분이 없다.
var i= 10;
var s = "Hello World";
var b = true;

console.log("u:" + typeof(u));

console.log("i:" + typeof(i));

console.log("s:" + typeof(s));

console.log("b:" + typeof(b));


console.log("***[객체타입 1: object type]********************");  //기본타입으로 4가지가 있다.
var i2 = new Number(1);   //Number는 함수이다. ==Number는 생성자 함수이다. 이런 함수들은 만들지 않았는데 자바스크립트가 제공해준다.
  //object 타입의 객체를 만들 수 있다. 내장 되어있는 생성자 함수를 사용 내장되어있는 함수는 object 타입을

  // new 를 붙이면 object 타입의 객체이다. object 타입의 객체 함수 타입의 객체 두개가 있다.
var s2 = new String("Hello World");

var b2 = new Boolean(false);

var o = new Object();

var a = new Array();    // 여기 new 뒤에 있는 것들은 내장되어있는 객체들이다. Array()eh rorcpdlek.  
                        // 배열도 객체다.



console.log("i2: " + typeof(i2));

console.log("s2: " + typeof(s2));

console.log("b2: " + typeof(b2));

console.log("o : " + typeof(o));

console.log("a : " + typeof(a));


function f() {

    console.log("!!!");
}

console.log("여기넘어가나")

var o = new f();

console.log("***[객체타입 2: function type]********************");



