class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

    push(value){
        const node = new Node(value);
        if(this.length === 0){
        this.bottom=node;
        this.top =node;
        }else{
         node.next=this.top;
         this.top=node;
        } 
        this.length++;
        return this;
    }
    peek(){
        return this.top;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(!this.top===this.bottom){
            const holdingPointer = this.top;
            this.bottom = null;
            this.top = null;
            return holdingPointer;
        }
        const holdingPointer = this.top;
        this.top = this.top.next
        this.length--;
        return holdingPointer;
    }
}
// 
const stack = new Stack()
stack.push('google');
stack.push('udemy');
stack.push('discord');
stack.peek();
stack.pop();
