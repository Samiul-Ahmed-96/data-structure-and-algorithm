//First in first out -FIFO
class Queue{
    constructor(){
        this.queue = []
    }
    //Add
    enqueue(element){
        this.queue.push(element);
    }
    //Remove
    dequeue(element){
        this.queue.shift(element)
    }

}

const names = new Queue();

names.enqueue("AAA");
names.enqueue("BBB");
names.enqueue("CCC");
names.enqueue("DDD");
names.enqueue("EEE");

console.log(names.queue);

names.dequeue();
console.log(names.queue);
names.dequeue();
console.log(names.queue);
names.dequeue();
console.log(names.queue);