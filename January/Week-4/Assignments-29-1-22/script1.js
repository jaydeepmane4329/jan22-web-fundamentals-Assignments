
    //Q.user will give a string return the count of vowels;
    
    var  s = prompt("enter a string").split("");
    var count = 0;   

    for(var i=0;i<s.length;i++){
         
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" ){
            count++;
        }
        if(s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U"){
            count++;
        }
    }

    alert(count);