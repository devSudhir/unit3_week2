class Stack{
    constructor() {
        this.length = 0;
        this.s = [];
    }
    push(...value) {
        this.s = [ ...this.s,...value]
        this.length = this.length + value.length;
        /* for (let ele of value) {
            this.s[this.length] = ele;
            this.length++;
        }  */       
    }
    remove() {
        this.s.pop();
        this.length--;
    }
}
let stack1 = new Stack();
stack1.push("1", "10", "100");
console.log(stack1);
stack1.push("2");
console.log(stack1);
stack1.remove();
console.log(stack1);