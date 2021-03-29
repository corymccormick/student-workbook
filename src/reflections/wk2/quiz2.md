# Intro to JavaScript

**1.** Which keywords are used to declare a variable in JavaScript?
<!-- enter you answer in the space below -->
```
The keywords used to Declare a variable within JavaScript include Var, Let and Const. 
```
**2.** What is the definition of a function?
<!-- enter you answer in the space below -->
```
A function is a block of code designed to complete a specific task.

```
**3.** What are the `SOLID` principles?
<!-- enter you answer in the space below -->
```
-Single Responsibility
-Open/Closed
-Liskov Substitution
-Interface Segregation
-Dependency Inversion
```
**4.** Given this array: 
```js
let fruit = ['apple', 'banana', 'pineapple',  'orange', 'strawberry']
``` 
What index is the pineapple's current position? How do you know?
<!-- enter you answer in the space below -->
```
The pinapple's current position is [2], because an array's index starts at zero.
```
**5.** With these two objects: 
```js
let you = { name:"You", hair: true, friends: [] }
let them = { name:"Them", hair: false, friends: [] }
```
how would you .push the `them` object into the `you` object's array of friends?
<!-- enter you answer in the space below -->
```
you.push(them)
```

**6.** Give an example of a JavaScript `Conditional`:
<!-- enter you answer in the space below -->
```
if (pizza >= 1){console.log('Turtle Power!')
}else{console.log ('Bummer Dude')}
```
**7.** In the `for loop` below, what is the name of the piece belongs inside the empty "______" space? What would you put here to increase `i` by one on every iteration?
```js
for ( let i = 0; i < arr.length; _______ ) {
  //...
```
<!-- enter you answer in the space below -->
```
the missing piece is an incrementor, to increase i by one every iteration it needs to be followed by ++.
```
**8.** What does the `DOM` acronym stand for? Which file is first accessed to render the `DOM`?
<!-- enter you answer in the space below -->
```dom stands for direct object model. html.

```

**9.** What are the `9` ECMAScript types as defined by MDN?
<!-- enter you answer in the space below -->
```
undefined
boolean
number
string
bigInt
symbol
object
function
null

```
**10.** When it comes to functions or methods, what is the difference between a `parameter` and an `argument`?
<!-- enter you answer in the space below -->
```
parameters is a defining factor of a what needs to be passed into a function, an argument is the the value used to envoke a function.
```
**11.** What is the difference between a `primitive` value and a `reference` value?
<!-- enter you answer in the space below -->
```
primitve values are data stored in the stack in the location the variable accesses.A reference value is stored in the heap and is a pointer to a location in memory where the object is stored.
```