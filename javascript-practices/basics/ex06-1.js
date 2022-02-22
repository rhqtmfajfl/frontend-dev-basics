/*
    자바스크립트 객체1: object 타입

    1. 자바스크립트 객체는 object 타입과 function 타입 두 가지가 있다.
    2. 보통, function 타입의 객체는 '함수'라고 부른다.
    3. 따라서 자바스크립트에서 우리가 흔히 객체라 부르는 것은 object 타입의 객체라고 할 수 있다.
    4. 
*/

var o1 = new Object();  //o1이라는 객체 생성

o1.name = "홍길동"; //name 이라고 o1을 준다.
o1.age = 10;
o1.another = new Object();   // o1 밑에 anotehr 객체 새로 생성

console.log(o1);

var MyObject = function(name){
    this.name = name;
}

var o2 = new MyObject("김길동");

console.log(o2);

//생성 방법2

var o3 = {};  //빈 객체 생성

o3.name = "김둘리";
o3.age = 1000;
o3.anoter = new Object();  // 새롭게 another 객체 생성
o3.another.name = "김마이클";
o3.another.age = 30;


console.log(o3);

