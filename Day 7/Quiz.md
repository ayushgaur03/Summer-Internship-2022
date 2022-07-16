# Quiz (Javascript Based)

### What are anonymous functions in JavaScript?

- _Anonymous Function_ is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
- An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.

E.g.  
<code>
var greet = function (platform) {  
 console.log("Welcome to ", platform);  
};

greet("Wisflux!");
</code>

### Explain Strict comparison and Abstract comparison in javascript?

- In Javascript, we use two techniques to equality comparison, one is **Abstract Comparison** with operator '==' and other is **Strict Comparsion** with operator is '==='.
- Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different.
- Consider the following example:  
  <code>
  console.log(3 == "3"); // true  
  console.log(3 === "3"); // false.  
  </code>

### Difference b/w arrow functions and regular functions?

- **Arrow functions**, a new feature introduced in ES6, enable writing concise functions in JavaScript. While both regular and arrow functions work in a similar manner, yet there are certain interesting differences between them, as discussed below.  
  Syntax of regular functions:-  
  <code>
  const x = () => {  
   console.log(arguments)  
  }
  </code>

- **Regular functions** created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible.  
  Thus, we will get a run-time error on trying to construct a non-constructible arrow functions using the new keyword.  
  Example using regular function:  
  <code>
  let x = function(){  
   console.log(arguments);  
  };  
  new x =(1,2,3);
  </code>

### What is Hoisting in JavaScript?

- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
- Hoisting allows functions to be safely used in code before they are declared.
- Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

### JavaScript is a garbage collected programming language, explain how?

- Low-level languages like C, have manual memory management primitives such as malloc() and free().
- In contrast, JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).
- This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.

**Memory life cycle**  
Regardless of the programming language, the memory life cycle is pretty much always the same:

1. Allocate the memory you need
2. Use the allocated memory (read, write)
3. Release the allocated memory when it is not needed anymore

The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.

### Explain Shallow copy vs Deep copy in Javascript?

A. **Shallow Copy:**

- When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. In simple words, a reference variable mainly stores the address of the object it refers to.
- When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. This means both the old and new reference variable point to the same object in memory.
- As a result if the state of the object changes through any of the reference variables it is reflected for both. Let us take an example to understand it better.
- E.g  
  <code>
  var employee = {  
   eid: "E102",  
   ename: "Jack",  
   eaddress: "New York",  
   salary: 50000  
  }  
  console.log("Employee=> ", employee);
  var newEmployee = employee; // Shallow copy
  console.log("New Employee=> ", newEmployee);  
  console.log("---------After modification----------");  
  newEmployee.ename = "Beck";  
  console.log("Employee=> ", employee);  
  console.log("New Employee=> ", newEmployee);  
  // Name of the employee as well as  
  // newEmployee is changed.
  </code>

B. **Deep Copy**

- Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object.
- In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected. Also, if one of the objects is deleted the other still remains in the memory.
- Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods.
- Let us take an example to understand it better.  
  <code>
  var employee = {  
   eid: "E102",  
   ename: "Jack",  
   eaddress: "New York",  
   salary: 50000  
  }  
  console.log("=========Deep Copy========");  
  var newEmployee = JSON.parse(JSON.stringify(employee));  
  console.log("Employee=> ", employee);  
  console.log("New Employee=> ", newEmployee);  
  console.log("---------After modification---------");  
  newEmployee.ename = "Beck";  
  newEmployee.salary = 70000;  
  console.log("Employee=> ", employee);  
  console.log("New Employee=> ", newEmployee);  
  </code>

### What is Object.freeze?

- The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
- In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
- Nothing can be added to or removed from the properties set of a frozen object. Any attempt to do so will fail, either silently or by throwing a TypeError exception (most commonly, but not exclusively, when in strict mode).

## Programs:

### 1. Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

<code>
function radomInTwoRange(min1, max1, min2, max2){  

var ranges = [  
    {
         min: -100,  
         max: 0,
    },  
    {
         min: 800,  
         max: 900,  
    },  
];    
ranges.forEach((e) => {  
    console.log(Math.floor(Math.random() * (e.max - e.min + 1) + e.min));  
     }  
    );  
   }
</code>
