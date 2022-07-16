# Assignment - 1 (TypeScript)

### What are the basic data types in TypeScript?
- The basic data types in TypeScript are :-
    1. Boolean
    2. Number
    3. String
    4. Null
    5. Undefined  

### What is Generic data type?
- A generic type is a generic class or interface that is parameterized over types.
- Essentially, generic types allow you to write a general, generic class (or method) that works with different types, allowing for code re-use.  
  
### What is type inferring in TS?
- TypeScript infers types of variables when there is no explicit information available in the form of type annotations.
- Types are inferred by TypeScript compiler when: Variables are initialized. Default values are set for parameters. Function return types are determined.
What are the possible ways to define typing for functions.
- In TypeScript, there are multiple syntaxes for declaring the type of a function:
    1. Method signatures.
    2. Function type literals.
    3. Object type literals with call/construct signatures.  

### How to define Generic type for Classes?
- A Generic class simply means that the items or functions in that class can be generalized with the parameter(example T) to specify that we can add any type as a parameter in place of T like Integer, Character, String, Double or any other user-defined type.
- These classes are known as parameterized classes or parameterized types because they accept one or more parameters.

# Programs

### Define the types in typescript for the given following JavaScript code.
Todo:
- Define type/interface for a single Todo object.
- Define type for each function.
- Do not use `any` (TS Data Type) type of typescript.

- JS
<code>
var todos = [];  
   function add(name, description) {  
     return todos.push({ name: name, description:   description, done: false });  
   }  
   function remove(index) {  
     return todos.splice(index, 1);  
   }  
   function list() {  
     todos.forEach(function (todo, index) {  
       console.log(index + " -" + todo.name);  
     });  
   }  
   function update(index, name, description) {  
     todos[index].name = name;  
     todos[index].description = description;  
     return todos[index];  
   }  
</code>

- TS  

    type enum1 = {  
        &nbsp;&nbsp;&nbsp;&nbsp;name:
        string;  
        &nbsp;&nbsp;&nbsp;&nbsp;description: string;  
        &nbsp;&nbsp;&nbsp;&nbsp;done: boolean;  
    };  
  
var todos: enum1[] = [];  
  
function add(name: string, description: string):  number {  
  &nbsp;&nbsp;&nbsp;&nbsp;return todos.push({  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: name,  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: description,  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;done: false,  
  &nbsp;&nbsp;&nbsp;&nbsp;});  
}  
  
function remove(index: number): enum1[] {  
  &nbsp;&nbsp;&nbsp;&nbsp;return todos.splice(index, 1);  
}  

function list(): void {  
  &nbsp;&nbsp;&nbsp;&nbsp;todos.forEach(function (todo: enum1, index: number) {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(index + " - " + todo.name);  
  &nbsp;&nbsp;&nbsp;&nbsp;});  
}  
function update(index: number, name: string,   description: string): enum1 {  
    &nbsp;&nbsp;&nbsp;&nbsp;todos[index].name = name;      
    &nbsp;&nbsp;&nbsp;&nbsp;todos[index].&nbsp;&nbsp;&nbsp;&nbsp;description = description;  
    &nbsp;&nbsp;&nbsp;&nbsp;return todos[index];  
}  
console.log(add("Go to College", "Do some Assignments")); // 1  
list(); // 0 - Go to College  
