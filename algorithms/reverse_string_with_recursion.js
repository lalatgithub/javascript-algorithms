/*

    Reverse a given string using recursion.
    Don't use any loop

*/

function reverseString(str){
 
    if (str.length <= 1) return str;
    
    const lastChar = str[str.length - 1];
    const remainingStr = str.slice(0, str.length - 1)
    
    return lastChar + reverseString(remainingStr);
    
}

reverseString('algos are fun');



