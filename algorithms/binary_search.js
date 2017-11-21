 /*

    Search a give key from a provided array.
    Use recursion to avoid time complexity of O(n)
    The target time complexity is O(Log n)
*/


function binarySearch(arr, key){
    
    const middleIndex = Math.floor(arr.length / 2);
    const middleElement = arr[middleIndex];
    
    if (key === middleElement) return true;
    
    else if (key < middleElement && arr.length > 1){
        return binarySearch(arr.splice(0, middleIndex), key);
    }
    
    else if (key > middleElement && arr.length > 1){
        return binarySearch(arr.splice(middleIndex, arr.length - middleIndex), key);
    }
    
    else return false;

}

const arr = [11,12,13,14,15,16];
binarySearch(arr, 15);


