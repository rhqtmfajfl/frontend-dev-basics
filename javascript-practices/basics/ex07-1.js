

var  myFunction = function(){
    console.log("일반함수");
}


myFunction();  //일반함수 출력


var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

var o1 = new MyObject("둘리",10);
var o2 = new MyObject("마이콜",30);

console.log(o1);
console.log(o2);


