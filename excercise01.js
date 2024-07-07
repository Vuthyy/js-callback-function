function squareArray(arr, getSquare) {
  return arr.map(getSquare);
}

const square = (num) => num * num;
const numbers = [1, 2, 3, 4, 5];

console.log(squareArray(numbers, square));
