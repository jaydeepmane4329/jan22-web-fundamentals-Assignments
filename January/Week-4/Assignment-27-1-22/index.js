        
          /*Q. Take the inputs from the user. It has to be dynamic. I can enter 3 numbers as well             
                as 30 numbers. It should give me the maximum of all of them. We will be using Array            
                as the underlying data structure.*/
                 
                var arr = [];
                var size = parseInt(prompt("enter a size of an array"));
                
               for(var j=0;j<size;j++){
                    arr[j] = parseInt(prompt("enter array element"));
               }
               
               let max = 0;
               
              for(var i=0;i<arr.length;i++){
                    if(arr[i] > max){
                        max = arr[i];
                   }
              }
          
              alert(max);



           
               