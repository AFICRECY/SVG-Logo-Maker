const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/generateSVG");

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
    },
    {
    type: "input",
    message: "What color text would you like to choose (Please enter color name or hexidecimal number?)",
    name: "textColor",
    },
    {
    type: "input",
    message: "What color shape background would you like to choose?(Please enter color name or hexidecimal number)",
    name: "shapeColor",
    }
];

// function writeFile(fileName, data) {
//     console.log('Writing data to file'); 
// fs.writeFile(fileName, data, function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Congratulations! You have created an SVG Logo!'); 
// });
// }

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        const svg = generateSVG(response);
        // writeToFile("./example/logo.svg", svg); 
    });
}

init();