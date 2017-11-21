/*

    Sort list of numbers in O(log n) using Recursion

    3 main steps:
    
        1) Choose the pivot (reference value).
        
        2) Divide the rest of the array in two, placing everything smaller than the pivot on the
           left and greater than the pivot on the right.
        
        3) Recursively apply the previous steps to the sub-arrays if they have more than 1 element.
 
*/ 
 
function quickSort(list) {
    
    if ( list.length < 2) return list;
    
    let pivot   = list[0];
    let left    = []; 
    let right   = [];
    
    for ( let i=1; i < list.length; i++ ){
       
       switch ( true ){
          
          case ( list[i] < pivot ):
             left.push( list[i] );
             break;
             
          case ( list[i] >= pivot ):
             if( list[i] )
             right.push( list[i] );
             break;
       }
    }
    
    return [].concat( quickSort( left ), pivot, quickSort( right ));
};
  
const range = n => Array.from({length: n}, (value, key) => key)
  
quickSort(range(1000));
  
  
  
