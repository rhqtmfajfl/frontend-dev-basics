/*
변수의 범위(Scope)
1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있다.(Lexical Scope)
2. ES6 이전(<=ES5(ES5이하))
    - 자바와 같은 블록범위를 지원하지 못 했다.
    - 함수범위
    - function() {...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
    - 만약에 var 키워드가 없이 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다.(hoisting이라고 한다.)
3. ES6 이후(ES6 이후로 나뉜다.)
    - Block Scope을 적용할 수 있는 두 개의 키워드를 지원한다.(let, const)
    - let은 : 변수가 된다.
    - const : 상수(고정되는 값)
    

4. 결론
    const / let 만 사용하고 반드시 붙히자.(const와 let을 안붙이면 hoisting이 된다.) 붙히게 되면 자바와 같이 블록범위에서만 적용된다.
*/

/*

*/

var i = 10;
/*
//2. var가 없어도 된다.
var f = function(){
    var i = 10; // 이변수는 이 함수 안에서만 있다.
}


f();

if(i>10){


}

*/

var i =10;

var f = function(){
    var i= 20;
    j =  100;   //j 는 hoisting이 되어서 100이 된다. j가 밖에서도 살아있는다.
    console.log(i);   // 여기 i 는 20이 된다.

    i = j-1;  //i값 변경
}

//var 키워드는 함수블록에서 함수 범위만 가지게 할 때 적용된다.
if(90+10 == 100){
    var k = 30;

}


/*
o = {  //자바 스크립트에서는 식이라고 불린다. 대입표현식 구문

};

*/


{
    let x= 1000000;
    const PI = 3.14;
    x = 100;

    //상수이기 때문에 에러
    //PI=0;
}


// error: 접근이 안된다.
//console.log(x);
//console.log(PI);


f();
console.log(i);
console.log(j); // hoisting된 j 가 그대로 있는다.
console.log(k);


/*
o = 10;
o;
var p; //이거는 에러가 나타나지 않는다. p라는 이름의 variable을 저장해라는 구문이기 때문에 에러가 발생하지 않는다.
//p; //문법에러는 아니고 reference를 잘못했다고 실행에러가 나타난다.
*/



