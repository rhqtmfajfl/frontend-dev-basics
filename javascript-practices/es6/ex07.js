/*
    class Rect

*/

class Rect {
    constructor(w, h) {
        this.w = w;  // 어휘적인 지원이지 내부는 변하지 않는다.
        this.h = h;

    }

//내부에 돌아가는것은 생성자타입 프로토 기반으로 돌아가는 것이다.
    draw(){   // 원랜ㄴ draw: function(){}dmfh gksmsep
        console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다.`)

    }
}


//test1
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);


// 처음에 프로토 타입으로 바로 만들수 ㅣㅇㅆ다 내부는 이렇게 만든다.Rect
Rect. print.

rect1.draw();
rect2.draw();


/*
cd.생성자 함수(prototype) 기반
*/

const Circle = function(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = function() {
    console.log(`Circle(x=${this.x}, y=${this.y}, r=${this.r})`);
}

const c1 = new Circle(1,2,5);
const c2 = new Circle(10,20,40);

c1.draw();
c2.draw();

/*
    extends
*/

class Shape{
    //constructor 이거는 추상클래스이기도 하다.
    constructor(bgColor, lnColor){
        this.bgColor = bgColro;
        this.lnColor = lnColor
    }

    draw(){
        console.log('그릴 수 없습니다.')
    }

    area(){
        console.log("구할 수 없습ㄴ디ㅏ.")
    }
}

class Triangle extends Shape{
    constructory(w,h){
        super('red', 'black');   //색깔고 
    }

    //draw오버라이드 가능
    //@Override
    draw(){
        console.log(`Triangle(w=${this.w}, h =${this.h}, bgColor=${this.bgColor}, lnColor=${this.lnColor})를 그렸습니다.`);
    }
}

const t1 = new Triangle(10,20);
t1.draw();
t1.area();

