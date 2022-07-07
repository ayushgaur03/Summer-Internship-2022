const FahrToCel = (t) => {
  const arg1 = (t - 32) / 9;
  const arg2 = arg1 * 5;
  return arg2 + " C";
};

const CelToFahr = (t) => {
  const arg1 = (t * 9) / 5;
  const arg2 = arg1 + 32;
  return arg2 + " F";
};

console.log(CelToFahr(60));
console.log(FahrToCel(45));
