/* 
print numbers from 1 to N. 
print Fizz if number is divisible by 3. 
print Buzz if number is divisible by 5. 
print FizzBuzz if divisible by both 3 and 5
*/

function fizzBuzz(num) {
    
    for (var i = 1; i <= num; i++) {
    
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    
        else if (i % 3 === 0) console.log('Fizz');
    
        else if (i % 5 === 0) console.log('Buzz');
    
        else console.log(i);

    }
    
}


fizzBuzz(20);
