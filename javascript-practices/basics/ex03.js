/* null과 undefined 

name| type   | value    
i   | number | 10
o   | object | reference값이 들어간다. 0x00.. 와 같은
myVar1| undefined| x
myVar2| undefined| x
myVar3| object   | 0x...

1,2,3 순서대로 위에 들어 간다.
1. console.log(i);
2. var o = {};
3. console.log(typeof(o));; 객체는 reference가 object이고 어떤 값이 들어간다.
i는 10이라는 값이 들어간다.


*/


var myVar1 = undefined;  //명시적으로 undefined를 대입을 한 것이다.    //var은 scope 적인 의미이고
var myVar2;              //암시적으로 undefined가 대입이 된다. myVar1과 같이 명시적으로 안적어도 undefined 대입된다. 명시적으로 된다.
var myVar3 = null;       // 


console.log(myVar1 + ":" + myVar3);

console.log(typeof(myVar1) + ":" + typeof(myVar3));


console.log(myVar1 == myVar3); // 타입이나 같고 값이 다르더라도 같다고 나온다.   ------->  값 비교

console.log(myVar1 === myVar3);  //타입이 같더라도 값이 다르면 다르게 나온다. 정밀하게 따져준다.  --------> 타입 비교 +  값비교

console.log("======================================================");


//==:  equality, 값의 동치성, 형변환
console.log(4=='4');  //true   --->  명시적으로 형변환 시키면 좋다 parseInt('4');           답 : true

console.log(false == 0);  //true                                                          답 : true

console.log('abc' == new String('abc')); // true  "" 와 ''는 같이 맞춰줘야 한다.            답 : true

console.log(true + 10);  //11 ??  ====> boolean이 int로 바뀐것     // 11                    답 : 11

console.log("abc" + new String("abc"));                             //  abcabc

console.log(1 + '1');                                               //number -> string     답 : 11

console.log('1' + 1);                                               //number -> string     답 : 11



console.log("=========================================================");

//=== : identity
// 1. 타입의 동일성 + 값의 동일성    : 원시타입일때 적용되는것
// 2. 객체의 동일성                 : 객체일때 적용되는것
// 3. 
//

console.log("2" === 2);                             // 답 false
console.log(true === 1);                            // 답 false
console.log(2 === 4);                               // 답 false
console.log(new Number(4) === new Number(4));         //1번 타입과 값의 동일성은 만족하지만 객체의 동일성이 만족되지 않는다.    답 false


