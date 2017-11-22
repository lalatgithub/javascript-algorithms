/*

    Reverse a given string using recursion.
    Don't use any loop

*/

function reverseString(str){
 
    if (str.length <= 1) return str;
    
    return str.slice(str.length - 1, str.length) + reverseString(str.slice(0, str.length - 1));
    
}

reverseString('algos are fun');



