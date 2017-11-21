/*

    Return Fibonacci of a given number
    Big O of fibonacci is O(2^n)

*/


function fibonacci(n){
    
    if (n < 3) return 1;
    
    return fibonacci( n-1 ) + fibonacci( n-2 );
    
}


fibonacci(20);


