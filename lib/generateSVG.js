const Square = require("./square");
const Triangle = require("./triangle");
const Circle = require("./circle");

function generateSVG(response) {

if (response.shape === "Circle") {
const circle = new Circle;
var shapeRender = circle.render()
} 
else if (response.shape === "Square") {
const square = new Square;
var shapeRender = square.render() 
} 
else if (response.shape === "Triangle") {
const triangle = new Triangle;
var shapeRender = triangle.render()
}


return `
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shapeRender}
<text font-size="2em" x="10" y="10" fill="${response.textColor}">${response.text}</text>
</svg>`
}
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








    // where all the stuff goes 
    // var shape = 

    // write a function that considers the user inputs and creates a temerate literal string that is fed to the svg logo maker











module.exports = generateSVG;