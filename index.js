const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSVG");
// I am using the fs and inquirer packages to read and write files and prompt users for input. 
// Additionally, I am requiring a custom module generateSVG from the ./lib directory, 
// which contains the files that manipulate the SVG logos. 

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
//When the validation function returns true, it means that the character input length is valid and the prompt will continue to the next question. 
// If the user inputs a character length of more than 3 characters, it means that the input is invalid and the prompt will not proceed until the user enters valid input. 
// The string that the function returns is displayed to the user as an error message.

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

function writeToFile(fileName, data) {
    console.log('Writing data to file'); 
    fs.writeFile(fileName, data, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Congratulations! You have created an SVG Logo!'); 
});
}


function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        const svg = generateSVG(response);
        console.log(svg)
        const fileName="./example/logo.svg"
        writeToFile(fileName,svg)

// This is an init() function that uses the Inquirer.js library to prompt the user with the set of questions, 
// and then generates an SVG image based on their responses.The writeToFile() function is called to save
// the generated SVG image to the logo.svg file in the example directory.
    });
}

init();























        // fs.writeToFile("./example/logo.svg", svg, (err) => {
        //     if (err) {
        //         console.log("Sorry there is an error");
        //         console.log(err);
        //     }
        //     else {
        //         console.log("Youv'e successfully generated an SVG logo!")
        //     }
        // }); 