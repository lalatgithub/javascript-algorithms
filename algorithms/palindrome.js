function isPalindrome(str){
    
    let isPalindrome = true;
    
    for (let i=0; i < str.length; i++){
        
       
       if (str[i] === str[str.length - (i+1)]) continue;
       
       else isPalindrome = false;
        
    }
    
    return isPalindrome;
  
}

isPalindrome('madam');
isPalindrome('shot');
