
/*7. JavaScript Task
Task: Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers.*/


sumOfArray = 0
function sum(arr) {
    for(i = 0 ; i<arr.length ; i++){
        sumOfArray += arr[i] ; 
    }
    return sumOfArray
}

const numbers = [20,30,40,50];
console.log(`the sum of the arrya is: ${ sum(numbers)}`);

// 8. HTML & JavaScript Task
// Task: Create a button in HTML that, when clicked, changes the text of a

// element to "Hello, World!".
function sayHello(){
    document.getElementById('clickerButton').innerHTML='Hello, World!';
}

// 9. CSS Flexbox Task
// Task: Write CSS to center a

// both vertically and horizontally within the page.

// check (index.css)

// 10. JavaScript DOM Manipulation Task
// Task: Create an input field in HTML that logs the current value to the console whenever the user types.

function handleInput(){
    const inputValue =  document.getElementById('inputhandle').value;
    console.log(`inputs:  ${inputValue}`);
}