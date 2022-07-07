const grade = (marks) => {
  const statement1 = "The student secured A+ grade";
  const statement2 = "The student doesn't secured A+ grade";

  return marks > 89 ? statement1 : statement2;
};

console.log(grade(92));
console.log(grade(88));
