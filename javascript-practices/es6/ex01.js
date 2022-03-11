/*
    let : Block Scope의 변수
*/

// try{
//     if(true){
//         var i = 10;   // var는 함수 범위전역변수
//         let j = 20;   // 함수안에서만 사용가능 바깥으로 나갈 수 없다.
//     }

//     console.log(i, j);

// }catch(e) {
//     console.error('[error]: ' + e);
// }

//cf.var의 함수 범위를 알아보자

try{
var f = function(){  //let f 는 함수 객체를 가르키는 변수
    m = 20;
    
    //let m = 20;
}

    f();

    console.log(m);
}catch(e) {
    console.error('[error] ' + e)
}
