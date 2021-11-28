const strings = ["a", "b", "c", "d"];
//4*4 =  16 byte of storage.

//push
strings.push("e"); //O(1)

//pop
strings.pop(); //o(1)
strings.pop();

//unshift
strings.unshift("x"); //o(n)

//splice
strings.splice(2, 1, "alien"); //o(n)

console.log(strings);
