class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hello");
newArray.push("how");
newArray.push("are");
newArray.push("you");
const popedItem = newArray.pop();
console.log(popedItem);
const deletedItem = newArray.delete(2);
console.log(deletedItem);
console.log(newArray);
