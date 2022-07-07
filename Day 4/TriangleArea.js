// Area = Sqrt(s*(s-a)*(s-b)*(s-c))
const area = (a, b, c) => {
  const semi_perimeter = (a + b + c) / 2;
  return Math.sqrt(
    semi_perimeter *
      (semi_perimeter - a) *
      (semi_perimeter - b) *
      (semi_perimeter - c)
  );
};

console.log(area(5, 6, 7));
