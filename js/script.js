//alert("hi");
// var a=10; 
// var  a=20;
//let a = 10;
//let a=30;
//const ab=10;
var ab=10;
var ab='Var onek bar declare kora jai & value assing kora jai ';
ab='10';
document.write(ab);

document.write("</br>")
;
let a = "rubel Hosen";
 a= 10; //let  ek bar decalare kora jai ar value onek bar assign kora jai but onek bar decalre kora jabe na


 a = "Atif Aslam";
 a=200;
 a='rohim';

a=20;
//document.write(a);
//constant  :==only ekbar decalre kora jabe .ar ekbarei value assing kora jabe;

 const b =  20;
document.write("</br>"+b);
console.log(b);
console.log(typeof(a));

var d = true;
var e = ["Rubel",20,"jhenaidah",'Web Developer'];
var f = {
            name:"Rubel",
            age:20,
            address:'jhenaidah',
            dream:"Web Developer"
       };
var g;
var h=null;

console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));

//operator;
//arithmetical operator -,+,*,/,%, ++,--
var ac=10; var bc= 20;
console.log(ac + " "+ bc);
ac--;// decriment operator

console.log(ac--);
console.log(ac);
console.log(10%3); //modulas % operator

//assignment operator; =,+=,-=,*=,/=,%=
var sum = 10;
var number = 10;
 sum += number ;//sum = sum +number
document.write("<br>"+sum);
console.log(sum);

sum %= number;
console.log(sum);
sum=20;
sum/= number; //sum= sun/number
console.log("division:= "+sum);
var lNumber= 2;
lNumber**=10;

console.log(lNumber);
var x=22;
console.table(['rubel',25,'Computer','Web']);
//console.error("soemthing went wrong");
console.warn("here is warning");
var y ='22';
console.log(x===y);
console.log(x===22);
var n= 22;
console.log(x===n);

//ternary operator;
var k= 100;
var l=20;
(k>l)? l ='true' : l = false; //only for one condition
console.log(l);
var age =10;
console.log((age>=10)? "high" : "low");

//switch statement;
 var day=4;

 switch(day){

     case 0: 
          console.log(0);
          break;
     case 1:
          console.log(1);
     break;
     case 2:
          console.log(2);
          break;
     case 3:
          console.log(3);
          break;
     case 4:
          console.log(4);
          break;
     case 5:
          console.log(5);
          break;
     default:
          console.log("invalid");
          

 }
 //alert();

 //console.log(alert('hi'));
document.write("</br>");
 //document.write(confirm("hi"));
 //var cnfrm = confirm("do you like our website");
 //alert(cnfrm);
 

 //var prmt = prompt("Enter your Input value"); 
// document.write(prmt);

function sayHello(){
     alert("click korecen ekta");
}

function dblclick(){
     alert("Double click sara bell nai");
}
function onMuseOver(){
     alert("Mouse over event");
}
function mouseOut(){
     alert("Mouse  out");
}
function keyup(){
     alert("keyup for text");
}
function rightclick(){
     alert("righ click");
}
