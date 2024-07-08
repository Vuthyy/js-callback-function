function squareArray(arr, getSquare) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(getSquare(arr[i]));
  }
  return result;
}

const square = (num) => num * num;
const numbers = [1, 2, 3, 4, 5];

console.log(squareArray(numbers, square));
