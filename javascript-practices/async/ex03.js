const fetch = require('./ex02');

const ex03 = async function(param) {
    try{    
        const res = await fetch(param);  //await 사용시 res 처리때문에 여기 함수 안에서 사용한다. 
        console.log(res);

    }catch(error){
        console.error("error");  //그전에 err
    }  

}


ex03('param-data');
ex03('param-error');

console.log('wait....');

// fetch('', async() => )
