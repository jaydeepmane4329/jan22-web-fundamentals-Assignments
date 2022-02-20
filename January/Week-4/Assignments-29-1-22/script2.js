
    //Q.whether the number is prime or not.

    var number = parseInt(prompt("enter a number"));
    var count = 0;

    if(isNaN(number)){
        alert("not a number");
    }
    if(number <=1){
        alert(false);
    }
    for(var i = 2; i < number; i++){
        if(number % i == 0){
            count++;
        }
    }

    if(count == 0 ){
       alert(number +  " is prime");
    }else{
        alert(number + " is not prime");
    }