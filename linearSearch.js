const numbers = [11,3,56,34,67,23,57,23,31];

const linearSearch = (array,target) =>{
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element === target){
            return i;
        }
    }
    return -1;
} 

const index = linearSearch(numbers,34);
console.log(index);