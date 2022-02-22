/*
    Array 확장(prototype 기반의 확장): List 메소드 추가
*/

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i = 0; i<value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }
        
        // var _this = this;
        
        
        // value.forEach(function(e, index){
        //     // console.log(_this);
        //     //_this.splice(index++, 0,e);
        // //   this.splice(index++, 0, e);
        // });
        // console.log("!!!!!");
    

    Array.prototype.forEach.call

    //!!!오류!!!!
    //callback안의 this는 예측 못한다.(어휘상의 this와 일치하지 않는다.)
    //value.forEach(cuntion(e))
    //        this.splice(index++, 0, e);
    //    }
    
        //해결방법
        //var _this = this;
        //value.forEach(function(e)
        //{_this.splice(index__, 0 ,e)}
    // });


    /// 해결방법 2: 함수의 bind로 실행 때의 this를 세팅해 줄 수 ㅣㅇㅆ다.

       value.forEach(function(e){   //이거를 더 선호
           this.splice(index++, 0,e)  // 이 this를 사용할 때 묶여 있는 this를 사용 하낟  함수 안에서의 this는 그함수를 호출하는 것이다.
       }.bind(this));  // bind로 묶고 있다가 호출하게 되면 bind 호출 한다.


    
       
    
    }else{    
    this.splice(index, 0, value);
    }
}

Array.prototype.remove = function(index){
    this.splice(index,1);
}


//List로 사용하기

var a = [1,2,4];

console.log(a);   //기본

a.insert(2,3);  // 1, 2, 3, 4 가 된다.
console.log(a);


a.remove(3);   // 맨마지막 4를 삭제
console.log(a);


a.insert(2,['a','b','c']);   //기대 [1,2,'a','b','c']
console.log(a);              //결과 [ 1, 2, [ 'a', 'b', 'c' ], 3 ]  - >[ 1, 2, 'a', 'b', 'c', 3 ]

 