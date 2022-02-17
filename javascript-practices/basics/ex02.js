/*
변수와 데이터 타입(data type)
[기본타입(primitive, 원시)]
- undefine
- number
- string
- boolean

[객체] 
- object type
    1. new 생성자 함수 (이거는 처음에는 클래스라는 개념이 없다. (함수는 어떤 코드를 실행하는 함수 일반적인 함수 new와 같은 object를 만들어 내는 함수를 생성자 함수))  new 생성자함수() 사용해서 생성 객체가 만들어 진다.
            Number() => object type
            String() => object type
            Boolean() => object type
            Object() => object type
            Array() => object type
    2. {}   객체 리터럴, JSON(Java Script Object Notation)
    3. []   배열 리터럴
    4. null

    [객체]
- function type
    1. function f() {...}생성
    2. var f = fuction() {...}
    3. var f = new Function(...);

자바스크립트는 타입은 총 6개가 있다 앞에 4개는 기본타입이고 뒤에 두개는 객체 타입이다.
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



i = 10;
var o2 = {};  // == var o = new Object();
var a2 = [];  // ==

var n = null;

console.log("i2: " + typeof(i2));

console.log("s2: " + typeof(s2));

console.log("b2: " + typeof(b2));

console.log("o : " + typeof(o));

console.log("a : " + typeof(a));

console.log("o2 : " + typeof(o2));

console.log("a2 : " + typeof(a2));

console.log("n : " + typeof(n));
//undefined와 null은 같다고 나온다. undefined는 u를 이름으로 주고 undefined를 type으로 주고 n 은 이름이 n이고 type이 null이더라도 

function f() {

    console.log("!!!");
}
var F = function f2(){

}

console.log("여기넘어가나")

var o = new f();  //여기넘어가나를 넘어서 !!!가 출력된다.

var kkk = new F();
console.log("============================================")
console.log("여기는 F() 함수의 KKK 가 있다.")
console.log("kkk: " +  typeof(kkk));
console.log("============================================")


console.log("***[객체타입 2: function type]********************");

function f1(a,b){
    return a + b;

}

var f3 = new Function("a", "b", "return a + b;");  //내장되어있는 Function이라는 함수가 있다. 앞에가 대문자.


var f2 = function(a,b){
    return a+b;
}

console.log("f1:" + typeof(f1));

console.log("f2:" + typeof(f2));

console.log("f3:" + typeof(f3));



console.log("***원시타입과 원시타입의 Wrapper 객체는 구분없이 사용할 수 있다.********************");

console.log(i + i2);  //i= 10 i2 =1

console.log(s + s2);  // Hello World Hello World


console.log("***원시타입도 메소드 호출이 가능하다?********************");
console.log(b.valueOf());  //b == true가 들어있는 값인데도 valueOf() 메소드 사용가능
console.log(b2.valueOf()); 
