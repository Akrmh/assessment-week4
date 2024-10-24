# JavaScript, HTML, CSS, and DOM Manipulation

This assessment contains 10 questions

## 1. JavaScript Arrays
Question: Which method is used to add an element to the beginning of an array?

A) push()
B) pop()
C) unshift()
D) shift()
### Answer: unshift()

## 2. HTML Events & DOM Manipulation
Question: Which event is triggered when a user clicks on an HTML element?

A) onhover
B) onclick
C) onpress
D) ondrag
### Answer: onclick 

## 3. CSS Styling
Question: Which CSS property is used to change the background color of an element?

A) color
B) background-image
C) background-color
D) font-color
### Answer: background-color

## 4. JavaScript Array Methods
Question: Which method creates a new array by applying a function to each element of an existing array?

A) filter()
B) map()
C) reduce()
D) forEach()
### Answer: map()

## 5. HTML Form Handling
Question: What attribute must be added to an <input> element to make it a required field?

A) mandatory
B) required
C) validate
D) check
### Answer: required

## 6. CSS Box Model
Question: Which part of the CSS box model affects the space between the content and the border?

A) Margin
B) Padding
C) Border
D) Content
### Answer: Margin

## 7. JavaScript Task
Task: Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers.
### Answer:
```js
    sumOfArray = 0
    function sum(arr) {
      for(i = 0 ; i<arr.length ; i++){
          sumOfArray += arr[i] ; 
      }
      return sumOfArray
    }

    const numbers = [20,30,40,50];
    console.log(`the sum of the arrya is: ${ sum(numbers)}`); 
```

## 8. HTML & JavaScript Task
Task: Create a button in HTML that, when clicked, changes the text of a <p> element to "Hello, World!".
### Answer:
```js
    function sayHello(){
      document.getElementById('clickerButton').innerHTML='Hello, World!';
    }
```

## 9. CSS Flexbox Task
Task: Write CSS to center a <div> both vertically and horizontally within the page.
### Answer: check css file

## 10. JavaScript DOM Manipulation Task
Task: Create an input field in HTML that logs the current value to the console whenever the user types.
### Answer:
```js
    function handleInput(){
      const inputValue =  document.getElementById('inputhandle').value;
      console.log(`inputs:  ${inputValue}`);
    }
```