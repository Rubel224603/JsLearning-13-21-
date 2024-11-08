var checkBtn = document.getElementById("checkBtn"); 



var checkBtn = document.getElementById("checkBtn");

checkBtn.onclick = function() {

    var startNumber = document.getElementById("startNumber").value;

    var lasttNumber = document.getElementById("endNumber").value;

    if (startNumber && lasttNumber){
        var i;
      
        for(i = startNumber;i<=lasttNumber;i++){
           //document.write("<br>"+i);
           if(i%2 == 0){
            document.write( i +" even Number </br>");
           }else{
                document.write(i + " odd Number <br>");
           }
        }
    }else{
        alert("Plase enter start & end Nuber :");
    }
}

var a=1;
var b;
 for(a;a<=5;a++){
   document.write("<br>");
    for(b=1;b<=a;b++){
        document.write( a +" ");
    }
 }
 var i,j;
 document.write("<br>");
 for(i=5;i>=1;i--){
    document.write("<br>");
    for(j=1;j<=i;j++){
      document.write(i+ " ");

    }
    document.write("<br>")
 } 
//var num = window.prompt("type a number");
//console.log(num);

var myarry = [20,30,40,50,60];

document.write("Array:= "+myarry);
document.write("<br>");
// document.write(myarry[0]+myarry[2]);
    var lenth = myarry.length ;
    //document.write("array length: =" + myarry.length);
document.write("<h1>Array value check by loop</h1>")
    for(var i=0; i< lenth; i++){
         document.write(myarry[i]+"<br>" );
    }

    //want adding array value;
    document.write("<h2>Adding array sum</h2>");

    var sum=0;
    for(var a=0;a<lenth;a++){
        
        sum = sum + myarry[a];
        document.write("Now starting adding:= "+ sum +"<br>");
    }
   
    document.write("The total array values Sum= "+sum);

    document.write("<h1>new Array()</h1>");
    //array value get  from user;

    var arr = new Array(5);
    arr[1]= "Rubel Hosen";
    arr[0]= 'Asif';
    arr[2]= 'nahid';
    arr[3]= 'ashik';
    arr[4]= 'Sagor';
    document.write("Array: ="+arr);
    document.write("</br>");

    document.write(arr[1]+" "+arr[2]+" "+arr[3]+ " "+arr[0]);
    var givenArray = new Array(3);
    var getAhrray;  
      document.write("</br>");

    for(g = 0; g<3; g++ ){
       givenArray[g]=prompt("enter the value");
    }
    for(a =0; a<3;a++){
        document.write(givenArray[a]);
    }