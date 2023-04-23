const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
    {
    type: "list",
    message: "What shape wouod you like to choose?",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
    },
    {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to (3) Characters:",
    },
    {
    type: "list",
    message: "What shape wouod you like to choose?",
    name: "color",
    choices: ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink"],
    }
];

function writeFile(fileName, data) {
    console.log('Writing data to file'); 
fs.writeFile(fileName, data, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Congratulations! You have created an SVG Logo!'); 
});
}

