/*

    Return Fibonacci of a given number
    This way of Fibonacci keeps records of prev fibonacci each time we try calculate

*/


function fibonacci(index, cache=[]){
    
    if (cache[index]) return cache[index];
    
    else{
        
        if (index < 3) return 1;
        
        cache[index] = fibonacci(index-1, cache) + fibonacci(index-2, cache);
    }
    
    return cache[index];
    
}


fibonacci(11);

