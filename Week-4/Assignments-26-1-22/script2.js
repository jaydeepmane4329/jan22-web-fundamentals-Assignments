
   
     //Q.check wether given character is  vowel or consonant;
     
      var  char = prompt("enter any charachter");

     if(parseInt(char)){
     alert("numbers are not allowed");
     }else if(char == 'a' || char == 'e' || char == 'i'  || char == 'o' || char== 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
     alert("character is vowel");
     }else{
      alert("character is consonant");
     }