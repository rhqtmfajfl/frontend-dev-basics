/*
    Arrow Function

*/

const power = function(x) {
    return  x * x;
}

const numbers = [1,2,3,4,5];

numbers.forEach(function(n){
    // console.log(`${n}: ${power(n)}`);
    process.stdout.write(`${n}: ${power(n)}\t `);  //stdout은 sysout 과 같은 의미
});


//ex01
console.log("\n---------\n");
const power2 = (x => x*x);  //여러개 일때 괄호 가능
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power2(n)}\t`);

});


//ex2
console.log("\n--------\n");
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${(x => x*x)(n)}\t`);

});



//ex03 : 

console.log("\n--------\n");
numbers.forEach((n) => process.stdout.write(`${n}: ${(x => x*x)(n)}\t`));


//ex04 : this를 어휘적으로 바인딩 가능하다.
console.log("\n-------\n");
const dooly = {
    name :'둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function(){
        // this.friends.forEach(function(f){   //함수에서 this는 전역이다.
        //     console.log(`${this.name}의 친구 ${f}`);
        // }.bind(this));  //이렇게 하면 바인딩 되서 나온다.
        this.friends.forEach(f => console.log(`${this.name}의 친구${f}`));
        
    }
};

dooly.printFriends();