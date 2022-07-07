const findDifference = (num) => {
  const diff = Math.abs(num - 13);
  return num > 13 ? 2 * diff : diff;
};

console.log(findDifference(5));
console.log(findDifference(15));
