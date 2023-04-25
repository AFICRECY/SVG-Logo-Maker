# SVG Logo Maker

## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |
| Node.js | [https://nodejs.org/en](https://nodejs.org/en)       |
| Jest Testing Framework | [https://jestjs.io/](https://jestjs.io/)   |



## Description:

Watch Functionality Video:





## Table of Contents:
* Installation (JavaScript, Node.js, NPM Packages, Template Literals, Arrow Functions, Inquirer, Objects, and Functions, Jest Unit Testing)
* Testing
* Usage
* Credits
* License


### Installation:



```
const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSVG");
```
(Above: I am using the fs and inquirer packages to read and write files and prompt users for input. Additionally, I am requiring a custom module generateSVG from the ./lib directory, which contains the files that manipulate the SVG logos.)



```
const questions = [
   {
   type: "list",
   message: "What shape would you like to choose?",
   name: "shape",
   choices: ["Circle", "Square", "Triangle"],
   },
   {
   type: "input",
   name: "text",
   message: "TEXT: Enter up to (3) Characters:",
   validate: function(letters) {
       if (letters.length > 3) {
           return "Oops! You entered the wrong character length requirement, please enter up to 3 characters";
       }
       return true;
   }
```
(Above: When the validation function returns true, it means that the character input length is valid and the prompt will continue to the next question. If the user inputs a character length of more than 3 characters, it means that the input is invalid and the prompt will not proceed until the user enters valid input. The string that the function returns is displayed to the user as an error message.)


```
function writeToFile(fileName, data) {
   console.log('Writing data to file');
   fs.writeFile(fileName, data, function (err) {
   if (err) {
       return console.log(err);
   }
   console.log('Congratulations! You have created an SVG Logo!');
});
}
```
(Above: This code defines a function called writeToFile that takes two parameters: fileName and data. If an error occurs during the write operation, the callback function is called with an error object as its argument, and the function will log the error to the console using console.log(err). If the write operation is successful, the callback function is called, and the function will log ('Congratulations! You have created an SVG Logo!').)


```
function init() {
   inquirer.prompt(questions)
   .then((response) => {
       console.log(response)
       const svg = generateSVG(response);
       console.log(svg)
       const fileName="./example/logo.svg"
       writeToFile(fileName,svg)
   });
}
init();
```
(Above: This is an init() function that uses the Inquirer.js library to prompt the user with the set of questions, and then generates an SVG image based on their responses.The writeToFile() function is called to save the generated SVG image to the logo.svg file in the example directory.)


```
class Shapes {
 constructor(shape, text, textColor, shapeColor) {
   this.shape = shape;
   this.text = text;
   this.textColor = textColor;
   this.shapeColor = shapeColor;
 }
module.exports = Shapes;
```
(Above: This code defines a Shapes class that takes four arguments (shape, text, textColor, and shapeColor) in its constructor and assigns them to properties of the same name on the global object instance. The module.exports statement exports the Shapes class, making it available for other modules to import and use.)



```
function generateSVG(response) {


if (response.shape === "Circle") {
const circle = new Circle;
var shapeRender = circle.render(response.shapeColor)
}
else if (response.shape === "Square") {
const square = new Square;
var shapeRender = square.render(response.shapeColor)
}
else if (response.shape === "Triangle") {
const triangle = new Triangle;
var shapeRender = triangle.render(response.shapeColor)
}
```
(Above: This function is an if-else statement that checks the user's shape choice. Whatever the choice, a new instance of the shapes class is created using the new operator and assigned to a variable. The render() method of the Circle object is then called with the shapeColor property of the response object as its argument.)



```
return `
<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shapeRender}
<text font-size="2em" x="125" y="130" fill="${response.textColor}">${response.text}</text>
</svg>`
}
```
(Above: The function returns shapeRender string and a text element. The text element displays the text property of the response object and uses the textColor property as the fill color. The SVG string also includes attributes for the width, height, version, and XML namespace of the SVG element.)



```
const Circle = require("./circle");
describe("Circle", () => {


   describe("render", () => {
   it("should return a string for the corresponding SVG file with the given shape color", () => {
     //Act
     const myCircle = new Circle('hey', 'black', 'pink');
     // Assert
     expect(myCircle.render('orange')).toBe('<circle cx="150" cy="125" r="80"   fill="orange"/>');
   });
 });
});
```
(Above: This imports a module named Circle from a file named circle.js located in the same directory as the current file. A positive test for Circle is created to check that the render function does in fact return the shape dimensions and fill color. There was a positive test for every shape and each file ended in test.js)


### Testing 
## Passing and Failing 
I tested using Jest Framework. In the process of testing my code, I had experiences where one was working and another test was not.
![Passing and Failing Test](https://user-images.githubusercontent.com/101257805/234175780-80b6526d-c2a4-439f-9f7b-8c43e1617e1e.png)

##Failing Tests 
![Failing Tests](https://user-images.githubusercontent.com/101257805/234176422-f7435d8d-4699-4392-a9bc-e5a6da8d5cd8.png)

##Passing Tests 
![Passing Tests](https://user-images.githubusercontent.com/101257805/234176257-ec1a80cc-481b-49b3-b9b6-51681b746f28.png)


### Usage: 








### License:
MIT License

Copyright (c) [2023] [Afi Nkhume-Crecy]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

## Citations:
https://nodejs.org/api/modules.html#modules_module_exports
https://nodejs.org/en/docs
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
https://nodejs.org/docs/latest-v16.x/api/fs.html#fsappendfilepath-data-options-callback
https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilepath-options-callback
https://nodejs.org/docs/latest-v16.x/api/fs.html#fswritefilefile-data-options-callback
https://www.tabnine.com/code/javascript/functions/request/Response/setEncoding
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
