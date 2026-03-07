function filter(arr, callback) {
  let filteredArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    let currElement = arr[index];
    if (callback(currElement)) {
      filteredArr.push(currElement);
    }
  }

  return filteredArr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]