function reverseAString(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return " hmm this is not good";
  }
  const array = str.split("");
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverseStr2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return " hmm this is not good";
  }
  return str.split("").reverse().join("");
}

const array = reverseAString("Mohan");

console.log(array);
