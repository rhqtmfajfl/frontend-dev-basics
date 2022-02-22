console.log("== global object ==============================================");

// global.name= "둘리";
//global은 전역범위 글로벌 object이다. 
// var나 let을 주지 않으면 글로벌 영역으로 잡힌다.


global.n ="둘리";    // global은 variable context   n에 들어가는 둘리
console.log((n), global.n);  //global은
//this를 사용해서도 가능 ?? 이거 다시 정리
// global n 을 참조한다.


//cf 정리

n2 = "둘리";
console.log(n2, global.n2);  //global은

//global이 호스트 객체를 감싸고 있는게 아닌 참조하고 있다.

//globla에 name으로 둘리를 만들어 놓았다.
global.name ="둘리";    // global은 variable context   n에 들어가는 둘리
console.log((name), global.n);  //global은
//this를 사용해서도 가능 ?? 이거 다시 정리
// global n 을 참조한다.


//cf 정리

email = "dooly@gmail.com";   //email 앞에 var를 때면은 모둘안에서만 ㅅ옹
console.log(email, global.email); 

//모듈영역을 나누기 때문에 var라 let을 안쓰면 global이 된다.



console.log("==  function의 객체 메소드 apply============================");
var f1 = function(){
    console.log(this);

}

f1();

//this 바꾸기
var o = {
    name:"마이콜"
};

f1.apply(o);



console.log("==  function의 객체 메소드 call============================");

var f2 = function(s1, s2){
    console.log(s + " " + this.name);

}

f2('hi', '');

//파라미터가 있는 경우에 call을 쓰는게 좋다.
f2.call(o,"hi", 'again');
// f2.call(o,"hi");