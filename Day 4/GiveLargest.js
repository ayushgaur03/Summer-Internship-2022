const findLargest = (a, b, c) => {
  const num1 = Math.max(a, b);
  const num2 = Math.max(num1, c);
  return `The largest number of all the three numbers is ${num2}`;
};

console.log(findLargest(2, 4, 3));
