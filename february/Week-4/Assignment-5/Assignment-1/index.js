    //Q.Write a function which takes an input and returns true / false whether it is palindrome or not.

    let string = prompt("Enter a String").toLowerCase();
    let ans = "";
    function isPalindrome(string){
        for(let i=string.length-1;i>=0;i--){
            ans = ans + string.charAt(i);
        }
    if(string === ans){
        return true;
    }else{
        return false;
    }
    } 
   
    alert(isPalindrome(string));


