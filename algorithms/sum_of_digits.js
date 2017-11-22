/*

    Given an integer, return the sum of all the individual digits in that integer
    input: 4321
    output: 4+3+2+1 = 10

*/


function sumDigit(n){
    
    if (n.toString().length <= 1) return n;
    
    return (n % 10) + sumDigit( Math.floor(n/10) );
}


sumDigit(4321);



