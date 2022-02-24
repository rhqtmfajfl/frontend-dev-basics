/**
 * URL 다루기
 */

var url1 = "http://www.mysite.com/user?name=둘리&no=10"

// location.href=url1;

//1. escape: URL 전부 encoding, 사용금지(X), deprecated 
console.log("url1:" + url1);


var url2 = escape(url1);      //escape 내장객체 생성자 함수
console.log("url2 : " + url2);


//2. encodeURI : parameter만 encoding을 한다. 사용 가능(o)
var url3 = encodeURI(url1);
console.log("url3 : " + url3);
//location.href= ""


//3.end=codeURIComponent: 값만 엔코딩 해야하는 경우. 사용가능(O)  component는 name email 하나씩을 의미한다.
var url4 = encodeURIComponent(url1); // 잘못 사용한 경우
console.log("url4 : " + url4);

//4.
//만들어야 할 URL
//http://mysite.com/user?no=10&name=둘리&email=dooly@gmail.com

var url ="http://mysite.com/user";

var params = {
    name:"둘리",
    email:"dooly@gmail.com",
    no:10
};

jQuery("")

/**
 * jQuery = function() {.....}
 * 
 * $ =jQuery;
 * $obj = $("")
 * 
 * $object = ${""}
 * 
 * jQuery.ajax  -> $.ajax({
 *      url : url,
 *      type: 'post',
 *      data: toQuerytring(o) // 홈데이터에 보낼때는    
 * })
 * 
 */

var toQueryString = function(o){
    
    var qs = "";

    for(prop in o){
    //    console.log(prop);
    qs.push(prop +"=" + encodeURIComponent(o[prop]));  //encodeURIComponent 개별적으로 코딩을 한다.
    //    qs += (prop + "=" + encodeURIComponent(o[prop]) + "&");
    }

    return qs.join("&");

    
}


var url5 = url + "?" +  toQueryString(params);
console.log("url5 : " + url5);

/**
 * jQuery = function() {.....}
 * 
 * $ =jQuery;
 * $obj = $("")
 * 
 * $object = ${""}
 * 
 * jQuery.ajax  -> $.ajax({
 *      url : url,
 *      type: 'post',
 *      data: toQuerytring(o) // 홈데이터에 보낼때는    
 * })
 * 
 */