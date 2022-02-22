/*
    자바스크립트 객체1: object 타입

    1. 자바스크립트 객체는 object 타입과 function 타입 두 가지가 있다.
    2. 보통, function 타입의 객체는 '함수'라고 부른다.
    3. 따라서 자바스크립트에서 우리가 흔히 객체라 부르는 것은 object 타입의 객체라고 할 수 있다.
    4. 
*/

// 생성방법 1
// 생성자 함수를 사용하는 방법
// Object, Number, String, RegExp, Date, Array - 내장 객체(내장 생성자 함수)

var o1 = new Object();

o1.name = '둘리';
o1.age = 10;

o1.another = new Object();  //another 객체를 새로 만든다.
o1.another.name = '마이클';
o1.another.age = 30;

console.log(o1);   //{ name: '둘리', age: 10, another: { name: '마이클', age: 30 } } 결과물


//사용자 정의 생성자 함수

var MyObject = function(name){  //function 안에 name이라는 파라미터 작성
    this.name = name;  //객체의 인스턴스 변수를 초기화 하는것에 의의
}

var o2 = new MyObject("홍길동");

console.log(o2);  //MyObject { name: '홍길동' }


//생성방법2
// {} 리터럴을 사용하는 방법

var o3 = {};
o3.name = '둘리';
o3.age = 10;
o3.another = new Object();  //another 객체를 새로 만든다.
o3.another.name = '마이클';
o3.another.age = 30;

console.log(o3);  //{ name: '둘리', age: 10, another: { name: '마이클', age: 30 } }



//생성방법3
// JSON (JavaScript Object Notation)


var o4 = {
    name: '둘리',
    age : 10,
    anotehr : {
        name : '마이콜',
        age : 30
    } 

};

console.log(o4);

/*
console.log(o4);
o4.displayInfo = function(){

    console.log(this.name, this.age);
}


o4.displayInfo();
*/


//JSON의 용도는 통신을 할 때 있다.

/*
var i = 10;
i.displayInfo = function() {

}
*/

//XmlHttpRequest 호스트(브라우저) 객체를 사용해서 통신(AJAX)에서 데이터 교환의 
//포맷으로 JSON을 사용한다.

//1 스트링({ name: '둘리', age: 10, another: { name: '마이클', age: 30 } })을 XHR 에서 RESPONSE로 받아낸다.

var response = '{name: "둘리", age:10, email:"dooly@gmail.com"}'; 
var userVo = eval("(" + response + ")");    // eval 자바 스크립트를 실행해주는 코드  response는 ({name: "둘리", age:10, email:"dooly@gmail.com"}) 이거를 실행 시킨것
console.log(userVo.name, userVo.age, userVo.email);



