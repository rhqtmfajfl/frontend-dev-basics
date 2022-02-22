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



//캐스팅
var str5 = 5 + '5';
console.log(str5);   //결과

var str6 = 'boolean: ' + true;
console.log(str6);   //결과

// 메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2');
console.log(index);

var index = str7.indexOf('string4');
console.log(index);//찾지 못하면 -1

var str8 = str7.substr(10, 3/*count*/);  //10번째에서 3개를 가지고 온다.
console.log(str8);


var str8 = str7.substring(10, 13/*last index -1*/);  //rin 뒤에서
console.log(str8);


var a = str7.split(" ");
console.log(a);

var str11= "abcdef";
var a = str11.split(":");

console.log(a);

