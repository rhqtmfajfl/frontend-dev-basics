/**
 * string primitive type과 String 객체 메소드(String.prototype.*)
 */

// s ='hello';  //object 타입이 아닌 기본 타입 string primitive type
// s.substring(); //  -> 이렇게 바껴서 끝난다. new String(s).substr()

// string이 가지는 특징 배열처럼 접근이 가능하다.

var str1 = 'Hello World';
for(var i = 0; i< str1.length; i++){
    console.log(str1[i]);
}



//문자열 합치기
var str2 = 'Hello';
var str3 = 'World';

var str4 = str2 + ' ' + str3;

console.log(str4);

