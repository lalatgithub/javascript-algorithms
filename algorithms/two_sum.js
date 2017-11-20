/*

    Return all pairs of elements whos sum is equal to the provided sum

*/


function twoSum(arr, sum){
    
    let pairs = [];
    
    arr.forEach(element => {
        
        // counterPart = the number which makes the current element equal to the provided sum
        const counterPart = sum - element; 
        
        // if counterPart exist in array, it means pair could be made which is equal to provided sum
        if (arr.indexOf(counterPart) !== -1) pairs.push([element, counterPart]);
        
    });
    
    return pairs;
    
}

twoSum([1, 5, 3, 8, 6, 12, 9, 4], 7);



