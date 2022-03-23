//1. /2
//unnamed export 모듈에서 대상을 하나만 import 할 때는 반드시 이름을 지정해야 한다.

import myFunction from './ex08.01.mjs';
import myObject from './ex08.02.mjs';

console.log(myFunction(10, 20));
console.log(myObject.add(10,20));


// 2
//처음에 에러 발생 이유 named export는 import 대상이 다수 이기 때문에 하나의 특정 이름으로 받을 수 없다.
// 대신 * as m (모든 것을 m으로 받겠다) as ~ 를 사용할 수 있다.
//import m from './ex08.03.mjs';
import * as m from './ex08.03.mjs';  //모든 것을 as m으로 받겠다.
console.log(m.add(10,20));


//2번과 같은 방법을 사용하지 않으려면
// 3. import destruction을 사용한다.
import {subtract} from './ex08.03.mjs';
console.log(subtract(10,20));



// 4. import destruction을 사용한다.
import {add} from './ex08.03.mjs';
console.log(add(10,20));

//5. 
import math, {divide} from './ex08.05.mjs';  //default를 모아서 받을때는 가능하다. export만 있는 부분 ex08.05.mjs이다.
console.log(math.subtract(20,10), divide(20,10));

