function bubbleSort(array){
     
    for(var i = 0; i < array.length; i++){
        
      // Last i elements are already in place  
      for(var j = 0; j < ( array.length - i -1 ); j++){
          
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(array[j] > array[j+1]){
            
          // If the condition is true then swap them
          var temp = array[j]
          array[j] = array[j + 1]
          array[j+1] = temp
        }
      }
    }
    // Print the sorted array
    console.log(array);
   }
     
     
   // This is our unsorted array
   var numbers = [234, 43, 55, 63,  5, 6, 235, 547];
     
     
   // Now pass this array to the bblSort() function
   bubbleSort(numbers);