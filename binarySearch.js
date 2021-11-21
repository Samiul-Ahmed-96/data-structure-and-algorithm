const numbers = [11,14,15,16,22,26,66,77,78,93,111,121,145,221];

const binarySearch = (array,target) =>{
    let start = 0 ;
    let end = array.length - 1;
    
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(array[mid] === target){
            return mid;
        }
        else if(target < array[mid]){
            end = mid - 1;
        }
        else if(target > array[mid]){
            start = mid + 1;
        }
    }
    return -1;
}

const index = binarySearch(numbers,111);
console.log(index);