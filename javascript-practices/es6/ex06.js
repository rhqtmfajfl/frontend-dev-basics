/*
    구조 분해(Distructing)
*/


//ex01 - basic
const user = {
    firstName: "둘",
    lastName: "리",
    email:"dooly@gail.com"
};

// let firstName = user.firstName;   // user변수에서 가져온다.
// let lastName = user.lastName;
let{firstName, lastName} = user;  //이름이 같은 경우 공
console.log(firstName, lastName);


//ex02 - Dfault Value;
const goods = {
    name : "TV",
    price : 100000,
    stockCount:100
};

let {name, price, countStock=0,stockCount=0} = goods;  //없는 경우에 드폴트 값이다.
console.log(name, price, countStock,stockCount)


// ex03 - 구조 분해해야할 객체의 속성과 변수 이름이 다를때
const persion={
    name : "길동",
    country:"korea"
};

const{name: fullName, country:place} = person
console.log(fullName, place);



//ex-4 - 내부 객체(Nestedehfdk rke.)

const student ={
    name: "둘리",
    age : 10,
    score:{
        math:90,
        korean: 70,
        science:1000
    }

}

const{name : studentName, score : {math=0, korean=0, science=0, music=0}} = student


console.log(`${studentName}의 성적

수학: ${math}
국어:${kore}
과학:$science
음악:${music}

`);





//ex06 

const average = function({name : studentName, score:{math=0, korean=0,scicence=0,music=0}
    console.log(`${studentName}의 평균은 ${(math + korean + science + music) / 4 `)
}



averageScore(student);

//ex06 - 배열

