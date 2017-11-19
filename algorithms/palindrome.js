function isPalindrome(str){
    
    const validChars = 'abcdefghijklmnopqrstuvwxyz';
    const validCharsArr = validChars.split("");
    const strArr = str.split("");
    
    const newStrArr = strArr.filter(char => validCharsArr.indexOf(char) !== -1);
    console.log(newStrArr);
    
    return newStrArr.join("") === newStrArr.reverse().join("");
    
    
    /*
        without using array functions i.e join() and reverse()
        
        let isPalindrome = true;
        for (let i=0; i < newStrArr.length; i++){
           if (newStrArr[i] === newStrArr[newStrArr.length - (i+1)]) continue;
           else isPalindrome = false;
        }
        
        return isPalindrome;
    */        
  
}

isPalindrome('lalal');
