
    //Q. Print the first n number of fibonacci series;
  
    var n = parseInt(prompt("enter a value"));
    var a = 1; var b = 2;
    var sum = 0;
    console.log(a);
    console.log(b);

    while(sum < n){
        sum = a + b;
        console.log(sum);
                   a = b 
                   b = sum;
    }