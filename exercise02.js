function filterEvenNumbers(arr, getEvenNumber) {
  return arr.filter(getEvenNumber);
}

const isEven = (num) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterEvenNumbers(numbers, isEven));
