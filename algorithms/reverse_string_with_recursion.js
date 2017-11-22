/*

    Reverse a given string using recursion.
    Don't use any loop

*/

function reverseString(str){
 
    if (str.length <= 1) return str;
    
    const lastChar = str.slice(str.length - 1, str.length);
    const remainingStr = str.slice(0, str.length - 1)
    
    return lastChar + reverseString(remainingStr);
    
}

reverseString('algos are fun');



