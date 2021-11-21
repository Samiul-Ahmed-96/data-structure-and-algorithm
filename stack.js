//Last in first out - lifo
class Stack {
    constructor(){
        this.stack = []
    }
    add(element){
        this.stack.push(element)
    }
    remove(){
        return this.stack.pop();
    }
}
const names = new Stack();

names.add('AAA');
names.add('BBB');
names.add('CCC');
names.add('DDD');
names.add('EEE');

console.log(names.stack)

names.remove();
console.log(names.stack)
names.remove();
console.log(names.stack)
names.remove();
console.log(names.stack)
