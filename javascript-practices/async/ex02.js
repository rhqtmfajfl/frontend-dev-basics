const fetch = function(param){  //url로 요청을 했을 때  
    return new Promise(function(resolve, reject){


        setTimeout(function(){
            if(param ==='param-data'){
                resolve('ok');
        } else {
            reject(new Error('fail'));
        }
        }, 2000);
    });
  

}

//비동기 함수들이 첫번째로 실해하는것은 비동기를 위한 파라미터를 요청 한다.



if(require.main == module) {  //여기 모듈은 node ex02 해서 시작된것이다.
    //test01: success
    //성공하면 functio 함수가 실행
    fetch('param-data').then(function(res){
        console.log(res);
    });


    //test01: fail

    fetch('param-error').catch(function(error){
        console.error(error);
    });


    // //일반적으로
    // fetch('param....')
    //     .then(res => {

    //     })
    //     .catch(error =>{

    //     });

    console.log("wait....");  // wait이 가장 먼저 실행된다.

} else {
    module.exports= fetch;
}
//여기 블록은 메인이 모듈이기 때문에 실행된다.