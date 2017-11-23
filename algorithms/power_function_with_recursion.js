/*

    Recursively compute the value of base to the n power

*/

function pow(base, power){
    
    if (power === 0) return 1;
    
    return base * pow(base, --power);
}


pow(2, 4);

/*

    base = 2
    power = 4
    
    2^4 = 2^1 * 2^3 = 2 * 2^3 = base * base^(power-1)
        = 2 * 2 * 2^2         = base * base * base^(power-2)
        = 2 * 2 * 2^1 * 2^1   = base * base * base * base^(power-3)
        = 2 * 2 * 2 * 2       = base * base * base * base 
    
    so pow(base, power) is calling recursively with power decremented each time

*/
