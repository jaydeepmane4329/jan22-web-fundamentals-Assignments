       
       //Q. find minimum among 3 numbers;

       var a = parseInt(prompt("enter a first number"));
       var b = parseInt(prompt("enter a second number"));
       var c = parseInt(prompt("enter a third number"));

       var min = 0;

       if(a < b && a < c){
       min = a;
       }else if(b < a && b < c){
       min = b;
       }else{
       min =  c;
       }
       alert(min);


   