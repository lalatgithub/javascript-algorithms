/*

    Given a string, return list of all possible permutations
    Use recursion

*/

function permutations(str){
    
    let perms = [];
    
    if (str.length < 2) return str;
    
    for (let i=0; i<str.length; i++){
        
        const currentChar = str[i];
        const remainingStr = str.slice(0, i) + str.slice(i+1, str.length);
        
        for (let subPerm of permutations(remainingStr)){
            perms.push(currentChar + subPerm);
        }    
    }
    
    return perms;
    
}

permutations('abc');



