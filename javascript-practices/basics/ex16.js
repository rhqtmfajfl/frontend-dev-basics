/** 
 * function 타입의 객체(함수)
 */

// 함수를 생성하는 방법1 : 함수 리터럴

function f1(a,b){
    return a + b;
}

console.log(typeof(f1), f1(10,20)); //f1함수를 사용 하여 
//a에는 10 b 에는 20이 들어가도록 한다.


// 함수를 생성하는 방법2 : 함수 리터럴(추천)

var f2 = function(a,b){
    return a + b;
};

console.log(typeof(f2), f2(10,20));

//함수를 생성하는 방법 3: new 연산자와 함께 Function() 생성자 함수를 사용하는 방법(추천)
var f3 = new Function("a", "b", "return a+b");
console.log(typeof(f3), f3(10,20));

//함수를 생성하는 방법 4: 익명(Anonymouse) 함수
// callback
setTimeout(function(){
    console.log("time out!");

}, 2000);


// 즉시 실행하는 함수
var s = (function(a,b){
    var m = 10;

    return a/10 + b/10;
})(10,20);

console.log("s : " + s);

// var i1 =10;

// var i2 =20;

// var i3 =30;

// var i4 =40;

// var i5 =50;

// var i6 =60;

// var i7 =70;

// var i8 =80;

// var result = (i1 + i2 ....)/10

//가변인지 함수는 매개변수의 최대 갯수가 지정되지 않은 함수를 의미합니다.
//sum(10, 20, 30,...);

//가변인자 함수를 이용해 위와 같이 인자의 갯수 제한이 없는 함수를 작성할 수 있다.




//가변 파라미터 함수  
//함수 파라미터 안에는 argument가 내장이 되어있다. arguments는 접근이 가능
var sum = function(){
    console.log("arguments.length : " + arguments.length)
    console.log(arguments instanceof Array, arguments.length); // Array가 아니다! 유사 배열

    var sum = 0;
    // for(var i =0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }

    // Error: arguments의  __proto__는 Object의 prototype에 chain이 되어 있기 때문이다
    //arguments.forEach(function(e){
    //    sum +=e;
    //});

    Array.prototype.forEach.call(arguments, function(e){        //함수 객체는 call이 가능하다.
        sum += e;
        console.log("sum : " + sum);
    });


    return sum;
}

//모든 객체는 object의 프로토 타입이


console.log(sum(10));
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40,50));
