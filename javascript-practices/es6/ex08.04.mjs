/*
    unnamed export1

    exports(require.js)와 유사하다 이 모듈을 import 할때에는 destruting이 가능하다
*/

export const add = function(a, b){
    return a + b;
}

export const subtract = function(a, b){
    return a - b;
}



// export { add,subtract}
// o = {  //이방법은 es6의 객채단축화라고 있다.
//     add,
//     subtract

// }
//이 방법과 유사하다.

export {add,subtract}