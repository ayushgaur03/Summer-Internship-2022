# Assignment 1 (Javascript)

### What is Javascript?

- Javascript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

### What is difference between let and var?

- _var_ and _let_ are both used for variable declaration in javascript.
- But the difference between them is that var is function scoped and let is block scoped.
- It can be said that a variable declared with var is defined throughout the program a0s compared to let.
- Further, **[hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)** is allowed with _var_ but not with _let_.

### Why do we prefer const over var?

- **const** is similar in usage to **let** and thus, it has a block scope.
- Further, **const** doesn't allow value change to the variable, thus once value is desclared it can't be updated.
- With **var**, it has global scope or functional scope. This allows it to be used throughout the program. Further, we could change the value as many times as we want, which creates problem when using it again and again in the problem.

### What is the use of javascript in web browsers?

- Javascript is a programming language used in Web Browsers to create a dynamic and interactive experience for the user.
- Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript.

### What are objects?

- JavaScript, an object is a standalone entity, with properties and type.
- Objects in programming can be a combination of variables, functions, and data structures. They make code more readable.

### What is an array and how is it different from an Object in Javascript?

- Array stores a collections of similar objects,i.e, it can only store objects having same properties.
- In case of objects, we can store different types of entities in it,i.e., entities could have different type of properties.

### What is a function?

- A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

### How can we implement call by value and call by reference in Javascript?

#### **Call By Reference:**

- Let’s say, we have an object stored in the variable “a”. The variable stores the location or the address where the object lives. Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, points to the same location where “a” does. No new object is created, no copy is created. Both the variables point to the same object. This is like having 2 names.
- This is call by reference. It behaves quite differently from by value. All objects interact by reference.
- **Features of Call By Reference:**
  1. In JavaScript, all objects interact by reference.
  2. If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory.
  3. Changes in one object variable affect the other object variable.

#### **Call By Value:**

- Suppose there is a variable named “a”. Now, we store a primitive value(boolean, integer, float, etc) in the variable “a”.Let us store an integer value in “a”, Let a=5. Now the variable “a” stores 5 and has an address location where that primitive value sits in memory.Now, suppose we copy the value of “a” in “b” by assignment (a=b). Now, “b” points to a new location in memory, containing the same data as variable “a”. Thus, a=b=5 but both points to separate locations in memory.
- This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.

- **Features of call by value:**

  1. Function arguments are always passed by value.
  2. It copies the value of a variable passed in a function to a local variable.
  3. Both these variables occupy separate locations in memory. Thus, if changes are made in a particular variable it does not affect the other one.

### What are the primitive data types in Javascript?

- In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
- There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

### What is DOM?

- The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
- The DOM (Document Object Model) is an interface that represents how your HTML and XML documents are read by the browser.
- It allows a language (JavaScript) to manipulate, structure, and style your website. After the browser reads your HTML document, it creates a representational tree called the Document Object Model and defines how that tree can be accessed.

### Why do we need DOM?

- By manipulating the DOM, you have infinite possibilities. You can create applications that update the data of the page without needing a refresh.
- Also, you can create applications that are customizable by the user and then change the layout of the page without a refresh. You can drag, move, and delete elements.

### Program to find the avaerage of nums in javascript

<code>
const arr = [1, 2, 3, 4];
var sum = 0;
const len = arr.length;

arr.forEach((element) => {
sum += element;
});

console.log(sum / len);
</code>

### Program to print the fibonacci sequence

`let ans = "";`  
`const fibonacci = (n) => {`  
` if (n == 1) return 0;`  
` if (n == 2) return 1;`

` const val = fibonacci(n - 1) + fibonacci(n - 2);`
`return val`  
`};`

`console.log(fibonacci(5));`
