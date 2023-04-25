const Square = require("./square");
const Triangle = require("./triangle");
const Circle = require("./circle");

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
// This function is an if else statement that checks the user's shape choice. 
// Whatever the choice, a new instance of the shapes class is created using the 
// new operator and assigned to a variable. The render() method of the Circle object 
// is then called with the shapeColor property of the response object as its argument.



return `
<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shapeRender}
<text font-size="2em" x="125" y="130" fill="${response.textColor}">${response.text}</text>
</svg>`
}
// The function returns shapeRender string and a text element. 
// The text element displays the text property of the response object and uses the textColor property 
// as the fill color. The SVG string also includes attributes for the width, height, version, and 
// XML namespace of the SVG element.


module.exports = generateSVG;










// Todo: 
    //-Create a if statement that takes in the users textColor input and saves it to 
    // a variable that can consider hexidecimal color options a variable that can be used 
    // in a temperate literal statement which will feed the responses to the svg logo maker??? 
    // (Do I need to download a color package? color API?), the else, if they enter a word 
    // that is not recognized by hexidecimal they are redirected back to the question. 

    //-Create if statement that takes in the users shapeColor input and saves it to 
    // a variable that can consider hexidecimal color options a variable that can be used 
    // in a temperate literal statement which will feed the responses to the svg logo maker??? 
    // (Do I need to download a color package? color API?), the else, if they enter a word 
    // that is not recognized by hexidecimal they are redirected back to the question. 


