/*
Move each character of the string by the provided number of position and return new string
E.g:
    caesarCipher("car", 2)
    output: ect
    
    caesarCipher("lal", -1)
    output: kzk
    
    caesarCipher("lal", 30)
    output: pep
*/

function caesarCipher(str, num) {
    
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArr = alphabets.split("");
    let newStr = '';
    num = num % alphabetsArr.length;
    
    for (let i=0; i <= str.length; i++) {
        
        const currentChar = str[i];
        
        if (currentChar === ' ') {
            newStr += currentChar; 
            continue;
        }
        
        if (alphabetsArr.indexOf(currentChar) !== -1) {
            
            const currentIndex = alphabetsArr.indexOf(currentChar);
            let newIndex = currentIndex + num;
            
            if (newIndex >= alphabetsArr.length) newIndex = newIndex - alphabetsArr.length;
            
            if (newIndex < 0) newIndex = alphabetsArr.length + newIndex;
            
            console.log( 'current Index', currentIndex, 'New Index', newIndex);
            newStr += alphabetsArr[newIndex];
        }
        
    }
    
    return newStr
    
}

caesarCipher('lalz', 4)
