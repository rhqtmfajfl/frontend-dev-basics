/**
 * Array 메소드(Array.prototype)
 * 
 */



var colors = ['red', 'white', 'yello'];
var fruits = ['apple','banana','mngo'];

//Array 메소드에 있는 concat pop push reverse 등이 있다.

//배열 프로토 타입

//concat

var a1 = fruits.concat(colors);
console.log(a1);

var color = colors.pop();
console.log(color, colors); // 예상 결과 color에는 yello가 빠져 나와 진다. -> 결과는 yello가 출력
//colors는 red white yello가 빠져나오고 red와 white만 남는다.


colors.push('red'); 
console.log(colors); // 예상 결과 파이썬에서는 red가 중복되므로 안들어가지는데
//여기서는 어떻게 될까?

// 결과  -> [ 'red', 'white', 'red' ]

