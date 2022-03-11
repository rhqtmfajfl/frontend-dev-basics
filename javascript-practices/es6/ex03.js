/*
    Template Literal
*/

let no = 10;
let name = "둘리";
let email = "dooly@gmail.com";

//ex1
console.log("no : " + no + ", name : " + name + ", email : " + email);
console.log(`no : ${no}, name: ${name}, email: ${email}`);   //리터럴로 했을 때

//ex2
console.log("no : " + no + "\nname : " + name + "\nemail : " + email);

console.log(`no : ${no}
name:${name}
email:${email}
`)