const ex01 = function(param, callback){  //url로 요청을 했을 때  
    //예제 때문에 만든 비동기 예제 ex01
    //
    //비동기 코드 : 파일 시스템 접근, 네트워크 통신, SQL to DB, 그래서 여기서는 setTimeout을 사용한다.
    //


    // //통신이 끝나면
    // $.ajax({
    //     success: function(){

    //     }
    // });

    setTimeout(function(){
        if(param==='param-data'){
        callback(null, 'ok')  //여기는 결과가 된다. fetch나 ajax는 이렇게 만들어 진다.  비동기 처리 결과에서 첫번째는 ok
        // 성공하면 null을 만환 한도
    }else{
        callback(new Error('fail'), null);
    }


    }, 2000);  //2초 후에 끝난다.
    // console.log("!!!!!")

    //여기서는 pass를 읽고 function에서 결과ㅡㄹ 읽고보낸다.

}

//비동기 함수들이 첫번째로 실해하는것은 비동기를 위한 파라미터를 요청 한다.


//test01: success
//ex01 비동기 함수를 부를때 param을 넣고 function 함수를 error를 넣어주면
ex01('param-data', function(error,res){
    if(error){
        console.error(error);
    }else{
        console.log(res)
    }
});


//test02: fail

ex01('param-error', function(error, res){
    if(error){
        console.error(error);
    }else{
        console.log(res)
    }
});




// ex01("http://102.10.101.111/api",function(err ===0rres));  //여기서 나온 결과를 consel로 으로 낚
console.log("wait....");

//wait 먼저 나오고 ok 나오고 fail 나오게 도니다.