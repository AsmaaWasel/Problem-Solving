// 1- Addition of numbers
function sum(arr) {
  let temp = 0;
  arr.forEach((i) => {
    temp += i;
  });
  return temp;
}
console.log(`Sum of the Numbers is ${sum([3, 3, 3])}`);

// 2- Find maximum number
console.log(`Max number: ${max([1, 2, 3, 4, 5])}`);
function max(arr) {
  let max_num = arr[0];
  for (let i of arr) {
    if (i > max_num) {
      max_num = i;
    }
  }
  return max_num;
}

// 3- reverse a string
const reverse_str = (str) => str.split("").reverse().join("");
console.log(`Reversed String- ${reverse_str("Asmaa")}`);

// 4- Remove Duplicate
// using Set
function remove_duplication(arr) {
  return [...new Set(arr)];
}
console.log(remove_duplication([1, 2, 2, 3, 5, 3]));

// using filter method
function filter_arr(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
const numbers = [1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(filter_arr(numbers));
