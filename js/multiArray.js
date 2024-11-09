console.log("Array");
var hereArray= [
        ["Name","Distric","Department","Age"],
        ["Sohel",'Jhenaidah','IT',24],
        ["ASIF","Kushtia","DataBase",22],
        ['Rakib',"DHaka","Web Developer",23]

]; 
document.write("The array: = "+hereArray + "</br>" );

document.write("Fild Name: = " + hereArray[0]+"</br>"+"1st:= " + hereArray[1]+ "</br>"+ "2nd:= " + hereArray[2]+"<br>"+ "3rd: = "+ hereArray[3]+" <br>");
document.write("<br>");

document.write("<h1>Here we find array valu with for loop</h1>");

document.write("The array length: = " + hereArray.length +"<br>");

document.write("<table border='1px' cellspacing='0'>");

for(var i= 0; i< hereArray.length; i++){
    document.write("<tr>");
    for(var j=0;j< hereArray.length;j++){
         document.write("<td>" + hereArray[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<h3> array sorting</h3>");

//array modify or delate
var a =["html","css3","js","php"];
console.log(a);
document.write("<h3>Array Modifiy</h3>");
document.write("The array: = "+ a);
a[0]='html5';
delete a[1];
document.write( "<br>"+a[1]+ "<br>");
document.write("<br> Modified array: = " + a);
document.write("</br>");

//sort & reverse method;
var  book= ["BookName ","WritterName","Price","PublishedDate",];
document.write("The book array:= "+ book);
document.write("<br><b>"+book.sort()+"</b>");
document.write("<br>"+book.reverse());
document.write("<br>");
//array sorting;

var numb= [1,120,200,50,40,20,10,30];
console.log(numb);
document.write("Number of array:="+ numb+ "<br>");
document.write("Sort:= "+ numb.sort());
document.write("</br>");
document.write("Reverse: = "+ numb.reverse());
document.write("<h1>Push function </h1>");
book.push("category");
document.write("Add at last: ="+book);
document.write("<h3>Pop function</h3>");
book.pop();
document.write("Remove Last:= "+book);

//array methodd shift unshifted;
document.write("</br> <b> Remove first element: </b>");
book.shift();
document.write(book);

//useing unsfhift
document.write("<br>");

document.write("elements = "+book.unshift());
book.unshift("Computer");
document.write("</br>Adding one element & all elements:= "+book);
var b=[1,2,3];
//var b=10;
document.write("</br>");
document.write(Array.isArray(b));
//array indexof() function;

var b=["Podma","Meghna","Jamuna","kumar"];
document.write("<br>");
document.write("indexOf method() =  "+b.indexOf("Gorai"));

//array objects;
document.write("<h2>Objcts</h2>");
console.log("Objects");

var phon ={
    name: "Red me",
    ram: "4gb",
    weight:"200gram",
    camera:"16 Megapixel",
    battary:"4000 ampiar",
    color:["red","black","white","pink"],
    fullName: function(){
       return this.name +  this.ram;
    },
    price:function(){
        return 15000;
    },
    customer:{
        name: "Rubel Hosen",
        age: 25,
        dataOfbirth:"20 december 1999",
        mobaile: "01950383541",
        adress:"Jheaidah"
    }


};
console.log(phon);
console.log(phon.customer);
document.write(phon.fullName()+" "+ phon.price()+" " +phon.customer.adress);
document.write("<h3>Other method of Objects</h3>");

console.log("Other method of objects");
var person = new Object();
person.name = "Rubel Hosen";
person.age = 25;
person.address = "Jhenaidah";
person.mobaile ="01950383541";
console.log(person);