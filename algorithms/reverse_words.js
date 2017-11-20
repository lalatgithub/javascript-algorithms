/*

    Reverse each word of string and return new string
    Don't reverse the whole string just each word separately.
    Don't use array reverse() function

*/

function reverseWords(str){
    
    let strArr = str.split(" ");
    
    for (let i=0; i < strArr.length; i++) {
        
        const word = strArr[i];
        let reverseWord = "";
        
        for ( let j=word.length - 1; j >= 0; j--) {
            reverseWord += word[j];
        }
        
        /*
            OR 
            
            for ( let j=0; j < word.length; j++) {
                reverseWord += word[word.length - (j+1)];
            }
        */
        
        
        strArr[i] = reverseWord;
        
    };
    
    return strArr.join(" ");
}


reverseWords('i am here');


