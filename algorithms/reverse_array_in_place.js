/*

    Reverse the provided array without using a new array
    Don't use array reverse() function
    
*/


function reverseArray(arr){

    for ( let i=0; i <= (arr.length - 1) / 2 ; i++) {
        const tmp = arr[i];
        arr[i] = arr[arr.length - (i+1)];
        arr[arr.length - (i+1)] = tmp;
    }
    
    return arr
    
}

reverseArray([1, 2, 3, 4, 5]);


