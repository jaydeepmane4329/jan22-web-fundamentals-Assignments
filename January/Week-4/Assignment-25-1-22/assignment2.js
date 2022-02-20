//Q.Find maximum between three numbers

         var a = 25;
         var b = 20;
         var c  = 15;
         var max = 0;

          if(a > b && a > c){
              max = a;
          }else if(b > a && b > c){
              max = b;
          }else{
              max = c;
          }
          
           console.log("maximum number is " + max);