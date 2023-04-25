# SVG Logo Maker

## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |
| Node.js | [https://nodejs.org/en](https://nodejs.org/en)       |
| Jest Testing Framework | [https://jestjs.io/](https://jestjs.io/)   |
| SVG Logo Extension | [https://marketplace.visualstudio.com/items?itemName=jock.svg](https://marketplace.visualstudio.com/items?itemName=jock.svg)    |



## Description:

Watch Functionality Video:
https://drive.google.com/file/d/1XS5WqmptUKkiPQ6OnEuhNA2MEiARM2Qq/view

This web application is a SVG Logo Creator which can be accessed through a user’s terminal (command-line). All a user would need to input into the command line (once inside the correct file), they can enter “node index.js” and are prompted with questions which will lead them to a rendered SVG Logo, through the SVG Logo Extension in the example folder, which includes all of the users specifications. SVG files can be used in a variety of ways, from website logos to printed materials. They can also be animated or interactive, making them a great choice for logos that need to be dynamic or engaging.


SVG is a markup language based on XML that enables the creation of vector graphics. SVG files can display these vector graphics at any scale, while bitmap images require larger files for images that are scaled up, as more pixels require more file space. This is advantageous for websites because smaller files load faster in browsers, leading to improved page performance.
Furthermore, search engines like Google can index SVG files, which makes it possible to include keyword text within an image, particularly in text-heavy infographics, to enhance page ranking and improve SEO. PNGs and JPEGs, on the other hand, are restricted to metadata and alt text in this regard.


## Table of Contents:
* Installation (JavaScript, Node.js, NPM Packages, Template Literals, Arrow Functions, Inquirer, Objects, and Functions, Jest Unit Testing)
* Testing
* Usage
* Credits
* License


### Installation:

To install this project, a knowledge of JavaScript, Node.js, and NPM Packages were required. I had to first install Node.js to my computer and then install the NPM and Inquirer packages. The Inquirer package provides a set of tools for building command-line interfaces (CLIs). It allowed me to create interactive prompts for users, enabling them to input information and providing responses accordingly to create their README.md file through the command line. Methods used ranged from, Template Literals, Arrow Functions, Inquirer, Objects, and Functions, Variables, If/Else Statements, and the node package.json. Additionally, to allow me to test my code in the terminal, I installed Jest as my testing framework.  The web application is intended for the user to be able to open their integrated terminal, input “node index.js” into the command line, and immediately, through the terminal, be prompted with a list of questions. These questions, when answered, will generate an SVG logo for the user that is available to preview via the SVG Logo Extension in the example folder in the directory. The code below makes this happen. 


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


## Testing 
### Passing and Failing 
I tested using Jest Framework. In the process of testing my code, I had experiences where one was working and another test was not. Eventually with trial and error, researching error messagesm and with refactoring my code, I got all of my tests to pass in the end. 
![Passing and Failing Test](https://user-images.githubusercontent.com/101257805/234175780-80b6526d-c2a4-439f-9f7b-8c43e1617e1e.png)

### Failing Tests 
![Failing Tests](https://user-images.githubusercontent.com/101257805/234176422-f7435d8d-4699-4392-a9bc-e5a6da8d5cd8.png)

### Passing Tests 
![Passing Tests](https://user-images.githubusercontent.com/101257805/234176257-ec1a80cc-481b-49b3-b9b6-51681b746f28.png)


### Usage: 

SVG files can display vector graphics at any scale, while bitmap images require larger files for images that are scaled up, as more pixels require more file space. This is advantageous for websites because smaller files load faster in browsers, leading to improved page performance. Furthermore, search engines like Google can index SVG files, which makes it possible to include keyword text within an image, particularly in text-heavy infographics, to enhance page ranking and improve SEO. PNGs and JPEGs, on the other hand, are restricted to metadata and alt text in this regard.

Not only can SVG files be resized multiple times during editing without losing clarity, but it is also relatively easy to create responsive SVG files that look good on any device, even when the viewer zooms in on a web page. The versatility of SVG files makes them an excellent choice for logos and simple infographics.



### License:
MIT License

Copyright (c) [2023] [Afi Nkhume-Crecy]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

## Citations:
* Module Exports: https://nodejs.org/api/modules.html#modules_module_exports
* Node DOCs: https://nodejs.org/en/docs
* For of/in: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
* AppendFile Node DOCs: https://nodejs.org/docs/latest-v16.x/api/fs.html#fsappendfilepath-data-options-callback
* ReadFile Node DOCs:https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilepath-options-callback
* WriteFile Node DOCs: https://nodejs.org/docs/latest-v16.x/api/fs.html#fswritefilefile-data-options-callback
* Request/Response: https://www.tabnine.com/code/javascript/functions/request/Response/setEncoding
* Global Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
* Basic Shpaes SVG: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
* Fill SVG: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
* Positions SVG: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Positions


