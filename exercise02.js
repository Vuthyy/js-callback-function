function filterEvenNumbers(arr, getEvenNumber) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (getEvenNumber(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const isEven = (num) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterEvenNumbers(numbers, isEven));
