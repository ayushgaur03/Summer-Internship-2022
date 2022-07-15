# Assignment 3

### Explain as much as you know about objects in javascript?  
  

- JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. 
- In addition to objects that are predefined in the browser, you can define your own objects. This chapter describes how to use objects, properties, functions, and methods, and how to create your own objects.

#### **Objects and Properties**
- A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. 
- The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:  
`objectName.propertyName`

#### **Enumerate the properties of an object**
There are three native ways to list/traverse object properties:

1. **for...in loops.**: This method traverses all of the enumerable string properties of an object as well as its prototype chain.  

2. **Object.keys(myObj).**: This method returns an array with only the enumerable own string property names ("keys") in the object myObj, but not those in the prototype chain.  

3. **Object.getOwnPropertyNames(myObj).**: This method returns an array containing all the own string property names in the object myObj, regardless of if they are enumerable or not.  

### Make a "class" based alternative to the object based vector template.

<code>class Vector {  
	constructor () {  
		this.x = 0  
		this.y = 0  
	}  
    set setX(x) {  
		this.x = x  
	}  
	set setY(y) {  
		this.y = y  
	}  
	create(x, y) {  
		let obj = Object.create(this)  
		obj.setX = x  
		obj.setY = y  
		return obj  
	}  
}  

let vec1 = new Vector()  
console.log(vec1.create(1, 2)) // Output:- Vector { x: 1, y: 2 }
</code>

### Do you think JavaScript is the language of the future?  

- Yes. I do think JS is the language of the future.
Currently, there are a lot of weird behaviours of JavaScript that cannot be explained.  
- Due to them, JS has been tagged with an infamous saying :- 
    a. "There are a lot of ways to shoot yourself in the foot with JavaScript"  
    b. But if these issues are fixed, then surely due to the flexibility of JS, it can become the language of the future.

### Write code implementations for the following Array methods :-

**Array :- const arr = [1, 2, 3, 4, 5]**

- **forEach :-**
<code>
const arr = [1, 2, 3, 4, 5]  

arr.forEach(item => console.log(item)) // Output:- 1 \n 2 \n 3 \n 4 \n 5
</code>  

- **map :-**  
<code>const arr = [1, 2, 3, 4, 5]  console.log(arr.map(num => num * 2)) // Output :- [ 2, 4, 6, 8, 10 ]  
</code>
- **filter :-**  
<code>const arr = [1, 2, 3, 4, 5]  console.log(arr.filter(num => ((num % 2) == 0))) // Output :- [ 2, 4 ]  </code>
- **reduce :-**  
    <code>const arr = [1, 2, 3, 4, 5]  console.log(arr.reduce((prev, initial) => prev+initial, 0)) // Output :- 15
</code>
- **includes :-**  
<code>const arr = [1, 2, 3, 4, 5]  
console.log(arr.includes(2)) // Output :- true
</code>
- **some :-**  
<code>const arr = [1, 2, 3, 4, 5]  
console.log(arr.some(element => element % 2 === 0)) // Output :- true
</code>
- **every :-**  
<code>const arr = [1, 2, 3, 4, 5]  
console.log(arr.every(element => element % 2 === 0)) // Output :- false
</code>


### Simple Array Implementation

<code>
const arr = [1, 2, 3, 4, 5, 6]  

console.log(arr) // Output:- [1, 2, 3, 4, 5, 6]
</code>
