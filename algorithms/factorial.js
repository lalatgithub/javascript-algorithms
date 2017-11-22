/*

    Find factorial of a given number using recursion

*/

function factorial(n){
    
    if (n < 2) return 1;
    
    return n * factorial(n-1);
    
}


factorial(17);


